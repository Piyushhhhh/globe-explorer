// ========================================
// CARBON GLOBE - DATA LOADER
// ========================================
// Handles historical data fetching with caching and error recovery

// Top countries to preload (covers ~80% of global emissions)
const TOP_COUNTRIES = [
    'China', 'United States of America', 'India', 'Russia', 'Japan',
    'Germany', 'Iran', 'South Korea', 'Saudi Arabia', 'Indonesia',
    'Canada', 'Brazil', 'Mexico', 'Australia', 'United Kingdom',
    'Turkey', 'France', 'Italy', 'Poland', 'Spain'
];

// Loaded data cache (in-memory) - expose globally for app.js
const historicalDataCache = {};
window.historicalDataCache = historicalDataCache;

// Loading state
const loadingState = {
    preloadComplete: false,
    currentlyLoading: new Set(),
    failedCountries: new Set(),
    indexedDBAvailable: false,
    currentFetchController: null
};

// IndexedDB instance
let db = null;

/**
 * Initialize data loader
 * - Check IndexedDB availability
 * - Preload top N countries
 */
async function initializeDataLoader() {
    console.log('[DATA] Initializing data loader...');

    // Check IndexedDB availability
    if (CONFIG.ENABLE_INDEXEDDB_CACHE && 'indexedDB' in window) {
        try {
            db = await openIndexedDB();
            loadingState.indexedDBAvailable = true;
            console.log('[DATA] IndexedDB available');
        } catch (error) {
            console.warn('[DATA] IndexedDB unavailable:', error);
            loadingState.indexedDBAvailable = false;
        }
    }

    // Preload top countries in background
    if (CONFIG.PRELOAD_TOP_N_COUNTRIES > 0) {
        preloadTopCountries().then(() => {
            console.log(`[DATA] Preloaded ${CONFIG.PRELOAD_TOP_N_COUNTRIES} countries`);
            loadingState.preloadComplete = true;
        });
    }
}

/**
 * Open IndexedDB connection
 */
function openIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('CarbonGlobeDB', 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('historical')) {
                database.createObjectStore('historical');
            }
        };
    });
}

/**
 * Preload top N countries' historical data
 */
async function preloadTopCountries() {
    const countriesToPreload = TOP_COUNTRIES.slice(0, CONFIG.PRELOAD_TOP_N_COUNTRIES);

    const promises = countriesToPreload.map(country =>
        fetchHistoricalData(country).catch(error => {
            console.warn(`[DATA] Failed to preload ${country}:`, error);
        })
    );

    await Promise.all(promises);
}

/**
 * Fetch historical data for a country
 * @param {string} country - Country name
 * @returns {Promise<Array>} Historical data array
 */
async function fetchHistoricalData(country) {
    // Check in-memory cache first
    if (historicalDataCache[country]) {
        log(`Cache hit (memory): ${country}`);
        return historicalDataCache[country];
    }

    // Check if already loading (prevent duplicate requests)
    if (loadingState.currentlyLoading.has(country)) {
        log(`Already loading: ${country}`);
        return waitForLoad(country);
    }

    // Check IndexedDB cache
    if (loadingState.indexedDBAvailable) {
        const cached = await getFromIndexedDB(country);
        if (cached) {
            log(`Cache hit (IndexedDB): ${country}`);
            historicalDataCache[country] = cached;
            return cached;
        }
    }

    // Not cached - fetch from network
    loadingState.currentlyLoading.add(country);

    try {
        // Abort previous fetch if exists (latest click wins)
        if (loadingState.currentFetchController) {
            loadingState.currentFetchController.abort();
        }

        loadingState.currentFetchController = new AbortController();

        const url = `../../data/historical/${encodeURIComponent(country)}.json`;
        log(`Fetching: ${url}`);

        // Fetch with timeout and retry
        const data = await fetchWithRetry(url, {
            signal: loadingState.currentFetchController.signal
        });

        // Validate data structure
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Invalid data format');
        }

        // Store in memory cache
        historicalDataCache[country] = data;

        // Store in IndexedDB
        if (loadingState.indexedDBAvailable) {
            await saveToIndexedDB(country, data);
        }

        loadingState.currentlyLoading.delete(country);
        return data;

    } catch (error) {
        loadingState.currentlyLoading.delete(country);

        if (error.name === 'AbortError') {
            log(`Fetch aborted: ${country}`);
            return null;
        }

        console.error(`[DATA] Failed to load ${country}:`, error);
        loadingState.failedCountries.add(country);

        // Fallback: Return 2023 snapshot as single-year array
        if (carbonData[country]) {
            return [{
                year: 2023,
                total: carbonData[country].total,
                perCapita: carbonData[country].perCapita,
                rank: carbonData[country].rank
            }];
        }

        throw error;
    }
}

/**
 * Fetch with retry logic (exponential backoff)
 */
async function fetchWithRetry(url, options, maxRetries = 2) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, {
                ...options,
                // Add timeout (not standard but many browsers support)
                timeout: 10000
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`File not found: ${url}`);
                }
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const text = await response.text();

            // Parse with prototype pollution protection
            const data = safeParse(text);
            return data;

        } catch (error) {
            lastError = error;

            // Don't retry on abort or 404
            if (error.name === 'AbortError' || error.message.includes('404')) {
                throw error;
            }

            if (attempt < maxRetries) {
                const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
                log(`Retry ${attempt + 1}/${maxRetries} after ${delay}ms`);
                await sleep(delay);
            }
        }
    }

    throw lastError;
}

/**
 * Safe JSON parse with prototype pollution prevention
 */
function safeParse(jsonString) {
    return JSON.parse(jsonString, (key, value) => {
        // Block prototype pollution
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            console.warn('[SECURITY] Blocked prototype pollution attempt');
            return undefined;
        }
        return value;
    });
}

/**
 * Get data from IndexedDB
 */
async function getFromIndexedDB(country) {
    if (!db) return null;

    try {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('historical', 'readonly');
            const store = transaction.objectStore('historical');
            const request = store.get(country);

            request.onsuccess = () => {
                const cached = request.result;
                if (cached && !isCacheExpired(cached.timestamp)) {
                    resolve(cached.data);
                } else {
                    resolve(null);
                }
            };

            request.onerror = () => reject(request.error);
        });
    } catch (error) {
        console.warn('[DATA] IndexedDB read error:', error);
        return null;
    }
}

/**
 * Save data to IndexedDB
 */
async function saveToIndexedDB(country, data) {
    if (!db) return;

    try {
        const transaction = db.transaction('historical', 'readwrite');
        const store = transaction.objectStore('historical');

        transaction.onerror = (e) => {
            console.error('[DATA] IndexedDB transaction failed:', e.target.error);
        };

        const cacheEntry = {
            data: data,
            timestamp: Date.now()
        };

        await store.put(cacheEntry, country);

    } catch (error) {
        if (error.name === 'QuotaExceededError') {
            console.warn('[DATA] Storage quota exceeded, disabling cache');
            loadingState.indexedDBAvailable = false;
            CONFIG.ENABLE_INDEXEDDB_CACHE = false;
        } else {
            console.error('[DATA] IndexedDB write error:', error);
        }
    }
}

/**
 * Check if cache entry is expired
 */
function isCacheExpired(timestamp) {
    const age = Date.now() - timestamp;
    const maxAge = CONFIG.CACHE_TTL_HOURS * 60 * 60 * 1000;
    return age > maxAge;
}

/**
 * Wait for an in-progress load to complete
 */
function waitForLoad(country) {
    return new Promise((resolve) => {
        const checkInterval = setInterval(() => {
            if (!loadingState.currentlyLoading.has(country)) {
                clearInterval(checkInterval);
                resolve(historicalDataCache[country] || null);
            }
        }, 100);
    });
}

/**
 * Check if country data is preloaded
 */
function isPreloaded(country) {
    return TOP_COUNTRIES.includes(country) &&
           loadingState.preloadComplete &&
           historicalDataCache[country] !== undefined;
}

/**
 * Get historical data ready state
 */
function isHistoricalDataReady(country) {
    return historicalDataCache[country] !== undefined;
}

/**
 * Clear all caches (for debugging)
 */
async function clearAllCaches() {
    // Clear memory cache
    Object.keys(historicalDataCache).forEach(key => {
        delete historicalDataCache[key];
    });

    // Clear IndexedDB
    if (db) {
        const transaction = db.transaction('historical', 'readwrite');
        await transaction.objectStore('historical').clear();
    }

    console.log('[DATA] All caches cleared');
}

/**
 * Sleep utility
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Debug logging
 */
function log(...args) {
    if (CONFIG.ENABLE_DEBUG_LOGGING) {
        console.log('[DATA]', ...args);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeDataLoader,
        fetchHistoricalData,
        isPreloaded,
        isHistoricalDataReady,
        clearAllCaches
    };
}
