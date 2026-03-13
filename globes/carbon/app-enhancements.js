// ========================================
// CARBON GLOBE - UI ENHANCEMENTS
// ========================================

// State management
const appState = {
    searchQuery: '',
    selectedCountries: [],
    compareMode: false,
    filterLevel: null
};

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        searchTimeout = setTimeout(() => {
            if (query.length < 2) {
                hideSearchResults();
                return;
            }

            performSearch(query);
        }, 300);
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSearchResults();
            searchInput.blur();
        }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });
}

function performSearch(query) {
    if (typeof carbonData === 'undefined') return;

    const results = Object.keys(carbonData)
        .filter(country => country.toLowerCase().includes(query))
        .slice(0, 8)
        .map(country => ({
            name: country,
            data: carbonData[country]
        }));

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const searchContainer = document.querySelector('.search-container');
    let resultsDiv = document.getElementById('searchResults');

    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'searchResults';
        resultsDiv.className = 'search-results';
        resultsDiv.setAttribute('role', 'listbox');
        searchContainer.appendChild(resultsDiv);
    }

    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="search-result-item no-results">
                <span>No countries found for "${query}"</span>
            </div>
        `;
        resultsDiv.style.display = 'block';
        return;
    }

    resultsDiv.innerHTML = results.map(result => `
        <div class="search-result-item" data-country="${result.name}" role="option" tabindex="0">
            <div class="search-result-flag">${getCountryEmoji(result.name)}</div>
            <div class="search-result-details">
                <div class="search-result-name">${highlightMatch(result.name, query)}</div>
                <div class="search-result-stats">
                    ${result.data.total.toLocaleString()} Mt • ${result.data.perCapita} tons/capita
                </div>
            </div>
            <div class="search-result-rank">#${result.data.rank}</div>
        </div>
    `).join('');

    resultsDiv.style.display = 'block';

    // Add click handlers
    resultsDiv.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const countryName = item.getAttribute('data-country');
            selectCountryFromSearch(countryName);
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const countryName = item.getAttribute('data-country');
                selectCountryFromSearch(countryName);
            }
        });
    });

    // Add styles for search results if not already present
    if (!document.getElementById('searchResultsStyles')) {
        const style = document.createElement('style');
        style.id = 'searchResultsStyles';
        style.textContent = `
            .search-results {
                position: absolute;
                top: calc(100% + 8px);
                left: 0;
                right: 0;
                background: rgba(15, 23, 42, 0.98);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 12px;
                max-height: 400px;
                overflow-y: auto;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
                z-index: 1000;
                display: none;
            }

            .search-result-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                cursor: pointer;
                transition: all 0.15s ease;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }

            .search-result-item:last-child {
                border-bottom: none;
            }

            .search-result-item:hover,
            .search-result-item:focus {
                background: rgba(59, 130, 246, 0.15);
                outline: none;
            }

            .search-result-item.no-results {
                color: rgba(255, 255, 255, 0.5);
                cursor: default;
                justify-content: center;
            }

            .search-result-item.no-results:hover {
                background: transparent;
            }

            .search-result-flag {
                font-size: 28px;
                line-height: 1;
            }

            .search-result-details {
                flex: 1;
            }

            .search-result-name {
                color: white;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 2px;
            }

            .search-result-name mark {
                background: rgba(59, 130, 246, 0.3);
                color: #60a5fa;
                padding: 0 2px;
                border-radius: 2px;
            }

            .search-result-stats {
                color: rgba(255, 255, 255, 0.6);
                font-size: 12px;
            }

            .search-result-rank {
                color: #60a5fa;
                font-size: 14px;
                font-weight: 700;
            }
        `;
        document.head.appendChild(style);
    }
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function hideSearchResults() {
    const resultsDiv = document.getElementById('searchResults');
    if (resultsDiv) {
        resultsDiv.style.display = 'none';
    }
}

function selectCountryFromSearch(countryName) {
    hideSearchResults();
    document.getElementById('searchInput').value = '';

    // Zoom to country and select it
    const coords = countryCoordinates[countryName];
    if (coords && globe) {
        globe.pointOfView({
            lat: coords.lat,
            lng: coords.lon,
            altitude: 0.8
        }, 1500);
    }

    if (carbonData[countryName]) {
        setTimeout(() => {
            selectCountry(countryName, carbonData[countryName], [coords.lon, coords.lat]);
        }, 500);
    }
}

// Helper function for country emojis (if not already defined in main app.js)
function getCountryEmoji(countryName) {
    const emojis = {
        'China': '🇨🇳', 'United States of America': '🇺🇸', 'United States': '🇺🇸',
        'India': '🇮🇳', 'Russia': '🇷🇺', 'Japan': '🇯🇵', 'Germany': '🇩🇪',
        'Iran': '🇮🇷', 'South Korea': '🇰🇷', 'Saudi Arabia': '🇸🇦',
        'Indonesia': '🇮🇩', 'Canada': '🇨🇦', 'Brazil': '🇧🇷', 'Mexico': '🇲🇽',
        'Australia': '🇦🇺', 'United Kingdom': '🇬🇧', 'France': '🇫🇷',
        'Italy': '🇮🇹', 'Spain': '🇪🇸', 'Turkey': '🇹🇷'
    };
    return emojis[countryName] || '🌍';
}

// ========================================
// LEGEND INTERACTION
// ========================================

function initializeLegend() {
    const legendItems = document.querySelectorAll('.legend-item');

    legendItems.forEach(item => {
        item.addEventListener('click', () => {
            const level = item.getAttribute('data-level');
            toggleFilter(level);
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const level = item.getAttribute('data-level');
                toggleFilter(level);
            }
        });
    });
}

function toggleFilter(level) {
    if (appState.filterLevel === level) {
        appState.filterLevel = null;
        document.querySelectorAll('.legend-item').forEach(item => {
            item.style.opacity = '1';
        });
    } else {
        appState.filterLevel = level;
        document.querySelectorAll('.legend-item').forEach(item => {
            const itemLevel = item.getAttribute('data-level');
            item.style.opacity = itemLevel === level ? '1' : '0.5';
        });
    }

    // Apply filter to globe visualization
    applyEmissionFilter(level);
}

function applyEmissionFilter(level) {
    if (!globe || typeof carbonData === 'undefined') return;

    // This would filter the globe visualization
    // Implementation depends on how the main app.js handles globe data
    console.log('Filtering by emission level:', level);
}

// ========================================
// COMPARE MODE
// ========================================

function initializeCompareMode() {
    const compareBtn = document.getElementById('compareMode');
    if (!compareBtn) return;

    compareBtn.addEventListener('click', () => {
        appState.compareMode = !appState.compareMode;
        compareBtn.setAttribute('aria-pressed', appState.compareMode.toString());

        if (appState.compareMode) {
            compareBtn.textContent = '✓ Comparing';
            compareBtn.style.background = 'rgba(16, 185, 129, 0.95)';
            showCompareInstructions();
        } else {
            compareBtn.innerHTML = '<span aria-hidden="true">📊</span> Compare';
            compareBtn.style.background = '';
            hideCompareInstructions();
            appState.selectedCountries = [];
        }
    });
}

function showCompareInstructions() {
    const zoomHint = document.getElementById('zoomHint');
    if (zoomHint) {
        zoomHint.textContent = '📊 Compare Mode: Click up to 3 countries to compare';
        zoomHint.style.background = 'rgba(16, 185, 129, 0.8)';
    }
}

function hideCompareInstructions() {
    const zoomHint = document.getElementById('zoomHint');
    if (zoomHint) {
        zoomHint.textContent = '🔍 Zoom in to see state borders • Click countries for details';
        zoomHint.style.background = '';
    }
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger shortcuts when typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch(e.key.toLowerCase()) {
            case 'r':
                // Reset view
                document.getElementById('resetView')?.click();
                break;
            case 'a':
                // Toggle auto-rotate
                document.getElementById('autoRotate')?.click();
                break;
            case 'c':
                // Toggle compare mode
                document.getElementById('compareMode')?.click();
                break;
            case 's':
            case '/':
                // Focus search
                e.preventDefault();
                document.getElementById('searchInput')?.focus();
                break;
            case 'escape':
                // Close info panel
                if (!document.getElementById('infoPanel')?.classList.contains('hidden')) {
                    document.getElementById('closePanel')?.click();
                }
                break;
        }
    });

    // Add keyboard shortcut hints
    addKeyboardHints();
}

function addKeyboardHints() {
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-hints {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 12px 20px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 12px;
            z-index: 90;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .keyboard-hints.show {
            opacity: 1;
        }

        .keyboard-hints kbd {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            padding: 2px 6px;
            font-family: monospace;
            color: white;
            margin: 0 4px;
        }
    `;
    document.head.appendChild(style);

    const hints = document.createElement('div');
    hints.className = 'keyboard-hints';
    hints.innerHTML = `
        <kbd>R</kbd> Reset  •
        <kbd>A</kbd> Auto-rotate  •
        <kbd>C</kbd> Compare  •
        <kbd>S</kbd> Search  •
        <kbd>ESC</kbd> Close
    `;
    document.body.appendChild(hints);

    // Show hints briefly after page load
    setTimeout(() => {
        hints.classList.add('show');
        setTimeout(() => {
            hints.classList.remove('show');
        }, 5000);
    }, 3000);

    // Show on '?' key press
    document.addEventListener('keydown', (e) => {
        if (e.key === '?' || e.key === 'h') {
            hints.classList.toggle('show');
        }
    });
}

// ========================================
// TOOLTIPS & MICRO-INTERACTIONS
// ========================================

function enhanceInteractiveElements() {
    // Add hover effects to control buttons
    const buttons = document.querySelectorAll('.control-btn, .action-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });

    // Add ripple effect to buttons
    addRippleEffect();
}

function addRippleEffect() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: relative;
            overflow: hidden;
        }

        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.control-btn, .action-btn').forEach(button => {
        button.classList.add('ripple');
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ========================================
// INITIALIZATION
// ========================================

// Wait for DOM and main app to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEnhancements);
} else {
    initializeEnhancements();
}

function initializeEnhancements() {
    console.log('Initializing UI enhancements...');

    // Initialize all enhancement features
    setTimeout(() => {
        initializeSearch();
        initializeLegend();
        initializeCompareMode();
        initializeKeyboardShortcuts();
        enhanceInteractiveElements();

        console.log('UI enhancements loaded ✨');
    }, 1000);
}

// Export functions for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectCountryFromSearch,
        toggleFilter,
        appState
    };
}
