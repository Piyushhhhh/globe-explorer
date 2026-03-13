# 🔌 INTEGRATION GUIDE - Connecting New Modules to app.js

## Quick Reference for Integrating EXPANSION Features

This guide shows exactly how to integrate the new modules (`config.js`, `state-machine.js`, `gesture-handler.js`, `data-loader.js`, etc.) into the existing `app.js`.

---

## 📍 Integration Points

### 1. **Initialize Modules on App Start**

**Add to `init()` function (line 6):**

```javascript
function init() {
    console.log('Initializing globe...');

    try {
        // ✨ NEW: Run data validation first
        const validation = runAllValidations();
        if (!validation.allValid) {
            console.warn('Data validation issues detected');
        }

        // ✨ NEW: Initialize data loader (preload top 20)
        initializeDataLoader();

        // ✨ NEW: Initialize gesture handlers
        initializeGestureHandlers();

        // Existing globe setup
        setupGlobe();
        setupEventListeners();

        // ✨ NEW: Restore last state from localStorage
        restoreLastState();

        console.log('Globe setup complete');
    } catch (error) {
        console.error('Error setting up globe:', error);
        document.getElementById('loading').innerHTML =
            '<p style="color: red;">Error loading globe: ' + error.message + '</p>';
    }
}
```

---

### 2. **Add WebGL Context Loss Recovery**

**Add to `setupGlobe()` function (after globe is created, around line 45):**

```javascript
// ✨ NEW: WebGL context loss recovery
const canvas = globe.renderer().domElement;
canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    console.error('WebGL context lost, attempting recovery');

    setTimeout(() => {
        showToast('Graphics error occurred. Reloading...', 5000, 'error');
        setTimeout(() => location.reload(), 2000);
    }, 2000);
});

console.log('[SECURITY] WebGL context loss handler registered');
```

---

### 3. **Replace Direct Polygon Click with Gesture Handler**

**Replace line 173-198 in `setupGlobe()`:**

**OLD:**
```javascript
.onPolygonClick((polygon) => {
    const countryName = polygon.properties.ADMIN;
    console.log('Clicked country:', countryName);
    if (carbonData[countryName]) {
        const coords = getCountryCenter(polygon);
        selectCountry(countryName, carbonData[countryName], coords, polygon);
    } else {
        // ... error handling ...
    }
});
```

**NEW:**
```javascript
.onPolygonClick((polygon) => {
    const countryName = polygon.properties.ADMIN;
    const coords = getCountryCenter(polygon);

    // ✨ NEW: Use gesture handler instead of direct call
    handleCountryClick(countryName, coords);
});
```

---

### 4. **Add Hover Handler for Tooltip**

**Add after `.onPolygonClick()` around line 198:**

```javascript
.onPolygonHover((polygon) => {
    window.hoveredPolygon = polygon;
    document.body.style.cursor = polygon ? 'pointer' : 'default';

    // ✨ NEW: Show tooltip on hover
    if (polygon) {
        const countryName = polygon.properties.ADMIN;
        const rect = globe.renderer().domElement.getBoundingClientRect();
        // Estimate mouse position (Globe.gl doesn't provide it directly)
        const position = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        handleCountryHover(countryName, position);
    } else {
        handleHoverExit();
    }

    // Trigger re-render to update colors and altitude
    if (globe) {
        globe.polygonsData(globe.polygonsData());
    }
});
```

---

### 5. **Integrate State Machine into `selectCountry()`**

**Replace `selectCountry()` function (line 442):**

**OLD:**
```javascript
function selectCountry(countryName, country, coords, polygon) {
    selectedCountry = countryName;
    window.selectedPolygon = polygon;

    const infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.remove('hidden');

    // ... rest of function ...
}
```

**NEW:**
```javascript
function selectCountry(countryName, coords) {
    // ✨ NEW: Use state machine for mode management
    const country = carbonData[countryName];
    if (!country) {
        showToast(`Data unavailable for ${countryName}`, 3000, 'warning');
        return;
    }

    // Update global state (keep for backward compatibility)
    selectedCountry = countryName;

    const infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.remove('hidden');

    // Smooth zoom to country
    if (coords && coords.length === 2) {
        globe.pointOfView({
            lat: coords[1],
            lng: coords[0],
            altitude: 0.8
        }, 1500);
    }

    // Update polygons to show elevation
    if (globe && window.countriesData) {
        globe.polygonsData(window.countriesData);
    }

    // Build panel HTML
    updateInfoPanel(countryName, country);
}
```

---

### 6. **Add Animation Engine to Panel Updates**

**Create new function `updateInfoPanel()` with animations:**

```javascript
function updateInfoPanel(countryName, country) {
    const infoPanel = document.getElementById('infoPanel');

    // Build HTML (same as before)
    const html = `
        <button class="close-panel" id="closePanel">✕</button>
        <div class="info-header">
            <div class="country-flag">${getCountryEmoji(countryName)}</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">Global Rank #${country.rank}</div>
        </div>
        <div class="info-content">
            <div class="metric-card">
                <div class="metric-icon">💨</div>
                <div class="metric-details">
                    <div class="metric-label">Total CO₂ Emissions</div>
                    <div class="metric-value" id="totalValue">0<span class="metric-unit">Mt</span></div>
                </div>
            </div>
            <div class="metric-card">
                <div class="metric-icon">👤</div>
                <div class="metric-details">
                    <div class="metric-label">Per Capita Emissions</div>
                    <div class="metric-value" id="perCapitaValue">0<span class="metric-unit">tons/year</span></div>
                </div>
            </div>
            <!-- ... rest of HTML ... -->
        </div>
    `;

    infoPanel.innerHTML = html;

    // ✨ NEW: Animate numbers with count-up effect
    setTimeout(() => {
        const totalElem = document.getElementById('totalValue');
        const perCapitaElem = document.getElementById('perCapitaValue');

        if (totalElem) {
            countUp(totalElem, 0, country.total, 1000, ' Mt');
        }

        if (perCapitaElem) {
            countUp(perCapitaElem, 0, country.perCapita, 1000, ' tons/year');
        }
    }, 100);

    // ✨ NEW: Show celebration if emissions declining
    if (country.trend && parseFloat(country.trend) < -5) {
        const rect = infoPanel.getBoundingClientRect();
        celebrationSparkles({ x: rect.left + rect.width / 2, y: rect.top });
    }
}
```

---

### 7. **Add Time-Travel Year Setter**

**Add new global function for scrubber to call:**

```javascript
// Global function for time-travel scrubber
function setTimeTravelYear(year) {
    const state = getState();
    if (state.mode !== 'TIME_TRAVEL' || !state.selectedCountry) {
        return;
    }

    // Update state
    STATE.currentYear = year;

    // Fetch historical data if not cached
    const country = state.selectedCountry;
    const historicalData = historicalDataCache[country];

    if (!historicalData) {
        showLoadingIndicator('Loading historical data...');
        fetchHistoricalData(country).then(() => {
            hideLoadingIndicator();
            renderTimeSeries(country, year);
        });
        return;
    }

    // Render that year's data (throttled)
    const throttledRender = throttleRender(renderTimeSeries, CONFIG.ANIMATION_THROTTLE_FPS);
    throttledRender(country, year);
}

// Render historical year on globe
function renderTimeSeries(country, year) {
    if (!window.countriesData) return;

    const historicalData = historicalDataCache[country];
    if (!historicalData) return;

    // Find data for this year
    const yearData = historicalData.find(d => d.year === year);
    if (!yearData) return;

    // Update globe colors based on that year's emissions
    globe.polygonCapColor((d) => {
        const countryName = d.properties.ADMIN;

        if (countryName === country) {
            // Selected country in time-travel
            const perCapita = yearData.perCapita;
            if (perCapita > 10) return 'rgba(231, 76, 60, 0.35)';
            if (perCapita > 5) return 'rgba(243, 156, 18, 0.35)';
            return 'rgba(46, 204, 113, 0.35)';
        }

        // Other countries (current 2023 data)
        if (carbonData[countryName]) {
            const perCapita = carbonData[countryName].perCapita;
            if (perCapita > 10) return 'rgba(231, 76, 60, 0.15)';
            if (perCapita > 5) return 'rgba(243, 156, 18, 0.15)';
            return 'rgba(46, 204, 113, 0.15)';
        }

        return 'rgba(50, 50, 50, 0.05)';
    });

    // Update info panel with historical year data
    updateInfoPanel(country, {
        ...carbonData[country],
        total: yearData.total,
        perCapita: yearData.perCapita,
        rank: yearData.rank
    });
}
```

---

### 8. **Add Compare Mode Handlers**

**Add new functions for comparison:**

```javascript
function addToComparison(country, coords) {
    const state = getState();

    if (state.comparedCountries.length >= 2) {
        showToast('Can only compare 2 countries. Click one to remove.', 3000, 'warning');
        return;
    }

    STATE.comparedCountries.push(country);

    // Show ghost panel for 2nd country
    if (STATE.comparedCountries.length === 2) {
        const country2 = STATE.comparedCountries[1];
        showGhostPanel(country2, carbonData[country2]);
    }
}

function removeFromComparison(country) {
    const index = STATE.comparedCountries.indexOf(country);
    if (index > -1) {
        STATE.comparedCountries.splice(index, 1);
    }

    if (STATE.comparedCountries.length < 2) {
        hideGhostPanel();
    }
}
```

---

### 9. **Hook Up Time-Travel Mode Entry**

**Add function to enter time-travel mode:**

```javascript
async function initializeTimeTravelMode(country) {
    showTimeScrubber(country, 2023);

    // Check if historical data is available
    if (!isHistoricalDataReady(country)) {
        showLoadingIndicator('Loading historical data...');

        try {
            await fetchHistoricalData(country);
            hideLoadingIndicator();
        } catch (error) {
            hideLoadingIndicator();
            showToast('Historical data unavailable. Showing 2023 only.', 4000, 'warning');
        }
    }
}
```

---

### 10. **Update Reset View to Use State Machine**

**Replace `resetView()` function (line 625):**

**OLD:**
```javascript
function resetView() {
    if (globe) {
        globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
        selectedCountry = null;
        // ...
    }
}
```

**NEW:**
```javascript
function resetView() {
    if (globe) {
        globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);

        // ✨ NEW: Use state machine to reset to VIEW mode
        setState('VIEW', {});

        selectedCountry = null;
        window.selectedPolygon = null;
        window.hoveredPolygon = null;
        document.getElementById('infoPanel').classList.add('hidden');

        if (window.countriesData) {
            globe.polygonsData(window.countriesData());
        }
    }
}
```

---

## ✅ Testing After Integration

1. **Open browser console** - Look for:
   - `[VALIDATION] Carbon Data Validation` - Should show ✅
   - `[DATA] Initializing data loader...` - Should show preload starting
   - `[GESTURE] Handlers initialized` - Confirms gesture setup

2. **Click a country** - Should:
   - Show info panel with animated numbers (count-up effect)
   - Console: `[GESTURE] Single click: [Country]`
   - Console: `[STATE] State transition: VIEW → VIEW`

3. **Double-click a country** - Should:
   - Show time-travel scrubber at bottom
   - Console: `[GESTURE] Double click: [Country]`
   - Console: `[STATE] Entered TIME_TRAVEL mode`

4. **Press keyboard shortcuts**:
   - `R` → Reset view
   - `?` → Show keyboard hints overlay
   - `ESC` → Exit current mode

5. **Check network tab**:
   - Should see preload of top 20 countries (multiple `/data/historical/*.json` requests)
   - Should see IndexedDB writes in Application tab

---

## 🚨 Common Integration Issues

### Issue 1: "Cannot read property 'total' of undefined"
**Cause**: Country name mismatch between GeoJSON and carbonData
**Fix**: Add name alias in data.js or use data-validator to identify missing countries

### Issue 2: Numbers don't animate
**Cause**: Element IDs don't match between HTML and countUp() call
**Fix**: Ensure `<div id="totalValue">` exists in HTML before calling `countUp()`

### Issue 3: Scrubber doesn't appear on double-click
**Cause**: `CONFIG.ENABLE_TIME_TRAVEL` is false or historical data not found
**Fix**: Check config.js and ensure /data/historical/ files exist

### Issue 4: CSP blocks scripts
**Cause**: Inline event handlers (e.g., `onclick=""` in HTML)
**Fix**: Move all event handlers to JavaScript files (addEventListener)

---

## 📝 Checklist

- [ ] All modules loaded (check console for errors)
- [ ] Data validation runs successfully
- [ ] Preload starts (check Network tab)
- [ ] Click country works
- [ ] Double-click shows scrubber (once data exists)
- [ ] Keyboard shortcuts respond
- [ ] Toast notifications appear
- [ ] Tooltips show on hover
- [ ] WebGL context loss handler registered
- [ ] No CSP violations in console

---

**Ready to integrate?** Start with steps 1-3, test, then proceed to steps 4-10.

**Questions?** Check IMPLEMENTATION_SUMMARY.md for architecture details.
