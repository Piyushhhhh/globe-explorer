/**
 * Real-Time Globe Visualization
 * Main globe setup with live data integration
 */

let globe;
let autoRotateEnabled = false;
let nightLightsEnabled = false;

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

    // Hide loading screen and show welcome panel
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        // Show welcome info panel
        const panel = document.getElementById('infoPanel');
        panel.classList.add('visible');
        panel.style.display = 'block';
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

        // Load country boundaries
        fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(countries => {
                globe
                    .polygonsData(countries.features)
                    .polygonCapColor(() => 'rgba(255, 255, 255, 0.1)')
                    .polygonSideColor(() => 'rgba(100, 100, 100, 0.1)')
                    .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.3)')
                    .polygonAltitude(0.001);

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
 * Apply day/night terminator shader
 */
function applyDayNightShader() {
    // Update shader every 10 seconds
    updateDayNightShader();
    setInterval(updateDayNightShader, 10000);
}

/**
 * Update day/night shader based on current time
 */
function updateDayNightShader() {
    const now = new Date();
    const sunPos = SunCalculator.getSubsolarPoint(now);

    // Create custom material with day/night transition
    // This is a simplified version - full shader would be more complex
    console.log(`[SUN] Position: ${sunPos.lat.toFixed(2)}°, ${sunPos.lng.toFixed(2)}°`);

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
}

/**
 * Update ISS marker on globe
 */
function updateISSMarker(issData) {
    if (!globe || !issData) return;

    const marker = [{
        lat: issData.lat,
        lng: issData.lng,
        label: `🛰️ ISS`,
        altitude: 0.02,
        color: '#FFD700',
        size: 1.5
    }];

    globe
        .htmlElementsData(marker)
        .htmlElement(d => {
            const el = document.createElement('div');
            el.innerHTML = d.label;
            el.style.fontSize = '24px';
            el.style.cursor = 'pointer';
            el.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
            el.onclick = () => showISSInfo(issData);
            return el;
        });
}

/**
 * Update earthquake markers
 */
function updateEarthquakes(earthquakes) {
    if (!globe || !earthquakes || earthquakes.length === 0) return;

    const markers = earthquakes.map(eq => ({
        lat: eq.lat,
        lng: eq.lng,
        size: RealtimeData.getEarthquakeSize(eq.magnitude),
        color: RealtimeData.getEarthquakeColor(eq.magnitude),
        magnitude: eq.magnitude,
        place: eq.place,
        time: eq.time,
        url: eq.url
    }));

    globe
        .pointsData(markers)
        .pointColor('color')
        .pointAltitude(0.005)
        .pointRadius('size')
        .pointLabel(d => `
            <div style="background: rgba(0,0,0,0.8); padding: 10px; border-radius: 8px; color: white; font-family: 'Patrick Hand', cursive;">
                <strong>Magnitude ${d.magnitude}</strong><br/>
                ${RealtimeData.formatPlace(d.place)}<br/>
                <small>${new Date(d.time).toLocaleString()}</small>
            </div>
        `)
        .onPointClick(point => {
            if (point.url) {
                window.open(point.url, '_blank');
            }
        });

    console.log(`[EARTHQUAKES] Updated ${earthquakes.length} markers`);
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
                    <div class="icon-circle">🌍</div>
                    <h2 class="info-title">Welcome to Real-Time Globe!</h2>
                    <p class="info-subtitle">Live Earth Data Explorer</p>
                </div>

                <div class="info-body">
                    <p class="hand-note">Hey there! 👋</p>
                    <p>This globe shows Earth RIGHT NOW with:</p>

                    <div class="feature-list">
                        <div class="feature-item">
                            <span class="check-mark">✓</span>
                            <span><strong>Day/Night cycle</strong> based on actual sun position</span>
                        </div>
                        <div class="feature-item">
                            <span class="check-mark">✓</span>
                            <span><strong>ISS location</strong> updated every 5 seconds</span>
                        </div>
                        <div class="feature-item">
                            <span class="check-mark">✓</span>
                            <span><strong>Live earthquakes</strong> from the last 24 hours</span>
                        </div>
                        <div class="feature-item">
                            <span class="check-mark">✓</span>
                            <span><strong>Time zones</strong> showing current local time</span>
                        </div>
                    </div>

                    <div class="tip-box">
                        <div class="tip-icon">💡</div>
                        <p><strong>Tip:</strong> Click on the ISS or any earthquake to see details!</p>
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

    // City lights toggle (placeholder - would need nighttime texture)
    document.getElementById('toggleNightLights').addEventListener('click', (e) => {
        nightLightsEnabled = !nightLightsEnabled;
        e.target.textContent = nightLightsEnabled ? 'Lights: ON' : 'City Lights';
        e.target.style.background = nightLightsEnabled ? '#2d5da1' : '';
        e.target.style.color = nightLightsEnabled ? 'white' : '';

        if (globe) {
            if (nightLightsEnabled) {
                // Switch to nighttime texture with city lights
                globe.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg');
            } else {
                // Switch back to blue marble
                globe.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
            }
        }
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
