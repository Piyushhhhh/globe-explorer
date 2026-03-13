// Global variables
let globe;
let selectedCountry = null;

// Initialize the app
function init() {
    console.log('Initializing Ocean Health Globe...');

    try {
        if (!window.oceanData) {
            throw new Error('Ocean health data not loaded');
        }

        setupGlobe();
        setupEventListeners();

        console.log('Ocean Health Globe setup complete');
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

    // Initialize Globe with ocean texture
    globe = Globe()
        (container)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-water.png')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('#06b6d4')
        .atmosphereAltitude(0.15)
        .width(window.innerWidth)
        .height(window.innerHeight);

    console.log('Globe instance created');

    // Hide loading screen after globe is ready
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        console.log('Loading screen hidden');
    }, 2000);

    // Load country polygons
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
            if (!countries || !countries.features || !Array.isArray(countries.features)) {
                throw new Error('Invalid GeoJSON data structure');
            }

            console.log('Countries loaded:', countries.features.length);

            window.countriesData = countries.features.filter(d => d.properties.ISO_A2 !== 'AQ');

            // Setup polygons with ocean health colors
            globe
                .polygonsData(window.countriesData)
                .polygonCapColor((d) => {
                    const countryName = d.properties.ADMIN;
                    const oceanInfo = oceanData[countryName];

                    if (d === window.hoveredPolygon) {
                        if (oceanInfo) {
                            return oceanInfo.color.replace(')', ', 0.4)').replace('rgb', 'rgba');
                        }
                        return 'rgba(6, 182, 212, 0.3)';
                    }

                    if (oceanInfo && selectedCountry === countryName) {
                        return oceanInfo.color.replace(')', ', 0.3)').replace('rgb', 'rgba');
                    }

                    if (oceanInfo) {
                        // Color based on ocean health score
                        const score = oceanInfo.oceanHealthScore;
                        if (score >= 80) return 'rgba(16, 185, 129, 0.2)'; // Excellent - green
                        if (score >= 70) return 'rgba(59, 130, 246, 0.2)'; // Good - blue
                        if (score >= 60) return 'rgba(245, 158, 11, 0.15)'; // Moderate - orange
                        if (score >= 50) return 'rgba(239, 68, 68, 0.15)'; // Poor - red
                        return 'rgba(220, 38, 38, 0.15)'; // Critical - dark red
                    }
                    return 'rgba(30, 41, 59, 0.08)'; // No data - dark blue
                })
                .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    if (oceanData[countryName] && selectedCountry === countryName) {
                        return '#06b6d4';
                    }
                    if (d === window.hoveredPolygon) {
                        return '#38bdf8';
                    }
                    return '#64748b';
                })
                .polygonsTransitionDuration(300)
                .polygonAltitude(d => {
                    const countryName = d.properties.ADMIN;
                    if (d === window.hoveredPolygon) {
                        return 0.015;
                    }
                    if (oceanData[countryName] && selectedCountry === countryName) {
                        return 0.04;
                    }
                    return 0.002;
                })
                .polygonLabel(({ properties: d }) => {
                    const countryName = d.ADMIN;
                    const oceanInfo = oceanData[countryName];

                    if (oceanInfo) {
                        const statusIcon = getStatusIcon(oceanInfo.status);

                        return `
                            <div style="background: rgba(0,0,0,0.93); padding: 18px; border-radius: 14px; color: white; min-width: 260px; backdrop-filter: blur(16px); border: 1px solid rgba(6, 182, 212, 0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.5);">
                                <div style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #06b6d4;">
                                    ${countryName}
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0;">
                                    🌊 Ocean Health: <strong>${oceanInfo.oceanHealthScore}/100</strong>
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0;">
                                    🐠 Protected: <strong>${oceanInfo.marineProtectedArea}%</strong>
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0;">
                                    🏆 Rank: <strong>#${oceanInfo.rank}</strong>
                                </div>
                                <div style="font-size: 13px; opacity: 0.9; margin: 8px 0; padding: 6px 10px; background: ${getStatusColor(oceanInfo.status)}; border-radius: 6px;">
                                    ${statusIcon} ${oceanInfo.status.toUpperCase()}
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
                            <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">No ocean data available</div>
                        </div>
                    `;
                })
                .onPolygonHover((polygon) => {
                    window.hoveredPolygon = polygon;
                    document.body.style.cursor = polygon ? 'pointer' : 'default';

                    if (globe) {
                        globe.polygonsData(globe.polygonsData());
                    }
                })
                .onPolygonClick((polygon) => {
                    const countryName = polygon.properties.ADMIN;
                    const coords = getCountryCenter(polygon);
                    selectCountry(countryName, coords);
                });

            // Add country name labels
            const labelData = countries.features
                .filter(d => d.properties.ISO_A2 !== 'AQ')
                .filter(country => oceanData[country.properties.ADMIN])
                .map(country => {
                    const coords = getCountryCenter(country);
                    return {
                        lat: coords[1],
                        lng: coords[0],
                        name: country.properties.ADMIN,
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
                .labelColor(() => 'rgba(255, 255, 255, 0.65)')
                .labelResolution(2)
                .labelAltitude(0.01);
        })
        .catch(error => {
            console.error('Error loading countries:', error);
        });

    // Camera initial position
    globe.pointOfView({
        lat: 0,
        lng: 0,
        altitude: 2.5
    });

    // Controls
    globe.controls().autoRotate = false;
    globe.controls().enableZoom = true;
    globe.controls().minDistance = 101;
    globe.controls().maxDistance = 500;
}

// Helper function to get country center
function getCountryCenter(country) {
    try {
        if (!country || !country.geometry || !country.geometry.coordinates) {
            return [0, 0];
        }

        if (country.geometry.type === 'Polygon') {
            const coords = country.geometry.coordinates[0];
            if (!coords || coords.length === 0) return [0, 0];
            const center = coords.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0]);
            return [center[0] / coords.length, center[1] / coords.length];
        } else if (country.geometry.type === 'MultiPolygon') {
            const firstPolygon = country.geometry.coordinates[0][0];
            if (!firstPolygon || firstPolygon.length === 0) return [0, 0];
            const center = firstPolygon.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0]);
            return [center[0] / firstPolygon.length, center[1] / firstPolygon.length];
        }
        return [0, 0];
    } catch (error) {
        console.error('Error in getCountryCenter:', error);
        return [0, 0];
    }
}

// Select and display country information
function selectCountry(countryName, coords) {
    const oceanInfo = oceanData[countryName];
    if (!oceanInfo) {
        console.warn('No ocean data for:', countryName);
        return;
    }

    selectedCountry = countryName;

    const infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.remove('hidden');

    // Smooth zoom to country
    if (coords && Array.isArray(coords) && coords.length === 2) {
        globe.pointOfView({
            lat: coords[1],
            lng: coords[0],
            altitude: 0.8
        }, 1500);
    }

    // Update polygons
    if (globe && window.countriesData) {
        globe.polygonsData(window.countriesData);
    }

    // Build HTML
    const statusIcon = getStatusIcon(oceanInfo.status);
    const coralStatus = oceanInfo.coralReefHealth;
    const marineLifeHTML = oceanInfo.marineLife
        .map(life => `<div class="marine-item">${life}</div>`)
        .join('');
    const issuesHTML = oceanInfo.keyIssues
        .map(issue => `<span class="issue-tag">${issue}</span>`)
        .join('');

    const html = `
        <button class="close-panel" id="closePanel">✕</button>
        <div class="info-header">
            <div class="country-flag">🌊</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">Ocean Health Rank #${oceanInfo.rank}</div>
        </div>
        <div class="info-content">
            <div class="metric-card">
                <div class="metric-icon">🌊</div>
                <div class="metric-details">
                    <div class="metric-label">Ocean Health Score</div>
                    <div class="metric-value">${oceanInfo.oceanHealthScore}<span class="metric-unit">/100</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">🐠</div>
                <div class="metric-details">
                    <div class="metric-label">Marine Protected Areas</div>
                    <div class="metric-value">${oceanInfo.marineProtectedArea}<span class="metric-unit">%</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">🌡️</div>
                <div class="metric-details">
                    <div class="metric-label">Sea Temperature Rise</div>
                    <div class="metric-value">+${oceanInfo.seaTempAnomaly}<span class="metric-unit">°C</span></div>
                </div>
            </div>

            <div class="health-card ${oceanInfo.status}">
                <div class="health-header">
                    <span class="health-icon">${statusIcon}</span>
                    <span class="health-label">Ocean Status</span>
                </div>
                <div class="health-value">${oceanInfo.status.toUpperCase()}</div>
            </div>

            ${coralStatus !== 'n/a' ? `
            <div class="metric-card">
                <div class="metric-icon">🪸</div>
                <div class="metric-details">
                    <div class="metric-label">Coral Reef Health</div>
                    <div class="metric-value">${coralStatus.charAt(0).toUpperCase() + coralStatus.slice(1)}</div>
                </div>
            </div>
            ` : ''}

            <div class="metric-card">
                <div class="metric-icon">🎣</div>
                <div class="metric-details">
                    <div class="metric-label">Overfishing Risk</div>
                    <div class="metric-value">${oceanInfo.overfishingRisk.charAt(0).toUpperCase() + oceanInfo.overfishingRisk.slice(1)}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">♻️</div>
                <div class="metric-details">
                    <div class="metric-label">Plastic Pollution</div>
                    <div class="metric-value">${oceanInfo.plasticPollution.charAt(0).toUpperCase() + oceanInfo.plasticPollution.slice(1)}</div>
                </div>
            </div>

            <div class="marine-card">
                <h3>🐙 Marine Life</h3>
                <div class="marine-list">
                    ${marineLifeHTML}
                </div>
            </div>

            <div class="issues-card">
                <h3>⚠️ Key Issues</h3>
                <div class="issues-list">
                    ${issuesHTML}
                </div>
            </div>
        </div>
    `;

    infoPanel.innerHTML = html;

    // Re-attach close button
    document.getElementById('closePanel').addEventListener('click', () => {
        infoPanel.classList.add('hidden');
        selectedCountry = null;
        if (globe && window.countriesData) {
            globe.polygonsData(window.countriesData);
        }
    });
}

// Helper functions
function getStatusIcon(status) {
    switch(status) {
        case 'excellent': return '🌊';
        case 'good': return '💙';
        case 'moderate': return '⚠️';
        case 'poor': return '😰';
        case 'critical': return '🚨';
        default: return '❓';
    }
}

function getStatusColor(status) {
    switch(status) {
        case 'excellent': return 'rgba(16, 185, 129, 0.2)';
        case 'good': return 'rgba(59, 130, 246, 0.2)';
        case 'moderate': return 'rgba(245, 158, 11, 0.2)';
        case 'poor': return 'rgba(239, 68, 68, 0.2)';
        case 'critical': return 'rgba(220, 38, 38, 0.2)';
        default: return 'rgba(100, 100, 100, 0.2)';
    }
}

// Setup event listeners
function setupEventListeners() {
    window.addEventListener('resize', () => {
        if (globe) {
            globe.width(window.innerWidth).height(window.innerHeight);
        }
    });

    document.getElementById('resetView').addEventListener('click', resetView);
    document.getElementById('autoRotate').addEventListener('click', toggleAutoRotate);
}

// Reset camera view
function resetView() {
    if (globe) {
        globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
        selectedCountry = null;
        document.getElementById('infoPanel').classList.add('hidden');
        if (window.countriesData) {
            globe.polygonsData(window.countriesData);
        }
    }
}

// Toggle auto-rotate
function toggleAutoRotate() {
    if (globe) {
        globe.controls().autoRotate = !globe.controls().autoRotate;
        const button = document.getElementById('autoRotate');
        button.textContent = globe.controls().autoRotate ? 'Stop Rotation' : 'Auto Rotate';
    }
}

// Start the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
