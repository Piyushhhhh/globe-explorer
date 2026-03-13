// Global variables
let globe;
let selectedCountry = null;

// Initialize the app
function init() {
    console.log('Initializing Energy Globe...');

    try {
        if (!window.energyData) {
            throw new Error('Energy data not loaded');
        }

        setupGlobe();
        setupEventListeners();

        console.log('Energy Globe setup complete');
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

    // Initialize Globe with earth texture - hand-drawn style
    globe = Globe()
        (container)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('#fdfbf7')
        .atmosphereAltitude(0.2)
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

            // Setup polygons with energy colors
            globe
                .polygonsData(window.countriesData)
                .polygonCapColor((d) => {
                    const countryName = d.properties.ADMIN;
                    const energyInfo = energyData[countryName];

                    if (d === window.hoveredPolygon) {
                        if (energyInfo) {
                            const renewable = energyInfo.renewablePercent;
                            if (renewable >= 70) return 'rgba(212, 244, 221, 0.7)'; // Leader - light green
                            if (renewable >= 40) return 'rgba(228, 247, 232, 0.7)';
                            if (renewable >= 20) return 'rgba(255, 212, 163, 0.7)'; // Transition - light orange
                            return 'rgba(255, 205, 210, 0.7)'; // Lagging - light red
                        }
                        return 'rgba(255, 249, 196, 0.5)'; // Yellow highlight
                    }

                    if (energyInfo && selectedCountry === countryName) {
                        const renewable = energyInfo.renewablePercent;
                        if (renewable >= 70) return 'rgba(212, 244, 221, 0.8)';
                        if (renewable >= 40) return 'rgba(228, 247, 232, 0.8)';
                        if (renewable >= 20) return 'rgba(255, 212, 163, 0.8)';
                        return 'rgba(255, 205, 210, 0.8)';
                    }

                    if (energyInfo) {
                        // Color based on renewable energy percentage - pastel hand-drawn colors
                        const renewable = energyInfo.renewablePercent;
                        if (renewable >= 70) return 'rgba(212, 244, 221, 0.4)'; // Leader - pastel green
                        if (renewable >= 40) return 'rgba(228, 247, 232, 0.35)'; // Good - lighter green
                        if (renewable >= 20) return 'rgba(255, 212, 163, 0.35)'; // Transition - pastel orange
                        if (renewable >= 10) return 'rgba(255, 205, 210, 0.3)'; // Lagging - pastel red
                        return 'rgba(255, 205, 210, 0.3)'; // Critical - pastel red
                    }
                    return 'rgba(229, 224, 216, 0.2)'; // No data - paper muted
                })
                .polygonSideColor(() => 'rgba(45, 45, 45, 0.1)')
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    // Always show borders for hand-drawn look
                    if (energyData[countryName] && selectedCountry === countryName) {
                        return '#ff4d4d'; // Red marker for selected
                    }
                    if (d === window.hoveredPolygon) {
                        return '#2d5da1'; // Blue pen for hover
                    }
                    // Pencil border for all countries
                    return energyData[countryName] ? '#2d2d2d' : 'rgba(45, 45, 45, 0.3)';
                })
                .polygonsTransitionDuration(300)
                .polygonAltitude(d => {
                    const countryName = d.properties.ADMIN;
                    if (d === window.hoveredPolygon) {
                        return 0.015;
                    }
                    if (energyData[countryName] && selectedCountry === countryName) {
                        return 0.04;
                    }
                    return 0.002;
                })
                .polygonLabel(({ properties: d }) => {
                    const countryName = d.ADMIN;
                    const energyInfo = energyData[countryName];

                    if (energyInfo) {
                        const statusIcon = getStatusIcon(energyInfo.status);
                        const renewableBar = createEnergyBar(energyInfo.renewablePercent, '#d4f4dd'); // Pastel green
                        const fossilBar = createEnergyBar(energyInfo.fossilFuelPercent, '#ffcdd2'); // Pastel red

                        return `
                            <div style="font-family: 'Patrick Hand', cursive; background: white; padding: 18px; border-radius: 40px 20px 40px 20px / 20px 40px 20px 40px; color: #2d2d2d; min-width: 280px; border: 3px solid #2d2d2d; box-shadow: 5px 5px 0px 0px rgba(45, 45, 45, 0.8);">
                                <div style="font-family: 'Kalam', cursive; font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #2d2d2d;">
                                    ${countryName}
                                </div>
                                <div style="font-size: 15px; margin: 8px 0;">
                                    ${renewableBar} <strong>${energyInfo.renewablePercent}%</strong> Renewable
                                </div>
                                <div style="font-size: 15px; margin: 8px 0;">
                                    ${fossilBar} <strong>${energyInfo.fossilFuelPercent}%</strong> Fossil
                                </div>
                                <div style="font-size: 15px; margin: 8px 0;">
                                    Consumption: <strong>${energyInfo.totalConsumption} TWh</strong>
                                </div>
                                <div style="font-size: 13px; margin: 8px 0; padding: 6px 12px; background: #fff9c4; border-radius: 25px 12px 25px 12px / 12px 25px 12px 25px; border: 2px solid #2d2d2d; display: inline-block;">
                                    ${statusIcon} ${energyInfo.status.toUpperCase()}
                                </div>
                                <div style="margin-top: 14px; padding-top: 12px; border-top: 2px dashed #2d2d2d; font-size: 13px; text-align: center;">
                                    ✨ Click for detailed energy mix
                                </div>
                            </div>
                        `;
                    }
                    return `
                        <div style="font-family: 'Patrick Hand', cursive; background: white; padding: 14px; border-radius: 35px 18px 35px 18px / 18px 35px 18px 35px; color: #2d2d2d; border: 2px solid #2d2d2d; box-shadow: 3px 3px 0px 0px rgba(45, 45, 45, 0.5);">
                            <div style="font-size: 16px; font-weight: 600;">${d.ADMIN}</div>
                            <div style="font-size: 12px; color: rgba(45, 45, 45, 0.6); margin-top: 4px;">No energy data available</div>
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
                .filter(country => energyData[country.properties.ADMIN])
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
                .labelColor(() => '#2d2d2d') // Pencil black for hand-drawn aesthetic
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

// Helper function to create energy bar - hand-drawn style
function createEnergyBar(percent, color) {
    const width = Math.round(percent);
    return `<span style="display: inline-block; width: ${width}px; height: 10px; background: ${color}; border-radius: 20px 10px 20px 10px / 10px 20px 10px 20px; border: 2px solid #2d2d2d; margin-right: 8px; vertical-align: middle;"></span>`;
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
    const energyInfo = energyData[countryName];
    if (!energyInfo) {
        console.warn('No energy data for:', countryName);
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
    const statusIcon = getStatusIcon(energyInfo.status);
    // Only show top 2 projects for compact display
    const projectsHTML = energyInfo.keyProjects
        .slice(0, 2)
        .map(project => `<div class="project-item">${project}</div>`)
        .join('');

    const html = `
        <button class="close-panel" id="closePanel">✕</button>
        <div class="info-header">
            <div class="country-flag">⚡</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">Energy Rank #${energyInfo.rank}</div>
        </div>
        <div class="info-content">
            <div class="metric-card">
                <div class="metric-icon">⚡</div>
                <div class="metric-details">
                    <div class="metric-label">Total Consumption</div>
                    <div class="metric-value">${energyInfo.totalConsumption}<span class="metric-unit">TWh/year</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">🌱</div>
                <div class="metric-details">
                    <div class="metric-label">Renewable Energy</div>
                    <div class="metric-value">${energyInfo.renewablePercent}<span class="metric-unit">%</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">🏭</div>
                <div class="metric-details">
                    <div class="metric-label">Fossil Fuels</div>
                    <div class="metric-value">${energyInfo.fossilFuelPercent}<span class="metric-unit">%</span></div>
                </div>
            </div>

            ${energyInfo.nuclearPercent > 0 ? `
            <div class="metric-card">
                <div class="metric-icon">⚛️</div>
                <div class="metric-details">
                    <div class="metric-label">Nuclear Energy</div>
                    <div class="metric-value">${energyInfo.nuclearPercent}<span class="metric-unit">%</span></div>
                </div>
            </div>
            ` : ''}

            <div class="status-card ${energyInfo.status}">
                <div class="status-header">
                    <span class="status-icon">${statusIcon}</span>
                    <span class="status-label">Energy Status</span>
                </div>
                <div class="status-value">${energyInfo.status.toUpperCase()}</div>
            </div>

            <div class="energy-mix-card">
                <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 6px;">
                    <span style="font-size: 16px;">🔋</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 13px; font-weight: 700;">Energy Mix</span>
                </div>
                <div class="energy-mix-grid">
                    ${energyInfo.hydro > 0 ? `<div class="mix-item"><span class="mix-icon">💧</span> Hydro: <strong>${energyInfo.hydro}%</strong></div>` : ''}
                    ${energyInfo.wind > 0 ? `<div class="mix-item"><span class="mix-icon">💨</span> Wind: <strong>${energyInfo.wind}%</strong></div>` : ''}
                    ${energyInfo.solar > 0 ? `<div class="mix-item"><span class="mix-icon">☀️</span> Solar: <strong>${energyInfo.solar}%</strong></div>` : ''}
                    ${energyInfo.geothermal > 0 ? `<div class="mix-item"><span class="mix-icon">🌋</span> Geothermal: <strong>${energyInfo.geothermal}%</strong></div>` : ''}
                    ${energyInfo.biomass > 0 ? `<div class="mix-item"><span class="mix-icon">🌾</span> Biomass: <strong>${energyInfo.biomass}%</strong></div>` : ''}
                    ${energyInfo.coal > 0 ? `<div class="mix-item"><span class="mix-icon">🪨</span> Coal: <strong>${energyInfo.coal}%</strong></div>` : ''}
                    ${energyInfo.oil > 0 ? `<div class="mix-item"><span class="mix-icon">🛢️</span> Oil: <strong>${energyInfo.oil}%</strong></div>` : ''}
                    ${energyInfo.gas > 0 ? `<div class="mix-item"><span class="mix-icon">🔥</span> Gas: <strong>${energyInfo.gas}%</strong></div>` : ''}
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-details" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; width: 100%;">
                    <div style="text-align: center;">
                        <div class="metric-label">Per Capita</div>
                        <div class="metric-value" style="font-size: 14px;">${(energyInfo.perCapita / 1000).toFixed(1)}k</div>
                    </div>
                    <div style="text-align: center; border-left: 2px dashed #2d2d2d; border-right: 2px dashed #2d2d2d;">
                        <div class="metric-label">Carbon</div>
                        <div class="metric-value" style="font-size: 14px;">${energyInfo.carbonIntensity}</div>
                    </div>
                    <div style="text-align: center;">
                        <div class="metric-label">Independence</div>
                        <div class="metric-value" style="font-size: 14px;">${energyInfo.energyIndependence}%</div>
                    </div>
                </div>
            </div>

            ${energyInfo.renewableTarget ? `
            <div class="target-card">
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 18px;">🎯</span>
                    <div style="flex: 1;">
                        <div class="metric-label" style="margin-bottom: 2px;">Target</div>
                        <div class="target-value">${energyInfo.renewableTarget}</div>
                    </div>
                </div>
            </div>
            ` : ''}

            ${projectsHTML ? `
            <div class="projects-card">
                <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 6px;">
                    <span style="font-size: 16px;">🚀</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 13px; font-weight: 700;">Key Projects</span>
                </div>
                <div class="projects-list">
                    ${projectsHTML}
                </div>
            </div>
            ` : ''}
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
        case 'leader': return '🌟';
        case 'transition': return '⚡';
        case 'lagging': return '⚠️';
        default: return '❓';
    }
}

function getStatusColor(status) {
    switch(status) {
        case 'leader': return '#d4f4dd'; // Pastel green (hand-drawn)
        case 'transition': return '#ffd4a3'; // Pastel orange (hand-drawn)
        case 'lagging': return '#ffcdd2'; // Pastel red (hand-drawn)
        default: return '#e5e0d8'; // Muted paper
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
