// ========================================
// CARBON GLOBE - STATE MACHINE
// ========================================
// Manages interaction modes: VIEW / COMPARE / TIME_TRAVEL

const STATE = {
    // Current mode
    currentMode: 'VIEW',

    // Selected countries
    selectedCountry: null,
    comparedCountries: [],

    // Time-travel state
    currentYear: 2023,
    timeTravelCountry: null,

    // Transition queue (prevents race conditions)
    transitionQueue: [],
    transitioning: false,

    // History for undo/redo (future feature)
    history: []
};

// Valid mode transitions
const VALID_TRANSITIONS = {
    'VIEW': ['COMPARE', 'TIME_TRAVEL'],
    'COMPARE': ['VIEW', 'TIME_TRAVEL'],
    'TIME_TRAVEL': ['VIEW', 'COMPARE']
};

/**
 * Enter a new mode with validation and queuing
 * @param {string} newMode - Target mode (VIEW/COMPARE/TIME_TRAVEL)
 * @param {object} data - Mode-specific data
 */
async function setState(newMode, data = {}) {
    // Queue if already transitioning
    if (STATE.transitioning) {
        STATE.transitionQueue.push({ newMode, data });
        log('State transition queued:', newMode);
        return;
    }

    // Validate transition
    if (!VALID_TRANSITIONS[STATE.currentMode]?.includes(newMode) &&
        STATE.currentMode !== newMode) {
        console.warn(`Invalid transition: ${STATE.currentMode} → ${newMode}`);
        return;
    }

    // Idempotent check
    if (STATE.currentMode === newMode &&
        STATE.selectedCountry === data.country) {
        log('Already in this state, skipping');
        return;
    }

    STATE.transitioning = true;
    log(`State transition: ${STATE.currentMode} → ${newMode}`);

    try {
        // Exit current mode
        await exitMode(STATE.currentMode);

        // Enter new mode
        await enterMode(newMode, data);

        // Update state
        STATE.currentMode = newMode;

        // Save to localStorage for persistence
        if (CONFIG.ENABLE_DEBUG_LOGGING) {
            localStorage.setItem('lastMode', newMode);
            if (data.country) {
                localStorage.setItem('lastCountry', data.country);
            }
        }

    } catch (error) {
        console.error('State transition failed:', error);
        // Attempt recovery: return to VIEW mode
        STATE.currentMode = 'VIEW';
        exitMode('COMPARE');
        exitMode('TIME_TRAVEL');
    } finally {
        STATE.transitioning = false;

        // Process queued transitions
        if (STATE.transitionQueue.length > 0) {
            const next = STATE.transitionQueue.shift();
            setState(next.newMode, next.data);
        }
    }
}

/**
 * Exit a mode (cleanup)
 */
async function exitMode(mode) {
    switch(mode) {
        case 'COMPARE':
            STATE.comparedCountries = [];
            hideGhostPanel();
            resetGlobeHighlights();
            break;

        case 'TIME_TRAVEL':
            STATE.currentYear = 2023;
            STATE.timeTravelCountry = null;
            hideTimeScrubber();
            resetGlobeColors();
            break;

        case 'VIEW':
            // Nothing to cleanup
            break;
    }
    log(`Exited ${mode} mode`);
}

/**
 * Enter a mode (setup)
 */
async function enterMode(mode, data) {
    switch(mode) {
        case 'VIEW':
            if (data.country) {
                STATE.selectedCountry = data.country;
                await selectCountry(data.country, data.coords);
            }
            break;

        case 'COMPARE':
            if (data.country) {
                addToComparison(data.country);
            }
            break;

        case 'TIME_TRAVEL':
            if (!CONFIG.ENABLE_TIME_TRAVEL) {
                throw new Error('Time-travel feature is disabled');
            }
            STATE.timeTravelCountry = data.country || STATE.selectedCountry;
            STATE.currentYear = 2023;
            await initializeTimeTravelMode(STATE.timeTravelCountry);
            break;
    }
    log(`Entered ${mode} mode`);
}

/**
 * Restore last state from localStorage (on page load)
 */
function restoreLastState() {
    if (!CONFIG.ENABLE_DEBUG_LOGGING) return;

    const lastMode = localStorage.getItem('lastMode');
    const lastCountry = localStorage.getItem('lastCountry');

    if (lastMode && lastCountry && carbonData[lastCountry]) {
        log('Restoring last state:', lastMode, lastCountry);
        setTimeout(() => {
            setState(lastMode, { country: lastCountry });
        }, 2000); // Wait for globe to initialize
    }
}

/**
 * Get current state (read-only)
 */
function getState() {
    return {
        mode: STATE.currentMode,
        selectedCountry: STATE.selectedCountry,
        comparedCountries: [...STATE.comparedCountries],
        currentYear: STATE.currentYear
    };
}

/**
 * Debug logging helper
 */
function log(...args) {
    if (CONFIG.ENABLE_DEBUG_LOGGING) {
        console.log('[STATE]', ...args);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setState,
        getState,
        restoreLastState,
        STATE
    };
}
