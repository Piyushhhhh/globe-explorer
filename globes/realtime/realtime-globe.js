/**
 * Real-Time Globe Visualization
 * Main globe setup with live data integration
 */

let globe;
let autoRotateEnabled = false;
let nightLightsEnabled = false;
let citiesEnabled = true;
let hurricanesEnabled = false;  // Disabled - NOAA API blocked by CORS
let satellitesEnabled = true;   // Smooth point rendering
let moonEnabled = true;         // Moon with accurate position tracking
let citiesMarkers = [];
let currentStorms = [];
let currentSatellites = [];
let currentMoonData = null;
window.currentISSData = null;
window.currentEarthquakes = [];

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    console.log('[GLOBE] Initializing Real-Time Globe...');

    setupGlobe();
    setupControls();
    startLiveData();

    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
}

/**
 * Setup the main globe instance
 */
function setupGlobe() {
    const container = document.getElementById('globe');

    try {
        globe = Globe()
            (container)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .atmosphereColor('#87CEEB')
            .atmosphereAltitude(0.15);

        // Load country boundaries with day/night coloring
        fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(countries => {
                // Store countries data for day/night updates
                window.countriesData = countries.features;

                // Initial polygon setup with day/night colors
                updateDayNightPolygons();

                console.log('[GLOBE] Country boundaries loaded');
            })
            .catch(err => console.error('[GLOBE] Failed to load boundaries:', err));

        // Apply day/night shader
        applyDayNightShader();

        // Set initial view
        globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

        console.log('[GLOBE] Setup complete');
    } catch (error) {
        console.error('[GLOBE] Setup error:', error);
        document.getElementById('loading').innerHTML =
            '<p style="color: red;">Error loading globe: ' + error.message + '</p>';
    }
}

/**
 * Update polygon colors based on current day/night
 */
function updateDayNightPolygons() {
    if (!window.countriesData || !globe) return;

    const now = new Date();
    const sunPos = SunCalculator.getSubsolarPoint(now);

    // Color each country based on day/night/twilight
    const coloredCountries = window.countriesData.map(country => {
        // Get approximate country center
        let lat = 0, lng = 0;

        if (country.geometry.type === 'Polygon' && country.geometry.coordinates[0].length > 0) {
            lng = country.geometry.coordinates[0][0][0];
            lat = country.geometry.coordinates[0][0][1];
        } else if (country.geometry.type === 'MultiPolygon' && country.geometry.coordinates[0][0].length > 0) {
            lng = country.geometry.coordinates[0][0][0][0];
            lat = country.geometry.coordinates[0][0][0][1];
        }

        // Calculate distance from subsolar point
        const timeOfDay = getTimeOfDayForPoint(lat, lng, sunPos);

        return {
            ...country,
            timeOfDay: timeOfDay
        };
    });

    globe
        .polygonsData(coloredCountries)
        .polygonCapColor(d => {
            switch (d.timeOfDay) {
                case 'day':
                    return 'rgba(255, 250, 200, 0.15)'; // Bright sunlight - warm yellow tint
                case 'twilight':
                    return 'rgba(255, 120, 50, 0.5)'; // Golden hour - vibrant orange/pink
                case 'night':
                    return 'rgba(5, 10, 35, 0.85)'; // Deep night - dark navy blue
                default:
                    return 'rgba(255, 255, 255, 0.1)';
            }
        })
        .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
        .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.2)')
        .polygonAltitude(0.001);

    console.log('[DAY/NIGHT] Polygons updated at', now.toISOString());
}

/**
 * Get time of day for a specific point
 */
function getTimeOfDayForPoint(lat, lng, sunPos) {
    const latRad = lat * Math.PI / 180;
    const lngRad = lng * Math.PI / 180;
    const sunLatRad = sunPos.lat * Math.PI / 180;
    const sunLngRad = sunPos.lng * Math.PI / 180;

    const dLat = latRad - sunLatRad;
    const dLng = lngRad - sunLngRad;

    const a = Math.sin(dLat / 2) ** 2
            + Math.cos(latRad) * Math.cos(sunLatRad) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = c * 180 / Math.PI;

    // Classify based on solar angle
    if (distance < 85) return 'day';           // Full daylight
    if (distance < 96) return 'twilight';      // Dawn/dusk (wider range)
    return 'night';                             // Night
}

/**
 * Apply day/night terminator shader
 */
function applyDayNightShader() {
    // Update shader immediately
    updateDayNightShader();

    // Update every 30 seconds (frequent enough to see changes)
    setInterval(updateDayNightShader, 30000);
}

/**
 * Update day/night shader based on current time
 */
function updateDayNightShader() {
    const now = new Date();
    const sunPos = SunCalculator.getSubsolarPoint(now);

    console.log(`[SUN] Position: ${sunPos.lat.toFixed(2)}°, ${sunPos.lng.toFixed(2)}°`);

    // Update polygon colors for day/night
    updateDayNightPolygons();

    // Calculate day/night ratio
    realtimeData.calculateDayNightRatio(now);
}

/**
 * Start live data feeds
 */
function startLiveData() {
    console.log('[LIVE] Starting real-time data feeds...');

    // Start data fetching
    realtimeData.start();

    // Listen for updates
    realtimeData.onUpdate((type, data) => {
        if (type === 'iss') {
            updateISSMarker(data);
        } else if (type === 'earthquakes') {
            updateEarthquakes(data);
        }
    });

    // Fetch hurricanes
    fetchHurricanes();
    // Refresh hurricanes every 30 minutes
    setInterval(fetchHurricanes, 1800000);

    // Initialize satellites (static display)
    initSatellites();

    // Initialize moon
    initMoon();

    // Display cities
    displayCities();
}

/**
 * Update ISS marker on globe
 */
function updateISSMarker(issData) {
    if (!globe || !issData) return;

    window.currentISSData = issData;
    updateHtmlElements();
}

/**
 * Initialize moon with accurate position tracking
 */
function initMoon() {
    if (!moonEnabled) return;

    console.log('[MOON] Initializing moon...');

    // Get initial moon data
    currentMoonData = MoonCalculator.getMoonInfo(new Date());

    // Update moon stats in UI immediately
    updateMoonStats();

    // Update HTML elements to show moon
    updateHtmlElements();

    // Update moon position and stats every 5 minutes
    setInterval(() => {
        currentMoonData = MoonCalculator.getMoonInfo(new Date());
        updateMoonStats();
        updateHtmlElements();
    }, 300000);

    console.log('[MOON] Moon initialized');
}


/**
 * Update moon statistics in UI
 */
function updateMoonStats() {
    if (!currentMoonData) {
        currentMoonData = MoonCalculator.getMoonInfo(new Date());
    }

    // Update moon phase display
    const moonPhaseEl = document.getElementById('moonPhase');
    if (moonPhaseEl) {
        moonPhaseEl.textContent = `${currentMoonData.emoji} ${currentMoonData.position.phase}`;
    }

    // Update moon distance
    const moonDistanceEl = document.getElementById('moonDistance');
    if (moonDistanceEl) {
        moonDistanceEl.textContent = MoonCalculator.formatDistance(currentMoonData.position.distance);
    }
}

/**
 * Update earthquake markers (combined with satellites to avoid conflicts)
 */
function updateEarthquakes(earthquakes) {
    if (!globe || !earthquakes || earthquakes.length === 0) return;

    const markers = earthquakes.map(eq => ({
        type: 'earthquake',
        lat: eq.lat,
        lng: eq.lng,
        size: RealtimeData.getEarthquakeSize(eq.magnitude),
        color: RealtimeData.getEarthquakeColor(eq.magnitude),
        magnitude: eq.magnitude,
        place: eq.place,
        time: eq.time,
        url: eq.url
    }));

    // Store for combined rendering
    window.currentEarthquakes = markers;
    updateAllPoints();

    console.log(`[EARTHQUAKES] Updated ${earthquakes.length} markers`);
}

/**
 * Update all points (earthquakes + satellites) to avoid conflicts
 */
function updateAllPoints() {
    if (!globe) return;

    const allPoints = [];

    // Add earthquakes if available
    if (window.currentEarthquakes && window.currentEarthquakes.length > 0) {
        allPoints.push(...window.currentEarthquakes);
    }

    // Add satellites if enabled
    if (satellitesEnabled && currentSatellites.length > 0) {
        currentSatellites.forEach(sat => {
            allPoints.push({
                type: 'satellite',
                lat: sat.lat,
                lng: sat.lng,
                size: 0.4,  // Larger for visibility
                color: SatellitesData.getSatelliteColor(sat),
                name: sat.name,
                constellation: sat.constellation,
                altitude: sat.altitude,
                satelliteType: sat.type
            });
        });
    }

    globe
        .pointsData(allPoints)
        .pointColor('color')
        .pointAltitude(d => d.type === 'satellite' ? 0.008 : 0.01)
        .pointRadius('size')
        .pointLabel(d => {
            if (d.type === 'earthquake') {
                return `
                    <div style="background: rgba(0,0,0,0.9); padding: 12px 16px; border-radius: 12px; color: white; font-family: var(--font-display); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 16px rgba(0,0,0,0.4);">
                        <strong style="font-size: 16px; color: #ff6b6b;">Magnitude ${d.magnitude}</strong><br/>
                        <span style="font-size: 13px;">${RealtimeData.formatPlace(d.place)}</span><br/>
                        <small style="opacity: 0.7; font-size: 11px;">${new Date(d.time).toLocaleString()}</small>
                    </div>
                `;
            } else if (d.type === 'satellite') {
                return `
                    <div style="background: rgba(0,0,0,0.9); padding: 12px 16px; border-radius: 12px; color: white; font-family: var(--font-display); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 16px rgba(0,0,0,0.4);">
                        <strong style="font-size: 16px; color: ${d.color};">${d.name}</strong><br/>
                        <span style="font-size: 13px;">${d.constellation.toUpperCase()} - ${d.satelliteType}</span><br/>
                        <small style="opacity: 0.7; font-size: 11px;">Altitude: ${Math.round(d.altitude)} km</small>
                    </div>
                `;
            }
        })
        .onPointClick(point => {
            if (point.type === 'earthquake' && point.url) {
                window.open(point.url, '_blank');
            } else if (point.type === 'satellite') {
                showSatelliteInfo(point);
            }
        });

    const eqCount = allPoints.filter(p => p.type === 'earthquake').length;
    const satCount = allPoints.filter(p => p.type === 'satellite').length;
    console.log(`[POINTS] Displaying ${eqCount} earthquakes + ${satCount} satellites`);
}


/**
 * Display major cities
 */
async function displayCities() {
    if (!citiesEnabled) return;

    const cities = citiesData.getCitiesWithTime();

    // Fetch weather for first batch of cities
    console.log('[CITIES] Fetching weather data...');
    await fetchCitiesWeather(cities);

    citiesMarkers = cities;
    updateCities();

    // Update weather every 15 minutes (less aggressive to avoid rate limits)
    setInterval(async () => {
        if (citiesEnabled) {
            const updatedCities = citiesData.getCitiesWithTime();
            await fetchCitiesWeather(updatedCities);
            citiesMarkers = updatedCities;
            updateCities();
        }
    }, 900000); // 15 minutes

    // Update times every minute (without refetching weather)
    setInterval(() => {
        if (citiesEnabled) {
            citiesMarkers = citiesMarkers.map(city => ({
                ...city,
                localTime: citiesData.getLocalTime(city.tz)
            }));
            updateCities();
        }
    }, 60000);
}

/**
 * Fetch weather for multiple cities with proper rate limiting
 */
async function fetchCitiesWeather(cities) {
    console.log('[WEATHER] Fetching weather for cities with rate limiting...');

    // Fetch one at a time with delays to avoid rate limits
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        try {
            const weather = await citiesData.fetchWeather(city);
            if (weather) {
                city.weather = weather;
            }
            // Wait 200ms between requests to respect rate limits
            await new Promise(resolve => setTimeout(resolve, 200));
        } catch (error) {
            console.warn(`[WEATHER] Failed for ${city.name}, skipping`);
            // Continue with other cities even if one fails
        }
    }

    console.log('[WEATHER] ✓ Weather fetching complete');
}

/**
 * Update city markers
 */
function updateCities() {
    updateHtmlElements();
    console.log(`[CITIES] Displaying ${citiesMarkers.length} cities`);
}

/**
 * Update all HTML elements (Moon + ISS + Cities) on globe
 * This prevents conflicts between multiple markers using htmlElementsData
 */
function updateHtmlElements() {
    if (!globe) return;

    const elements = [];

    // Add moon if enabled
    if (moonEnabled && currentMoonData) {
        const pos = currentMoonData.position;
        elements.push({
            type: 'moon',
            lat: pos.lat,
            lng: pos.lng,
            altitude: 0.5, // Higher altitude for visibility
            data: currentMoonData
        });
    }

    // Add ISS if available
    if (window.currentISSData) {
        elements.push({
            type: 'iss',
            lat: window.currentISSData.lat,
            lng: window.currentISSData.lng,
            altitude: 0.02,
            data: window.currentISSData
        });
    }

    // Add cities if enabled
    if (citiesEnabled && citiesMarkers.length > 0) {
        citiesMarkers.forEach(city => {
            elements.push({
                type: 'city',
                lat: city.lat,
                lng: city.lng,
                altitude: 0.01,
                data: city
            });
        });
    }

    globe
        .htmlElementsData(elements)
        .htmlLat(d => d.lat)
        .htmlLng(d => d.lng)
        .htmlAltitude(d => d.altitude)
        .htmlElement(d => {
            const el = document.createElement('div');
            el.style.pointerEvents = 'auto';

            if (d.type === 'moon') {
                el.innerHTML = currentMoonData.emoji;
                el.style.fontSize = '40px';
                el.style.cursor = 'pointer';
                el.style.textShadow = '0 0 30px rgba(255,255,200,0.9), 0 0 15px rgba(255,255,255,0.6), 2px 2px 6px rgba(0,0,0,0.8)';
                el.style.filter = 'drop-shadow(0 0 10px rgba(255,255,255,0.5))';
                el.title = 'The Moon - ' + currentMoonData.position.phase;
                el.onclick = () => showMoonInfo();
            } else if (d.type === 'iss') {
                el.innerHTML = '🛰️';
                el.style.fontSize = '24px';
                el.style.cursor = 'pointer';
                el.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
                el.title = 'International Space Station';
                el.onclick = () => showISSInfo(d.data);
            } else if (d.type === 'city') {
                const city = d.data;
                el.style.cssText = `
                    color: ${city.isDaytime ? '#FFD700' : '#87CEEB'};
                    font-size: 12px;
                    font-weight: 600;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8);
                    pointer-events: auto;
                    cursor: pointer;
                    white-space: nowrap;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                `;

                let text = city.name;
                if (city.weather && city.weather.emoji && city.weather.temp !== undefined) {
                    text = `${city.name} ${city.weather.emoji} ${city.weather.temp}°`;
                } else if (city.weather && city.weather.temp !== undefined) {
                    text = `${city.name} 🌍 ${city.weather.temp}°`;
                }

                el.textContent = text;
                el.onclick = () => showCityInfo(city);
            }

            return el;
        });

    const moonCount = moonEnabled && currentMoonData ? 1 : 0;
    const issCount = window.currentISSData ? 1 : 0;
    const cityCount = citiesEnabled ? citiesMarkers.length : 0;
    console.log(`[HTML] Updated ${elements.length} HTML markers (Moon: ${moonCount}, ISS: ${issCount}, Cities: ${cityCount})`);
}

/**
 * Fetch and display hurricanes
 */
async function fetchHurricanes() {
    try {
        const storms = await hurricanesData.fetchStorms();
        currentStorms = storms;

        // Update count
        if (document.getElementById('stormsCount')) {
            const countEl = document.getElementById('stormsCount');
            countEl.textContent = storms.length;

            // Add tooltip if CORS blocked
            if (storms.length === 0) {
                countEl.title = 'NOAA API unavailable due to browser CORS restrictions';
                countEl.style.opacity = '0.6';
            }
        }

        if (hurricanesEnabled) {
            updateHurricanes();
        }
    } catch (error) {
        console.error('[HURRICANES] Failed to fetch:', error);

        // Show 0 with explanation
        if (document.getElementById('stormsCount')) {
            const countEl = document.getElementById('stormsCount');
            countEl.textContent = '0';
            countEl.title = 'Hurricane data unavailable';
            countEl.style.opacity = '0.6';
        }
    }
}

/**
 * Update hurricane markers on globe
 */
function updateHurricanes() {
    updateAllRings();
}

/**
 * Update all rings (hurricanes only - satellites moved to HTML elements)
 */
function updateAllRings() {
    if (!globe) return;

    const allRings = [];

    // Add hurricane rings if enabled
    if (hurricanesEnabled && currentStorms.length > 0) {
        currentStorms.forEach(storm => {
            allRings.push({
                type: 'storm',
                lat: storm.lat,
                lng: storm.lng,
                maxR: HurricanesData.getStormSize(storm),
                propagationSpeed: 0.4,
                repeatPeriod: 1500,
                color: HurricanesData.getStormColor(storm),
                data: storm
            });
        });
    }

    globe
        .ringsData(allRings)
        .ringColor('color')
        .ringMaxRadius('maxR')
        .ringPropagationSpeed('propagationSpeed')
        .ringRepeatPeriod('repeatPeriod')
        .ringAltitude(0.005);

    const stormCount = allRings.length;
    console.log(`[RINGS] Displaying ${stormCount} storms`);
}

/**
 * Initialize satellites - smooth point rendering with fixed positions
 */
function initSatellites() {
    // Generate once and cache - positions won't change
    currentSatellites = satellitesData.generateConstellationView();

    // Pre-select which satellites to display (40 total) - this list stays fixed
    const starlinkSats = currentSatellites.filter(s => s.constellation === 'starlink').slice(0, 20);
    const onewebSats = currentSatellites.filter(s => s.constellation === 'oneweb').slice(0, 10);
    const gpsSats = currentSatellites.filter(s => s.constellation === 'gps').slice(0, 10);
    currentSatellites = [...starlinkSats, ...onewebSats, ...gpsSats];

    // Update count
    if (document.getElementById('satellitesCount')) {
        document.getElementById('satellitesCount').textContent = currentSatellites.length;
    }

    // Update display
    updateAllPoints();

    console.log('[SATELLITES] Initialized with 40 fixed satellites');
}

/**
 * Update satellite positions (disabled - static display)
 */
function updateSatellitePositions() {
    // Satellites are now static - no position updates
}

/**
 * Display satellites - now handled by updateAllPoints
 */
function updateSatellites() {
    updateAllPoints();
}

/**
 * Show storm information panel
 */
function showStormInfo(storm) {
    const panel = document.getElementById('infoPanel');
    const content = panel.querySelector('.info-content');

    const category = HurricanesData.getStormCategory(storm);

    content.innerHTML = `
        <div class="info-header">
            <div class="icon-circle">🌀</div>
            <h2 class="info-title">${storm.name || 'Unnamed Storm'}</h2>
            <p class="info-subtitle">${category}</p>
        </div>
        <div class="feature-grid">
            <div class="feature-card">
                <h3>💨 Wind Speed</h3>
                <p style="font-size: 24px; font-weight: bold;">${storm.windSpeed || 'N/A'} mph</p>
            </div>
            <div class="feature-card">
                <h3>📍 Position</h3>
                <p>${storm.lat.toFixed(2)}°, ${storm.lng.toFixed(2)}°</p>
            </div>
            <div class="feature-card">
                <h3>🌡️ Pressure</h3>
                <p>${storm.pressure || 'N/A'} mb</p>
            </div>
            <div class="feature-card">
                <h3>➡️ Movement</h3>
                <p>${storm.movement || 'N/A'}</p>
            </div>
            ${storm.link ? `
                <div class="feature-card">
                    <h3>ℹ️ More Info</h3>
                    <p><a href="${storm.link}" target="_blank" style="color: #3b82f6;">NOAA Storm Page →</a></p>
                </div>
            ` : ''}
        </div>
    `;

    panel.style.display = 'block';
    panel.classList.add('visible');
}

/**
 * Show satellite information panel
 */
function showSatelliteInfo(satellite) {
    const panel = document.getElementById('infoPanel');
    const content = panel.querySelector('.info-content');

    const constellationNames = {
        starlink: 'Starlink',
        oneweb: 'OneWeb',
        gps: 'GPS'
    };

    const constellationInfo = {
        starlink: 'SpaceX low-Earth orbit internet constellation',
        oneweb: 'Global satellite internet provider',
        gps: 'Global Positioning System navigation satellites'
    };

    content.innerHTML = `
        <div class="info-header">
            <h2 class="info-title">${satellite.name}</h2>
            <p class="info-subtitle">${constellationNames[satellite.constellation] || satellite.constellation}</p>
        </div>
        <div class="feature-grid">
            <div class="feature-card">
                <h3>📡 Type</h3>
                <p>${satellite.satelliteType || 'Communications'}</p>
            </div>
            <div class="feature-card">
                <h3>🛰️ Constellation</h3>
                <p>${constellationNames[satellite.constellation] || satellite.constellation}</p>
                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">${constellationInfo[satellite.constellation] || ''}</p>
            </div>
            <div class="feature-card">
                <h3>⬆️ Altitude</h3>
                <p style="font-size: 24px; font-weight: bold;">${Math.round(satellite.altitude)} km</p>
            </div>
            <div class="feature-card">
                <h3>📍 Position</h3>
                <p>${satellite.lat.toFixed(2)}°, ${satellite.lng.toFixed(2)}°</p>
            </div>
        </div>
    `;

    panel.style.display = 'block';
    panel.classList.add('visible');
}

/**
 * Show city information panel
 */
function showCityInfo(city) {
    const panel = document.getElementById('infoPanel');
    const content = panel.querySelector('.info-content');

    const weatherInfo = city.weather
        ? `
            <div class="feature-card">
                <h3>${city.weather.emoji} ${city.weather.description}</h3>
                <p style="font-size: 28px; font-weight: bold;">${city.weather.temp}°C</p>
            </div>
          `
        : '';

    content.innerHTML = `
        <div class="info-header">
            <h2 class="info-title">${city.name}, ${city.country}</h2>
        </div>
        <div class="feature-grid">
            <div class="feature-card">
                <h3>⏰ Local Time</h3>
                <p style="font-size: 20px; font-weight: bold;">${city.localTime}</p>
                <p style="font-size: 14px; opacity: 0.8;">${city.isDaytime ? '☀️ Daytime' : '🌙 Nighttime'}</p>
            </div>
            ${weatherInfo}
            <div class="feature-card">
                <h3>📍 Coordinates</h3>
                <p>${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</p>
            </div>
            <div class="feature-card">
                <h3>🌍 Timezone</h3>
                <p>${city.tz}</p>
            </div>
        </div>
    `;

    panel.style.display = 'block';
    panel.classList.add('visible');
}

/**
 * Show ISS info panel
 */
function showISSInfo(issData) {
    const panel = document.getElementById('infoPanel');
    const content = panel.querySelector('.info-content');

    content.innerHTML = `
        <div class="info-header">
            <div class="icon-circle">🛰️</div>
            <h2 class="info-title">International Space Station</h2>
            <p class="info-subtitle">Live Position Tracker</p>
        </div>
        <div class="info-body">
            <p class="hand-note">Currently orbiting Earth!</p>

            <div class="feature-list">
                <div class="feature-item">
                    <span class="check-mark">📍</span>
                    <span><strong>Location:</strong> ${issData.lat.toFixed(4)}°, ${issData.lng.toFixed(4)}°</span>
                </div>
                <div class="feature-item">
                    <span class="check-mark">⬆️</span>
                    <span><strong>Altitude:</strong> ${Math.round(issData.altitude)} km above Earth</span>
                </div>
                <div class="feature-item">
                    <span class="check-mark">⚡</span>
                    <span><strong>Speed:</strong> ${Math.round(issData.velocity)} km/h</span>
                </div>
                <div class="feature-item">
                    <span class="check-mark">👁️</span>
                    <span><strong>Visibility:</strong> ${issData.visibility || 'Unknown'}</span>
                </div>
            </div>

            <div class="tip-box">
                <div class="tip-icon">💡</div>
                <p><strong>Fun Fact:</strong> The ISS completes one orbit around Earth every 90 minutes, traveling at 5 miles per second!</p>
            </div>
        </div>
    `;

    panel.style.display = 'block';
    panel.classList.add('visible');
}

/**
 * Show moon information panel
 */
function showMoonInfo() {
    if (!currentMoonData) {
        currentMoonData = MoonCalculator.getMoonInfo(new Date());
    }

    const panel = document.getElementById('infoPanel');
    const content = panel.querySelector('.info-content');

    const pos = currentMoonData.position;
    const nextFull = currentMoonData.nextFullMoon.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const nextNew = currentMoonData.nextNewMoon.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    content.innerHTML = `
        <div class="info-header">
            <div class="icon-circle">${currentMoonData.emoji}</div>
            <h2 class="info-title">The Moon</h2>
            <p class="info-subtitle">${pos.phase}</p>
        </div>
        <div class="feature-grid">
            <div class="feature-card">
                <h3>${currentMoonData.emoji} Current Phase</h3>
                <p style="font-size: 24px; font-weight: bold;">${pos.phase}</p>
                <p style="font-size: 14px; opacity: 0.8; margin-top: 4px;">${pos.illumination.toFixed(1)}% illuminated</p>
            </div>
            <div class="feature-card">
                <h3>🌍 Distance from Earth</h3>
                <p style="font-size: 24px; font-weight: bold;">${MoonCalculator.formatDistance(pos.distance)}</p>
                <p style="font-size: 14px; opacity: 0.8; margin-top: 4px;">Average: 384,400 km</p>
            </div>
            <div class="feature-card">
                <h3>📍 Current Position</h3>
                <p>${pos.lat.toFixed(2)}°, ${pos.lng.toFixed(2)}°</p>
                <p style="font-size: 14px; opacity: 0.8; margin-top: 4px;">Orbital position</p>
            </div>
            <div class="feature-card">
                <h3>🌕 Next Full Moon</h3>
                <p style="font-size: 18px; font-weight: bold;">${nextFull}</p>
                <p style="font-size: 14px; opacity: 0.8; margin-top: 4px;">In ${currentMoonData.daysToFullMoon} days</p>
            </div>
            <div class="feature-card">
                <h3>🌑 Next New Moon</h3>
                <p style="font-size: 18px; font-weight: bold;">${nextNew}</p>
                <p style="font-size: 14px; opacity: 0.8; margin-top: 4px;">In ${currentMoonData.daysToNewMoon} days</p>
            </div>
            <div class="feature-card">
                <h3>🌙 Moon Age</h3>
                <p style="font-size: 24px; font-weight: bold;">${pos.age.toFixed(1)} days</p>
                <p style="font-size: 14px; opacity: 0.8; margin-top: 4px;">Lunar cycle: 29.5 days</p>
            </div>
        </div>
    `;

    panel.style.display = 'block';
    panel.classList.add('visible');
}

/**
 * Setup control buttons
 */
function setupControls() {
    // Show info panel
    document.getElementById('showInfo').addEventListener('click', () => {
        const panel = document.getElementById('infoPanel');
        const isVisible = panel.style.display === 'block';

        if (isVisible) {
            panel.style.display = 'none';
            panel.classList.remove('visible');
        } else {
            // Show welcome message
            panel.querySelector('.info-content').innerHTML = `
                <div class="info-header">
                    <h2 class="info-title">Welcome to Real-Time Globe</h2>
                </div>
                <div class="feature-grid">
                    <div class="feature-card">
                        <h3>🌍 Day/Night Cycle</h3>
                        <p>Realistic lighting showing current day, night, and twilight zones</p>
                    </div>
                    <div class="feature-card">
                        <h3>🌙 Moon Tracker</h3>
                        <p>Real-time moon position with accurate phase tracking. Click moon or button for details!</p>
                    </div>
                    <div class="feature-card">
                        <h3>🛰️ ISS Tracker</h3>
                        <p>Live International Space Station position, updated every 5 seconds</p>
                    </div>
                    <div class="feature-card">
                        <h3>🛰️ Satellite Coverage</h3>
                        <p>40 satellites from Starlink, OneWeb, and GPS constellations</p>
                    </div>
                    <div class="feature-card">
                        <h3>🌀 Hurricane Tracking</h3>
                        <p>Shows active tropical storms when available (may be blocked by browser security)</p>
                    </div>
                    <div class="feature-card">
                        <h3>🔴 Earthquakes</h3>
                        <p>Recent seismic activity (magnitude 2.5+) from the last 24 hours</p>
                    </div>
                    <div class="feature-card">
                        <h3>🏙️ Major Cities</h3>
                        <p>32 major world cities with live weather and temperature. Click for details!</p>
                    </div>
                </div>
            `;
            panel.style.display = 'block';
            panel.classList.add('visible');
        }
    });

    // Reset view
    document.getElementById('resetView').addEventListener('click', () => {
        if (globe) {
            globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
        }
    });

    // Show moon info
    document.getElementById('showMoon').addEventListener('click', () => {
        showMoonInfo();
    });

    // Auto rotate toggle
    document.getElementById('autoRotate').addEventListener('click', (e) => {
        autoRotateEnabled = !autoRotateEnabled;
        if (globe) {
            globe.controls().autoRotate = autoRotateEnabled;
            globe.controls().autoRotateSpeed = 0.5;
        }
        e.target.textContent = autoRotateEnabled ? 'Stop Rotate' : 'Auto Rotate';
        e.target.style.background = autoRotateEnabled ? '#ff4d4d' : '';
        e.target.style.color = autoRotateEnabled ? 'white' : '';
    });

    // Toggle cities
    document.getElementById('toggleCities').addEventListener('click', function(e) {
        citiesEnabled = !citiesEnabled;
        this.classList.toggle('active', citiesEnabled);
        console.log(`[CITIES] Toggled ${citiesEnabled ? 'ON' : 'OFF'}`);
        updateHtmlElements();
    });

    // Toggle hurricanes
    document.getElementById('toggleHurricanes').addEventListener('click', function(e) {
        hurricanesEnabled = !hurricanesEnabled;
        this.classList.toggle('active', hurricanesEnabled);
        console.log(`[HURRICANES] Toggled ${hurricanesEnabled ? 'ON' : 'OFF'}`);
        updateHurricanes();
    });

    // Toggle satellites
    document.getElementById('toggleSatellites').addEventListener('click', function(e) {
        satellitesEnabled = !satellitesEnabled;
        this.classList.toggle('active', satellitesEnabled);
        console.log(`[SATELLITES] Toggled ${satellitesEnabled ? 'ON' : 'OFF'}`);
        updateSatellites();
    });

    // Close info panel
    document.getElementById('closePanel').addEventListener('click', () => {
        const panel = document.getElementById('infoPanel');
        panel.style.display = 'none';
        panel.classList.remove('visible');
    });

    console.log('[CONTROLS] All controls initialized');
}

/**
 * Handle window resize
 */
window.addEventListener('resize', () => {
    if (globe) {
        globe.width(document.getElementById('globe').offsetWidth);
        globe.height(document.getElementById('globe').offsetHeight);
    }
});

/**
 * Cleanup on page unload
 */
window.addEventListener('beforeunload', () => {
    if (realtimeData) {
        realtimeData.stop();
    }
});
