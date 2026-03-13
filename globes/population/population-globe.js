// Population Globe - Extends GlobeBase
class PopulationGlobe extends GlobeBase {
    constructor() {
        super('globe', {
            globeImageUrl: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
            bumpImageUrl: 'https://unpkg.com/three-globe/example/img/earth-topology.png',
            backgroundImageUrl: 'https://unpkg.com/three-globe/example/img/night-sky.png',
            initialLat: 20,
            initialLng: 0,
            initialAltitude: 2.5
        });

        this.data = window.populationData;
    }

    /**
     * Custom polygon rendering with population data visualization
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

        // Add country name labels directly on the map
        const labelData = this.countriesData
            .filter(country => {
                const countryName = country.properties.ADMIN;
                return this.data[countryName]; // Only show labels for countries with data
            })
            .map(country => {
                const coords = this.getCountryCenter(country);
                const countryName = country.properties.ADMIN;
                const countryData = this.data[countryName];

                return {
                    lat: coords[1],
                    lng: coords[0],
                    name: countryName,
                    size: 0.35,
                    population: countryData.population
                };
            });

        this.globe
            .labelsData(labelData)
            .labelLat('lat')
            .labelLng('lng')
            .labelText('name')
            .labelSize('size')
            .labelDotRadius(0)
            .labelColor(() => 'rgba(255, 255, 255, 0.75)')
            .labelResolution(2)
            .labelAltitude(0.01);
    }

    /**
     * Get polygon color based on population density
     */
    getPolygonColor(polygon) {
        const countryName = polygon.properties.ADMIN;
        const country = this.data[countryName];

        // Hover state
        if (polygon === this.hoveredPolygon) {
            if (country) {
                // Color based on density
                if (country.density > 400) return 'rgba(220, 38, 38, 0.35)';  // Very high density - dark red
                if (country.density > 200) return 'rgba(239, 68, 68, 0.35)';  // High density - red
                if (country.density > 100) return 'rgba(251, 146, 60, 0.35)'; // Medium density - orange
                if (country.density > 50) return 'rgba(59, 130, 246, 0.35)';  // Low-medium density - blue
                return 'rgba(16, 185, 129, 0.35)';  // Low density - green
            }
            return 'rgba(96, 165, 250, 0.25)';
        }

        // Selected state
        if (country && this.selectedCountry === countryName) {
            if (country.density > 400) return 'rgba(220, 38, 38, 0.25)';
            if (country.density > 200) return 'rgba(239, 68, 68, 0.25)';
            if (country.density > 100) return 'rgba(251, 146, 60, 0.25)';
            if (country.density > 50) return 'rgba(59, 130, 246, 0.25)';
            return 'rgba(16, 185, 129, 0.25)';
        }

        // Default state
        if (country) {
            if (country.density > 400) return 'rgba(220, 38, 38, 0.15)';
            if (country.density > 200) return 'rgba(239, 68, 68, 0.15)';
            if (country.density > 100) return 'rgba(251, 146, 60, 0.15)';
            if (country.density > 50) return 'rgba(59, 130, 246, 0.15)';
            return 'rgba(16, 185, 129, 0.15)';
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
     * Get polygon altitude (elevation based on population)
     */
    getPolygonAltitude(polygon) {
        const countryName = polygon.properties.ADMIN;
        const country = this.data[countryName];

        if (polygon === this.hoveredPolygon) {
            return 0.015;
        }
        if (country && this.selectedCountry === countryName) {
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
            const trendIcon = this.getTrendIcon(country.trend);
            const trendColor = this.getTrendColor(country.trend);

            return `
                <div style="background: rgba(0,0,0,0.93); padding: 18px; border-radius: 14px; color: white; min-width: 260px; backdrop-filter: blur(16px); border: 1px solid rgba(96, 165, 250, 0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.5);">
                    <div style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #60a5fa;">
                        ${countryName}
                    </div>
                    <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                        <span>👥 Population</span>
                        <strong>${country.population.toFixed(2)}M</strong>
                    </div>
                    <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                        <span>📊 Density</span>
                        <strong>${country.density} /km²</strong>
                    </div>
                    <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                        <span>🌍 Global Rank</span>
                        <strong>#${country.rank}</strong>
                    </div>
                    <div style="font-size: 13px; opacity: 0.9; margin: 8px 0; padding: 6px 10px; background: ${trendColor}; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                        <span>${trendIcon} Trend</span>
                        <strong>${country.trend.charAt(0).toUpperCase() + country.trend.slice(1)}</strong>
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
                <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">No population data available</div>
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

        const trendIcon = this.getTrendIcon(country.trend);
        const trendColor = this.getTrendColor(country.trend);
        const trendClass = this.getTrendClass(country.trend);

        // Build detailed HTML
        const html = `
            <button class="close-panel" id="closePanel">✕</button>
            <div class="info-header">
                <div class="country-flag">👥</div>
                <h2 class="country-name">${countryName}</h2>
                <div class="country-rank">Global Rank #${country.rank}</div>
            </div>
            <div class="info-content">
                <div class="metric-card">
                    <div class="metric-icon">👥</div>
                    <div class="metric-details">
                        <div class="metric-label">Total Population</div>
                        <div class="metric-value"><span id="populationValue">0</span><span class="metric-unit">Million</span></div>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-icon">📊</div>
                    <div class="metric-details">
                        <div class="metric-label">Population Density</div>
                        <div class="metric-value"><span id="densityValue">0</span><span class="metric-unit">people/km²</span></div>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-icon">📈</div>
                    <div class="metric-details">
                        <div class="metric-label">Growth Rate</div>
                        <div class="metric-value"><span id="growthValue">0</span><span class="metric-unit">% per year</span></div>
                    </div>
                </div>

                <div class="trend-card ${trendClass}">
                    <div class="trend-header">
                        <span class="trend-icon">${trendIcon}</span>
                        <span class="trend-label">Population Trend</span>
                    </div>
                    <div class="trend-value">${country.trend.charAt(0).toUpperCase() + country.trend.slice(1)}</div>
                </div>

                <div class="demographic-card">
                    <h3>Demographics</h3>
                    <div class="demographic-item">
                        <div class="demographic-header">
                            <span>🏙️ Urbanization</span>
                            <span class="demographic-value">${country.urbanization}%</span>
                        </div>
                        <div class="demographic-bar">
                            <div class="demographic-fill" style="width: ${country.urbanization}%; background: linear-gradient(90deg, #3b82f6, #2563eb);"></div>
                        </div>
                    </div>
                    <div class="demographic-item">
                        <div class="demographic-header">
                            <span>👶 Median Age</span>
                            <span class="demographic-value">${country.medianAge} years</span>
                        </div>
                    </div>
                    <div class="demographic-item">
                        <div class="demographic-header">
                            <span>💚 Life Expectancy</span>
                            <span class="demographic-value">${country.lifeExpectancy} years</span>
                        </div>
                    </div>
                    <div class="demographic-item">
                        <div class="demographic-header">
                            <span>👪 Fertility Rate</span>
                            <span class="demographic-value">${country.fertilityRate} children</span>
                        </div>
                    </div>
                </div>

                <div class="context-card">
                    <div class="context-icon">🌍</div>
                    <div class="context-text">${this.getPopulationContext(country)}</div>
                </div>
            </div>
        `;

        infoPanel.innerHTML = html;

        // Animate numbers with count-up effect
        setTimeout(() => {
            this.animateValue('populationValue', 0, country.population, 1000);
            this.animateValue('densityValue', 0, country.density, 1000);
            this.animateValue('growthValue', 0, country.growthRate, 1000, 2);
        }, 100);

        // Re-attach close button event listener
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

    /**
     * Animate number count-up
     */
    animateValue(elementId, start, end, duration, decimals = 2) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const range = end - start;
        const increment = range / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = current.toFixed(decimals);
        }, 16);
    }

    /**
     * Get trend icon
     */
    getTrendIcon(trend) {
        switch(trend) {
            case 'growing': return '📈';
            case 'declining': return '📉';
            case 'stable': return '➡️';
            default: return '➡️';
        }
    }

    /**
     * Get trend color
     */
    getTrendColor(trend) {
        switch(trend) {
            case 'growing': return 'rgba(16, 185, 129, 0.2)';
            case 'declining': return 'rgba(239, 68, 68, 0.2)';
            case 'stable': return 'rgba(59, 130, 246, 0.2)';
            default: return 'rgba(100, 100, 100, 0.2)';
        }
    }

    /**
     * Get trend class
     */
    getTrendClass(trend) {
        switch(trend) {
            case 'growing': return 'trend-up';
            case 'declining': return 'trend-down';
            case 'stable': return 'trend-neutral';
            default: return 'trend-neutral';
        }
    }

    /**
     * Get population context
     */
    getPopulationContext(country) {
        if (country.density > 400) {
            return `This is one of the most densely populated countries in the world with ${country.density} people per km², significantly above the global average of 58 people per km².`;
        } else if (country.density > 200) {
            return `This country has high population density with ${country.density} people per km², well above the global average.`;
        } else if (country.density > 100) {
            return `This country has moderate population density with ${country.density} people per km², above the global average of 58 people per km².`;
        } else if (country.density > 50) {
            return `This country has relatively low population density with ${country.density} people per km², close to the global average.`;
        } else {
            return `This country has very low population density with ${country.density} people per km², significantly below the global average of 58 people per km².`;
        }
    }
}

// Initialize when DOM is ready
let globeInstance;

function init() {
    console.log('Initializing Population Globe...');

    try {
        globeInstance = new PopulationGlobe();
        window.globeInstance = globeInstance; // Expose globally for timeline

        globeInstance.init().then(() => {
            console.log('Population Globe initialized successfully');

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
        document.getElementById('infoPanel').classList.add('hidden');
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
