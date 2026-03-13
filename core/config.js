// ========================================
// CARBON GLOBE - CONFIGURATION
// ========================================

const CONFIG = {
    // Feature flags for gradual rollout
    ENABLE_TIME_TRAVEL: true,
    ENABLE_GHOST_COMPARE: true,
    ENABLE_AMBIENT_PULSES: true,
    ENABLE_CELEBRATION_EFFECTS: true,

    // Data loading configuration
    PRELOAD_TOP_N_COUNTRIES: 20,
    ENABLE_INDEXEDDB_CACHE: true,
    CACHE_TTL_HOURS: 24,

    // Performance tuning
    ANIMATION_THROTTLE_FPS: 30, // Render every 2 frames at 60fps
    MAX_CONCURRENT_ANIMATIONS: 10,
    TOOLTIP_DEBOUNCE_MS: 100,

    // Time-travel configuration
    HISTORICAL_START_YEAR: 1993,
    HISTORICAL_END_YEAR: 2023,

    // Gesture detection thresholds
    DOUBLE_CLICK_THRESHOLD_MS: 300,
    LONG_PRESS_THRESHOLD_MS: 500,

    // Data validation
    FAIL_FAST_ON_INVALID_DATA: true,

    // Debugging
    ENABLE_DEBUG_LOGGING: false,
    ENABLE_PERFORMANCE_MONITORING: false
};

// Freeze config to prevent runtime modifications
Object.freeze(CONFIG);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
