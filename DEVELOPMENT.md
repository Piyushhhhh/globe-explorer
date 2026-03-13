# Development Guide

## Creating a New Globe

This guide will walk you through creating a new globe visualization.

### 1. Setup Directory Structure

Create a new directory for your globe:

```bash
mkdir globes/your-globe-name
cd globes/your-globe-name
```

### 2. Create Data File

Create `your-globe-data.js` with your data:

```javascript
// Example: Temperature data
const temperatureData = {
    "United States": {
        avgTemp: 12.5,
        tempChange: +1.8,
        extremeEvents: 45,
        // ... your data structure
    },
    "China": {
        avgTemp: 8.5,
        tempChange: +2.1,
        extremeEvents: 62,
    },
    // ... more countries
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.temperatureData = temperatureData;
}
```

### 3. Create Globe Implementation

Create `your-globe.js`:

```javascript
// Extend GlobeBase class
class YourGlobe extends GlobeBase {
    constructor() {
        super('globe', {
            // Optional: customize globe appearance
            globeImageUrl: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
            initialLat: 20,
            initialLng: 0,
            initialAltitude: 2.5
        });

        // Your data
        this.data = window.yourData;
    }

    /**
     * Custom polygon rendering with your data visualization
     */
    setupPolygons() {
        if (!this.countriesData) {
            console.error('Countries data not loaded');
            return;
        }

        this.globe
            .polygonsData(this.countriesData)
            .polygonCapColor((d) => this.getPolygonColor(d))
            .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
            .polygonStrokeColor((d) => this.getPolygonStroke(d))
            .polygonsTransitionDuration(300)
            .polygonAltitude((d) => this.getPolygonAltitude(d))
            .polygonLabel((d) => this.getPolygonLabel(d))
            .onPolygonHover((polygon) => {
                this.hoveredPolygon = polygon;
                window.hoveredPolygon = polygon;
                document.body.style.cursor = polygon ? 'pointer' : 'default';

                // Re-render to update colors
                if (this.globe) {
                    this.globe.polygonsData(this.globe.polygonsData());
                }
            })
            .onPolygonClick((polygon) => {
                this.handlePolygonClick(polygon);
            });
    }

    /**
     * Get polygon color based on your data
     */
    getPolygonColor(polygon) {
        const countryName = polygon.properties.ADMIN;
        const country = this.data[countryName];

        // Hover state
        if (polygon === this.hoveredPolygon) {
            if (country) {
                // Color based on your metric
                if (country.yourMetric > 10) return 'rgba(231, 76, 60, 0.35)';
                if (country.yourMetric > 5) return 'rgba(243, 156, 18, 0.35)';
                return 'rgba(46, 204, 113, 0.35)';
            }
            return 'rgba(96, 165, 250, 0.25)';
        }

        // Selected state
        if (country && this.selectedCountry === countryName) {
            if (country.yourMetric > 10) return 'rgba(231, 76, 60, 0.25)';
            if (country.yourMetric > 5) return 'rgba(243, 156, 18, 0.25)';
            return 'rgba(46, 204, 113, 0.25)';
        }

        // Default state
        if (country) {
            if (country.yourMetric > 10) return 'rgba(231, 76, 60, 0.15)';
            if (country.yourMetric > 5) return 'rgba(243, 156, 18, 0.15)';
            return 'rgba(46, 204, 113, 0.15)';
        }

        return 'rgba(50, 50, 50, 0.05)';
    }

    /**
     * Get polygon stroke color
     */
    getPolygonStroke(polygon) {
        const countryName = polygon.properties.ADMIN;
        if (this.data[countryName] && this.selectedCountry === countryName) {
            return '#60a5fa';
        }
        if (polygon === this.hoveredPolygon) {
            return '#93c5fd';
        }
        return '#999';
    }

    /**
     * Get polygon altitude (elevation)
     */
    getPolygonAltitude(polygon) {
        const countryName = polygon.properties.ADMIN;
        if (polygon === this.hoveredPolygon) {
            return 0.015;
        }
        if (this.data[countryName] && this.selectedCountry === countryName) {
            return 0.04;
        }
        return 0.002;
    }

    /**
     * Get polygon tooltip label
     */
    getPolygonLabel({ properties: d }) {
        const countryName = d.ADMIN;
        const country = this.data[countryName];

        if (country) {
            return `
                <div style="background: rgba(0,0,0,0.93); padding: 18px; border-radius: 14px; color: white; min-width: 240px; backdrop-filter: blur(16px); border: 1px solid rgba(96, 165, 250, 0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.5);">
                    <div style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #60a5fa;">
                        ${countryName}
                    </div>
                    <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                        <span>📊 Your Metric</span>
                        <strong>${country.yourMetric}</strong>
                    </div>
                    <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.15); font-size: 13px; opacity: 0.8; text-align: center;">
                        ✨ Click for detailed insights
                    </div>
                </div>
            `;
        }

        return `
            <div style="background: rgba(0,0,0,0.88); padding: 14px; border-radius: 10px; color: white; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.15);">
                <div style="font-size: 16px; font-weight: 600;">${d.ADMIN}</div>
                <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">No data available</div>
            </div>
        `;
    }

    /**
     * Handle country click
     */
    handlePolygonClick(polygon) {
        const countryName = polygon.properties.ADMIN;
        const country = this.data[countryName];

        if (!country) {
            console.log('No data for country:', countryName);
            return;
        }

        this.selectedCountry = countryName;

        // Zoom to country
        const coords = this.getCountryCenter(polygon);
        this.zoomToCountry(coords);

        // Show info panel
        this.showCountryInfo(countryName, country);

        // Update polygons
        if (this.globe && this.countriesData) {
            this.globe.polygonsData(this.countriesData);
        }
    }

    /**
     * Show country information panel
     */
    showCountryInfo(countryName, country) {
        const infoPanel = document.getElementById('infoPanel');
        if (!infoPanel) return;

        infoPanel.classList.remove('hidden');

        // Build your custom HTML
        const html = `
            <button class="close-panel" id="closePanel">✕</button>
            <div class="info-header">
                <div class="country-flag">🌍</div>
                <h2 class="country-name">${countryName}</h2>
            </div>
            <div class="info-content">
                <!-- Your custom content here -->
                <div class="metric-card">
                    <div class="metric-label">Your Metric</div>
                    <div class="metric-value">${country.yourMetric}</div>
                </div>
            </div>
        `;

        infoPanel.innerHTML = html;

        // Re-attach close button listener
        const closeBtn = document.getElementById('closePanel');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                infoPanel.classList.add('hidden');
                this.selectedCountry = null;
                if (this.globe && this.countriesData) {
                    this.globe.polygonsData(this.countriesData);
                }
            });
        }
    }
}

// Initialize when DOM is ready
let globeInstance;

function init() {
    console.log('Initializing your globe...');

    try {
        globeInstance = new YourGlobe();
        globeInstance.init().then(() => {
            console.log('Globe initialized successfully');

            // Hide loading screen
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 1000);

            // Setup control buttons
            setupControls();
        });
    } catch (error) {
        console.error('Error initializing globe:', error);
        document.getElementById('loading').innerHTML =
            '<p style="color: red;">Error loading globe: ' + error.message + '</p>';
    }
}

function setupControls() {
    document.getElementById('resetView').addEventListener('click', () => {
        globeInstance.resetView();
    });

    document.getElementById('autoRotate').addEventListener('click', () => {
        const isRotating = globeInstance.toggleAutoRotate();
        const button = document.getElementById('autoRotate');
        button.textContent = isRotating ? 'Stop Rotation' : 'Auto Rotate';
        button.style.background = isRotating ?
            'rgba(231, 76, 60, 0.9)' : 'rgba(52, 152, 219, 0.9)';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
```

### 4. Create HTML File

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Globe - Globe Explorer</title>
    <link rel="stylesheet" href="../../shared/styles/common.css">
    <link rel="stylesheet" href="your-globe-styles.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="back-link">
                <a href="../../index.html">← Back to Globe Explorer</a>
            </div>
            <h1>🌍 Your Globe</h1>
            <p class="subtitle">Your description here</p>
        </header>

        <div class="main-content">
            <div class="globe-container">
                <div id="globe"></div>
                <div class="controls">
                    <button id="resetView">Reset View</button>
                    <button id="autoRotate">Auto Rotate</button>
                </div>
            </div>

            <div class="info-panel" id="infoPanel">
                <!-- Info panel content will be inserted here -->
            </div>
        </div>
    </div>

    <div class="loading" id="loading">
        <div class="spinner"></div>
        <p>Loading Data...</p>
    </div>

    <!-- Scripts -->
    <script src="../../core/globe-base.js"></script>
    <script src="https://unpkg.com/globe.gl"></script>
    <script src="your-globe-data.js"></script>
    <script src="your-globe.js"></script>
</body>
</html>
```

### 5. Create Styles

Create `your-globe-styles.css`:

```css
/* Your custom styles here */

.info-panel {
    position: fixed;
    right: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    color: white;
    padding: 30px;
    overflow-y: auto;
    z-index: 50;
    transition: transform 0.3s ease;
}

.info-panel.hidden {
    transform: translateX(100%);
}

/* Add your custom styles */
```

### 6. Add to Main Selector

Edit the root `index.html` and add your globe card:

```html
<a href="globes/your-globe-name/index.html" class="globe-card">
    <div class="globe-icon">🌡️</div>
    <div class="globe-title">Your Globe</div>
    <div class="globe-description">
        Your description here.
    </div>
    <span class="globe-status status-live">✓ Live</span>
</a>
```

### 7. Test Your Globe

Start a local server and test:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` and click on your globe!

## Best Practices

1. **Keep data files separate** - Don't mix data with logic
2. **Extend GlobeBase** - Don't duplicate core functionality
3. **Use shared styles** - Import `common.css` for consistency
4. **Document your data** - Add comments explaining data structure
5. **Test on mobile** - Ensure touch interactions work
6. **Optimize performance** - Keep polygon counts reasonable

## Tips

- Use the Carbon Globe as a reference implementation
- Leverage core utilities from `core/` directory
- Share common patterns across globes
- Keep each globe focused on a single dataset/visualization

## Need Help?

Check the Carbon Globe implementation in `globes/carbon/` for a complete working example.
