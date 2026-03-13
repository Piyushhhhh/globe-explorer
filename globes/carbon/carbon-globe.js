// Global variables
let globe;
let selectedCountry = null;

// Initialize the app
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
        setTimeout(() => {
            restoreLastState();
        }, 2500);

        console.log('Globe setup complete');
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
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('lightskyblue')
        .atmosphereAltitude(0.15)
        .width(window.innerWidth)
        .height(window.innerHeight);

    console.log('Globe instance created');

    // ✨ NEW: WebGL context loss recovery
    try {
        const canvas = globe.renderer().domElement;
        canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            console.error('[WEBGL] Context lost, attempting recovery');

            setTimeout(() => {
                showToast('Graphics error occurred. Reloading...', 5000, 'error');
                setTimeout(() => location.reload(), 2000);
            }, 2000);
        });
        console.log('[SECURITY] WebGL context loss handler registered');
    } catch (e) {
        console.warn('[WEBGL] Could not register context loss handler:', e);
    }

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

    // Add country polygons with borders
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
            // Validate data structure
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
                        if (carbonData[countryName]) {
                            const perCapita = carbonData[countryName].perCapita;
                            if (perCapita > 10) return 'rgba(231, 76, 60, 0.35)';
                            if (perCapita > 5) return 'rgba(243, 156, 18, 0.35)';
                            return 'rgba(46, 204, 113, 0.35)';
                        }
                        return 'rgba(96, 165, 250, 0.25)';
                    }

                    // Selected country
                    if (carbonData[countryName] && selectedCountry === countryName) {
                        const perCapita = carbonData[countryName].perCapita;
                        if (perCapita > 10) return 'rgba(231, 76, 60, 0.25)';
                        if (perCapita > 5) return 'rgba(243, 156, 18, 0.25)';
                        return 'rgba(46, 204, 113, 0.25)';
                    }

                    // Default state
                    if (carbonData[countryName]) {
                        const perCapita = carbonData[countryName].perCapita;
                        if (perCapita > 10) return 'rgba(231, 76, 60, 0.15)';
                        if (perCapita > 5) return 'rgba(243, 156, 18, 0.15)';
                        return 'rgba(46, 204, 113, 0.15)';
                    }
                    return 'rgba(50, 50, 50, 0.05)';
                })
                .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    if (carbonData[countryName] && selectedCountry === countryName) {
                        return '#60a5fa'; // Blue for selected
                    }
                    if (d === window.hoveredPolygon) {
                        return '#93c5fd'; // Light blue on hover
                    }
                    return '#999';
                })
                .polygonsTransitionDuration(300)
                .polygonAltitude(d => {
                    const countryName = d.properties.ADMIN;
                    if (d === window.hoveredPolygon) {
                        return 0.015; // Slight raise on hover
                    }
                    if (carbonData[countryName] && selectedCountry === countryName) {
                        return 0.04; // Higher raise for selected country
                    }
                    return 0.002; // Slightly raised base for better clicking
                })
                .polygonLabel(({ properties: d }) => {
                    const countryName = d.ADMIN;
                    if (carbonData[countryName]) {
                        const country = carbonData[countryName];
                        return `
                            <div style="background: rgba(0,0,0,0.93); padding: 18px; border-radius: 14px; color: white; min-width: 240px; backdrop-filter: blur(16px); border: 1px solid rgba(96, 165, 250, 0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.5);">
                                <div style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #60a5fa;">
                                    ${countryName}
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                                    <span>💨 Total CO₂</span>
                                    <strong>${country.total.toLocaleString()} Mt</strong>
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                                    <span>👤 Per Capita</span>
                                    <strong>${country.perCapita} tons</strong>
                                </div>
                                <div style="font-size: 15px; opacity: 0.95; margin: 8px 0; display: flex; justify-content: space-between;">
                                    <span>🌍 Global Rank</span>
                                    <strong>#${country.rank}</strong>
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

                    // ✨ NEW: Show tooltip on hover
                    if (polygon) {
                        const countryName = polygon.properties.ADMIN;
                        // Get mouse position from last mouse event
                        const mouseX = window.lastMouseX || window.innerWidth / 2;
                        const mouseY = window.lastMouseY || window.innerHeight / 2;
                        handleCountryHover(countryName, { x: mouseX, y: mouseY });
                    } else {
                        handleHoverExit();
                    }

                    // Trigger re-render to update colors and altitude
                    if (globe) {
                        globe.polygonsData(globe.polygonsData());
                    }
                })
                .onPolygonClick((polygon) => {
                    const countryName = polygon.properties.ADMIN;
                    const coords = getCountryCenter(polygon);

                    // Validate coords before passing
                    if (!coords || !Array.isArray(coords) || coords.length !== 2) {
                        console.warn('[APP] Invalid coords for', countryName, ':', coords);
                        // Try to get coordinates from carbonData if available
                        const fallbackCoords = countryCoordinates && countryCoordinates[countryName]
                            ? [countryCoordinates[countryName].lon, countryCoordinates[countryName].lat]
                            : null;
                        handleCountryClick(countryName, fallbackCoords);
                        return;
                    }

                    // ✨ NEW: Use gesture handler instead of direct call
                    handleCountryClick(countryName, coords);
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
        })
        .catch(error => {
            console.error('Error loading countries:', error);
        });

    // Helper function to get country center
    function getCountryCenter(country) {
        try {
            if (!country || !country.geometry || !country.geometry.coordinates) {
                console.warn('[APP] Invalid country geometry:', country);
                return [0, 0];
            }

            if (country.geometry.type === 'Polygon') {
                const coords = country.geometry.coordinates[0];
                if (!coords || coords.length === 0) {
                    return [0, 0];
                }
                const center = coords.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0]);
                return [center[0] / coords.length, center[1] / coords.length];
            } else if (country.geometry.type === 'MultiPolygon') {
                const firstPolygon = country.geometry.coordinates[0][0];
                if (!firstPolygon || firstPolygon.length === 0) {
                    return [0, 0];
                }
                const center = firstPolygon.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0]);
                return [center[0] / firstPolygon.length, center[1] / firstPolygon.length];
            }
            return [0, 0];
        } catch (error) {
            console.error('[APP] Error in getCountryCenter:', error);
            return [0, 0];
        }
    }

    // Load detailed boundaries for states/provinces
    let detailedBoundariesLoaded = false;
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_1_states_provinces_lines.geojson')
        .then(res => res.json())
        .then(boundaries => {
            if (boundaries && boundaries.features && Array.isArray(boundaries.features)) {
                console.log('Detailed state/province boundaries loaded:', boundaries.features.length);
                window.detailedBoundaries = boundaries;
                detailedBoundariesLoaded = true;
            } else {
                throw new Error('Invalid boundary data');
            }
        })
        .catch(err => {
            console.log('Loading alternative state boundaries...');
            // Try alternative source
            fetch('https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson')
                .then(res => res.json())
                .then(data => {
                    console.log('Alternative boundaries loaded');
                    window.detailedBoundaries = data;
                    detailedBoundariesLoaded = true;
                })
                .catch(err2 => {
                    console.log('Could not load detailed boundaries');
                    window.detailedBoundaries = null;
                });
        });

    // Monitor zoom level to show/hide detailed boundaries and labels
    let lastAltitude = 2.5;
    let detailsVisible = false;

    setInterval(() => {
        if (!globe) return;

        const pov = globe.pointOfView();
        const currentAltitude = pov.altitude;

        // Show detailed boundaries when zoomed in (altitude < 1.2)
        if (currentAltitude < 1.2 && !detailsVisible) {
            console.log('Showing detailed boundaries');
            detailsVisible = true;
            showDetailedBoundaries();
            // Make country borders thicker
            globe
                .polygonsData(window.countriesData)
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    if (carbonData[countryName] && selectedCountry === countryName) {
                        return '#60a5fa';
                    }
                    if (d === window.hoveredPolygon) {
                        return '#93c5fd';
                    }
                    return '#aaa'; // Lighter when zoomed in
                });
        } else if (currentAltitude >= 1.2 && detailsVisible) {
            console.log('Hiding detailed boundaries');
            detailsVisible = false;
            globe.pathsData([]);
            // Reset country borders
            globe
                .polygonsData(window.countriesData)
                .polygonStrokeColor((d) => {
                    const countryName = d.properties.ADMIN;
                    if (carbonData[countryName] && selectedCountry === countryName) {
                        return '#60a5fa';
                    }
                    if (d === window.hoveredPolygon) {
                        return '#93c5fd';
                    }
                    return '#999';
                });
        }

        lastAltitude = currentAltitude;
    }, 300);

    function showDetailedBoundaries() {
        if (!window.detailedBoundaries) {
            // Create synthetic state lines from country polygons
            const syntheticLines = [];
            window.countriesData.forEach(country => {
                if (country.geometry.type === 'Polygon') {
                    syntheticLines.push({
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: country.geometry.coordinates[0]
                        }
                    });
                } else if (country.geometry.type === 'MultiPolygon') {
                    country.geometry.coordinates.forEach(polygon => {
                        syntheticLines.push({
                            type: 'Feature',
                            geometry: {
                                type: 'LineString',
                                coordinates: polygon[0]
                            }
                        });
                    });
                }
            });

            globe
                .pathsData(syntheticLines)
                .pathColor(() => 'rgba(255, 255, 255, 0.25)')
                .pathStroke(0.3)
                .pathDashLength(1)
                .pathDashGap(0)
                .pathDashAnimateTime(0);
            return;
        }

        const paths = window.detailedBoundaries.features || [];
        globe
            .pathsData(paths)
            .pathColor(() => 'rgba(255, 255, 255, 0.4)')
            .pathStroke(0.4)
            .pathDashLength(0.8)
            .pathDashGap(0.2)
            .pathDashAnimateTime(0)
            .pathLabel(d => {
                if (d.properties && d.properties.name) {
                    return `<div style="background: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; color: white; font-size: 12px;">${d.properties.name}</div>`;
                }
                return '';
            });
    }

    // Controls
    globe.controls().autoRotate = false;
    globe.controls().enableZoom = true;
    globe.controls().minDistance = 101;
    globe.controls().maxDistance = 500;

    // Camera initial position
    globe.pointOfView({
        lat: 20,
        lng: 0,
        altitude: 2.5
    });

    // Auto-hide zoom hint after 8 seconds
    setTimeout(() => {
        const zoomHint = document.getElementById('zoomHint');
        if (zoomHint) {
            zoomHint.style.transition = 'opacity 1s ease';
            zoomHint.style.opacity = '0';
            setTimeout(() => {
                zoomHint.style.display = 'none';
            }, 1000);
        }
    }, 8000);

    // Hide zoom hint on first interaction
    let interacted = false;
    globe.controls().addEventListener('change', () => {
        if (!interacted) {
            interacted = true;
            const zoomHint = document.getElementById('zoomHint');
            if (zoomHint) {
                zoomHint.style.transition = 'opacity 0.5s ease';
                zoomHint.style.opacity = '0';
                setTimeout(() => {
                    zoomHint.style.display = 'none';
                }, 500);
            }
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // ✨ NEW: Track mouse position for tooltips
    window.addEventListener('mousemove', (e) => {
        window.lastMouseX = e.clientX;
        window.lastMouseY = e.clientY;
    });

    // Window resize
    window.addEventListener('resize', () => {
        if (globe) {
            globe
                .width(window.innerWidth)
                .height(window.innerHeight);
        }
    });

    // Control buttons
    document.getElementById('resetView').addEventListener('click', resetView);
    document.getElementById('autoRotate').addEventListener('click', toggleAutoRotate);

    // Close panel button - delegate to handle dynamically added buttons
    document.addEventListener('click', (e) => {
        if (e.target.id === 'closePanel' || e.target.closest('#closePanel')) {
            const infoPanel = document.getElementById('infoPanel');
            infoPanel.classList.add('hidden');
            selectedCountry = null;
            window.selectedPolygon = null;
            window.hoveredPolygon = null;
            if (globe && window.countriesData) {
                globe.polygonsData(window.countriesData);
            }
        }
    });
}

// Select and display country information with smooth zoom
function selectCountry(countryName, coords) {
    // ✨ NEW: Validate country data exists
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
    if (coords && Array.isArray(coords) && coords.length === 2) {
        globe.pointOfView({
            lat: coords[1],
            lng: coords[0],
            altitude: 0.8  // Zoom in closer to show more detail
        }, 1500);
    } else if (coords) {
        console.warn('[APP] Invalid coords format:', coords);
    }

    // Update polygons to show elevation
    if (globe && window.countriesData) {
        globe.polygonsData(window.countriesData);
    }

    // Build modern redesigned HTML (with IDs for animation)
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
                    <div class="metric-value"><span id="totalValue">0</span><span class="metric-unit">Mt</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">👤</div>
                <div class="metric-details">
                    <div class="metric-label">Per Capita Emissions</div>
                    <div class="metric-value"><span id="perCapitaValue">0</span><span class="metric-unit">tons/year</span></div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">👥</div>
                <div class="metric-details">
                    <div class="metric-label">Population</div>
                    <div class="metric-value"><span id="populationValue">0</span><span class="metric-unit">Million</span></div>
                </div>
            </div>

            <div class="trend-card ${getTrendClass(country.trend)}">
                <div class="trend-header">
                    <span class="trend-icon">${getTrendIcon(country.trend)}</span>
                    <span class="trend-label">Year-over-Year Change</span>
                </div>
                <div class="trend-value">${country.trend}</div>
            </div>

            <div class="sector-card">
                <h3>Emissions by Sector</h3>
                <div class="sector-item">
                    <div class="sector-header">
                        <span class="sector-dot" style="background: #ef4444;"></span>
                        <span>Energy</span>
                        <span class="sector-percent">${country.sector.energy}%</span>
                    </div>
                    <div class="sector-bar">
                        <div class="sector-fill" style="width: ${country.sector.energy}%; background: linear-gradient(90deg, #ef4444, #dc2626);"></div>
                    </div>
                </div>
                <div class="sector-item">
                    <div class="sector-header">
                        <span class="sector-dot" style="background: #3b82f6;"></span>
                        <span>Transport</span>
                        <span class="sector-percent">${country.sector.transport}%</span>
                    </div>
                    <div class="sector-bar">
                        <div class="sector-fill" style="width: ${country.sector.transport}%; background: linear-gradient(90deg, #3b82f6, #2563eb);"></div>
                    </div>
                </div>
                <div class="sector-item">
                    <div class="sector-header">
                        <span class="sector-dot" style="background: #8b5cf6;"></span>
                        <span>Industry</span>
                        <span class="sector-percent">${country.sector.industry}%</span>
                    </div>
                    <div class="sector-bar">
                        <div class="sector-fill" style="width: ${country.sector.industry}%; background: linear-gradient(90deg, #8b5cf6, #7c3aed);"></div>
                    </div>
                </div>
                <div class="sector-item">
                    <div class="sector-header">
                        <span class="sector-dot" style="background: #64748b;"></span>
                        <span>Other</span>
                        <span class="sector-percent">${country.sector.other}%</span>
                    </div>
                    <div class="sector-bar">
                        <div class="sector-fill" style="width: ${country.sector.other}%; background: linear-gradient(90deg, #64748b, #475569);"></div>
                    </div>
                </div>
            </div>

            <div class="context-card">
                <div class="context-icon">🌍</div>
                <div class="context-text">${getGlobalContext(country)}</div>
            </div>
        </div>
    `;

    infoPanel.innerHTML = html;

    // ✨ NEW: Animate numbers with count-up effect
    setTimeout(() => {
        const totalElem = document.getElementById('totalValue');
        const perCapitaElem = document.getElementById('perCapitaValue');
        const populationElem = document.getElementById('populationValue');

        if (totalElem) {
            countUp(totalElem, 0, country.total, 1000, '');
        }

        if (perCapitaElem) {
            countUp(perCapitaElem, 0, country.perCapita, 1000, '');
        }

        if (populationElem) {
            countUp(populationElem, 0, country.population, 1000, '');
        }
    }, 100);

    // ✨ NEW: Show celebration if emissions declining significantly
    if (country.trend && parseFloat(country.trend) < -5 && CONFIG.ENABLE_CELEBRATION_EFFECTS) {
        const rect = infoPanel.getBoundingClientRect();
        setTimeout(() => {
            celebrationSparkles({ x: rect.left + rect.width / 2, y: rect.top + 50 });
        }, 800);
    }

    // Re-attach close button event listener
    const closeBtn = document.getElementById('closePanel');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            infoPanel.classList.add('hidden');
            selectedCountry = null;
            window.selectedPolygon = null;
            // Update polygons to remove elevation
            if (globe && window.countriesData) {
                globe.polygonsData(window.countriesData);
            }
        });
    }
}

// Helper functions
function getCountryEmoji(countryName) {
    const emojis = {
        'China': '🇨🇳',
        'United States': '🇺🇸',
        'India': '🇮🇳',
        'Russia': '🇷🇺',
        'Japan': '🇯🇵',
        'Germany': '🇩🇪',
        'Iran': '🇮🇷',
        'South Korea': '🇰🇷',
        'Saudi Arabia': '🇸🇦',
        'Indonesia': '🇮🇩',
        'Canada': '🇨🇦',
        'Brazil': '🇧🇷',
        'Mexico': '🇲🇽',
        'Australia': '🇦🇺',
        'United Kingdom': '🇬🇧',
        'France': '🇫🇷',
        'Italy': '🇮🇹',
        'Spain': '🇪🇸'
    };
    return emojis[countryName] || '🌍';
}

function getTrendClass(trend) {
    const value = parseFloat(trend);
    if (value > 0) return 'trend-up';
    if (value < 0) return 'trend-down';
    return 'trend-neutral';
}

function getTrendIcon(trend) {
    const value = parseFloat(trend);
    if (value > 0) return '📈';
    if (value < 0) return '📉';
    return '➡️';
}

// Get global context for country
function getGlobalContext(country) {
    if (country.perCapita > 15) {
        return "This country has very high per capita emissions, significantly above the global average of 4.7 tons per person.";
    } else if (country.perCapita > 7) {
        return "This country's per capita emissions are above the global average of 4.7 tons per person.";
    } else if (country.perCapita > 3) {
        return "This country's per capita emissions are close to the global average of 4.7 tons per person.";
    } else {
        return "This country has below-average per capita emissions compared to the global average of 4.7 tons per person.";
    }
}

// Reset camera view
function resetView() {
    if (globe) {
        globe.pointOfView({
            lat: 20,
            lng: 0,
            altitude: 2.5
        }, 1000);

        // ✨ NEW: Use state machine to reset to VIEW mode
        setState('VIEW', {});

        selectedCountry = null;
        window.selectedPolygon = null;
        window.hoveredPolygon = null;
        document.getElementById('infoPanel').classList.add('hidden');

        // ✨ NEW: Hide any active UI elements
        hideTimeScrubber();
        hideGhostPanel();
        hideTooltip();

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
        button.style.background = globe.controls().autoRotate ? 'rgba(231, 76, 60, 0.9)' : 'rgba(52, 152, 219, 0.9)';
    }
}

// ========================================
// NEW: TIME-TRAVEL MODE FUNCTIONS
// ========================================

/**
 * Initialize time-travel mode for a country
 */
async function initializeTimeTravelMode(country) {
    showTimeScrubber(country, 2023);

    // Check if historical data is available
    if (!isHistoricalDataReady(country)) {
        showLoadingIndicator('Loading historical data...');

        try {
            await fetchHistoricalData(country);
            hideLoadingIndicator();
            showToast('Historical data loaded successfully', 2000, 'success');
        } catch (error) {
            hideLoadingIndicator();
            showToast('Historical data unavailable. Showing 2023 only.', 4000, 'warning');
        }
    }
}

/**
 * Set time-travel year (called by scrubber drag)
 */
function setTimeTravelYear(year) {
    const state = getState();
    if (state.mode !== 'TIME_TRAVEL' || !state.selectedCountry) {
        return;
    }

    // Update state
    STATE.currentYear = year;

    // Render that year's data (throttled)
    const throttledRender = throttleRender(renderTimeSeries, CONFIG.ANIMATION_THROTTLE_FPS);
    throttledRender(state.selectedCountry, year);
}

/**
 * Render historical year on globe
 */
function renderTimeSeries(country, year) {
    if (!window.countriesData) return;

    const historicalData = window.historicalDataCache[country];
    if (!historicalData) {
        console.warn('[TIME-TRAVEL] No historical data for', country);
        return;
    }

    // Find data for this year
    const yearData = historicalData.find(d => d.year === year);
    if (!yearData) {
        console.warn('[TIME-TRAVEL] No data for year', year);
        return;
    }

    // Update globe colors based on that year's emissions
    globe.polygonCapColor((d) => {
        const countryName = d.properties.ADMIN;

        if (countryName === country) {
            // Selected country in time-travel - use historical data
            const perCapita = yearData.perCapita;
            if (perCapita > 10) return 'rgba(231, 76, 60, 0.35)';
            if (perCapita > 5) return 'rgba(243, 156, 18, 0.35)';
            return 'rgba(46, 204, 113, 0.35)';
        }

        // Other countries show current 2023 data
        if (carbonData[countryName]) {
            const perCapita = carbonData[countryName].perCapita;
            if (perCapita > 10) return 'rgba(231, 76, 60, 0.15)';
            if (perCapita > 5) return 'rgba(243, 156, 18, 0.15)';
            return 'rgba(46, 204, 113, 0.15)';
        }

        return 'rgba(50, 50, 50, 0.05)';
    });

    // Update info panel with historical year data
    const totalElem = document.getElementById('totalValue');
    const perCapitaElem = document.getElementById('perCapitaValue');

    if (totalElem) {
        countUp(totalElem, parseInt(totalElem.textContent) || 0, yearData.total, 500, '');
    }

    if (perCapitaElem) {
        countUp(perCapitaElem, parseFloat(perCapitaElem.textContent) || 0, yearData.perCapita, 500, '');
    }
}

// ========================================
// NEW: COMPARE MODE FUNCTIONS
// ========================================

/**
 * Add country to comparison
 */
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
        if (carbonData[country2]) {
            showGhostPanel(country2, carbonData[country2]);
        }
    }

    showToast(`${country} added to comparison`, 2000, 'success');
}

/**
 * Remove country from comparison
 */
function removeFromComparison(country) {
    const index = STATE.comparedCountries.indexOf(country);
    if (index > -1) {
        STATE.comparedCountries.splice(index, 1);
    }

    if (STATE.comparedCountries.length < 2) {
        hideGhostPanel();
    }

    showToast(`${country} removed from comparison`, 2000, 'info');
}

/**
 * Reset globe highlights
 */
function resetGlobeHighlights() {
    if (globe && window.countriesData) {
        globe.polygonsData(window.countriesData);
    }
}

/**
 * Reset globe colors (after time-travel)
 */
function resetGlobeColors() {
    if (globe && window.countriesData) {
        // Re-apply default color scheme
        globe.polygonCapColor((d) => {
            const countryName = d.properties.ADMIN;

            if (d === window.hoveredPolygon) {
                if (carbonData[countryName]) {
                    const perCapita = carbonData[countryName].perCapita;
                    if (perCapita > 10) return 'rgba(231, 76, 60, 0.35)';
                    if (perCapita > 5) return 'rgba(243, 156, 18, 0.35)';
                    return 'rgba(46, 204, 113, 0.35)';
                }
                return 'rgba(96, 165, 250, 0.25)';
            }

            if (carbonData[countryName] && selectedCountry === countryName) {
                const perCapita = carbonData[countryName].perCapita;
                if (perCapita > 10) return 'rgba(231, 76, 60, 0.25)';
                if (perCapita > 5) return 'rgba(243, 156, 18, 0.25)';
                return 'rgba(46, 204, 113, 0.25)';
            }

            if (carbonData[countryName]) {
                const perCapita = carbonData[countryName].perCapita;
                if (perCapita > 10) return 'rgba(231, 76, 60, 0.15)';
                if (perCapita > 5) return 'rgba(243, 156, 18, 0.15)';
                return 'rgba(46, 204, 113, 0.15)';
            }

            return 'rgba(50, 50, 50, 0.05)';
        });
    }
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
