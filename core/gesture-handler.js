// ========================================
// CARBON GLOBE - GESTURE HANDLER
// ========================================
// Handles all user input: clicks, double-clicks, shift+click, hover, keyboard

// Gesture state
const gestureState = {
    lastClickTime: 0,
    lastClickedCountry: null,
    clickCount: 0,
    shiftKeyHeld: false,
    tooltipTimeout: null,
    doubleClickTimeout: null,
    clickBlocked: false,
    keyboardDebounce: {}
};

/**
 * Initialize gesture handlers
 */
function initializeGestureHandlers() {
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Track shift key state
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') gestureState.shiftKeyHeld = true;
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Shift') gestureState.shiftKeyHeld = false;
    });

    console.log('[GESTURE] Handlers initialized');
}

/**
 * Handle country click (called from globe polygon click)
 * Detects: single-click vs double-click vs shift+click
 * @param {string} countryName - Name of clicked country
 * @param {object} coords - {lat, lon} coordinates
 */
function handleCountryClick(countryName, coords) {
    // Guard: Globe not ready
    if (!globe || !globe.renderer()) {
        console.warn('[GESTURE] Globe not initialized');
        return;
    }

    // Guard: Click blocked (e.g., during long-press)
    if (gestureState.clickBlocked) {
        gestureState.clickBlocked = false;
        return;
    }

    // Guard: Invalid country
    if (!carbonData[countryName]) {
        showToast(`Data unavailable for ${countryName}`);
        return;
    }

    const now = Date.now();
    const timeSinceLastClick = now - gestureState.lastClickTime;

    // Detect double-click
    if (timeSinceLastClick < CONFIG.DOUBLE_CLICK_THRESHOLD_MS &&
        gestureState.lastClickedCountry === countryName) {

        // Double-click detected → Enter time-travel mode
        handleDoubleClick(countryName, coords);

        // Reset click tracking
        gestureState.clickCount = 0;
        gestureState.lastClickTime = 0;
        return;
    }

    // Single click (wait to see if double-click follows)
    gestureState.lastClickTime = now;
    gestureState.lastClickedCountry = countryName;
    gestureState.clickCount++;

    // Clear previous timeout
    if (gestureState.doubleClickTimeout) {
        clearTimeout(gestureState.doubleClickTimeout);
    }

    // Wait for potential double-click
    gestureState.doubleClickTimeout = setTimeout(() => {
        // No double-click → Process as single click
        if (gestureState.shiftKeyHeld) {
            handleShiftClick(countryName, coords);
        } else {
            handleSingleClick(countryName, coords);
        }
        gestureState.clickCount = 0;
    }, CONFIG.DOUBLE_CLICK_THRESHOLD_MS);
}

/**
 * Handle single click → Select country, show info panel
 */
function handleSingleClick(countryName, coords) {
    log('Single click:', countryName);

    // If in compare mode and clicking same country, deselect it
    const state = getState();
    if (state.mode === 'COMPARE' && state.comparedCountries.includes(countryName)) {
        removeFromComparison(countryName);
        return;
    }

    // If in time-travel mode, stay in mode but switch country (sticky mode)
    if (state.mode === 'TIME_TRAVEL') {
        setState('TIME_TRAVEL', { country: countryName, coords });
        return;
    }

    // Normal case: Enter VIEW mode
    setState('VIEW', { country: countryName, coords });
}

/**
 * Handle double-click → Enter time-travel mode
 */
function handleDoubleClick(countryName, coords) {
    log('Double click:', countryName);

    if (!CONFIG.ENABLE_TIME_TRAVEL) {
        showToast('Time-travel mode is disabled');
        return;
    }

    // Check if historical data is available
    if (!historicalDataReady && !isPreloaded(countryName)) {
        showToast('Loading historical data...');
        // Still enter mode, data will load async
    }

    // If in compare mode, exit it first (auto-exit)
    const state = getState();
    if (state.mode === 'COMPARE') {
        log('Auto-exiting compare mode for time-travel');
    }

    setState('TIME_TRAVEL', { country: countryName, coords });
}

/**
 * Handle shift+click → Add to comparison (ghost panel)
 */
function handleShiftClick(countryName, coords) {
    log('Shift+click:', countryName);

    if (!CONFIG.ENABLE_GHOST_COMPARE) {
        showToast('Compare mode is disabled');
        return;
    }

    const state = getState();

    // If already comparing this country, deselect it
    if (state.comparedCountries.includes(countryName)) {
        removeFromComparison(countryName);
        return;
    }

    // Limit to 2 countries
    if (state.comparedCountries.length >= 2) {
        showToast('Can only compare 2 countries. Click one to remove.');
        return;
    }

    // Add to comparison
    if (state.mode !== 'COMPARE') {
        setState('COMPARE', { country: countryName, coords });
    } else {
        addToComparison(countryName, coords);
    }
}

/**
 * Handle country hover → Show tooltip
 * @param {string} countryName - Name of hovered country
 * @param {object} mousePosition - {x, y} screen coordinates
 */
function handleCountryHover(countryName, mousePosition) {
    // Debounce to prevent rapid tooltip flickering
    clearTimeout(gestureState.tooltipTimeout);

    gestureState.tooltipTimeout = setTimeout(() => {
        // Guard: Hovering on ocean or invalid country
        if (!countryName || !carbonData[countryName]) {
            hideTooltip();
            return;
        }

        // Get current year if in time-travel mode
        const state = getState();
        const year = state.mode === 'TIME_TRAVEL' ? state.currentYear : 2023;

        showTooltip(countryName, year, mousePosition);
    }, CONFIG.TOOLTIP_DEBOUNCE_MS);
}

/**
 * Handle hover exit → Hide tooltip
 */
function handleHoverExit() {
    clearTimeout(gestureState.tooltipTimeout);
    hideTooltip();
}

/**
 * Handle keyboard shortcuts
 */
function handleKeyDown(e) {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    // Debounce arrow keys (prevent auto-repeat spam)
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const now = Date.now();
        if (gestureState.keyboardDebounce[e.key] &&
            now - gestureState.keyboardDebounce[e.key] < 300) {
            return;
        }
        gestureState.keyboardDebounce[e.key] = now;
    }

    const state = getState();

    switch(e.key) {
        case 'Escape':
            // Exit current mode, return to VIEW
            if (state.mode !== 'VIEW') {
                setState('VIEW', {});
            }
            break;

        case 't':
        case 'T':
            // Enter time-travel mode for selected country
            if (state.selectedCountry) {
                // If in compare mode, exit it first
                if (state.mode === 'COMPARE') {
                    log('Auto-exiting compare mode (keyboard shortcut)');
                }
                setState('TIME_TRAVEL', { country: state.selectedCountry });
            } else {
                showToast('Select a country first');
            }
            break;

        case 'c':
        case 'C':
            // Toggle compare mode
            if (state.mode === 'COMPARE') {
                setState('VIEW', {});
            } else if (state.selectedCountry) {
                setState('COMPARE', { country: state.selectedCountry });
            } else {
                showToast('Select a country first');
            }
            break;

        case 'r':
        case 'R':
            // Reset view
            if (globe && globe.controls()) {
                globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
            }
            setState('VIEW', {});
            break;

        case '?':
        case 'h':
        case 'H':
            // Show keyboard shortcuts hint
            showKeyboardHints();
            break;

        case 'ArrowLeft':
            // Previous year in time-travel mode
            if (state.mode === 'TIME_TRAVEL' && state.currentYear > CONFIG.HISTORICAL_START_YEAR) {
                setTimeTravelYear(state.currentYear - 1);
            }
            break;

        case 'ArrowRight':
            // Next year in time-travel mode
            if (state.mode === 'TIME_TRAVEL' && state.currentYear < CONFIG.HISTORICAL_END_YEAR) {
                setTimeTravelYear(state.currentYear + 1);
            }
            break;
    }
}

/**
 * Handle key up (for shift tracking)
 */
function handleKeyUp(e) {
    // Shift key tracking is handled in top-level listeners
}

/**
 * Detect triple-click (treat as new double-click sequence)
 */
function handleTripleClick(countryName) {
    log('Triple click detected, resetting sequence');
    gestureState.clickCount = 1;
    gestureState.lastClickTime = Date.now();
    gestureState.lastClickedCountry = countryName;
}

/**
 * Debug logging helper
 */
function log(...args) {
    if (CONFIG.ENABLE_DEBUG_LOGGING) {
        console.log('[GESTURE]', ...args);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeGestureHandlers,
        handleCountryClick,
        handleCountryHover,
        handleHoverExit
    };
}
