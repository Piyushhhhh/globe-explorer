// Global variables
let globe;
let selectedCountry = null;

// Helper function to get country center coordinates
function getCountryCenter(country) {
    if (country.properties.LABEL_Y && country.properties.LABEL_X) {
        return [country.properties.LABEL_X, country.properties.LABEL_Y];
    }

    // Calculate center from geometry
    const geometry = country.geometry;
    if (!geometry) return [0, 0];

    let totalLng = 0, totalLat = 0, count = 0;

    if (geometry.type === 'Polygon') {
        geometry.coordinates[0].forEach(coord => {
            totalLng += coord[0];
            totalLat += coord[1];
            count++;
        });
    } else if (geometry.type === 'MultiPolygon') {
        geometry.coordinates.forEach(polygon => {
            polygon[0].forEach(coord => {
                totalLng += coord[0];
                totalLat += coord[1];
                count++;
            });
        });
    }

    return count > 0 ? [totalLng / count, totalLat / count] : [0, 0];
}

// Initialize the app
function init() {
    console.log('Initializing Temperature Globe...');

    try {
        setupGlobe();
        setupEventListeners();
        console.log('Temperature Globe setup complete');
    } catch (error) {
        console.error('Error setting up globe:', error);
        document.getElementById('loading').innerHTML = '<p style="color: red;">Error loading globe: ' + error.message + '</p>';
    }
}

// Setup Globe.gl
function setupGlobe() {
    const container = document.getElementById('globe');

    if (!container) {
        throw new Error('Globe container not found');
    }

    if (typeof Globe === 'undefined') {
        throw new Error('Globe.gl library not loaded');
    }

    console.log('Creating globe instance...');

    // Initialize Globe
    globe = Globe()
        (container)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-day.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('lightskyblue')
        .atmosphereAltitude(0.15)
        .width(window.innerWidth)
        .height(window.innerHeight);

    console.log('Globe instance created');

    // Hide loading screen after globe is ready
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        console.log('Loading screen hidden');
    }, 2000);

    // Auto-hide welcome panel after 6 seconds
    setTimeout(() => {
        const infoPanel = document.getElementById('infoPanel');
        if (infoPanel && !selectedCountry) {
            infoPanel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            infoPanel.style.opacity = '0';
            infoPanel.style.transform = 'translateX(450px)';
            setTimeout(() => {
                infoPanel.classList.add('hidden');
                infoPanel.style.opacity = '';
                infoPanel.style.transform = '';
            }, 800);
        }
    }, 6000);

    // Add country polygons with temperature-based coloring
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
            if (!countries || !countries.features || !Array.isArray(countries.features)) {
                throw new Error('Invalid GeoJSON data structure');
            }

            console.log('Countries loaded:', countries.features.length);

            window.countriesData = countries.features.filter(d => d.properties.ISO_A2 !== 'AQ');

            globe
                .polygonsData(window.countriesData)
                .polygonCapColor((d) => {
                    const countryName = d.properties.ADMIN;

                    // Brighten on hover
                    if (d === window.hoveredPolygon) {
                        if (temperatureData[countryName]) {
                            const anomaly = temperatureData[countryName].anomaly;
                            if (anomaly >= 2.0) return 'rgba(231, 76, 60, 0.35)'; // High warming - red
                            if (anomaly >= 1.5) return 'rgba(243, 156, 18, 0.35)'; // Moderate warming - orange
                            return 'rgba(46, 204, 113, 0.35)'; // Low warming - green
                        }
                        return 'rgba(96, 165, 250, 0.25)';
                    }

                    // Selected country
                    if (temperatureData[countryName] && selectedCountry === countryName) {
                        const anomaly = temperatureData[countryName].anomaly;
                        if (anomaly >= 2.0) return 'rgba(231, 76, 60, 0.25)';
                        if (anomaly >= 1.5) return 'rgba(243, 156, 18, 0.25)';
                        return 'rgba(46, 204, 113, 0.25)';
                    }

                    // Default state - color by temperature anomaly
                    if (temperatureData[countryName]) {
                        const anomaly = temperatureData[countryName].anomaly;
                        if (anomaly >= 2.0) return 'rgba(231, 76, 60, 0.15)'; // High warming
                        if (anomaly >= 1.5) return 'rgba(243, 156, 18, 0.15)'; // Moderate warming
                        return 'rgba(46, 204, 113, 0.15)'; // Lower warming
                    }
                    return 'rgba(50, 50, 50, 0.05)'; // No data
                })
                .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    // Highlight border on hover or selection
                    if (d === window.hoveredPolygon || selectedCountry === countryName) {
                        return '#60a5fa';
                    }
                    return '#999';
                })
                .polygonAltitude((d) => {
                    const countryName = d.properties.ADMIN;
                    if (d === window.hoveredPolygon) return 0.03;
                    if (selectedCountry === countryName) return 0.02;
                    return 0.01;
                })
                .onPolygonHover((polygon) => {
                    window.hoveredPolygon = polygon;
                    container.style.cursor = polygon ? 'pointer' : 'grab';
                    // Re-render to update border colors
                    if (globe) {
                        globe.polygonsData(globe.polygonsData());
                    }
                })
                .onPolygonClick((polygon) => {
                    if (polygon) {
                        const countryName = polygon.properties.ADMIN;
                        showCountryInfo(countryName);

                        // Zoom to country
                        const { lat, lng } = polygon.properties;
                        if (lat && lng) {
                            globe.pointOfView({ lat, lng, altitude: 1.5 }, 1000);
                        }
                    }
                });

            // Add country name labels
            const labelData = window.countriesData
                .filter(country => {
                    const countryName = country.properties.ADMIN;
                    return temperatureData[countryName]; // Only show labels for countries with data
                })
                .map(country => {
                    const coords = getCountryCenter(country);
                    const countryName = country.properties.ADMIN;

                    return {
                        lat: coords[1],
                        lng: coords[0],
                        name: countryName,
                        size: 0.35
                    };
                });

            globe
                .labelsData(labelData)
                .labelLat('lat')
                .labelLng('lng')
                .labelText('name')
                .labelSize('size')
                .labelDotRadius(0)
                .labelColor(() => 'rgba(255, 255, 255, 0.9)')
                .labelResolution(3)
                .labelAltitude(0.01)
                .labelIncludeDot(false)
                .labelLabel((d) => `<div style="
                    background: rgba(0, 0, 0, 0.85);
                    padding: 4px 10px;
                    border-radius: 6px;
                    color: white;
                    font-size: 13px;
                    font-weight: 600;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                    border: 1px solid rgba(255,255,255,0.2);
                    backdrop-filter: blur(4px);
                ">${d.name}</div>`);

            console.log('Polygons configured with temperature data');
        })
        .catch(error => {
            console.error('Error loading countries:', error);
        });

    // Set initial camera position
    globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

    // Controls
    globe.controls().autoRotate = false;
    globe.controls().enableZoom = true;
}

// Show country information panel
function showCountryInfo(countryName) {
    selectedCountry = countryName;
    const data = temperatureData[countryName];
    const infoPanel = document.getElementById('infoPanel');

    // Update polygons to show selected border
    if (globe && window.countriesData) {
        globe.polygonsData(window.countriesData);
    }

    if (!data) {
        // Show message for countries without data
        document.querySelector('.country-name').textContent = countryName;
        document.querySelector('.country-rank').textContent = 'Data not available';
        document.querySelector('.info-content').innerHTML = `
            <div style="color: rgba(255,255,255,0.7); text-align: center; padding: 20px;">
                <p>Temperature data for ${countryName} is not currently available.</p>
                <p style="font-size: 14px; margin-top: 10px;">Check back for updates!</p>
            </div>
        `;
    } else {
        // Display country data
        document.querySelector('.country-name').textContent = countryName;
        document.querySelector('.country-rank').textContent = `Rank #${data.rank} · Temperature Anomaly ${data.anomaly > 0 ? '+' : ''}${data.anomaly}°C`;

        const warmingLevel = data.anomaly >= 2.0 ? 'High' : data.anomaly >= 1.5 ? 'Moderate' : 'Lower';
        const warmingColor = data.anomaly >= 2.0 ? '#e74c3c' : data.anomaly >= 1.5 ? '#f39c12' : '#2ecc71';

        document.querySelector('.info-content').innerHTML = `
            <!-- Temperature Overview -->
            <div class="info-section">
                <h3>🌡️ Temperature Overview</h3>
                <div class="data-row">
                    <span class="data-label">Current Average</span>
                    <span class="data-value">${data.avgTemp}°C</span>
                </div>
                <div class="data-row">
                    <span class="data-label">Temperature Change</span>
                    <span class="data-value" style="color: ${warmingColor}">${data.anomaly > 0 ? '+' : ''}${data.anomaly}°C</span>
                </div>
                <div class="data-row">
                    <span class="data-label">Baseline (1951-1980)</span>
                    <span class="data-value">${data.baseline}°C</span>
                </div>
                <div class="data-row">
                    <span class="data-label">Warming Trend</span>
                    <span class="data-value">${data.trend}</span>
                </div>
                <div class="data-row">
                    <span class="data-label">Warming Level</span>
                    <span class="data-value" style="color: ${warmingColor}">${warmingLevel}</span>
                </div>
            </div>

            <!-- Seasonal Temperatures -->
            <div class="info-section">
                <h3>📅 Seasonal Temperatures</h3>
                <div class="season-grid">
                    <div class="season-item">
                        <span class="season-icon">❄️</span>
                        <span class="season-name">Winter</span>
                        <span class="season-temp">${data.seasonal.winter}°C</span>
                    </div>
                    <div class="season-item">
                        <span class="season-icon">🌸</span>
                        <span class="season-name">Spring</span>
                        <span class="season-temp">${data.seasonal.spring}°C</span>
                    </div>
                    <div class="season-item">
                        <span class="season-icon">☀️</span>
                        <span class="season-name">Summer</span>
                        <span class="season-temp">${data.seasonal.summer}°C</span>
                    </div>
                    <div class="season-item">
                        <span class="season-icon">🍂</span>
                        <span class="season-name">Autumn</span>
                        <span class="season-temp">${data.seasonal.autumn}°C</span>
                    </div>
                </div>
            </div>

            <!-- Climate Impact -->
            <div class="info-section">
                <h3>🌍 Climate Impact</h3>
                <div class="impact-badge" style="background: linear-gradient(135deg, ${warmingColor}22, ${warmingColor}11); border-left: 3px solid ${warmingColor}">
                    <strong>${warmingLevel} Warming Region</strong>
                    <p style="margin: 8px 0 0 0; font-size: 13px; opacity: 0.9;">
                        ${getWarmingMessage(data.anomaly)}
                    </p>
                </div>
            </div>

            <!-- Data Sources -->
            <div class="info-section" style="opacity: 0.7; font-size: 12px;">
                <p style="margin: 0;">Data sources: NOAA, NASA GISS, Berkeley Earth</p>
                <p style="margin: 4px 0 0 0;">Baseline period: 1951-1980 average</p>
            </div>
        `;
    }

    infoPanel.classList.remove('hidden');
}

// Get warming message based on anomaly
function getWarmingMessage(anomaly) {
    if (anomaly >= 2.5) {
        return "Experiencing very high temperature increases. Significant climate impacts expected.";
    } else if (anomaly >= 2.0) {
        return "Warming significantly faster than global average. Notable environmental changes occurring.";
    } else if (anomaly >= 1.5) {
        return "Warming at above-average rates. Climate adaptation measures recommended.";
    } else if (anomaly >= 1.0) {
        return "Warming consistent with global trends. Monitoring and adaptation ongoing.";
    } else {
        return "Experiencing relatively lower warming. Continue monitoring climate patterns.";
    }
}

// Setup event listeners
function setupEventListeners() {
    // Close panel button
    document.getElementById('closePanel').addEventListener('click', () => {
        document.getElementById('infoPanel').classList.add('hidden');
        selectedCountry = null;
        // Update polygons to clear selected border
        if (globe && window.countriesData) {
            globe.polygonsData(window.countriesData);
        }
    });

    // Window resize
    window.addEventListener('resize', () => {
        globe.width(window.innerWidth);
        globe.height(window.innerHeight);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('infoPanel').classList.add('hidden');
            selectedCountry = null;
            // Update polygons to clear selected border
            if (globe && window.countriesData) {
                globe.polygonsData(window.countriesData);
            }
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
