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

    // Disable auto-rotation by default (user can enable via button)
    globe.controls().autoRotate = false;
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

// Add ancient sites with ultra-minimal professional markers
function addAncientSites() {
    console.log(`Adding ${ancientSites.length} ancient sites with minimal markers`);

    globe.htmlElementsData(ancientSites)
        .htmlLat('lat')
        .htmlLng('lng')
        .htmlAltitude(0)
        .htmlTransitionDuration(0)
        .htmlElement(d => {
            const el = document.createElement('div');
            el.style.cssText = `
                width: 20px;
                height: 20px;
                cursor: pointer;
                pointer-events: auto;
                transform: translate(-50%, -50%);
                will-change: transform;
                position: relative;
                opacity: 0.7;
                transition: opacity 0.3s ease;
            `;

            // Period-based colors
            const colors = {
                ancient: '#d4af37',
                classical: '#e6b800',
                medieval: '#ffcc00'
            };
            const color = colors[d.period] || colors.ancient;

            // Ultra-minimal marker
            el.innerHTML = `
                <div class="monument-marker" style="
                    width: 100%;
                    height: 100%;
                    background: ${color};
                    border-radius: 50%;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                    transition: all 0.25s ease;
                    pointer-events: none;
                "></div>
                ${d.unesco ? `
                    <div class="unesco-badge" style="
                        position: absolute;
                        top: -4px;
                        right: -4px;
                        font-size: 10px;
                        opacity: 0;
                        transition: opacity 0.25s ease;
                        pointer-events: none;
                    ">🏆</div>
                ` : ''}
            `;

            // Hover effects
            el.addEventListener('mouseenter', () => {
                el.style.opacity = '1';
                const marker = el.querySelector('.monument-marker');
                const badge = el.querySelector('.unesco-badge');

                if (marker) {
                    marker.style.transform = 'scale(2)';
                    marker.style.boxShadow = `0 0 0 2px ${color}, 0 4px 12px rgba(0, 0, 0, 0.4)`;
                }

                if (badge) {
                    badge.style.opacity = '1';
                }
            });

            el.addEventListener('mouseleave', () => {
                if (selectedSite !== d.name) {
                    el.style.opacity = '0.7';
                    const marker = el.querySelector('.monument-marker');
                    const badge = el.querySelector('.unesco-badge');

                    if (marker) {
                        marker.style.transform = 'scale(1)';
                        marker.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
                    }

                    if (badge) {
                        badge.style.opacity = '0';
                    }
                }
            });

            // Click handler
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                showSiteInfo(d);
                selectedSite = d.name;

                globe.pointOfView({
                    lat: d.lat,
                    lng: d.lng,
                    altitude: 1.5
                }, 1000);
            });

            return el;
        });
}

// Show route information panel
function showRouteInfo(route) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    // Default image if none provided - trade/caravan theme
    const imageUrl = route.image || 'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=600&q=80';

    content.innerHTML = `
        <div class="info-header">
            ${route.image ? `
                <div style="
                    width: 100%;
                    height: 180px;
                    overflow: hidden;
                    border-radius: 15px;
                    margin-bottom: 12px;
                    border: 3px solid #8b6914;
                    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
                ">
                    <img src="${imageUrl}" alt="${route.name}" style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    " onerror="this.src='https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=600&q=80'">
                </div>
            ` : ''}
            <div class="site-icon">${route.icon || '🛤️'}</div>
            <h2 class="site-name">${route.name}</h2>
            <div class="site-period">${route.period}</div>
        </div>
        <div class="info-content">
            <!-- Main Description -->
            <div style="
                padding: 12px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 15px;
                border: 2px solid #8b6914;
                line-height: 1.6;
                margin-bottom: 8px;
            ">
                <div style="font-size: 14px; color: #2d2d2d;">
                    ${route.description}
                </div>
            </div>

            <!-- Distance & Duration -->
            <div class="info-card" style="background: rgba(212, 175, 55, 0.15);">
                <div class="info-icon">📏</div>
                <div class="info-details">
                    <div class="info-label">Distance & Duration</div>
                    <div style="font-size: 13px; line-height: 1.5; color: #2d2d2d;">
                        <strong>${route.distance}</strong><br>
                        ${route.duration}
                    </div>
                </div>
            </div>

            <!-- Transportation Methods -->
            <div class="info-card">
                <div class="info-icon">🚛</div>
                <div class="info-details">
                    <div class="info-label">Transportation</div>
                    <div style="font-size: 12px; line-height: 1.6; color: #2d2d2d;">
                        ${route.transportation.map(t => `• ${t}`).join('<br>')}
                    </div>
                </div>
            </div>

            <!-- Main Goods Traded -->
            <div class="info-card" style="background: rgba(16, 185, 129, 0.1);">
                <div class="info-icon">📦</div>
                <div class="info-details">
                    <div class="info-label">Main Goods Traded</div>
                    <div style="font-size: 12px; line-height: 1.6; color: #2d2d2d;">
                        ${route.mainGoods.map(g => `• ${g}`).join('<br>')}
                    </div>
                </div>
            </div>

            <!-- Who Used This Route -->
            <div class="info-card" style="background: rgba(139, 105, 20, 0.1);">
                <div class="info-icon">👥</div>
                <div class="info-details">
                    <div class="info-label">Who Used This Route</div>
                    <div style="font-size: 12px; line-height: 1.6; color: #2d2d2d;">
                        ${route.whoUsed.map(w => `• ${w}`).join('<br>')}
                    </div>
                </div>
            </div>

            <!-- Historical Significance -->
            ${route.significance ? `
                <div class="info-card" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(205, 127, 50, 0.2));">
                    <div class="info-icon">⭐</div>
                    <div class="info-details">
                        <div class="info-label">Historical Significance</div>
                        <div style="font-size: 13px; line-height: 1.5; color: #2d2d2d;">
                            ${route.significance}
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Key Cities -->
            ${route.keyCities ? `
                <div class="info-card">
                    <div class="info-icon">🏙️</div>
                    <div class="info-details">
                        <div class="info-label">Key Cities Along Route</div>
                        <div style="font-size: 12px; line-height: 1.6; color: #2d2d2d;">
                            ${route.keyCities.join(' → ')}
                        </div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    panel.classList.remove('hidden');
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
                name: route.name,
                description: route.description,
                routeData: route // Store full route data for click
            });
        });
    });

    globe.arcsData(routeArcs)
        .arcColor('color')
        .arcStroke(1.2) // Even thicker for better clickability
        .arcDashLength(0.4)
        .arcDashGap(0.15)
        .arcDashAnimateTime(2500)
        .arcAltitude(0.15)
        .arcLabel(d => `
            <div style="
                background: linear-gradient(135deg, rgba(244, 232, 208, 0.98), rgba(232, 220, 192, 0.98));
                padding: 12px 16px;
                border-radius: 12px;
                border: 3px solid #8b6914;
                font-family: 'Patrick Hand', cursive;
                color: #2d2d2d;
                box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
                max-width: 250px;
                backdrop-filter: blur(10px);
                cursor: pointer;
            ">
                <div style="
                    font-family: 'Cinzel', serif;
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 6px;
                    color: #8b6914;
                ">
                    ${d.routeData.icon} ${d.name}
                </div>
                <div style="font-size: 13px; line-height: 1.5; opacity: 0.9; margin-bottom: 6px;">
                    ${d.description}
                </div>
                <div style="
                    font-size: 11px;
                    color: #d4af37;
                    border-top: 1px solid rgba(139, 105, 20, 0.3);
                    padding-top: 6px;
                    margin-top: 6px;
                ">
                    🖱️ Click for full details
                </div>
            </div>
        `)
        .onArcClick((arc) => {
            if (arc && arc.routeData) {
                showRouteInfo(arc.routeData);
                selectedSite = arc.name;
            }
        })
        .onArcHover(arc => {
            document.body.style.cursor = arc ? 'pointer' : 'default';
        });
}

// Show site information panel
function showSiteInfo(site) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    // Default image if none provided - ancient ruins/archaeology theme
    const imageUrl = site.image || 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80';

    content.innerHTML = `
        <div class="info-header">
            ${site.image ? `
                <div style="
                    width: 100%;
                    height: 180px;
                    overflow: hidden;
                    border-radius: 15px;
                    margin-bottom: 12px;
                    border: 3px solid #8b6914;
                    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
                ">
                    <img src="${imageUrl}" alt="${site.name}" style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    " onerror="this.src='https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80'">
                </div>
            ` : ''}
            <div class="site-icon">${site.icon || '🏛️'}</div>
            <h2 class="site-name">${site.name}</h2>
            <div class="site-period">${site.civilization} • ${site.founded}</div>
        </div>
        <div class="info-content">
            <!-- Main Description -->
            <div style="
                padding: 12px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 15px;
                border: 2px solid #8b6914;
                line-height: 1.6;
                margin-bottom: 8px;
            ">
                <div style="font-size: 14px; color: #2d2d2d;">
                    ${site.description}
                </div>
            </div>

            ${site.significance ? `
                <div class="info-card" style="background: rgba(212, 175, 55, 0.15);">
                    <div class="info-icon">⭐</div>
                    <div class="info-details">
                        <div class="info-label">Significance</div>
                        <div style="font-size: 13px; line-height: 1.5; color: #2d2d2d;">
                            ${site.significance}
                        </div>
                    </div>
                </div>
            ` : ''}

            ${site.discovery ? `
                <div class="info-card">
                    <div class="info-icon">🔍</div>
                    <div class="info-details">
                        <div class="info-label">Discovery</div>
                        <div style="font-size: 13px; line-height: 1.5; color: #2d2d2d;">
                            ${site.discovery}
                        </div>
                    </div>
                </div>
            ` : ''}

            <div class="info-card">
                <div class="info-icon">🏺</div>
                <div class="info-details">
                    <div class="info-label">Type & Period</div>
                    <div class="info-value">${site.type} • ${getPeriodName(site.period)}</div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-icon">📍</div>
                <div class="info-details">
                    <div class="info-label">Coordinates</div>
                    <div class="info-value">${site.lat.toFixed(4)}°, ${site.lng.toFixed(4)}°</div>
                </div>
            </div>

            ${site.visitors ? `
                <div class="info-card" style="background: rgba(16, 185, 129, 0.1);">
                    <div class="info-icon">👥</div>
                    <div class="info-details">
                        <div class="info-label">Annual Visitors</div>
                        <div class="info-value">${site.visitors}</div>
                    </div>
                </div>
            ` : ''}

            ${site.unesco ? `
                <div class="info-card" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(205, 127, 50, 0.2));">
                    <div class="info-icon">🏆</div>
                    <div class="info-details">
                        <div class="info-label">UNESCO</div>
                        <div class="info-value" style="color: #d4af37;">World Heritage Site</div>
                    </div>
                </div>
            ` : ''}
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
        globe.htmlElementsData(ancientSites);
    } else {
        const filtered = ancientSites.filter(site => site.period === period);
        globe.htmlElementsData(filtered);
    }

    // Update legend active state
    document.querySelectorAll('.legend-item').forEach(item => {
        if (item.dataset.filter === period) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Re-add the sites with proper rendering
    addAncientSites();
}

// Initialize controls
function initControls() {
    // Reset view button
    document.getElementById('resetView').addEventListener('click', () => {
        globe.pointOfView({ altitude: 2.5 }, 1000);
        selectedSite = null;
    });

    // Auto-rotate toggle
    let autoRotate = false;
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
