// Ancient Civilizations Globe Implementation

let globe;
let selectedSite = null;
let currentFilter = 'all';
let currentHoveredMarker = null;
let currentTimelineYear = 1500; // Default to showing all sites

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

    // Setup the HTML element renderer (only once)
    setupSiteRenderer();

    // Load initial data
    updateSiteData(ancientSites);

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

// Setup HTML element renderer (only called once)
function setupSiteRenderer() {
    globe
        .htmlLat('lat')
        .htmlLng('lng')
        .htmlAltitude(0)
        .htmlTransitionDuration(0)
        .htmlElement(d => {
            const el = document.createElement('div');
            el.style.cssText = `
                width: 18px;
                height: 18px;
                cursor: pointer;
                pointer-events: auto;
                position: relative;
            `;

            // Period-based colors
            const colors = {
                ancient: '#d4af37',
                classical: '#e6b800',
                medieval: '#ffcc00'
            };
            const color = colors[d.period] || colors.ancient;

            // Prominent marker with icon
            if (d.markerImage) {
                el.innerHTML = `
                    <div class="monument-marker" style="
                        width: 18px;
                        height: 18px;
                        background: rgba(0, 0, 0, 0.85);
                        border-radius: 50%;
                        border: 2px solid ${color};
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                        pointer-events: none;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        overflow: hidden;
                        padding: 2px;
                    ">
                        <img src="${d.markerImage}"
                             style="width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none;"
                             onerror="this.style.display='none'; const parent = this.parentElement; parent.style.background='${color}'; parent.style.padding='0'; parent.innerHTML='<div style=&quot;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:9px;line-height:0;&quot;>${d.icon}</div>';">
                    </div>
                    ${d.unesco ? `
                        <div class="unesco-badge" style="
                            position: absolute;
                            top: -3px;
                            right: -3px;
                            font-size: 8px;
                            opacity: 0;
                            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                            pointer-events: none;
                            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
                            z-index: 10;
                        ">🏆</div>
                    ` : ''}
                `;
            } else {
                // Fallback to colored icon
                el.innerHTML = `
                    <div class="monument-marker" style="
                        width: 18px;
                        height: 18px;
                        background: ${color};
                        border-radius: 50%;
                        border: 2px solid rgba(255, 255, 255, 0.9);
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                        pointer-events: none;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        overflow: hidden;
                    ">
                        <div style="
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            font-size: 9px;
                            line-height: 0;
                        ">${d.icon}</div>
                    </div>
                `;
            }

            // Hover effects with dramatic scale and bounce
            el.addEventListener('mouseenter', () => {
                // Reset previous hovered marker
                if (currentHoveredMarker && currentHoveredMarker !== el) {
                    const prevMarker = currentHoveredMarker.querySelector('.monument-marker');
                    const prevBadge = currentHoveredMarker.querySelector('.unesco-badge');

                    if (prevMarker) {
                        prevMarker.style.transform = 'translate(-50%, -50%) scale(1)';
                        prevMarker.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
                        prevMarker.style.zIndex = '1';
                    }

                    if (prevBadge) {
                        prevBadge.style.opacity = '0';
                        prevBadge.style.transform = 'scale(1)';
                    }
                }

                // Set current marker as hovered
                currentHoveredMarker = el;

                const marker = el.querySelector('.monument-marker');
                const badge = el.querySelector('.unesco-badge');

                if (marker) {
                    marker.style.transform = 'translate(-50%, -50%) scale(2.4)';
                    marker.style.boxShadow = `0 0 0 4px ${color}, 0 8px 24px rgba(0, 0, 0, 0.6)`;
                    marker.style.zIndex = '1000';
                }

                if (badge) {
                    badge.style.opacity = '1';
                    badge.style.transform = 'scale(1.3)';
                }
            });

            el.addEventListener('mouseleave', () => {
                if (selectedSite !== d.name) {
                    const marker = el.querySelector('.monument-marker');
                    const badge = el.querySelector('.unesco-badge');

                    if (marker) {
                        marker.style.transform = 'translate(-50%, -50%) scale(1)';
                        marker.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
                        marker.style.zIndex = '1';
                    }

                    if (badge) {
                        badge.style.opacity = '0';
                        badge.style.transform = 'scale(1)';
                    }

                    // Clear current hovered marker if it's this element
                    if (currentHoveredMarker === el) {
                        currentHoveredMarker = null;
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

// Update site data (call this when filtering)
function updateSiteData(sites) {
    console.log(`Updating to show ${sites.length} sites`);
    globe.htmlElementsData(sites);
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

    // Default image if none provided
    const imageUrl = site.image || 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80';

    // Get contemporary sites
    const contemporarySites = getContemporarySites(site);

    content.innerHTML = `
        <div class="info-header">
            <!-- Photo Gallery -->
            ${site.images && site.images.length > 0 ? `
                <div class="photo-gallery" style="position: relative; margin-bottom: 12px;">
                    <div class="gallery-main" style="
                        width: 100%;
                        height: 200px;
                        overflow: hidden;
                        border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                        border: 3px solid #8b6914;
                        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
                    ">
                        <img id="galleryMainImg" src="${site.images[0]}" alt="${site.name}" style="
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: opacity 0.3s ease;
                        ">
                    </div>
                    <div class="gallery-thumbnails" style="
                        display: flex;
                        gap: 8px;
                        margin-top: 8px;
                        overflow-x: auto;
                    ">
                        ${site.images.map((img, i) => `
                            <img src="${img}"
                                 onclick="document.getElementById('galleryMainImg').src='${img}'"
                                 style="
                                    width: 60px;
                                    height: 60px;
                                    object-fit: cover;
                                    border-radius: 12px 10px 13px 11px / 11px 13px 10px 12px;
                                    border: 2px solid ${i === 0 ? '#d4af37' : '#8b6914'};
                                    cursor: pointer;
                                    transition: all 0.2s ease;
                                    flex-shrink: 0;
                                 "
                                 onmouseover="this.style.transform='scale(1.1)'; this.style.borderColor='#d4af37'"
                                 onmouseout="this.style.transform='scale(1)'; this.style.borderColor='#8b6914'">
                        `).join('')}
                    </div>
                </div>
            ` : site.image ? `
                <div style="
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                    margin-bottom: 12px;
                    border: 3px solid #8b6914;
                    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
                ">
                    <img src="${imageUrl}" alt="${site.name}" style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    ">
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
                border-radius: 15px 12px 16px 13px / 13px 16px 12px 15px;
                border: 2px solid #8b6914;
                line-height: 1.6;
                margin-bottom: 8px;
            ">
                <div style="font-size: 14px; color: #2d2d2d;">
                    ${site.description}
                </div>
            </div>

            <!-- Did You Know -->
            ${site.didYouKnow && site.didYouKnow.length > 0 ? `
                <div style="
                    background: rgba(212, 175, 55, 0.1);
                    padding: 12px;
                    border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                    border: 2px solid #d4af37;
                    margin-bottom: 8px;
                ">
                    <div style="
                        font-family: 'Cinzel', serif;
                        font-size: 16px;
                        font-weight: 700;
                        color: #8b6914;
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        💡 Did You Know?
                    </div>
                    <div style="font-size: 13px; line-height: 1.6; color: #2d2d2d;">
                        ${site.didYouKnow.map(fact => `• ${fact}`).join('<br><br>')}
                    </div>
                </div>
            ` : ''}

            <!-- Famous Artifacts -->
            ${site.artifacts && site.artifacts.length > 0 ? `
                <div style="
                    background: rgba(205, 127, 50, 0.1);
                    padding: 12px;
                    border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                    border: 2px solid #cd7f32;
                    margin-bottom: 8px;
                ">
                    <div style="
                        font-family: 'Cinzel', serif;
                        font-size: 16px;
                        font-weight: 700;
                        color: #8b6914;
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        🏺 Famous Artifacts
                    </div>
                    ${site.artifacts.map(artifact => `
                        <div style="
                            display: flex;
                            gap: 10px;
                            margin-bottom: 10px;
                            padding: 8px;
                            background: rgba(255, 255, 255, 0.5);
                            border-radius: 12px 10px 13px 11px / 11px 13px 10px 12px;
                            border: 2px solid #8b6914;
                        ">
                            ${artifact.image ? `
                                <img src="${artifact.image}" style="
                                    width: 60px;
                                    height: 60px;
                                    object-fit: cover;
                                    border-radius: 8px;
                                    border: 2px solid #8b6914;
                                    flex-shrink: 0;
                                ">
                            ` : ''}
                            <div style="flex: 1;">
                                <div style="font-weight: 700; font-size: 13px; color: #2d2d2d; margin-bottom: 4px;">
                                    ${artifact.name}
                                </div>
                                <div style="font-size: 12px; line-height: 1.4; color: rgba(45,45,45,0.8);">
                                    ${artifact.description}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <!-- Key Information Cards -->
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

            <!-- Contemporary Sites -->
            ${contemporarySites.length > 0 ? `
                <div style="
                    background: rgba(139, 105, 20, 0.1);
                    padding: 12px;
                    border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                    border: 2px dashed #8b6914;
                    margin-bottom: 8px;
                ">
                    <div style="
                        font-family: 'Cinzel', serif;
                        font-size: 15px;
                        font-weight: 700;
                        color: #8b6914;
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        🕰️ Contemporary Sites
                    </div>
                    <div style="font-size: 12px; color: rgba(45,45,45,0.7); margin-bottom: 8px;">
                        Other sites that existed around ${site.founded}:
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${contemporarySites.slice(0, 5).map(s => `
                            <div onclick="window.dispatchEvent(new CustomEvent('showSite', { detail: '${s.name}' }))" style="
                                padding: 6px 10px;
                                background: white;
                                border: 2px solid #8b6914;
                                border-radius: 15px 12px 16px 13px / 13px 16px 12px 15px;
                                font-size: 11px;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            " onmouseover="this.style.background='rgba(212,175,55,0.2)'" onmouseout="this.style.background='white'">
                                ${s.icon} ${s.name}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Related Sites -->
            ${site.relatedSites && site.relatedSites.length > 0 ? `
                <div style="
                    background: rgba(184, 115, 51, 0.1);
                    padding: 12px;
                    border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                    border: 2px dashed #b87333;
                    margin-bottom: 8px;
                ">
                    <div style="
                        font-family: 'Cinzel', serif;
                        font-size: 15px;
                        font-weight: 700;
                        color: #8b6914;
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        🔗 Related Sites
                    </div>
                    <div style="font-size: 12px; color: rgba(45,45,45,0.7); margin-bottom: 8px;">
                        If you're interested in ${site.name}, also explore:
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${site.relatedSites.map(relatedName => {
                            const related = ancientSites.find(s => s.name === relatedName);
                            return related ? `
                                <div onclick="window.dispatchEvent(new CustomEvent('showSite', { detail: '${related.name}' }))" style="
                                    padding: 6px 10px;
                                    background: white;
                                    border: 2px solid #b87333;
                                    border-radius: 15px 12px 16px 13px / 13px 16px 12px 15px;
                                    font-size: 11px;
                                    cursor: pointer;
                                    transition: all 0.2s ease;
                                " onmouseover="this.style.background='rgba(184,115,51,0.2)'" onmouseout="this.style.background='white'">
                                    ${related.icon} ${related.name}
                                </div>
                            ` : '';
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- External Links -->
            ${site.externalLinks ? `
                <div style="
                    background: rgba(59, 130, 246, 0.05);
                    padding: 12px;
                    border-radius: 18px 15px 20px 16px / 16px 20px 15px 18px;
                    border: 2px solid #3b82f6;
                    margin-bottom: 8px;
                ">
                    <div style="
                        font-family: 'Cinzel', serif;
                        font-size: 15px;
                        font-weight: 700;
                        color: #8b6914;
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        🌐 Learn More
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        ${site.externalLinks.wikipedia ? `
                            <a href="${site.externalLinks.wikipedia}" target="_blank" rel="noopener" style="
                                padding: 8px 12px;
                                background: white;
                                border: 2px solid #3b82f6;
                                border-radius: 15px 12px 16px 13px / 13px 16px 12px 15px;
                                font-size: 12px;
                                color: #2d2d2d;
                                text-decoration: none;
                                display: flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.2s ease;
                            " onmouseover="this.style.background='rgba(59,130,246,0.1)'" onmouseout="this.style.background='white'">
                                📖 Wikipedia Article
                            </a>
                        ` : ''}
                        ${site.externalLinks.virtualTour ? `
                            <a href="${site.externalLinks.virtualTour}" target="_blank" rel="noopener" style="
                                padding: 8px 12px;
                                background: white;
                                border: 2px solid #3b82f6;
                                border-radius: 15px 12px 16px 13px / 13px 16px 12px 15px;
                                font-size: 12px;
                                color: #2d2d2d;
                                text-decoration: none;
                                display: flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.2s ease;
                            " onmouseover="this.style.background='rgba(59,130,246,0.1)'" onmouseout="this.style.background='white'">
                                🎨 Virtual Tour
                            </a>
                        ` : ''}
                        ${site.externalLinks.video ? `
                            <a href="${site.externalLinks.video}" target="_blank" rel="noopener" style="
                                padding: 8px 12px;
                                background: white;
                                border: 2px solid #3b82f6;
                                border-radius: 15px 12px 16px 13px / 13px 16px 12px 15px;
                                font-size: 12px;
                                color: #2d2d2d;
                                text-decoration: none;
                                display: flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.2s ease;
                            " onmouseover="this.style.background='rgba(59,130,246,0.1)'" onmouseout="this.style.background='white'">
                                🎥 Video Documentaries
                            </a>
                        ` : ''}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    panel.classList.remove('hidden');
}

// Get sites that existed around the same time
function getContemporarySites(site) {
    const siteYear = parseFoundedYear(site.founded);
    if (!siteYear) return [];

    return ancientSites.filter(s => {
        if (s.name === site.name) return false;
        const otherYear = parseFoundedYear(s.founded);
        if (!otherYear) return false;

        // Within 500 years
        return Math.abs(siteYear - otherYear) <= 500;
    }).slice(0, 5);
}

// Handle custom show site event from related/contemporary sites
window.addEventListener('showSite', (e) => {
    const siteName = e.detail;
    const site = ancientSites.find(s => s.name === siteName);
    if (site) {
        showSiteInfo(site);
        selectedSite = site.name;
        globe.pointOfView({
            lat: site.lat,
            lng: site.lng,
            altitude: 1.5
        }, 1000);
    }
});

// Get period display name
function getPeriodName(period) {
    const periods = {
        'ancient': 'Ancient Era (3000 BCE - 500 CE)',
        'classical': 'Classical Period (500 BCE - 500 CE)',
        'medieval': 'Medieval Era (500 - 1500 CE)'
    };
    return periods[period] || period;
}

// Parse founded date string to numeric year (negative for BCE)
function parseFoundedYear(founded) {
    if (!founded) return null;

    // Remove ~ and whitespace
    const cleaned = founded.replace(/~/g, '').trim();

    // Extract number
    const match = cleaned.match(/(\d+)/);
    if (!match) return null;

    const year = parseInt(match[1]);

    // Return negative for BCE, positive for CE
    if (cleaned.includes('BCE')) {
        return -year;
    } else {
        return year;
    }
}

// Format year for display
function formatYear(year) {
    if (year === 1500) return 'All Time';
    if (year < 0) {
        return `${Math.abs(year)} BCE`;
    } else if (year === 0) {
        return '1 CE';
    } else {
        return `${year} CE`;
    }
}

// Get all sites that apply to all active filters
function getFilteredSites() {
    let sites = ancientSites;

    // Apply era filter
    if (currentFilter !== 'all') {
        sites = sites.filter(site => site.period === currentFilter);
    }

    // Apply timeline filter
    if (currentTimelineYear < 1500) {
        sites = sites.filter(site => {
            const year = parseFoundedYear(site.founded);
            return year !== null && year <= currentTimelineYear;
        });
    }

    // Apply civilization filter
    const civFilter = document.getElementById('civilizationFilter');
    if (civFilter && civFilter.value !== 'all') {
        sites = sites.filter(site => site.civilization === civFilter.value);
    }

    return sites;
}

// Filter sites by period
function filterByPeriod(period) {
    currentFilter = period;

    // Update markers with all active filters
    updateSiteData(getFilteredSites());

    // Update legend active state
    document.querySelectorAll('.legend-item').forEach(item => {
        if (item.dataset.filter === period) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Reset civilization filter
    const civFilter = document.getElementById('civilizationFilter');
    if (civFilter) {
        civFilter.value = 'all';
    }
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

    // Populate civilization dropdown
    populateCivilizationFilter();

    // Civilization filter
    document.getElementById('civilizationFilter').addEventListener('change', () => {
        // Update with all active filters
        updateSiteData(getFilteredSites());
    });

    // Timeline slider
    const timelineSlider = document.getElementById('timelineSlider');
    const timelineValue = document.getElementById('timelineValue');

    timelineSlider.addEventListener('input', (e) => {
        currentTimelineYear = parseInt(e.target.value);
        timelineValue.textContent = formatYear(currentTimelineYear);

        // Update with all active filters
        updateSiteData(getFilteredSites());
    });
}

// Populate civilization filter dropdown
function populateCivilizationFilter() {
    const civilizations = [...new Set(ancientSites.map(s => s.civilization))].sort();
    const select = document.getElementById('civilizationFilter');

    civilizations.forEach(civ => {
        const option = document.createElement('option');
        option.value = civ;
        option.textContent = civ;
        select.appendChild(option);
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
