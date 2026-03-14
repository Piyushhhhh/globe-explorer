// Ancient Civilizations Globe Implementation

let globe;
let selectedSite = null;
let currentFilter = 'all';

// Initialize the globe
function initGlobe() {
    const container = document.getElementById('globe');

    // Create globe instance
    globe = Globe()
        (container)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
        .backgroundColor('rgba(244, 232, 208, 0)')
        .atmosphereColor('#d4af37')
        .atmosphereAltitude(0.15);

    // Set initial view
    globe.pointOfView({ altitude: 2.5 });

    // Wait a frame for THREE to be available, then add content
    setTimeout(() => {
        // Add ancient sites as 3D objects
        addAncientSites3D();

        // Add trade routes
        addTradeRoutes();
    }, 100);

    // Enable auto-rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // Handle window resize
    window.addEventListener('resize', () => {
        globe.width(container.clientWidth);
        globe.height(container.clientHeight);
    });

    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
}

// Create 3D monument objects
function create3DMonument(site, THREE) {
    if (!THREE) {
        console.error('THREE.js not available');
        return null;
    }

    // Period-based colors
    const colorMap = {
        ancient: 0xcd7f32,    // Bronze
        classical: 0xb87333,  // Copper
        medieval: 0x8b6914    // Dark goldenrod
    };

    const color = colorMap[site.period] || colorMap.ancient;
    const name = site.name.toLowerCase();
    const type = (site.type || '').toLowerCase();

    // Material for all monuments
    const material = new THREE.MeshLambertMaterial({
        color: color,
        emissive: 0x8b6914,
        emissiveIntensity: 0.3
    });

    let monument;

    // Create appropriate geometry based on monument type
    if (name.includes('pyramid') || name.includes('giza')) {
        // Pyramid shape (4-sided cone)
        const geometry = new THREE.ConeGeometry(0.35, 0.7, 4);
        monument = new THREE.Mesh(geometry, material);
        monument.rotation.y = Math.PI / 4; // Align faces
    }
    else if (name.includes('wall') || name.includes('great wall')) {
        // Wall segment (elongated box)
        const geometry = new THREE.BoxGeometry(0.8, 0.25, 0.15);
        monument = new THREE.Mesh(geometry, material);
    }
    else if (name.includes('colosseum') || name.includes('amphitheatre')) {
        // Circular arena
        const geometry = new THREE.CylinderGeometry(0.35, 0.4, 0.4, 16, 1, true);
        monument = new THREE.Mesh(geometry, material);
    }
    else if (name.includes('temple') || name.includes('angkor') || name.includes('borobudur') || name.includes('parthenon')) {
        // Temple with stepped levels (ziggurat style)
        monument = new THREE.Group();

        const baseMat = material.clone();
        const midMat = material.clone();
        const topMat = material.clone();

        const base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.5), baseMat);
        const mid = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.15, 0.35), midMat);
        const top = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 0.2), topMat);

        base.position.y = 0.075;
        mid.position.y = 0.225;
        top.position.y = 0.425;

        monument.add(base);
        monument.add(mid);
        monument.add(top);
    }
    else if (name.includes('stone') || name.includes('henge')) {
        // Standing stone pillar
        const geometry = new THREE.CylinderGeometry(0.08, 0.1, 0.6, 8);
        monument = new THREE.Mesh(geometry, material);
    }
    else if (name.includes('petra') || type.includes('sanctuary')) {
        // Carved facade (flat with some depth)
        const geometry = new THREE.BoxGeometry(0.4, 0.6, 0.15);
        monument = new THREE.Mesh(geometry, material);
    }
    else if (type.includes('city')) {
        // City - cluster of 3 buildings
        monument = new THREE.Group();

        const heights = [0.4, 0.5, 0.35];
        const positions = [
            { x: -0.15, z: 0 },
            { x: 0.15, z: 0.1 },
            { x: 0, z: -0.15 }
        ];

        for (let i = 0; i < 3; i++) {
            const building = new THREE.BoxGeometry(0.15, heights[i], 0.15);
            const mesh = new THREE.Mesh(building, material.clone());
            mesh.position.x = positions[i].x;
            mesh.position.z = positions[i].z;
            mesh.position.y = heights[i] / 2;
            monument.add(mesh);
        }
    }
    else {
        // Default: simple monument obelisk
        const geometry = new THREE.CylinderGeometry(0.1, 0.15, 0.5, 6);
        monument = new THREE.Mesh(geometry, material);
    }

    return monument;
}

// Add simple fallback markers if 3D doesn't work
function addSimpleMarkers() {
    globe.pointsData(ancientSites)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(d => {
            const colors = {
                ancient: '#cd7f32',
                classical: '#b87333',
                medieval: '#8b6914'
            };
            return colors[d.period] || colors.ancient;
        })
        .pointAltitude(0.01)
        .pointRadius(0.15)
        .pointLabel(d => `
            <div style="
                background: rgba(244, 232, 208, 0.95);
                padding: 10px 14px;
                border-radius: 12px;
                border: 2px solid #8b6914;
                font-family: 'Patrick Hand', cursive;
                color: #2d2d2d;
                box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
                max-width: 220px;
            ">
                <div style="font-family: 'Cinzel', serif; font-weight: bold; font-size: 16px; margin-bottom: 4px;">
                    ${d.icon} ${d.name}
                </div>
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">
                    ${d.civilization}
                </div>
                <div style="font-size: 11px; color: #8b6914;">
                    Founded: ${d.founded}
                </div>
                ${d.unesco ? '<div style="margin-top: 6px; font-size: 11px; color: #d4af37;">🏆 UNESCO</div>' : ''}
            </div>
        `)
        .onPointClick((d) => {
            showSiteInfo(d);
            selectedSite = d.name;
            globe.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.5 }, 1000);
        });
}

// Add ancient sites as 3D objects
function addAncientSites3D() {
    const THREE = window.THREE;

    if (!THREE || !THREE.BoxGeometry) {
        console.warn('THREE.js not fully loaded, using simple markers instead');
        addSimpleMarkers();
        return;
    }

    console.log(`Adding ${ancientSites.length} ancient sites as 3D objects`);

    globe.objectsData(ancientSites)
        .objectLat('lat')
        .objectLng('lng')
        .objectAltitude(0.01)
        .objectThreeObject(d => {
            try {
                const monument = create3DMonument(d, THREE);

                if (!monument) {
                    console.error(`Failed to create monument for ${d.name}`);
                    return null;
                }

                // Add subtle glow effect around monument
                const glowGeometry = new THREE.SphereGeometry(0.45, 16, 16);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: 0xd4af37,
                    transparent: true,
                    opacity: 0.2,
                    side: THREE.BackSide
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);

                const group = new THREE.Group();
                group.add(monument);
                group.add(glow);

                // Store references
                group.userData = {
                    site: d,
                    monument,
                    glow,
                    defaultScale: 1,
                    glowDefaultOpacity: 0.2
                };

                return group;
            } catch (error) {
                console.error(`Error creating monument for ${d.name}:`, error);
                return null;
            }
        })
        .objectLabel(d => `
            <div style="
                background: rgba(244, 232, 208, 0.95);
                padding: 10px 14px;
                border-radius: 12px;
                border: 2px solid #8b6914;
                font-family: 'Patrick Hand', cursive;
                color: #2d2d2d;
                box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
                max-width: 220px;
            ">
                <div style="font-family: 'Cinzel', serif; font-weight: bold; font-size: 16px; margin-bottom: 4px;">
                    ${d.icon} ${d.name}
                </div>
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">
                    ${d.civilization}
                </div>
                <div style="font-size: 11px; color: #8b6914;">
                    Founded: ${d.founded}
                </div>
                ${d.unesco ? '<div style="margin-top: 6px; font-size: 11px; color: #d4af37;">🏆 UNESCO World Heritage</div>' : ''}
            </div>
        `)
        .onObjectClick((d, event, { object }) => {
            showSiteInfo(d);
            selectedSite = d.name;

            // Zoom to site
            globe.pointOfView({
                lat: d.lat,
                lng: d.lng,
                altitude: 1.5
            }, 1000);
        })
        .onObjectHover((d, prevD, { object, prevObject }) => {
            // Update cursor
            document.body.style.cursor = d ? 'pointer' : 'default';

            // Reset previous hovered object
            if (prevObject && prevObject.userData) {
                prevObject.scale.set(1, 1, 1);
                if (prevObject.userData.glow) {
                    prevObject.userData.glow.material.opacity = 0.2;
                }
            }

            // Scale up current hovered object
            if (object && object.userData) {
                object.scale.set(1.4, 1.4, 1.4);
                if (object.userData.glow) {
                    object.userData.glow.material.opacity = 0.6;
                }
            }
        });
}

// Add trade routes as arcs
function addTradeRoutes() {
    const routeArcs = [];

    tradeRoutes.forEach(route => {
        route.paths.forEach(path => {
            routeArcs.push({
                startLat: path.start.lat,
                startLng: path.start.lng,
                endLat: path.end.lat,
                endLng: path.end.lng,
                color: route.color,
                name: route.name
            });
        });
    });

    globe.arcsData(routeArcs)
        .arcColor('color')
        .arcStroke(0.4)
        .arcDashLength(0.3)
        .arcDashGap(0.2)
        .arcDashAnimateTime(4000)
        .arcAltitude(0.1)
        .arcLabel(d => `
            <div style="
                background: rgba(244, 232, 208, 0.95);
                padding: 8px 12px;
                border-radius: 8px;
                border: 2px solid #8b6914;
                font-family: 'Patrick Hand', cursive;
                color: #2d2d2d;
                font-size: 14px;
                box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
            ">
                <strong>${d.name}</strong>
            </div>
        `);
}

// Show site information panel
function showSiteInfo(site) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    content.innerHTML = `
        <div class="info-header">
            <div class="site-icon">${site.icon || '🏛️'}</div>
            <h2 class="site-name">${site.name}</h2>
            <div class="site-period">${site.civilization} • ${site.founded}</div>
        </div>
        <div class="info-content">
            <div class="info-card">
                <div class="info-icon">📍</div>
                <div class="info-details">
                    <div class="info-label">Location</div>
                    <div class="info-value">${site.lat.toFixed(2)}°N, ${site.lng.toFixed(2)}°E</div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-icon">🏺</div>
                <div class="info-details">
                    <div class="info-label">Type</div>
                    <div class="info-value">${site.type}</div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-icon">⏳</div>
                <div class="info-details">
                    <div class="info-label">Period</div>
                    <div class="info-value">${getPeriodName(site.period)}</div>
                </div>
            </div>

            ${site.unesco ? `
                <div class="info-card" style="background: rgba(212, 175, 55, 0.2);">
                    <div class="info-icon">🏆</div>
                    <div class="info-details">
                        <div class="info-label">UNESCO</div>
                        <div class="info-value">World Heritage Site</div>
                    </div>
                </div>
            ` : ''}

            <div style="
                margin-top: 12px;
                padding: 12px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 20px;
                border: 2px solid #8b6914;
                line-height: 1.6;
            ">
                <div class="info-text">${site.description}</div>
            </div>
        </div>
    `;

    panel.classList.remove('hidden');
}

// Get period display name
function getPeriodName(period) {
    const periods = {
        'ancient': 'Ancient Era (3000 BCE - 500 CE)',
        'classical': 'Classical Period (500 BCE - 500 CE)',
        'medieval': 'Medieval Era (500 - 1500 CE)'
    };
    return periods[period] || period;
}

// Filter sites by period
function filterByPeriod(period) {
    currentFilter = period;

    if (period === 'all') {
        globe.objectsData(ancientSites);
    } else {
        const filtered = ancientSites.filter(site => site.period === period);
        globe.objectsData(filtered);
    }

    // Update legend active state
    document.querySelectorAll('.legend-item').forEach(item => {
        if (item.dataset.filter === period) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize controls
function initControls() {
    // Reset view button
    document.getElementById('resetView').addEventListener('click', () => {
        globe.pointOfView({ altitude: 2.5 }, 1000);
        selectedSite = null;
    });

    // Auto-rotate toggle
    let autoRotate = true;
    document.getElementById('autoRotate').addEventListener('click', (e) => {
        autoRotate = !autoRotate;
        globe.controls().autoRotate = autoRotate;
        e.target.textContent = autoRotate ? 'Stop Rotation' : 'Auto Rotate';
    });

    // Close info panel
    document.getElementById('closePanel').addEventListener('click', () => {
        document.getElementById('infoPanel').classList.add('hidden');
        selectedSite = null;
        globe.pointOfView({ altitude: 2.5 }, 1000);
    });

    // ESC key to close panel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('infoPanel').classList.add('hidden');
            selectedSite = null;
        }
    });

    // Legend filter clicks
    document.querySelectorAll('.legend-item[data-filter]').forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.dataset.filter;
            filterByPeriod(filter);
        });
    });
}

// Update stats
function updateStats() {
    document.getElementById('totalSites').textContent = ancientSites.length + '+';

    // Find oldest site
    const oldestSites = ancientSites.filter(s =>
        s.founded.includes('3000 BCE') || s.founded.includes('6000 BCE')
    );
    if (oldestSites.length > 0) {
        document.getElementById('oldestSite').textContent = '~6000 BCE';
    }

    document.getElementById('tradeRoutes').textContent = tradeRoutes.length;
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initGlobe();
    initControls();
    updateStats();
});
