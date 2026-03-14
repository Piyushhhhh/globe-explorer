// Safety & Security Globe Visualization
// Hand-drawn design with color-coded countries by safety level

let globe;
let autoRotateEnabled = false;

// Small countries that need special markers (city-states and micro-states)
const smallCountries = {
    "Singapore": { lat: 1.3521, lng: 103.8198 },
    "Monaco": { lat: 43.7384, lng: 7.4246 },
    "Liechtenstein": { lat: 47.1660, lng: 9.5554 },
    "San Marino": { lat: 43.9424, lng: 12.4578 },
    "Andorra": { lat: 42.5063, lng: 1.5218 },
    "Luxembourg": { lat: 49.8153, lng: 6.1296 },
    "Malta": { lat: 35.9375, lng: 14.3754 },
    "Bahrain": { lat: 26.0667, lng: 50.5577 },
    "Maldives": { lat: 3.2028, lng: 73.2207 },
    "Brunei": { lat: 4.5353, lng: 114.7277 },
    "Qatar": { lat: 25.3548, lng: 51.1839 },
    "Kuwait": { lat: 29.3117, lng: 47.4818 },
    "Cyprus": { lat: 35.1264, lng: 33.4299 },
    "Barbados": { lat: 13.1939, lng: -59.5432 },
    "Mauritius": { lat: -20.3484, lng: 57.5522 },
    "Bahamas": { lat: 25.0343, lng: -77.3963 },
    "Seychelles": { lat: -4.6796, lng: 55.4920 },
    "Cape Verde": { lat: 16.5388, lng: -23.0418 },
    "Comoros": { lat: -11.6455, lng: 43.3333 },
    "Sao Tome and Principe": { lat: 0.1864, lng: 6.6131 },
    "Gambia": { lat: 13.4432, lng: -15.3101 },
    "Djibouti": { lat: 11.8251, lng: 42.5903 },
    "Fiji": { lat: -17.7134, lng: 178.0650 },
    "Bhutan": { lat: 27.5142, lng: 90.4336 },
    "Timor-Leste": { lat: -8.8742, lng: 125.7275 },
    "Hong Kong": { lat: 22.3193, lng: 114.1694 },
    "Macau": { lat: 22.1987, lng: 113.5439 },
    "Puerto Rico": { lat: 18.2208, lng: -66.5901 },
    "Guam": { lat: 13.4443, lng: 144.7937 },
    "Aruba": { lat: 12.5211, lng: -69.9683 },
    "Cayman Islands": { lat: 19.3133, lng: -81.2546 },
    "Bermuda": { lat: 32.3078, lng: -64.7505 }
};

// Major countries that should have labels
const majorCountries = {
    // Americas
    "United States": { lat: 37.0902, lng: -95.7129 },
    "United States of America": { lat: 37.0902, lng: -95.7129 },
    "Canada": { lat: 56.1304, lng: -106.3468 },
    "Mexico": { lat: 23.6345, lng: -102.5528 },
    "Brazil": { lat: -14.2350, lng: -51.9253 },
    "Argentina": { lat: -38.4161, lng: -63.6167 },
    "Colombia": { lat: 4.5709, lng: -74.2973 },

    // Europe
    "Russia": { lat: 61.5240, lng: 105.3188 },
    "Germany": { lat: 51.1657, lng: 10.4515 },
    "France": { lat: 46.2276, lng: 2.2137 },
    "United Kingdom": { lat: 55.3781, lng: -3.4360 },
    "Spain": { lat: 40.4637, lng: -3.7492 },
    "Italy": { lat: 41.8719, lng: 12.5674 },
    "Poland": { lat: 51.9194, lng: 19.1451 },
    "Ukraine": { lat: 48.3794, lng: 31.1656 },
    "Turkey": { lat: 38.9637, lng: 35.2433 },

    // Asia
    "China": { lat: 35.8617, lng: 104.1954 },
    "India": { lat: 20.5937, lng: 78.9629 },
    "Indonesia": { lat: -0.7893, lng: 113.9213 },
    "Pakistan": { lat: 30.3753, lng: 69.3451 },
    "Bangladesh": { lat: 23.6850, lng: 90.3563 },
    "Japan": { lat: 36.2048, lng: 138.2529 },
    "Philippines": { lat: 12.8797, lng: 121.7740 },
    "Vietnam": { lat: 14.0583, lng: 108.2772 },
    "Thailand": { lat: 15.8700, lng: 100.9925 },
    "Iran": { lat: 32.4279, lng: 53.6880 },
    "Saudi Arabia": { lat: 23.8859, lng: 45.0792 },
    "South Korea": { lat: 35.9078, lng: 127.7669 },
    "Myanmar": { lat: 21.9162, lng: 95.9560 },

    // Africa
    "Nigeria": { lat: 9.0820, lng: 8.6753 },
    "Egypt": { lat: 26.8206, lng: 30.8025 },
    "South Africa": { lat: -30.5595, lng: 22.9375 },
    "Ethiopia": { lat: 9.1450, lng: 40.4897 },
    "Kenya": { lat: -0.0236, lng: 37.9062 },
    "Democratic Republic of the Congo": { lat: -4.0383, lng: 21.7587 },
    "Dem. Rep. Congo": { lat: -4.0383, lng: 21.7587 },
    "Republic of the Congo": { lat: -0.2280, lng: 15.8277 },
    "Republic of Congo": { lat: -0.2280, lng: 15.8277 },
    "Congo": { lat: -0.2280, lng: 15.8277 },
    "Central African Republic": { lat: 6.6111, lng: 20.9394 },
    "Central African Rep.": { lat: 6.6111, lng: 20.9394 },
    "South Sudan": { lat: 6.8770, lng: 31.3070 },
    "S. Sudan": { lat: 6.8770, lng: 31.3070 },
    "Algeria": { lat: 28.0339, lng: 1.6596 },
    "Sudan": { lat: 12.8628, lng: 30.2176 },
    "Morocco": { lat: 31.7917, lng: -7.0926 },

    // Oceania
    "Australia": { lat: -25.2744, lng: 133.7751 }
};

// Initialize globe
function initGlobe() {
    const container = document.getElementById('globe');

    globe = Globe()
        (container)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('#fdfbf7')
        .width(container.offsetWidth)
        .height(container.offsetHeight);

    // Load country polygons
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
            // Filter only countries we have data for
            const countriesWithData = countries.features.filter(feature =>
                safetyData[feature.properties.NAME] || safetyData[feature.properties.ADMIN]
            );

            globe
                .polygonsData(countriesWithData)
                .polygonAltitude(0.01)
                .polygonCapColor(feature => {
                    const countryName = feature.properties.NAME || feature.properties.ADMIN;
                    const data = safetyData[countryName];
                    return data ? data.color : 'rgba(200, 200, 200, 0.3)';
                })
                .polygonSideColor(() => 'rgba(45, 45, 45, 0.2)')
                .polygonStrokeColor(() => '#2d2d2d')
                .polygonLabel(feature => {
                    const countryName = feature.properties.NAME || feature.properties.ADMIN;
                    const data = safetyData[countryName];

                    if (!data) return `<div style="color: white; background: rgba(45,45,45,0.9); padding: 8px 12px; border-radius: 6px; font-family: 'Patrick Hand', cursive;">
                        <b>${countryName}</b><br/>
                        <span style="opacity: 0.7;">No data available</span>
                    </div>`;

                    const statusEmoji = {
                        'very-safe': '🟢',
                        'safe': '✅',
                        'moderate': '⚠️',
                        'risky': '⚡',
                        'dangerous': '🔴'
                    }[data.status] || '❓';

                    // Generate warnings
                    let warnings = [];
                    if (data.risks.conflictZone) warnings.push('🔴 Active conflict zone');
                    if (data.risks.terrorismRisk === 'extreme' || data.risks.terrorismRisk === 'very-high') {
                        warnings.push('⚠️ Extreme terrorism risk');
                    }
                    if (data.risks.naturalDisasterRisk === 'very-high') warnings.push('🌪️ High natural disaster risk');
                    if (data.crime.homicideRate > 20) warnings.push('🚨 Very high homicide rate');
                    if (data.political.stabilityIndex < 30) warnings.push('⚡ Political instability');

                    const warningsHTML = warnings.length > 0 ? `
                        <div style="background: rgba(220, 38, 38, 0.2); padding: 6px 8px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid #dc2626;">
                            ${warnings.map(w => `<div style="font-size: 11px; margin-bottom: 2px;">${w}</div>`).join('')}
                        </div>
                    ` : '';

                    return `
                        <div style="color: white; background: rgba(45,45,45,0.95); padding: 12px 16px; border-radius: 8px; font-family: 'Patrick Hand', cursive; max-width: 300px;">
                            <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">${statusEmoji} ${countryName}</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="opacity: 0.8;">Safety Index:</span>
                                <span style="color: ${data.color}; font-weight: bold; font-size: 20px;">${data.overallSafetyIndex}</span>
                            </div>
                            ${warningsHTML}
                            <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 4px;">Rank: #${data.rank} worldwide</div>
                                <div style="font-size: 12px; opacity: 0.7;">Homicide rate: ${data.crime.homicideRate}/100k</div>
                            </div>
                            <div style="font-size: 12px; opacity: 0.7; text-transform: capitalize;">${data.status.replace('-', ' ')}</div>
                            <div style="font-size: 11px; opacity: 0.5; margin-top: 6px;">Click to see full details →</div>
                        </div>
                    `;
                })
                .onPolygonClick(feature => {
                    const countryName = feature.properties.NAME || feature.properties.ADMIN;
                    const data = safetyData[countryName];
                    if (data) {
                        showCountryInfo(countryName, data);
                    }
                });

            // Add markers for small countries
            const smallCountryMarkers = Object.entries(smallCountries)
                .filter(([name]) => safetyData[name])
                .map(([name, coords]) => ({
                    name,
                    lat: coords.lat,
                    lng: coords.lng,
                    data: safetyData[name]
                }));

            globe
                .pointsData(smallCountryMarkers)
                .pointAltitude(0.02)
                .pointRadius(0.8)
                .pointColor(d => d.data.color)
                .pointLabel(d => {
                    const statusEmoji = {
                        'very-safe': '🟢',
                        'safe': '✅',
                        'moderate': '⚠️',
                        'risky': '⚡',
                        'dangerous': '🔴'
                    }[d.data.status] || '❓';

                    // Generate warnings
                    let warnings = [];
                    if (d.data.risks.conflictZone) warnings.push('🔴 Active conflict zone');
                    if (d.data.risks.terrorismRisk === 'extreme' || d.data.risks.terrorismRisk === 'very-high') {
                        warnings.push('⚠️ Extreme terrorism risk');
                    }
                    if (d.data.risks.naturalDisasterRisk === 'very-high') warnings.push('🌪️ High natural disaster risk');
                    if (d.data.crime.homicideRate > 20) warnings.push('🚨 Very high homicide rate');
                    if (d.data.political.stabilityIndex < 30) warnings.push('⚡ Political instability');

                    const warningsHTML = warnings.length > 0 ? `
                        <div style="background: rgba(220, 38, 38, 0.2); padding: 6px 8px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid #dc2626;">
                            ${warnings.map(w => `<div style="font-size: 11px; margin-bottom: 2px;">${w}</div>`).join('')}
                        </div>
                    ` : '';

                    return `
                        <div style="color: white; background: rgba(45,45,45,0.95); padding: 12px 16px; border-radius: 8px; font-family: 'Patrick Hand', cursive; max-width: 300px;">
                            <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">${statusEmoji} ${d.name}</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="opacity: 0.8;">Safety Index:</span>
                                <span style="color: ${d.data.color}; font-weight: bold; font-size: 20px;">${d.data.overallSafetyIndex}</span>
                            </div>
                            ${warningsHTML}
                            <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 4px;">Rank: #${d.data.rank} worldwide</div>
                                <div style="font-size: 12px; opacity: 0.7;">Homicide rate: ${d.data.crime.homicideRate}/100k</div>
                            </div>
                            <div style="font-size: 12px; opacity: 0.7; text-transform: capitalize;">${d.data.status.replace('-', ' ')}</div>
                            <div style="font-size: 11px; opacity: 0.5; margin-top: 6px;">Click to see full details →</div>
                        </div>
                    `;
                })
                .onPointClick(d => {
                    showCountryInfo(d.name, d.data);
                });

            // Add labels for small countries AND major countries
            const majorCountryLabels = Object.entries(majorCountries)
                .filter(([name]) => safetyData[name])
                .map(([name, coords]) => ({
                    name,
                    lat: coords.lat,
                    lng: coords.lng,
                    data: safetyData[name]
                }));

            const allLabels = [...smallCountryMarkers, ...majorCountryLabels];

            globe
                .labelsData(allLabels)
                .labelLat(d => d.lat)
                .labelLng(d => d.lng)
                .labelText(d => d.name)
                .labelSize(0.6)
                .labelColor(() => '#ffffff')
                .labelDotRadius(0.5)
                .labelAltitude(0.03)
                .labelResolution(3);

            // Add pulsing rings for conflict zones
            const conflictZones = Object.entries(safetyData)
                .filter(([_, data]) => data.risks.conflictZone === true)
                .map(([name, data]) => {
                    // Get coordinates from majorCountries or smallCountries
                    const coords = majorCountries[name] || smallCountries[name];
                    if (coords) {
                        return {
                            name,
                            lat: coords.lat,
                            lng: coords.lng,
                            data
                        };
                    }
                    return null;
                })
                .filter(item => item !== null);

            globe
                .ringsData(conflictZones)
                .ringLat(d => d.lat)
                .ringLng(d => d.lng)
                .ringMaxRadius(4)
                .ringPropagationSpeed(1.5)
                .ringRepeatPeriod(2000)
                .ringColor(() => () => 'rgba(220, 38, 38, 0.5)');

            // Add warning markers for extreme terrorism risk
            const terrorismHotspots = Object.entries(safetyData)
                .filter(([_, data]) =>
                    data.risks.terrorismRisk === 'extreme' ||
                    data.risks.terrorismRisk === 'very-high'
                )
                .map(([name, data]) => {
                    const coords = majorCountries[name] || smallCountries[name];
                    if (coords) {
                        return {
                            name,
                            lat: coords.lat,
                            lng: coords.lng,
                            data,
                            altitude: 0.1
                        };
                    }
                    return null;
                })
                .filter(item => item !== null);

            globe
                .htmlElementsData(terrorismHotspots)
                .htmlLat(d => d.lat)
                .htmlLng(d => d.lng)
                .htmlAltitude(d => d.altitude)
                .htmlElement(d => {
                    const el = document.createElement('div');
                    el.innerHTML = '⚠️';
                    el.style.fontSize = '20px';
                    el.style.cursor = 'pointer';
                    el.style.animation = 'pulse 2s ease-in-out infinite';
                    el.style.filter = 'drop-shadow(0 0 3px rgba(255,255,255,0.8))';
                    el.title = `${d.name} - High Terrorism Risk`;
                    return el;
                });

            // Add migration arcs from dangerous to safe countries
            const migrationArcs = [
                // Syria → Europe
                { startLat: 34.8021, startLng: 38.9968, endLat: 51.1657, endLng: 10.4515, color: '#ef4444' }, // Syria → Germany
                { startLat: 34.8021, startLng: 38.9968, endLat: 55.3781, endLng: -3.4360, color: '#ef4444' }, // Syria → UK

                // Afghanistan → neighboring countries
                { startLat: 33.9391, startLng: 67.7100, endLat: 30.3753, endLng: 69.3451, color: '#dc2626' }, // Afghanistan → Pakistan
                { startLat: 33.9391, startLng: 67.7100, endLat: 32.4279, endLng: 53.6880, color: '#dc2626' }, // Afghanistan → Iran

                // Venezuela → Latin America
                { startLat: 6.4238, startLng: -66.5897, endLat: 4.5709, endLng: -74.2973, color: '#ef4444' }, // Venezuela → Colombia
                { startLat: 6.4238, startLng: -66.5897, endLat: -14.2350, endLng: -51.9253, color: '#ef4444' }, // Venezuela → Brazil

                // South Sudan → neighboring countries
                { startLat: 6.8770, startLng: 31.3070, endLat: -0.0236, endLng: 37.9062, color: '#dc2626' }, // South Sudan → Kenya
                { startLat: 6.8770, startLng: 31.3070, endLat: 0.3476, endLng: 32.5825, color: '#dc2626' }, // South Sudan → Uganda

                // Myanmar → Thailand
                { startLat: 21.9162, startLng: 95.9560, endLat: 15.8700, endLng: 100.9925, color: '#ef4444' }, // Myanmar → Thailand

                // Ukraine → Europe
                { startLat: 48.3794, startLng: 31.1656, endLat: 51.9194, endLng: 19.1451, color: '#ef4444' }, // Ukraine → Poland
                { startLat: 48.3794, startLng: 31.1656, endLat: 51.1657, endLng: 10.4515, color: '#ef4444' }, // Ukraine → Germany

                // Yemen → Saudi Arabia
                { startLat: 15.5527, startLng: 48.5164, endLat: 23.8859, endLng: 45.0792, color: '#dc2626' }, // Yemen → Saudi Arabia

                // Somalia → neighboring countries
                { startLat: 5.1521, startLng: 46.1996, endLat: -0.0236, endLng: 37.9062, color: '#dc2626' }, // Somalia → Kenya

                // Central African Republic → neighboring countries
                { startLat: 6.6111, startLng: 20.9394, endLat: 1.3733, endLng: 32.2903, color: '#dc2626' } // CAR → Uganda
            ];

            globe
                .arcsData(migrationArcs)
                .arcStartLat(d => d.startLat)
                .arcStartLng(d => d.startLng)
                .arcEndLat(d => d.endLat)
                .arcEndLng(d => d.endLng)
                .arcColor(d => d.color)
                .arcDashLength(0.4)
                .arcDashGap(0.2)
                .arcDashAnimateTime(3000)
                .arcStroke(0.5)
                .arcAltitude(0.3);

            // Auto-rotate
            globe.controls().autoRotate = false;
            globe.controls().autoRotateSpeed = 0.5;

            // Point camera to a good starting view
            globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);

            // Hide loading screen
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 1000);
        });

    // Responsive resize
    window.addEventListener('resize', () => {
        globe.width(container.offsetWidth);
        globe.height(container.offsetHeight);
    });
}

// Show country info panel
function showCountryInfo(countryName, data) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    // Determine status info
    const statusInfo = {
        'very-safe': { emoji: '🟢', text: 'Very Safe', desc: 'Extremely safe, minimal risks' },
        'safe': { emoji: '✅', text: 'Safe', desc: 'Generally safe with normal precautions' },
        'moderate': { emoji: '⚠️', text: 'Moderate', desc: 'Exercise caution, some risks present' },
        'risky': { emoji: '⚡', text: 'Risky', desc: 'Significant risks, extra precautions needed' },
        'dangerous': { emoji: '🔴', text: 'Dangerous', desc: 'High danger, travel not recommended' }
    };

    const status = statusInfo[data.status];

    // Generate detailed warnings and advisories
    let advisories = [];
    if (data.risks.conflictZone) {
        advisories.push({
            level: 'critical',
            icon: '🔴',
            title: 'Active Conflict Zone',
            description: 'Ongoing armed conflict. Avoid all travel to affected regions.'
        });
    }
    if (data.risks.terrorismRisk === 'extreme') {
        advisories.push({
            level: 'critical',
            icon: '⚠️',
            title: 'Extreme Terrorism Risk',
            description: 'High likelihood of terrorist attacks. Remain vigilant in public areas.'
        });
    } else if (data.risks.terrorismRisk === 'very-high') {
        advisories.push({
            level: 'warning',
            icon: '⚠️',
            title: 'Very High Terrorism Risk',
            description: 'Elevated risk of terrorist incidents. Exercise increased caution.'
        });
    }
    if (data.political.stabilityIndex < 30) {
        advisories.push({
            level: 'warning',
            icon: '⚡',
            title: 'Political Instability',
            description: 'Unstable political situation. Protests and civil unrest possible.'
        });
    }
    if (data.crime.homicideRate > 20) {
        advisories.push({
            level: 'warning',
            icon: '🚨',
            title: 'Extreme Violence',
            description: `Very high homicide rate (${data.crime.homicideRate}/100k). Avoid high-risk areas.`
        });
    } else if (data.crime.homicideRate > 10) {
        advisories.push({
            level: 'caution',
            icon: '🚨',
            title: 'High Crime Rate',
            description: `Elevated homicide rate (${data.crime.homicideRate}/100k). Stay alert.`
        });
    }
    if (data.crime.pettyTheftRisk === 'extreme' || data.crime.pettyTheftRisk === 'very-high') {
        advisories.push({
            level: 'caution',
            icon: '👜',
            title: 'High Theft Risk',
            description: 'Very high risk of pickpocketing and theft. Secure valuables.'
        });
    }
    if (data.risks.naturalDisasterRisk === 'very-high') {
        advisories.push({
            level: 'caution',
            icon: '🌪️',
            title: 'Natural Disaster Risk',
            description: 'High risk of natural disasters. Monitor weather and alerts.'
        });
    }
    if (data.risks.earthquakeRisk >= 8) {
        advisories.push({
            level: 'caution',
            icon: '🏚️',
            title: 'High Earthquake Risk',
            description: `Earthquake risk level ${data.risks.earthquakeRisk}/10. Know emergency procedures.`
        });
    }
    if (data.personal.womenSafetyScore < 40) {
        advisories.push({
            level: 'warning',
            icon: '👩',
            title: 'Women Safety Concerns',
            description: 'Low women safety score. Extra precautions advised.'
        });
    }
    if (data.personal.lgbtqSafetyScore < 20) {
        advisories.push({
            level: 'warning',
            icon: '🏳️‍🌈',
            title: 'LGBTQ+ Safety Concerns',
            description: 'Very low LGBTQ+ safety. Legal and social risks may exist.'
        });
    }

    const advisoriesHTML = advisories.length > 0 ? `
        <div class="advisory-card">
            <div class="advisory-header">
                <span class="advisory-icon">🚨</span>
                <span style="font-family: 'Kalam', cursive; font-size: 16px; color: #2d2d2d; font-weight: 700;">Travel Advisories</span>
            </div>
            <div class="advisory-items">
                ${advisories.map(adv => `
                    <div class="advisory-item advisory-${adv.level}">
                        <div style="display: flex; align-items: start; gap: 8px;">
                            <span style="font-size: 16px; flex-shrink: 0;">${adv.icon}</span>
                            <div style="flex: 1;">
                                <div style="font-weight: 700; font-size: 12px; margin-bottom: 2px;">${adv.title}</div>
                                <div style="font-size: 11px; line-height: 1.4; opacity: 0.9;">${adv.description}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    content.innerHTML = `
        <div class="info-header">
            <div class="country-flag">${status.emoji}</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">#${data.rank} worldwide • ${status.text}</div>
        </div>

        <div class="info-content">
            <!-- Safety Index Card -->
            <div class="metric-card safety-index-card">
                <div class="metric-icon">🛡️</div>
                <div class="metric-details">
                    <div class="metric-label">Overall Safety Index</div>
                    <div class="metric-value">${data.overallSafetyIndex}<span class="metric-unit">/100</span></div>
                </div>
            </div>

            <!-- Travel Advisories (if any) -->
            ${advisoriesHTML}

            <!-- Crime Statistics Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🚨</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Crime Statistics</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Violent Crime</span>
                        <span class="breakdown-value">${data.crime.violentCrimeRate}/100k</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Homicide Rate</span>
                        <span class="breakdown-value">${data.crime.homicideRate}/100k</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Property Crime</span>
                        <span class="breakdown-value">${data.crime.propertyCrimeRate}/100k</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Petty Theft</span>
                        <span class="breakdown-value" style="text-transform: capitalize;">${data.crime.pettyTheftRisk}</span>
                    </div>
                </div>
            </div>

            <!-- Political Stability Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🏛️</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Political Stability</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Stability Index</span>
                        <span class="breakdown-value">${data.political.stabilityIndex}/100</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Corruption Index</span>
                        <span class="breakdown-value">${data.political.corruptionIndex}/100</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Democracy Index</span>
                        <span class="breakdown-value">${data.political.democracyIndex}/10</span>
                    </div>
                </div>
            </div>

            <!-- Personal Safety Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">👤</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Personal Safety</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Women Safety</span>
                        <span class="breakdown-value">${data.personal.womenSafetyScore}/100</span>
                    </div>
                    <div class="breakdown-item">
                        <span>LGBTQ+ Safety</span>
                        <span class="breakdown-value">${data.personal.lgbtqSafetyScore}/100</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Tourist Safety</span>
                        <span class="breakdown-value">${data.personal.touristSafetyScore}/100</span>
                    </div>
                </div>
            </div>

            <!-- Risk Factors Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">⚠️</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Risk Factors</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Natural Disasters</span>
                        <span class="breakdown-value" style="text-transform: capitalize;">${data.risks.naturalDisasterRisk}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Earthquake Risk</span>
                        <span class="breakdown-value">${data.risks.earthquakeRisk}/10</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Terrorism Risk</span>
                        <span class="breakdown-value" style="text-transform: capitalize;">${data.risks.terrorismRisk}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Conflict Zone</span>
                        <span class="breakdown-value">${data.risks.conflictZone ? 'Yes ⚠️' : 'No ✓'}</span>
                    </div>
                </div>
            </div>

            <!-- Status Description -->
            <div class="status-card">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <span style="font-size: 24px;">${status.emoji}</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 16px; color: #2d2d2d; font-weight: 700;">${status.text}</span>
                </div>
                <div style="font-size: 13px; color: rgba(45,45,45,0.8); line-height: 1.5;">
                    ${status.desc}
                </div>
            </div>

            <!-- Last Updated -->
            <div style="text-align: center; font-size: 10px; color: rgba(45,45,45,0.5); margin-top: 8px;">
                Updated: ${data.lastUpdated}
            </div>
        </div>
    `;

    panel.classList.remove('hidden');
}

// Close info panel
document.getElementById('closePanel').addEventListener('click', () => {
    document.getElementById('infoPanel').classList.add('hidden');
});

// Reset view button
document.getElementById('resetView').addEventListener('click', () => {
    globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
});

// Auto rotate toggle
document.getElementById('autoRotate').addEventListener('click', (e) => {
    autoRotateEnabled = !autoRotateEnabled;
    globe.controls().autoRotate = autoRotateEnabled;
    e.target.textContent = autoRotateEnabled ? 'Stop Rotate' : 'Auto Rotate';
    e.target.style.background = autoRotateEnabled ? '#ff4d4d' : 'white';
    e.target.style.color = autoRotateEnabled ? 'white' : '#2d2d2d';
});

// Initialize on load
window.addEventListener('load', initGlobe);
