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

    // Add ancient sites as markers
    addAncientSites();

    // Add trade routes
    addTradeRoutes();

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

// Add ancient sites as glowing markers
function addAncientSites() {
    console.log(`Adding ${ancientSites.length} ancient sites`);

    globe.pointsData(ancientSites)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(d => {
            // Period-based colors with glow
            const colors = {
                ancient: '#cd7f32',    // Bronze
                classical: '#b87333',  // Copper
                medieval: '#d4af37'    // Gold
            };
            return colors[d.period] || colors.ancient;
        })
        .pointAltitude(0.01)
        .pointRadius(d => {
            // UNESCO sites are slightly larger
            return d.unesco ? 0.25 : 0.2;
        })
        .pointResolution(12) // Smooth circles
        .pointLabel(d => `
            <div style="
                background: linear-gradient(135deg, rgba(244, 232, 208, 0.98), rgba(232, 220, 192, 0.98));
                padding: 12px 16px;
                border-radius: 16px;
                border: 3px solid #8b6914;
                font-family: 'Patrick Hand', cursive;
                color: #2d2d2d;
                box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
                max-width: 250px;
                backdrop-filter: blur(10px);
            ">
                <div style="
                    font-family: 'Cinzel', serif;
                    font-weight: bold;
                    font-size: 18px;
                    margin-bottom: 6px;
                    color: #8b6914;
                ">
                    ${d.icon} ${d.name}
                </div>
                <div style="
                    font-size: 13px;
                    opacity: 0.9;
                    margin-bottom: 6px;
                    font-weight: 500;
                ">
                    ${d.civilization}
                </div>
                <div style="
                    font-size: 12px;
                    color: #8b6914;
                    background: rgba(212, 175, 55, 0.2);
                    padding: 4px 8px;
                    border-radius: 8px;
                    display: inline-block;
                    margin-bottom: 4px;
                ">
                    Founded: ${d.founded}
                </div>
                <div style="font-size: 11px; opacity: 0.8; margin-top: 4px;">
                    ${d.type} • ${d.period.charAt(0).toUpperCase() + d.period.slice(1)} Period
                </div>
                ${d.unesco ? `
                    <div style="
                        margin-top: 8px;
                        font-size: 12px;
                        color: #d4af37;
                        background: rgba(212, 175, 55, 0.15);
                        padding: 4px 8px;
                        border-radius: 8px;
                        border: 1px solid #d4af37;
                        display: inline-block;
                    ">
                        🏆 UNESCO World Heritage Site
                    </div>
                ` : ''}
            </div>
        `)
        .onPointClick((d) => {
            showSiteInfo(d);
            selectedSite = d.name;

            // Zoom to site with smooth animation
            globe.pointOfView({
                lat: d.lat,
                lng: d.lng,
                altitude: 1.5
            }, 1000);
        })
        .onPointHover(d => {
            // Change cursor on hover
            document.body.style.cursor = d ? 'pointer' : 'default';
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
        globe.pointsData(ancientSites);
    } else {
        const filtered = ancientSites.filter(site => site.period === period);
        globe.pointsData(filtered);
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
