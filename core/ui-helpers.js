// ========================================
// CARBON GLOBE - UI HELPERS
// ========================================
// Toast notifications, tooltips, and other UI utilities

// Active elements tracking
const uiState = {
    activeToast: null,
    activeTooltip: null,
    keyboardHintsVisible: false
};

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {number} duration - Duration in ms (default 3000)
 * @param {string} type - 'info' | 'success' | 'warning' | 'error'
 */
function showToast(message, duration = 3000, type = 'info') {
    // Remove existing toast
    if (uiState.activeToast) {
        uiState.activeToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);
    uiState.activeToast = toast;

    // Trigger animation
    setTimeout(() => {
        toast.classList.add('visible');
    }, 10);

    // Auto-hide
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => {
            toast.remove();
            if (uiState.activeToast === toast) {
                uiState.activeToast = null;
            }
        }, 300);
    }, duration);
}

/**
 * Show tooltip near cursor
 * @param {string} countryName - Country name
 * @param {number} year - Year (for time-travel mode)
 * @param {object} position - {x, y} screen coordinates
 */
function showTooltip(countryName, year, position) {
    // Get or create tooltip
    let tooltip = document.getElementById('countryTooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'countryTooltip';
        tooltip.className = 'country-tooltip';
        document.body.appendChild(tooltip);
    }

    uiState.activeTooltip = tooltip;

    // Get country data
    const data = carbonData[countryName];
    if (!data) {
        hideTooltip();
        return;
    }

    // Build tooltip content
    const content = year !== 2023 && historicalDataCache[countryName]
        ? `${countryName} (${year})`
        : countryName;

    tooltip.textContent = content;

    // Position near cursor
    tooltip.style.left = `${position.x + 15}px`;
    tooltip.style.top = `${position.y + 15}px`;

    // Show tooltip
    tooltip.classList.add('visible');
}

/**
 * Hide tooltip
 */
function hideTooltip() {
    const tooltip = document.getElementById('countryTooltip');
    if (tooltip) {
        tooltip.classList.remove('visible');
    }
    uiState.activeTooltip = null;
}

/**
 * Show keyboard shortcuts hint
 */
function showKeyboardHints() {
    let hints = document.getElementById('keyboardHints');

    if (!hints) {
        hints = document.createElement('div');
        hints.id = 'keyboardHints';
        hints.className = 'keyboard-hints';
        hints.innerHTML = `
            <kbd>R</kbd> Reset View  •
            <kbd>A</kbd> Auto-rotate  •
            <kbd>C</kbd> Compare  •
            <kbd>T</kbd> Time-travel  •
            <kbd>↑ ↓</kbd> Navigate Years  •
            <kbd>ESC</kbd> Exit Mode  •
            <kbd>?</kbd> Toggle Help
        `;
        document.body.appendChild(hints);
    }

    // Toggle visibility
    uiState.keyboardHintsVisible = !uiState.keyboardHintsVisible;
    if (uiState.keyboardHintsVisible) {
        hints.classList.add('visible');
    } else {
        hints.classList.remove('visible');
    }
}

/**
 * Hide keyboard hints
 */
function hideKeyboardHints() {
    const hints = document.getElementById('keyboardHints');
    if (hints) {
        hints.classList.remove('visible');
        uiState.keyboardHintsVisible = false;
    }
}

/**
 * Show loading indicator
 * @param {string} message - Loading message
 */
function showLoadingIndicator(message = 'Loading...') {
    let indicator = document.getElementById('loadingIndicator');

    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'loadingIndicator';
        indicator.className = 'loading-indicator';
        indicator.innerHTML = `
            <div class="spinner"></div>
            <div>${message}</div>
        `;
        document.body.appendChild(indicator);
    }

    indicator.querySelector('div:last-child').textContent = message;
    indicator.classList.add('visible');
}

/**
 * Hide loading indicator
 */
function hideLoadingIndicator() {
    const indicator = document.getElementById('loadingIndicator');
    if (indicator) {
        indicator.classList.remove('visible');
    }
}

/**
 * Show time-travel scrubber UI
 * @param {string} country - Country name
 * @param {number} currentYear - Currently selected year
 */
function showTimeScrubber(country, currentYear = 2023) {
    let scrubber = document.getElementById('timeScrubber');

    if (!scrubber) {
        scrubber = document.createElement('div');
        scrubber.id = 'timeScrubber';
        scrubber.className = 'time-scrubber';
        scrubber.innerHTML = `
            <div class="time-scrubber-header">
                <div class="time-scrubber-title">Time Travel Mode</div>
                <div class="time-scrubber-year">${currentYear}</div>
            </div>
            <div class="time-scrubber-track">
                <div class="time-scrubber-progress"></div>
                <div class="time-scrubber-thumb"></div>
            </div>
            <div class="time-scrubber-labels">
                <span>${CONFIG.HISTORICAL_START_YEAR}</span>
                <span>${CONFIG.HISTORICAL_END_YEAR}</span>
            </div>
        `;
        document.body.appendChild(scrubber);

        // Add drag handlers
        initializeScrubberDrag(scrubber);
    }

    // Update year display
    const yearDisplay = scrubber.querySelector('.time-scrubber-year');
    yearDisplay.textContent = currentYear;

    // Update progress bar
    updateScrubberPosition(currentYear);

    // Show scrubber
    scrubber.classList.add('visible');
}

/**
 * Hide time-travel scrubber
 */
function hideTimeScrubber() {
    const scrubber = document.getElementById('timeScrubber');
    if (scrubber) {
        scrubber.classList.remove('visible');
    }
}

/**
 * Update scrubber position based on year
 */
function updateScrubberPosition(year) {
    const scrubber = document.getElementById('timeScrubber');
    if (!scrubber) return;

    const yearRange = CONFIG.HISTORICAL_END_YEAR - CONFIG.HISTORICAL_START_YEAR;
    const progress = (year - CONFIG.HISTORICAL_START_YEAR) / yearRange;

    const progressBar = scrubber.querySelector('.time-scrubber-progress');
    const thumb = scrubber.querySelector('.time-scrubber-thumb');

    if (progressBar && thumb) {
        progressBar.style.width = `${progress * 100}%`;
        thumb.style.left = `${progress * 100}%`;
    }
}

/**
 * Initialize scrubber drag handlers
 */
function initializeScrubberDrag(scrubber) {
    const track = scrubber.querySelector('.time-scrubber-track');
    const thumb = scrubber.querySelector('.time-scrubber-thumb');

    let isDragging = false;

    function handleDrag(e) {
        if (!isDragging) return;

        const rect = track.getBoundingClientRect();
        const x = e.clientX || e.touches[0].clientX;
        const position = Math.max(0, Math.min(1, (x - rect.left) / rect.width));

        const yearRange = CONFIG.HISTORICAL_END_YEAR - CONFIG.HISTORICAL_START_YEAR;
        const year = Math.round(CONFIG.HISTORICAL_START_YEAR + position * yearRange);

        // Clamp to valid range
        const clampedYear = Math.max(CONFIG.HISTORICAL_START_YEAR,
                                      Math.min(CONFIG.HISTORICAL_END_YEAR, year));

        // Update UI
        updateScrubberPosition(clampedYear);
        scrubber.querySelector('.time-scrubber-year').textContent = clampedYear;

        // Update globe (throttled rendering)
        if (typeof setTimeTravelYear === 'function') {
            setTimeTravelYear(clampedYear);
        }
    }

    function stopDrag() {
        isDragging = false;
        document.body.style.cursor = '';
    }

    thumb.addEventListener('mousedown', () => {
        isDragging = true;
        document.body.style.cursor = 'grabbing';
    });

    thumb.addEventListener('touchstart', () => {
        isDragging = true;
    });

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('touchmove', handleDrag);

    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);

    // Click on track to jump
    track.addEventListener('click', (e) => {
        if (e.target === thumb) return;

        const rect = track.getBoundingClientRect();
        const position = (e.clientX - rect.left) / rect.width;
        const yearRange = CONFIG.HISTORICAL_END_YEAR - CONFIG.HISTORICAL_START_YEAR;
        const year = Math.round(CONFIG.HISTORICAL_START_YEAR + position * yearRange);

        updateScrubberPosition(year);
        scrubber.querySelector('.time-scrubber-year').textContent = year;

        if (typeof setTimeTravelYear === 'function') {
            setTimeTravelYear(year);
        }
    });
}

/**
 * Show ghost comparison panel (duplicate of info panel for 2nd country)
 */
function showGhostPanel(countryName, countryData) {
    let ghostPanel = document.getElementById('ghostPanel');

    if (!ghostPanel) {
        ghostPanel = document.createElement('div');
        ghostPanel.id = 'ghostPanel';
        ghostPanel.className = 'ghost-panel';
        document.body.appendChild(ghostPanel);
    }

    // Build panel content (similar to info panel but semi-transparent)
    ghostPanel.innerHTML = `
        <div class="info-header">
            <div class="country-flag">${getCountryEmoji(countryName)}</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">Global Rank #${countryData.rank}</div>
        </div>
        <div class="info-content">
            <div class="metric-card">
                <div class="metric-icon">💨</div>
                <div class="metric-details">
                    <div class="metric-label">Total CO₂</div>
                    <div class="metric-value">${countryData.total.toLocaleString()}<span class="metric-unit">Mt</span></div>
                </div>
            </div>
            <div class="metric-card">
                <div class="metric-icon">👤</div>
                <div class="metric-details">
                    <div class="metric-label">Per Capita</div>
                    <div class="metric-value">${countryData.perCapita}<span class="metric-unit">tons/year</span></div>
                </div>
            </div>
        </div>
    `;

    ghostPanel.classList.add('visible');
}

/**
 * Hide ghost comparison panel
 */
function hideGhostPanel() {
    const ghostPanel = document.getElementById('ghostPanel');
    if (ghostPanel) {
        ghostPanel.classList.remove('visible');
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showToast,
        showTooltip,
        hideTooltip,
        showKeyboardHints,
        hideKeyboardHints,
        showLoadingIndicator,
        hideLoadingIndicator,
        showTimeScrubber,
        hideTimeScrubber,
        updateScrubberPosition,
        showGhostPanel,
        hideGhostPanel
    };
}
