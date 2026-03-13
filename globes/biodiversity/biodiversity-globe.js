// Global variables
let globe;
let selectedCountry = null;
let animalsLayer = [];
let forestsLayer = [];

// Initialize the app
function init() {
    console.log('Initializing Biodiversity Globe...');

    try {
        // Run data validation first
        if (!window.biodiversityData) {
            throw new Error('Biodiversity data not loaded');
        }

        // Existing globe setup
        setupGlobe();
        setupEventListeners();

        console.log('Biodiversity Globe setup complete');
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
        .atmosphereColor('#2ecc71')
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

            // Setup polygons with forest colors
            globe
                .polygonsData(window.countriesData)
                .polygonCapColor((d) => {
                    const countryName = d.properties.ADMIN;
                    const bioData = biodiversityData[countryName];

                    if (d === window.hoveredPolygon) {
                        if (bioData) {
                            return bioData.color.replace(')', ', 0.4)').replace('rgb', 'rgba');
                        }
                        return 'rgba(46, 204, 113, 0.3)';
                    }

                    if (bioData && selectedCountry === countryName) {
                        return bioData.color.replace(')', ', 0.3)').replace('rgb', 'rgba');
                    }

                    if (bioData) {
                        // Color based on forest coverage
                        const coverage = bioData.forestCoverage;
                        if (coverage > 50) return 'rgba(46, 204, 113, 0.2)'; // Green
                        if (coverage > 30) return 'rgba(52, 152, 219, 0.2)'; // Blue
                        if (coverage > 10) return 'rgba(243, 156, 18, 0.15)'; // Orange
                        return 'rgba(231, 76, 60, 0.15)'; // Red
                    }
                    return 'rgba(50, 50, 50, 0.08)';
                })
                .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    if (biodiversityData[countryName] && selectedCountry === countryName) {
                        return '#2ecc71';
                    }
                    if (d === window.hoveredPolygon) {
                        return '#52be80';
                    }
                    return '#999';
                })
                .polygonsTransitionDuration(300)
                .polygonAltitude(d => {
                    const countryName = d.properties.ADMIN;
                    if (d === window.hoveredPolygon) {
                        return 0.015;
                    }
                    if (biodiversityData[countryName] && selectedCountry === countryName) {
                        return 0.04;
                    }
                    return 0.002;
                })
                .polygonLabel(({ properties: d }) => {
                    const countryName = d.ADMIN;
                    const bioData = biodiversityData[countryName];

                    if (bioData) {
                        return `
                            <div style="background: rgba(0,0,0,0.93); padding: 18px; border-radius: 14px; color: white; min-width: 240px; backdrop-filter: blur(16px); border: 1px solid rgba(46, 204, 113, 0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.5);">
                                <div style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #2ecc71;">
                                    ${countryName}
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0;">
                                    🌿 Species: <strong>${bioData.speciesCount.toLocaleString()}</strong>
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0;">
                                    🌳 Forest: <strong>${bioData.forestCoverage}%</strong>
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0;">
                                    🏆 Rank: <strong>#${bioData.rank}</strong>
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
                            <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">Click to explore</div>
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

            // Add country name labels directly on the map
            const labelData = countries.features
                .filter(d => d.properties.ISO_A2 !== 'AQ')
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

            // Add 3D animals for each country
            const animalObjects = [];
            Object.entries(biodiversityData).forEach(([country, data]) => {
                if (data.iconicAnimals && data.iconicAnimals.length > 0) {
                    const countryFeature = window.countriesData.find(f => f.properties.ADMIN === country);
                    if (!countryFeature) return;

                    const center = getCountryCenter(countryFeature);

                    data.iconicAnimals.slice(0, 2).forEach((animal, index) => {
                        const emoji = animalEmojis[animal] || '🐾';
                        const offsetLat = (Math.random() - 0.5) * 1;
                        const offsetLng = (Math.random() - 0.5) * 1;

                        animalObjects.push({
                            lat: center[1] + offsetLat,
                            lng: center[0] + offsetLng,
                            emoji: emoji,
                            animal: animal,
                            country: country
                        });
                    });
                }
            });

            // Add animals using HTML elements
            globe
                .htmlElementsData(animalObjects)
                .htmlElement(d => {
                    const el = document.createElement('div');
                    el.innerHTML = d.emoji;
                    el.style.cssText = `
                        font-size: 20px;
                        cursor: pointer;
                        user-select: none;
                        pointer-events: none;
                    `;
                    el.title = `${d.animal.replace('-', ' ')} - ${d.country}`;
                    return el;
                });

            animalsLayer = animalObjects;
            console.log(`Added ${animalObjects.length} 3D animals`);

            // Add forest visualizations
            add3DForests();
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


// Add 3D forest visualizations
function add3DForests() {
    const forestArcs = [];

    Object.entries(biodiversityData).forEach(([country, data]) => {
        if (data.forestCoverage > 20) {
            const countryFeature = window.countriesData.find(f => f.properties.ADMIN === country);
            if (!countryFeature) return;

            const center = getCountryCenter(countryFeature);

            // Create pulsing arcs representing forests
            for (let i = 0; i < Math.min(3, Math.floor(data.forestCoverage / 20)); i++) {
                forestArcs.push({
                    startLat: center[1],
                    startLng: center[0],
                    endLat: center[1] + (Math.random() - 0.5) * 1.5,  // Reduced from 3 to 1.5 degrees
                    endLng: center[0] + (Math.random() - 0.5) * 1.5,
                    color: ['#2ecc71', '#27ae60', '#16a085'][i % 3],
                    country: country
                });
            }
        }
    });

    globe
        .arcsData(forestArcs)
        .arcColor('color')
        .arcAltitude(0.02)
        .arcStroke(0.3)
        .arcDashLength(0.5)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000);

    forestsLayer = forestArcs;
    console.log(`Added ${forestArcs.length} forest visualizations`);
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
    const bioData = biodiversityData[countryName];
    if (!bioData) {
        console.warn('No biodiversity data for:', countryName);
        return;
    }

    // Check if in compare mode
    if (typeof window.interactiveState !== 'undefined' && window.interactiveState && window.interactiveState.compareMode) {
        if (typeof addToComparisonMode === 'function') {
            addToComparisonMode(countryName);
        }
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
    const animalsHTML = bioData.iconicAnimals
        .map(animal => {
            const emoji = animalEmojis[animal] || '🐾';
            return `<span style="font-size: 32px; margin: 8px;" title="${animal}">${emoji}</span>`;
        })
        .join('');

    const html = `
        <button class="close-panel" id="closePanel">✕</button>
        <div class="info-header">
            <div class="country-flag">🌿</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">Biodiversity Rank #${bioData.rank}</div>
        </div>
        <div class="info-content">
            <div class="metric-card">
                <div class="metric-icon">🦋</div>
                <div class="metric-details">
                    <div class="metric-label">Total Species</div>
                    <div class="metric-value">${bioData.speciesCount.toLocaleString()}<span class="metric-unit">species</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">⭐</div>
                <div class="metric-details">
                    <div class="metric-label">Endemic Species</div>
                    <div class="metric-value">${bioData.endemicSpecies.toLocaleString()}<span class="metric-unit">unique</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">🌳</div>
                <div class="metric-details">
                    <div class="metric-label">Forest Coverage</div>
                    <div class="metric-value">${bioData.forestCoverage}<span class="metric-unit">%</span></div>
                </div>
            </div>

            <div class="threat-card threat-${bioData.threatLevel}">
                <div class="threat-header">
                    <span class="threat-icon">${getThreatIcon(bioData.threatLevel)}</span>
                    <span class="threat-label">Threat Level</span>
                </div>
                <div class="threat-value">${bioData.threatLevel.toUpperCase()}</div>
            </div>

            <div class="animals-card">
                <h3>🦁 Iconic Animals</h3>
                <div class="animals-grid">
                    ${animalsHTML}
                </div>
            </div>

            <div class="biomes-card">
                <h3>🌍 Key Biomes</h3>
                <div class="biomes-list">
                    ${bioData.biomes.map(biome => `<div class="biome-tag">${biome}</div>`).join('')}
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
function getThreatIcon(level) {
    switch(level) {
        case 'critical': return '🚨';
        case 'high': return '⚠️';
        case 'moderate': return '🟡';
        case 'low': return '✅';
        default: return '❓';
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

// Add CSS animation for bouncing animals
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

// Start the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
