// Global variables
let globe;
let selectedCountry = null;
let animalsLayer = [];
let forestsLayer = [];
let currentViewMode = 'land'; // 'land', 'ocean', 'both'

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

            window.countriesData = countries.features;

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
                        // Ocean mode: Color based on marine protected areas
                        if (currentViewMode === 'ocean' && bioData.marineData) {
                            const protection = bioData.marineData.marineProtectedAreas;
                            if (protection > 50) return 'rgba(32, 178, 170, 0.3)'; // Teal
                            if (protection > 30) return 'rgba(52, 152, 219, 0.25)'; // Blue
                            if (protection > 15) return 'rgba(243, 156, 18, 0.2)'; // Orange
                            if (protection > 0) return 'rgba(231, 76, 60, 0.15)'; // Red
                            return 'rgba(50, 50, 50, 0.08)'; // Gray if no marine data
                        }

                        // Land mode or Both mode: Color based on forest coverage
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

                    // Handle soundscape on hover (delayed to avoid rapid switching)
                    if (typeof window.handleLivingPlanetHover === 'function') {
                        clearTimeout(window.hoverSoundTimeout);
                        if (polygon) {
                            window.hoverSoundTimeout = setTimeout(() => {
                                window.handleLivingPlanetHover(polygon);
                            }, 800);
                        } else {
                            window.handleLivingPlanetHover(null);
                        }
                    }
                })
                .onPolygonClick((polygon) => {
                    const countryName = polygon.properties.ADMIN;
                    const coords = getCountryCenter(polygon);
                    selectCountry(countryName, coords);
                })
                .onGlobeClick((coords) => {
                    // Show ocean info when clicking on water (no polygon)
                    if (coords) {
                        showOceanInfo(coords.lat, coords.lng);
                    }
                });

            // Add country name labels directly on the map
            const countryLabels = countries.features
                .map(country => {
                    const coords = getCountryCenter(country);
                    return {
                        lat: coords[1],
                        lng: coords[0],
                        name: country.properties.ADMIN,
                        size: 0.35,
                        type: 'country'
                    };
                });

            // Add ocean and sea labels
            const oceanLabels = [
                // Major Oceans
                { lat: 0, lng: -140, name: 'PACIFIC OCEAN', size: 1.2, type: 'ocean' },
                { lat: 20, lng: -30, name: 'ATLANTIC OCEAN', size: 1.0, type: 'ocean' },
                { lat: -20, lng: 70, name: 'INDIAN OCEAN', size: 1.0, type: 'ocean' },
                { lat: 80, lng: 0, name: 'ARCTIC OCEAN', size: 0.9, type: 'ocean' },
                { lat: -70, lng: 0, name: 'SOUTHERN OCEAN', size: 0.9, type: 'ocean' },

                // Major Seas
                { lat: 35, lng: 18, name: 'Mediterranean Sea', size: 0.5, type: 'sea' },
                { lat: 18, lng: -75, name: 'Caribbean Sea', size: 0.5, type: 'sea' },
                { lat: 25, lng: 37, name: 'Red Sea', size: 0.4, type: 'sea' },
                { lat: 27, lng: 50, name: 'Arabian Sea', size: 0.5, type: 'sea' },
                { lat: 15, lng: 110, name: 'South China Sea', size: 0.5, type: 'sea' },
                { lat: 8, lng: 125, name: 'Philippine Sea', size: 0.5, type: 'sea' },
                { lat: -15, lng: 155, name: 'Coral Sea', size: 0.5, type: 'sea' },
                { lat: 60, lng: 5, name: 'Norwegian Sea', size: 0.4, type: 'sea' },
                { lat: 55, lng: 15, name: 'Baltic Sea', size: 0.4, type: 'sea' },
                { lat: 42, lng: 35, name: 'Black Sea', size: 0.4, type: 'sea' },
                { lat: 40, lng: 140, name: 'Sea of Japan', size: 0.4, type: 'sea' },
                { lat: 30, lng: -95, name: 'Gulf of Mexico', size: 0.5, type: 'sea' },
                { lat: 10, lng: 80, name: 'Bay of Bengal', size: 0.5, type: 'sea' },
                { lat: -35, lng: 145, name: 'Tasman Sea', size: 0.4, type: 'sea' },
                { lat: 65, lng: -50, name: 'Baffin Bay', size: 0.4, type: 'sea' },
                { lat: 70, lng: 90, name: 'Laptev Sea', size: 0.4, type: 'sea' },
                { lat: 65, lng: 145, name: 'East Siberian Sea', size: 0.4, type: 'sea' },
                { lat: 60, lng: -165, name: 'Bering Sea', size: 0.5, type: 'sea' }
            ];

            const allLabels = [...countryLabels, ...oceanLabels];

            globe
                .labelsData(allLabels)
                .labelLat('lat')
                .labelLng('lng')
                .labelText('name')
                .labelSize('size')
                .labelDotRadius(0)
                .labelColor(d => {
                    if (d.type === 'ocean') return 'rgba(32, 178, 170, 0.7)'; // Teal for oceans
                    if (d.type === 'sea') return 'rgba(100, 181, 246, 0.65)'; // Light blue for seas
                    return 'rgba(255, 255, 255, 0.65)'; // White for countries
                })
                .labelResolution(2)
                .labelAltitude(0.01);

            // Add static animal markers for each country
            const animalObjects = [];
            Object.entries(biodiversityData).forEach(([country, data]) => {
                if (data.iconicAnimals && data.iconicAnimals.length > 0) {
                    const countryFeature = window.countriesData.find(f => f.properties.ADMIN === country);
                    if (!countryFeature) return;

                    const center = getCountryCenter(countryFeature);

                    // Only add 1 animal per country to reduce clutter
                    const animal = data.iconicAnimals[0];
                    const emoji = animalEmojis[animal] || '🐾';
                    const offsetLat = (Math.random() - 0.5) * 0.5;
                    const offsetLng = (Math.random() - 0.5) * 0.5;

                    animalObjects.push({
                        lat: center[1] + offsetLat,
                        lng: center[0] + offsetLng,
                        emoji: emoji,
                        animal: animal,
                        country: country
                    });
                }
            });

            // Render animals as simple HTML elements
            globe
                .htmlElementsData(animalObjects)
                .htmlElement(d => {
                    const el = document.createElement('div');
                    el.innerHTML = d.emoji;
                    el.className = 'animal-marker';
                    el.style.cssText = `
                        font-size: 18px;
                        opacity: 0.7;
                        pointer-events: none;
                        user-select: none;
                    `;
                    return el;
                });

            animalsLayer = animalObjects;
            console.log(`✅ Added ${animalObjects.length} animal markers`);

            // Add forest visualizations
            add3DForests();

            // Initialize Living Planet (migration arcs & soundscape)
            setTimeout(() => {
                if (typeof window.initializeLivingPlanet === 'function') {
                    window.initializeLivingPlanet(globe);
                }
            }, 1500);
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

// Detect which ocean or sea based on coordinates
function detectOceanSea(lat, lng) {
    // Seas first (more specific regions)
    if (lat >= 30 && lat <= 46 && lng >= 0 && lng <= 42) {
        return 'Mediterranean Sea';
    }
    if (lat >= 10 && lat <= 30 && lng >= -90 && lng <= -60) {
        return 'Caribbean Sea';
    }
    if (lat >= 12 && lat <= 30 && lng >= 32 && lng <= 43) {
        return 'Red Sea';
    }
    if (lat >= 5 && lat <= 25 && lng >= 100 && lng <= 120) {
        return 'South China Sea';
    }
    if (lat >= -25 && lat <= -10 && lng >= 145 && lng <= 160) {
        return 'Coral Sea';
    }

    // Major Oceans
    if (lat > 66) {
        return 'Arctic Ocean';
    }
    if (lat < -60) {
        return 'Southern Ocean';
    }

    // Indian Ocean
    if (lat >= -60 && lat <= 30 && lng >= 20 && lng <= 120) {
        return 'Indian Ocean';
    }

    // Atlantic Ocean
    if (lng >= -70 && lng <= 20 && lat >= -60 && lat <= 66) {
        return 'Atlantic Ocean';
    }

    // Pacific Ocean (default for remaining areas)
    if ((lng >= -180 && lng <= -70) || (lng >= 120 && lng <= 180)) {
        return 'Pacific Ocean';
    }

    // Fallback
    return null;
}

// Ocean and sea data
const oceanSeaData = {
    'Pacific Ocean': {
        emoji: '🌊',
        area: '165,200,000 km²',
        avgDepth: '4,280 m',
        maxDepth: '10,994 m (Mariana Trench)',
        species: '25,000+',
        description: 'Largest and deepest ocean, covering more area than all land combined. Contains the Mariana Trench and most of Earth\'s coral reefs.',
        keyFeatures: 'Ring of Fire, Mariana Trench, Great Barrier Reef, Coral Triangle',
        threats: 'Plastic pollution (Great Pacific Garbage Patch), overfishing, acidification, warming',
        protected: '4.8%'
    },
    'Atlantic Ocean': {
        emoji: '🐋',
        area: '106,460,000 km²',
        avgDepth: '3,646 m',
        maxDepth: '8,376 m (Puerto Rico Trench)',
        species: '15,000+',
        description: 'Second-largest ocean connecting Americas, Europe, and Africa. Home to the Mid-Atlantic Ridge and major ocean currents like the Gulf Stream.',
        keyFeatures: 'Gulf Stream, Mid-Atlantic Ridge, Sargasso Sea, Caribbean reefs',
        threats: 'Overfishing (especially tuna), shipping pollution, oil spills, climate change',
        protected: '13.2%'
    },
    'Indian Ocean': {
        emoji: '🐠',
        area: '70,560,000 km²',
        avgDepth: '3,741 m',
        maxDepth: '7,258 m (Java Trench)',
        species: '18,000+',
        description: 'Third-largest ocean with warm tropical waters. Contains part of the Coral Triangle and drives monsoon weather systems.',
        keyFeatures: 'Coral Triangle, Maldives atolls, monsoon system, rich fisheries',
        threats: 'Coral bleaching, overfishing, piracy areas, plastic pollution',
        protected: '6.1%'
    },
    'Arctic Ocean': {
        emoji: '🧊',
        area: '14,060,000 km²',
        avgDepth: '1,205 m',
        maxDepth: '5,550 m (Molloy Deep)',
        species: '5,500+',
        description: 'Smallest and shallowest ocean, covered by sea ice much of the year. Home to polar bears, walruses, and unique cold-adapted species.',
        keyFeatures: 'Sea ice, polar bears, midnight sun, Northwest Passage',
        threats: 'Rapid warming (2x global rate), ice loss, oil drilling, shipping routes',
        protected: '2.8%'
    },
    'Southern Ocean': {
        emoji: '🐧',
        area: '20,327,000 km²',
        avgDepth: '3,270 m',
        maxDepth: '7,235 m (South Sandwich Trench)',
        species: '9,000+',
        description: 'Encircles Antarctica with the world\'s strongest ocean currents. Critical for global climate regulation and home to penguins, seals, and whales.',
        keyFeatures: 'Antarctic Circumpolar Current, krill populations, ice shelves',
        threats: 'Krill harvesting, ice shelf collapse, climate change, illegal fishing',
        protected: '17.9%'
    },
    'Mediterranean Sea': {
        emoji: '🏖️',
        area: '2,500,000 km²',
        avgDepth: '1,500 m',
        maxDepth: '5,267 m (Calypso Deep)',
        species: '17,000+',
        description: 'Almost enclosed sea between Europe, Africa, and Asia. Ancient crossroads of civilizations with high endemic species.',
        keyFeatures: 'Ancient trade routes, 46,000 km coastline, warm waters, endemic species',
        threats: 'Overfishing, pollution (90% plastic from 10 rivers), tourism pressure, invasive species',
        protected: '9.7%'
    },
    'Caribbean Sea': {
        emoji: '🏝️',
        area: '2,754,000 km²',
        avgDepth: '2,200 m',
        maxDepth: '7,686 m (Cayman Trench)',
        species: '12,000+',
        description: 'Tropical sea known for coral reefs, clear waters, and high biodiversity. Major tourism and fishing region.',
        keyFeatures: 'Coral reefs, hurricanes, island chains, warm currents',
        threats: 'Coral bleaching, hurricanes, overfishing, tourism impact, lionfish invasion',
        protected: '18.3%'
    },
    'South China Sea': {
        emoji: '🛥️',
        area: '3,500,000 km²',
        avgDepth: '1,140 m',
        maxDepth: '5,559 m',
        species: '8,000+',
        description: 'Major shipping route and fishing ground in Southeast Asia. High biodiversity but heavily exploited.',
        keyFeatures: 'Busiest shipping lanes, coral reefs, fishing grounds, disputed waters',
        threats: 'Severe overfishing, illegal fishing, pollution, territorial disputes, reef destruction',
        protected: '2.1%'
    },
    'Red Sea': {
        emoji: '🪸',
        area: '438,000 km²',
        avgDepth: '490 m',
        maxDepth: '3,040 m',
        species: '1,200+',
        description: 'Narrow sea between Africa and Arabia with unique heat-resistant corals and high salinity.',
        keyFeatures: 'Heat-resistant corals, high salinity, narrow strait, unique evolution',
        threats: 'Tourism development, oil spills, overfishing, coastal development',
        protected: '6.2%'
    },
    'Coral Sea': {
        emoji: '🪸',
        area: '4,791,000 km²',
        avgDepth: '2,394 m',
        maxDepth: '9,174 m',
        species: '5,000+',
        description: 'Contains the Great Barrier Reef, the world\'s largest coral reef system. UNESCO World Heritage Site.',
        keyFeatures: 'Great Barrier Reef, pristine reefs, warm waters, high biodiversity',
        threats: 'Coral bleaching, crown-of-thorns starfish, climate change, cyclones',
        protected: '45.2%'
    }
};

// Show ocean information when clicking on water
function showOceanInfo(lat, lng) {
    selectedCountry = null;

    const infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.remove('hidden');

    // Zoom to clicked ocean location
    globe.pointOfView({
        lat: lat,
        lng: lng,
        altitude: 1.5
    }, 1000);

    // Update polygons
    if (globe && window.countriesData) {
        globe.polygonsData(window.countriesData);
    }

    // Detect specific ocean or sea
    let oceanKey = detectOceanSea(lat, lng);
    let oceanData = oceanSeaData[oceanKey];

    // Fallback to generic world ocean if no match
    if (!oceanData) {
        oceanKey = 'World Ocean';
        oceanData = {
            emoji: '🌊',
            area: '361,000,000 km²',
            avgDepth: '3,688 m',
            maxDepth: '10,994 m',
            species: '240,000+',
            description: 'Earth\'s global ocean covers 71% of the planet and contains 97% of all water.',
            keyFeatures: 'Interconnected global system, climate regulation, oxygen production',
            threats: 'Climate change, acidification, overfishing, plastic pollution',
            protected: '8.2%'
        };
    }

    const html = `
        <button class="close-panel" id="closePanel">✕</button>
        <div class="info-header" style="background: linear-gradient(135deg, rgba(32, 178, 170, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);">
            <div class="country-flag" style="font-size: 64px;">${oceanData.emoji}</div>
            <h2 class="country-name">${oceanKey}</h2>
            <div class="country-rank">Marine Ecosystem</div>
        </div>
        <div class="info-content">
            <div style="background: rgba(32,178,170,0.1); padding: 14px; border-radius: 10px; margin-bottom: 12px; border: 1px solid rgba(32,178,170,0.2);">
                <div style="font-size: 13px; line-height: 1.6; color: rgba(255,255,255,0.9);">
                    ${oceanData.description}
                </div>
            </div>

            <div class="metric-card" style="background: rgba(32,178,170,0.08);">
                <div class="metric-icon">📏</div>
                <div class="metric-details">
                    <div class="metric-label">Area</div>
                    <div class="metric-value" style="font-size: 24px;">${oceanData.area}</div>
                </div>
            </div>

            <div class="metric-card" style="background: rgba(32,178,170,0.08);">
                <div class="metric-icon">🌊</div>
                <div class="metric-details">
                    <div class="metric-label">Average Depth</div>
                    <div class="metric-value" style="font-size: 24px;">${oceanData.avgDepth}</div>
                    <div style="font-size: 11px; opacity: 0.7; margin-top: 4px;">Max: ${oceanData.maxDepth}</div>
                </div>
            </div>

            <div class="metric-card" style="background: rgba(32,178,170,0.08);">
                <div class="metric-icon">🐠</div>
                <div class="metric-details">
                    <div class="metric-label">Marine Species</div>
                    <div class="metric-value" style="font-size: 24px;">${oceanData.species}</div>
                    <div style="font-size: 11px; opacity: 0.7; margin-top: 4px;">Documented species</div>
                </div>
            </div>

            <div class="metric-card" style="background: rgba(32,178,170,0.08);">
                <div class="metric-icon">🛡️</div>
                <div class="metric-details">
                    <div class="metric-label">Protected</div>
                    <div class="metric-value" style="font-size: 24px;">${oceanData.protected}</div>
                    <div style="font-size: 11px; opacity: 0.7; margin-top: 4px;">Goal: 30% by 2030</div>
                </div>
            </div>

            <div style="background: rgba(59,130,246,0.1); padding: 12px; border-radius: 10px; margin-top: 16px; border: 1px solid rgba(59,130,246,0.3);">
                <h3 style="font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <span>✨</span> Key Features
                </h3>
                <div style="font-size: 12px; line-height: 1.6; opacity: 0.95;">
                    ${oceanData.keyFeatures}
                </div>
            </div>

            <div class="threat-card threat-high" style="margin-top: 16px;">
                <div class="threat-header">
                    <span class="threat-icon">⚠️</span>
                    <span class="threat-label">Threats</span>
                </div>
                <div style="font-size: 12px; margin-top: 8px; line-height: 1.6; opacity: 0.9;">
                    ${oceanData.threats}
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

    // Enhanced biodiversity details
    const enhancedData = getEnhancedBioData(countryName, bioData);

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
            <div class="country-rank">Biodiversity Rank #${bioData.rank} ${enhancedData.isHotspot ? '🔥 Hotspot' : ''}</div>
        </div>
        <div class="info-content">
            ${enhancedData.description ? `
                <div style="background: rgba(46,204,113,0.1); padding: 14px; border-radius: 10px; margin-bottom: 12px; border: 1px solid rgba(46,204,113,0.2);">
                    <div style="font-size: 13px; line-height: 1.6; color: rgba(255,255,255,0.9);">
                        ${enhancedData.description}
                    </div>
                </div>
            ` : ''}

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

            ${enhancedData.protectedAreas ? `
                <div class="metric-card">
                    <div class="metric-icon">🛡️</div>
                    <div class="metric-details">
                        <div class="metric-label">Protected Areas</div>
                        <div class="metric-value">${enhancedData.protectedAreas}<span class="metric-unit">%</span></div>
                    </div>
                </div>
            ` : ''}

            ${enhancedData.endangeredSpecies ? `
                <div class="metric-card" style="background: rgba(239,68,68,0.1);">
                    <div class="metric-icon">⚠️</div>
                    <div class="metric-details">
                        <div class="metric-label">Endangered Species</div>
                        <div class="metric-value">${enhancedData.endangeredSpecies}<span class="metric-unit">species</span></div>
                    </div>
                </div>
            ` : ''}

            ${enhancedData.nationalParks ? `
                <div class="metric-card">
                    <div class="metric-icon">🏞️</div>
                    <div class="metric-details">
                        <div class="metric-label">National Parks</div>
                        <div class="metric-value">${enhancedData.nationalParks}<span class="metric-unit">parks</span></div>
                    </div>
                </div>
            ` : ''}

            <div class="threat-card threat-${bioData.threatLevel}">
                <div class="threat-header">
                    <span class="threat-icon">${getThreatIcon(bioData.threatLevel)}</span>
                    <span class="threat-label">Threat Level</span>
                </div>
                <div class="threat-value">${bioData.threatLevel.toUpperCase()}</div>
                ${enhancedData.mainThreats ? `
                    <div style="margin-top: 10px; font-size: 12px; opacity: 0.9; line-height: 1.5;">
                        ${enhancedData.mainThreats}
                    </div>
                ` : ''}
            </div>

            ${enhancedData.conservation ? `
                <div style="background: rgba(46,204,113,0.15); padding: 12px; border-radius: 10px; margin-bottom: 12px; border: 1px solid rgba(46,204,113,0.3);">
                    <h3 style="font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                        <span>🌱</span> Conservation Efforts
                    </h3>
                    <div style="font-size: 12px; line-height: 1.6; opacity: 0.95;">
                        ${enhancedData.conservation}
                    </div>
                </div>
            ` : ''}

            ${enhancedData.uniqueEcosystems ? `
                <div style="background: rgba(59,130,246,0.1); padding: 12px; border-radius: 10px; margin-bottom: 12px; border: 1px solid rgba(59,130,246,0.2);">
                    <h3 style="font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                        <span>🌎</span> Unique Ecosystems
                    </h3>
                    <div style="font-size: 12px; line-height: 1.6; opacity: 0.95;">
                        ${enhancedData.uniqueEcosystems}
                    </div>
                </div>
            ` : ''}

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

            ${bioData.marineData ? `
                <div style="background: rgba(32,178,170,0.1); padding: 14px; border-radius: 12px; margin-top: 16px; border: 1px solid rgba(32,178,170,0.3);">
                    <h3 style="font-size: 16px; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; color: white;">
                        <span>🌊</span> Marine Biodiversity
                    </h3>

                    <div class="metric-card" style="background: rgba(32,178,170,0.08); margin-bottom: 10px;">
                        <div class="metric-icon">🐠</div>
                        <div class="metric-details">
                            <div class="metric-label">Marine Species</div>
                            <div class="metric-value" style="font-size: 24px;">${bioData.marineData.marineSpecies.toLocaleString()}</div>
                        </div>
                    </div>

                    <div class="metric-card" style="background: rgba(32,178,170,0.08); margin-bottom: 10px;">
                        <div class="metric-icon">🪸</div>
                        <div class="metric-details">
                            <div class="metric-label">Coral Reef Area</div>
                            <div class="metric-value" style="font-size: 20px;">${bioData.marineData.coralReefArea.toLocaleString()}<span class="metric-unit">km²</span></div>
                        </div>
                    </div>

                    <div class="metric-card" style="background: rgba(32,178,170,0.08); margin-bottom: 10px;">
                        <div class="metric-icon">🛡️</div>
                        <div class="metric-details">
                            <div class="metric-label">Marine Protected</div>
                            <div class="metric-value" style="font-size: 20px;">${bioData.marineData.marineProtectedAreas}<span class="metric-unit">%</span></div>
                        </div>
                    </div>

                    <div style="margin-top: 12px; padding: 10px; background: rgba(${
                        bioData.marineData.coralHealth === 'excellent' ? '46,204,113' :
                        bioData.marineData.coralHealth === 'good' ? '52,152,219' :
                        bioData.marineData.coralHealth === 'moderate' ? '243,156,18' :
                        bioData.marineData.coralHealth === 'poor' ? '231,76,60' : '169,169,169'
                    },0.15); border-radius: 8px; border: 1px solid rgba(${
                        bioData.marineData.coralHealth === 'excellent' ? '46,204,113' :
                        bioData.marineData.coralHealth === 'good' ? '52,152,219' :
                        bioData.marineData.coralHealth === 'moderate' ? '243,156,18' :
                        bioData.marineData.coralHealth === 'poor' ? '231,76,60' : '169,169,169'
                    },0.4);">
                        <div style="font-size: 11px; text-transform: uppercase; opacity: 0.8; margin-bottom: 4px;">Coral Health Status</div>
                        <div style="font-size: 16px; font-weight: 700; text-transform: capitalize;">${bioData.marineData.coralHealth}</div>
                    </div>

                    <div style="margin-top: 12px;">
                        <div style="font-size: 13px; font-weight: 600; opacity: 0.9; margin-bottom: 8px;">🐋 Marine Life</div>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${bioData.marineData.oceanicAnimals.map(animal => {
                                const emoji = animalEmojis[animal] || '🐟';
                                return `<span style="font-size: 28px; transition: transform 0.2s;" title="${animal}">${emoji}</span>`;
                            }).join('')}
                        </div>
                    </div>

                    <div style="margin-top: 12px;">
                        <div style="font-size: 13px; font-weight: 600; opacity: 0.9; margin-bottom: 6px;">⚠️ Marine Threats</div>
                        <div style="font-size: 11px; line-height: 1.6; opacity: 0.85;">
                            ${bioData.marineData.marineThreats.map(threat =>
                                `<div style="padding: 4px 0;">• ${threat.replace(/-/g, ' ')}</div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            ` : ''}

            ${enhancedData.funFacts ? `
                <div style="background: rgba(255,193,7,0.1); padding: 12px; border-radius: 10px; margin-top: 12px; border: 1px solid rgba(255,193,7,0.2);">
                    <h3 style="font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                        <span>💡</span> Did You Know?
                    </h3>
                    <div style="font-size: 12px; line-height: 1.6; opacity: 0.95;">
                        ${enhancedData.funFacts}
                    </div>
                </div>
            ` : ''}

            ${enhancedData.images && enhancedData.images.length > 0 ? `
                <div class="image-gallery">
                    <h3 style="font-size: 14px; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
                        <span>📸</span> Wildlife & Landscapes
                    </h3>
                    <div class="gallery-grid">
                        ${enhancedData.images.map(img => `
                            <div class="gallery-item">
                                <img src="${img.url}" alt="${img.caption}" loading="lazy">
                                <div class="gallery-caption">${img.caption}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    infoPanel.innerHTML = html;

    // Update facts overlay for this country
    if (typeof window.updateFactsForCountry === 'function') {
        window.updateFactsForCountry(countryName);
    }

    // Re-attach close button
    document.getElementById('closePanel').addEventListener('click', () => {
        infoPanel.classList.add('hidden');
        selectedCountry = null;
        if (globe && window.countriesData) {
            globe.polygonsData(window.countriesData);
        }
    });
}

// Enhanced biodiversity data for major countries
function getEnhancedBioData(countryName, baseData) {
    const enhancedInfo = {
        'Brazil': {
            isHotspot: true,
            protectedAreas: 29.4,
            endangeredSpecies: 1173,
            nationalParks: 74,
            description: 'Home to the Amazon rainforest, the world\'s largest tropical rainforest and most biodiverse ecosystem on Earth.',
            mainThreats: 'Deforestation, illegal logging, agriculture expansion, mining, fires',
            conservation: 'Amazon Region Protected Areas program covering 154 million acres. Reduced deforestation by 70% between 2004-2012.',
            uniqueEcosystems: 'Amazon Rainforest, Atlantic Forest, Pantanal wetlands, Cerrado savanna',
            funFacts: 'Contains 20% of all bird species on Earth. Over 55,000 plant species - more than any other country.',
            images: [
                { url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800', caption: 'Jaguar in Amazon Rainforest' },
                { url: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800', caption: 'Amazon River aerial view' },
                { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800', caption: 'Toucan in Brazilian forest' }
            ]
        },
        'Indonesia': {
            isHotspot: true,
            protectedAreas: 13.2,
            endangeredSpecies: 1206,
            nationalParks: 54,
            description: 'World\'s largest archipelago with incredible marine and terrestrial biodiversity spanning 17,000+ islands.',
            mainThreats: 'Palm oil plantations, illegal wildlife trade, overfishing, habitat destruction',
            conservation: 'Coral Triangle Initiative protecting marine ecosystems. Orangutan conservation programs in Borneo and Sumatra.',
            uniqueEcosystems: 'Tropical rainforests, Coral Triangle reefs, mangrove forests, volcanic islands',
            funFacts: 'Has more mammal species than any other country. The Coral Triangle contains 76% of all coral species.',
            images: [
                { url: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=800', caption: 'Orangutan in Borneo rainforest' },
                { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', caption: 'Komodo Dragon' },
                { url: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800', caption: 'Coral reefs in Raja Ampat' }
            ]
        },
        'Madagascar': {
            isHotspot: true,
            protectedAreas: 10.4,
            endangeredSpecies: 842,
            nationalParks: 43,
            description: 'Isolated island nation with 90% endemic species - a living laboratory of evolution.',
            mainThreats: 'Deforestation (lost 90% of original forests), slash-and-burn agriculture, poverty',
            conservation: 'Tripled protected areas from 2003-2018. Community-based conservation programs.',
            uniqueEcosystems: 'Spiny forests, rainforests, dry deciduous forests, unique limestone tsingy formations',
            funFacts: 'All lemurs are endemic to Madagascar. Has species found nowhere else like the fossa (cat-like carnivore).',
            images: [
                { url: 'https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?w=800', caption: 'Ring-tailed lemurs' },
                { url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800', caption: 'Baobab trees avenue' },
                { url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800', caption: 'Tsingy limestone formations' }
            ]
        },
        'Democratic Republic of the Congo': {
            isHotspot: true,
            protectedAreas: 12.8,
            endangeredSpecies: 532,
            nationalParks: 9,
            description: 'Contains the world\'s second-largest rainforest, the Congo Basin, vital for global climate.',
            mainThreats: 'Mining, civil conflict, bushmeat hunting, logging, agricultural expansion',
            conservation: 'Virunga National Park protecting mountain gorillas. REDD+ forest conservation initiatives.',
            uniqueEcosystems: 'Congo rainforest, wetlands, savannas, mountain gorilla habitats',
            funFacts: 'Home to bonobos found nowhere else. The Congo Basin stores 8% of the world\'s forest carbon.',
            images: [
                { url: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800', caption: 'Mountain gorilla in Virunga' },
                { url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800', caption: 'Congo Basin rainforest' },
                { url: 'https://images.unsplash.com/photo-1597873618537-4ee2c2628cf7?w=800', caption: 'Okapi in forest' }
            ]
        },
        'Australia': {
            isHotspot: true,
            protectedAreas: 19.8,
            endangeredSpecies: 1908,
            nationalParks: 685,
            description: 'Megadiverse island continent with the highest rate of species endemism - 87% of mammals are unique.',
            mainThreats: 'Invasive species, climate change, bushfires, habitat clearing',
            conservation: 'Great Barrier Reef Marine Park (world\'s largest). Indigenous-led conservation initiatives.',
            uniqueEcosystems: 'Great Barrier Reef, Outback desert, tropical rainforests, temperate forests',
            funFacts: 'Has the most venomous animals in the world. The Great Barrier Reef is visible from space.',
            images: [
                { url: 'https://images.unsplash.com/photo-1580735994845-e2f6c6a0dcb3?w=800', caption: 'Kangaroo in outback' },
                { url: 'https://images.unsplash.com/photo-1587339603921-2eb5b66f68e2?w=800', caption: 'Great Barrier Reef coral' },
                { url: 'https://images.unsplash.com/photo-1567828952351-63d5ab86e4d7?w=800', caption: 'Koala in eucalyptus tree' }
            ]
        },
        'United States of America': {
            isHotspot: true,
            protectedAreas: 13.9,
            endangeredSpecies: 1662,
            nationalParks: 63,
            description: 'Diverse ecosystems from Arctic tundra to tropical reefs spanning a continent and Pacific islands.',
            mainThreats: 'Climate change, habitat fragmentation, invasive species, pollution',
            conservation: 'National Park System protecting 85 million acres. Endangered Species Act saved bald eagles, wolves.',
            uniqueEcosystems: 'Yellowstone geothermal, California redwoods, Everglades wetlands, Hawaiian islands',
            funFacts: 'Yellowstone was world\'s first national park (1872). Sequoia trees are Earth\'s largest living organisms.',
            images: [
                { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', caption: 'Yellowstone National Park' },
                { url: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800', caption: 'California redwood forest' },
                { url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800', caption: 'Bald eagle soaring' }
            ]
        },
        'China': {
            isHotspot: true,
            protectedAreas: 18.5,
            endangeredSpecies: 840,
            nationalParks: 10,
            description: 'Contains diverse ecosystems from Himalayan mountains to tropical forests, home to pandas and unique species.',
            mainThreats: 'Urbanization, pollution, poaching, traditional medicine trade',
            conservation: 'Giant Panda reserves increased population from 1,114 to 1,864. National park system expansion.',
            uniqueEcosystems: 'Himalayan forests, karst landscapes, Yangtze River basin, tropical Yunnan',
            funFacts: 'Giant pandas spend 14 hours a day eating bamboo. China has over 30,000 plant species.',
            images: [
                { url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800', caption: 'Giant panda eating bamboo' },
                { url: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?w=800', caption: 'Zhangjiajie National Forest' },
                { url: 'https://images.unsplash.com/photo-1599387301025-85c0f82ea3c7?w=800', caption: 'Li River karst mountains' }
            ]
        },
        'Peru': {
            isHotspot: true,
            protectedAreas: 17.3,
            endangeredSpecies: 538,
            nationalParks: 77,
            description: 'Encompasses Amazon rainforest, Andes mountains, and Pacific coast with extraordinary diversity.',
            mainThreats: 'Illegal mining, deforestation, coca farming, climate change',
            conservation: 'Community-based conservation in Amazon. Protecting cloud forests and marine reserves.',
            uniqueEcosystems: 'Amazon rainforest, cloud forests, Andes mountains, coastal deserts',
            funFacts: 'Has more bird species than anywhere in South America. Manu National Park has 1,000+ bird species.',
            images: [
                { url: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=800', caption: 'Andean spectacled bear' },
                { url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800', caption: 'Peruvian Amazon rainforest' },
                { url: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=800', caption: 'Andean condor flying' }
            ]
        },
        'Colombia': {
            isHotspot: true,
            protectedAreas: 27.3,
            endangeredSpecies: 670,
            nationalParks: 59,
            description: 'World\'s most biodiverse country per square kilometer with Amazon, Andes, and Caribbean coast.',
            mainThreats: 'Deforestation, coca cultivation, illegal mining, armed conflict',
            conservation: 'Post-conflict reforestation. Amazon conservation partnerships.',
            uniqueEcosystems: 'Amazon rainforest, Andean cloud forests, Caribbean coast, Pacific coast',
            funFacts: 'Has more bird species than any other country (1,900+). Contains 10% of world\'s species.',
            images: [
                { url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800', caption: 'Colombian cloud forest' },
                { url: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800', caption: 'Tropical hummingbird' },
                { url: 'https://images.unsplash.com/photo-1601224236271-4c96c1037676?w=800', caption: 'Jaguar in rainforest' }
            ]
        },
        'Ecuador': {
            isHotspot: true,
            protectedAreas: 19.3,
            endangeredSpecies: 436,
            nationalParks: 51,
            description: 'Small but incredibly diverse with Amazon, Andes, coast, and the unique Galápagos Islands.',
            mainThreats: 'Oil extraction, deforestation, invasive species in Galápagos',
            conservation: 'Constitutional rights for nature (world first). Galápagos Marine Reserve protection.',
            uniqueEcosystems: 'Galápagos Islands, Amazon rainforest, cloud forests, coastal mangroves',
            funFacts: 'Galápagos inspired Darwin\'s theory of evolution. Has 25,000 plant species in area smaller than Nevada.',
            images: [
                { url: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800', caption: 'Galápagos giant tortoise' },
                { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800', caption: 'Blue-footed booby' },
                { url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800', caption: 'Galápagos marine iguana' }
            ]
        },
        'Kenya': {
            protectedAreas: 12.7,
            endangeredSpecies: 197,
            nationalParks: 23,
            description: 'East African nation famous for wildlife safaris and the Great Wildebeest Migration.',
            mainThreats: 'Poaching, human-wildlife conflict, habitat loss, climate change',
            conservation: 'Anti-poaching success doubled elephant population since 1989. Community conservancies.',
            uniqueEcosystems: 'Savanna grasslands, Mount Kenya forests, coastal reefs, Great Rift Valley',
            funFacts: 'Wildebeest migration involves 1.5 million animals. Has Africa\'s "Big Five" game animals.',
            images: [
                { url: 'https://images.unsplash.com/photo-1534759926787-1f056e3c8ee9?w=800', caption: 'African elephants herd' },
                { url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800', caption: 'Masai Mara savanna sunset' },
                { url: 'https://images.unsplash.com/photo-1558010178-2daab9e80080?w=800', caption: 'Lions in grassland' }
            ]
        },
        'South Africa': {
            isHotspot: true,
            protectedAreas: 8.6,
            endangeredSpecies: 435,
            nationalParks: 20,
            description: 'Contains the Cape Floral Kingdom, the world\'s smallest and richest plant kingdom.',
            mainThreats: 'Rhino poaching, invasive species, urbanization, water scarcity',
            conservation: 'Kruger National Park success. Rhino protection increasing populations.',
            uniqueEcosystems: 'Fynbos shrublands, savanna, Karoo desert, coastal marine ecosystems',
            funFacts: 'Cape Floral Region has 9,000 plant species (70% endemic). Table Mountain has more plant species than UK.',
            images: [
                { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800', caption: 'White rhino in Kruger' },
                { url: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800', caption: 'Cape Fynbos flowers' },
                { url: 'https://images.unsplash.com/photo-1612707672777-8f1f72a8e3ac?w=800', caption: 'African penguin colony' }
            ]
        },
        'India': {
            isHotspot: true,
            protectedAreas: 5.4,
            endangeredSpecies: 645,
            nationalParks: 106,
            description: 'Biodiverse megacountry from Himalayas to tropical forests, supporting 1.4 billion people.',
            mainThreats: 'Population pressure, urbanization, pollution, human-wildlife conflict',
            conservation: 'Project Tiger increased tiger population from 1,400 to 3,000. Expanding protected areas.',
            uniqueEcosystems: 'Himalayan forests, Western Ghats, Sundarbans mangroves, coral reefs',
            funFacts: 'Has 70% of world\'s tigers. Sundarbans is largest mangrove forest and home to Bengal tigers.',
            images: [
                { url: 'https://images.unsplash.com/photo-1563510389-af5e6ce7f25f?w=800', caption: 'Bengal tiger in forest' },
                { url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800', caption: 'Western Ghats rainforest' },
                { url: 'https://images.unsplash.com/photo-1551844511-2a83e6f5c13c?w=800', caption: 'Indian elephants' }
            ]
        },
        'Mexico': {
            isHotspot: true,
            protectedAreas: 13.1,
            endangeredSpecies: 665,
            nationalParks: 67,
            description: 'Megadiverse nation bridging North and South America with unique endemic species.',
            mainThreats: 'Deforestation, illegal wildlife trade, climate change, urbanization',
            conservation: 'Monarch Butterfly Biosphere Reserve. Marine protected areas in Gulf of California.',
            uniqueEcosystems: 'Cloud forests, deserts, tropical forests, coral reefs, volcanic islands',
            funFacts: 'Monarch butterfly migration destination. Chihuahuan Desert has most cactus diversity.',
            images: [
                { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', caption: 'Monarch butterfly swarm' },
                { url: 'https://images.unsplash.com/photo-1565214975184-f5c9b0c3d90e?w=800', caption: 'Copper Canyon landscape' },
                { url: 'https://images.unsplash.com/photo-1628273729925-b4cb1c4ca9c8?w=800', caption: 'Mexican gray wolf' }
            ]
        },
        'Tanzania': {
            protectedAreas: 38.0,
            endangeredSpecies: 238,
            nationalParks: 16,
            description: 'Home to Serengeti, Kilimanjaro, and Africa\'s greatest wildlife concentrations.',
            mainThreats: 'Poaching, habitat loss, climate change, tourism pressure',
            conservation: 'Serengeti ecosystem protection. Community wildlife management areas.',
            uniqueEcosystems: 'Serengeti plains, Mount Kilimanjaro, Ngorongoro Crater, coastal forests',
            funFacts: 'Serengeti means "endless plains" in Maasai. Has the "Big Five" and Africa\'s highest peak.',
            images: [
                { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800', caption: 'Wildebeest migration in Serengeti' },
                { url: 'https://images.unsplash.com/photo-1621771464782-c0b0f9d5b16a?w=800', caption: 'Mount Kilimanjaro' },
                { url: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800', caption: 'Lions in Ngorongoro Crater' }
            ]
        },
        'Antarctica': {
            protectedAreas: 100.0,
            endangeredSpecies: 28,
            nationalParks: 0,
            description: 'Earth\'s last great wilderness - a frozen continent vital for global climate regulation and home to uniquely adapted marine life.',
            mainThreats: 'Climate change, ice sheet melting, ocean acidification, overfishing, tourism impact',
            conservation: 'Antarctic Treaty protects the continent. Marine Protected Areas covering 2.8 million km². No mining or military activities allowed.',
            uniqueEcosystems: 'Ice sheets, Southern Ocean, glaciers, ice shelves, subglacial lakes',
            funFacts: 'Contains 90% of Earth\'s ice and 70% of fresh water. Emperor penguins dive up to 500m deep. No permanent human residents.',
            images: [
                { url: 'https://images.unsplash.com/photo-1511142810534-a5b19c2f8f8d?w=800', caption: 'Emperor penguins colony' },
                { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', caption: 'Icebergs in Antarctic waters' },
                { url: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=800', caption: 'Humpback whale breaching' }
            ]
        },
        'Iceland': {
            protectedAreas: 20.4,
            endangeredSpecies: 12,
            nationalParks: 3,
            description: 'Land of fire and ice with unique volcanic ecosystems, vast lava fields, and rich marine life in cold Atlantic waters.',
            mainThreats: 'Climate change, tourism pressure, overfishing, invasive species',
            conservation: 'Vatnajökull National Park (largest in Europe). Strong environmental protection laws. Leading renewable energy adoption.',
            uniqueEcosystems: 'Glaciers, geothermal areas, lava fields, waterfalls, fjords, volcanic highlands',
            funFacts: 'No forests but 11% covered by glaciers. Home to Arctic foxes (only native land mammal). Puffin colonies in summer.',
            images: [
                { url: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800', caption: 'Skogafoss waterfall' },
                { url: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800', caption: 'Puffins on coastal cliffs' },
                { url: 'https://images.unsplash.com/photo-1513415756133-bdd23f7ea7f0?w=800', caption: 'Geothermal pools and landscapes' }
            ]
        },
        'Costa Rica': {
            isHotspot: true,
            protectedAreas: 26.3,
            endangeredSpecies: 215,
            nationalParks: 28,
            description: 'Tiny country containing 5% of world\'s biodiversity. Pioneer in ecotourism and forest restoration.',
            mainThreats: 'Deforestation (though reversed), urbanization, tourism pressure, climate change',
            conservation: 'Reversed deforestation: 21% forest (1987) to 53% (2020). Payment for Ecosystem Services program. Carbon neutral goal.',
            uniqueEcosystems: 'Cloud forests, rainforests, mangroves, coral reefs, dry forests, wetlands',
            funFacts: 'No army since 1948 - invested in education and conservation instead. 500,000 species in area smaller than West Virginia.',
            images: [
                { url: 'https://images.unsplash.com/photo-1566054757965-1f33bad07fa1?w=800', caption: 'Resplendent quetzal bird' },
                { url: 'https://images.unsplash.com/photo-1512107099891-54eb7d7e5e5e?w=800', caption: 'Monteverde cloud forest' },
                { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800', caption: 'Three-toed sloth' }
            ]
        },
        'New Zealand': {
            isHotspot: true,
            protectedAreas: 32.2,
            endangeredSpecies: 742,
            nationalParks: 13,
            description: 'Isolated islands with unique flightless birds and ancient forests. 80% of plants, reptiles found nowhere else.',
            mainThreats: 'Invasive species (rats, stoats, possums), habitat loss, climate change, bird predation',
            conservation: 'Predator-free New Zealand 2050 initiative. Massive conservation efforts for kiwi, kakapo. DOC managing 30% of land.',
            uniqueEcosystems: 'Ancient podocarp forests, alpine regions, fjords, geothermal areas, marine reserves',
            funFacts: 'Kiwi birds evolved without predators (flightless). Kakapo is world\'s only flightless parrot. Tuatara are "living fossils".',
            images: [
                { url: 'https://images.unsplash.com/photo-1469521669194-babb5af5d6b3?w=800', caption: 'Milford Sound fjord' },
                { url: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800', caption: 'Ancient podocarp forest' },
                { url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800', caption: 'Kiwi bird' }
            ]
        }
    };

    return enhancedInfo[countryName] || {};
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

    // Sound toggle
    const soundBtn = document.getElementById('toggleSound');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            if (typeof window.toggleBiodiversitySound === 'function') {
                const enabled = window.toggleBiodiversitySound();
                soundBtn.textContent = enabled ? '🔊 Sound ON' : '🔇 Sound OFF';
                soundBtn.style.opacity = enabled ? '1' : '0.6';
            }
        });
    }

    // Legend toggle
    setupLegendToggle();

    // View mode toggle
    setupViewModeToggle();
}

// Setup view mode toggle (Land/Ocean/Both)
function setupViewModeToggle() {
    const modeButtons = document.querySelectorAll('.mode-btn');

    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;

            // Update active state
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Change mode
            changeViewMode(mode);
        });
    });
}

// Change view mode
function changeViewMode(mode) {
    currentViewMode = mode;
    console.log(`🔄 Switching to ${mode} mode`);

    if (!globe || !window.countriesData) return;

    // Update globe colors based on mode
    globe.polygonsData(window.countriesData);

    // Update legend
    updateLegendForMode(mode);

    // Change atmosphere color
    if (globe) {
        if (mode === 'ocean') {
            globe.atmosphereColor('#20B2AA'); // Teal for ocean
        } else if (mode === 'land') {
            globe.atmosphereColor('#2ecc71'); // Green for land
        } else {
            globe.atmosphereColor('#4682B4'); // Blue mix for both
        }
    }
}

// Update legend based on view mode
function updateLegendForMode(mode) {
    const legendTitle = document.querySelector('.legend-title');
    const legendIcon = document.querySelector('.legend-icon');
    const legendItems = document.querySelectorAll('.legend-item');

    if (!legendTitle || !legendItems.length) return;

    if (mode === 'ocean') {
        legendTitle.textContent = 'MARINE PROTECTION';
        legendIcon.textContent = '🌊';

        // Update legend items for ocean mode
        const items = [
            { color: 'rgba(32, 178, 170, 0.7)', label: '>50%', desc: 'Highly Protected' },
            { color: 'rgba(52, 152, 219, 0.7)', label: '30-50%', desc: 'Well Protected' },
            { color: 'rgba(243, 156, 18, 0.7)', label: '15-30%', desc: 'Moderate Protection' },
            { color: 'rgba(231, 76, 60, 0.7)', label: '<15%', desc: 'Low Protection' }
        ];

        legendItems.forEach((item, i) => {
            if (items[i]) {
                const colorDiv = item.querySelector('.legend-color');
                const labelDiv = item.querySelector('.legend-label');
                const descDiv = item.querySelector('.legend-desc');

                if (colorDiv) colorDiv.style.background = items[i].color;
                if (labelDiv) labelDiv.textContent = items[i].label;
                if (descDiv) descDiv.textContent = items[i].desc;
            }
        });

        const tip = document.querySelector('.legend-tip');
        if (tip) tip.textContent = '💡 Click coastal countries for marine data';

    } else if (mode === 'land') {
        legendTitle.textContent = 'FOREST COVERAGE';
        legendIcon.textContent = '🌳';

        // Update legend items for land mode
        const items = [
            { color: 'rgba(46, 204, 113, 0.7)', label: '>50%', desc: 'Dense Forests' },
            { color: 'rgba(52, 152, 219, 0.7)', label: '30-50%', desc: 'Moderate Coverage' },
            { color: 'rgba(243, 156, 18, 0.7)', label: '10-30%', desc: 'Limited Forests' },
            { color: 'rgba(231, 76, 60, 0.7)', label: '<10%', desc: 'Sparse Vegetation' }
        ];

        legendItems.forEach((item, i) => {
            if (items[i]) {
                const colorDiv = item.querySelector('.legend-color');
                const labelDiv = item.querySelector('.legend-label');
                const descDiv = item.querySelector('.legend-desc');

                if (colorDiv) colorDiv.style.background = items[i].color;
                if (labelDiv) labelDiv.textContent = items[i].label;
                if (descDiv) descDiv.textContent = items[i].desc;
            }
        });

        const tip = document.querySelector('.legend-tip');
        if (tip) tip.textContent = '💡 Click countries for details';

    } else { // both mode
        legendTitle.textContent = 'BIODIVERSITY';
        legendIcon.textContent = '🌍';

        const tip = document.querySelector('.legend-tip');
        if (tip) tip.textContent = '💡 Shows both land & ocean data';
    }
}

// Setup legend collapse/expand functionality
function setupLegendToggle() {
    const legendToggle = document.getElementById('legendToggle');
    const legendContent = document.getElementById('legendContent');
    const legendArrow = document.getElementById('legendArrow');

    if (!legendToggle || !legendContent || !legendArrow) return;

    // Check localStorage for saved state
    const isCollapsed = localStorage.getItem('legendCollapsed') === 'true';
    if (isCollapsed) {
        legendContent.classList.add('collapsed');
        legendArrow.classList.add('collapsed');
    }

    // Toggle on click
    legendToggle.addEventListener('click', () => {
        const collapsed = legendContent.classList.toggle('collapsed');
        legendArrow.classList.toggle('collapsed');

        // Save state to localStorage
        localStorage.setItem('legendCollapsed', collapsed);
    });
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
        // Stop any playing soundscape
        if (typeof window.stopBiodiversitySound === 'function') {
            window.stopBiodiversitySound();
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
