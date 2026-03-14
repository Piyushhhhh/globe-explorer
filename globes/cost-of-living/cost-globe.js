// Cost of Living Globe Visualization
// Hand-drawn design with color-coded countries by affordability

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
    "Hong Kong": { lat: 22.3193, lng: 114.1694 },
    "Macau": { lat: 22.1987, lng: 113.5439 },
    "Barbados": { lat: 13.1939, lng: -59.5432 },
    "Mauritius": { lat: -20.3484, lng: 57.5522 },
    "Bahamas": { lat: 25.0343, lng: -77.3963 },
    "Seychelles": { lat: -4.6796, lng: 55.4920 },
    "Cape Verde": { lat: 16.5388, lng: -23.0418 },
    "Comoros": { lat: -11.6455, lng: 43.3333 },
    "Puerto Rico": { lat: 18.2208, lng: -66.5901 },
    "Sao Tome and Principe": { lat: 0.1864, lng: 6.6131 },
    "Gambia": { lat: 13.4432, lng: -15.3101 },
    "Aruba": { lat: 12.5211, lng: -69.9683 },
    "Cayman Islands": { lat: 19.3133, lng: -81.2546 },
    "Bermuda": { lat: 32.3078, lng: -64.7505 },
    "Guam": { lat: 13.4443, lng: 144.7937 }
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
                costData[feature.properties.NAME] || costData[feature.properties.ADMIN]
            );

            globe
                .polygonsData(countriesWithData)
                .polygonAltitude(0.01)
                .polygonCapColor(feature => {
                    const countryName = feature.properties.NAME || feature.properties.ADMIN;
                    const data = costData[countryName];
                    return data ? data.color : 'rgba(200, 200, 200, 0.3)';
                })
                .polygonSideColor(() => 'rgba(45, 45, 45, 0.2)')
                .polygonStrokeColor(() => '#2d2d2d')
                .polygonLabel(feature => {
                    const countryName = feature.properties.NAME || feature.properties.ADMIN;
                    const data = costData[countryName];

                    if (!data) return `<div style="color: white; background: rgba(45,45,45,0.9); padding: 8px 12px; border-radius: 6px; font-family: 'Patrick Hand', cursive;">
                        <b>${countryName}</b><br/>
                        <span style="opacity: 0.7;">No data available</span>
                    </div>`;

                    return `
                        <div style="color: white; background: rgba(45,45,45,0.95); padding: 12px 16px; border-radius: 8px; font-family: 'Patrick Hand', cursive; max-width: 280px;">
                            <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">${countryName}</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="opacity: 0.8;">Cost Index:</span>
                                <span style="color: ${data.color}; font-weight: bold; font-size: 20px;">${data.overallIndex}</span>
                            </div>
                            <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 4px;">Monthly Budget (Single):</div>
                                <div style="font-size: 18px; font-weight: bold;">$${data.monthlyBudget.single.toLocaleString()}</div>
                            </div>
                            <div style="font-size: 12px; opacity: 0.7; text-transform: capitalize;">${data.status.replace('-', ' ')}</div>
                            <div style="font-size: 11px; opacity: 0.5; margin-top: 6px;">Click to see full details →</div>
                        </div>
                    `;
                })
                .onPolygonClick(feature => {
                    const countryName = feature.properties.NAME || feature.properties.ADMIN;
                    const data = costData[countryName];
                    if (data) {
                        showCountryInfo(countryName, data);
                    }
                });

            // Add markers for small countries
            const smallCountryMarkers = Object.entries(smallCountries)
                .filter(([name]) => costData[name])
                .map(([name, coords]) => ({
                    name,
                    lat: coords.lat,
                    lng: coords.lng,
                    data: costData[name]
                }));

            globe
                .pointsData(smallCountryMarkers)
                .pointAltitude(0.02)
                .pointRadius(0.8)
                .pointColor(d => d.data.color)
                .pointLabel(d => `
                    <div style="color: white; background: rgba(45,45,45,0.95); padding: 12px 16px; border-radius: 8px; font-family: 'Patrick Hand', cursive; max-width: 280px;">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">${d.name}</div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="opacity: 0.8;">Cost Index:</span>
                            <span style="color: ${d.data.color}; font-weight: bold; font-size: 20px;">${d.data.overallIndex}</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                            <div style="font-size: 14px; opacity: 0.9; margin-bottom: 4px;">Monthly Budget (Single):</div>
                            <div style="font-size: 18px; font-weight: bold;">$${d.data.monthlyBudget.single.toLocaleString()}</div>
                        </div>
                        <div style="font-size: 12px; opacity: 0.7; text-transform: capitalize;">${d.data.status.replace('-', ' ')}</div>
                        <div style="font-size: 11px; opacity: 0.5; margin-top: 6px;">Click to see full details →</div>
                    </div>
                `)
                .onPointClick(d => {
                    showCountryInfo(d.name, d.data);
                })
                // Add labels for small countries
                .labelsData(smallCountryMarkers)
                .labelLat(d => d.lat)
                .labelLng(d => d.lng)
                .labelText(d => d.name)
                .labelSize(0.5)
                .labelColor(d => d.data.color)
                .labelDotRadius(0.4)
                .labelAltitude(0.03)
                .labelResolution(2);

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
        'very-affordable': { emoji: '🌟', text: 'Very Affordable', desc: 'Budget paradise' },
        'affordable': { emoji: '💚', text: 'Affordable', desc: 'Great value' },
        'moderate': { emoji: '💛', text: 'Moderate Cost', desc: 'Average pricing' },
        'expensive': { emoji: '🟠', text: 'Expensive', desc: 'High cost' },
        'very-expensive': { emoji: '🔴', text: 'Very Expensive', desc: 'Premium pricing' }
    };

    const status = statusInfo[data.status];

    content.innerHTML = `
        <div class="info-header">
            <div class="country-flag">${status.emoji}</div>
            <h2 class="country-name">${countryName}</h2>
            <div class="country-rank">#${data.rank} worldwide • ${status.text}</div>
        </div>

        <div class="info-content">
            <!-- Cost Index Card -->
            <div class="metric-card cost-index-card">
                <div class="metric-icon">💰</div>
                <div class="metric-details">
                    <div class="metric-label">Overall Cost Index</div>
                    <div class="metric-value">${data.overallIndex}<span class="metric-unit">/100</span></div>
                </div>
            </div>

            <!-- Monthly Budget Card -->
            <div class="budget-card">
                <div class="budget-header">
                    <span class="budget-icon">📊</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 16px; color: #2d2d2d;">Monthly Budget</span>
                </div>
                <div class="budget-grid">
                    <div class="budget-item">
                        <div class="budget-label">Single</div>
                        <div class="budget-value">$${data.monthlyBudget.single.toLocaleString()}</div>
                    </div>
                    <div class="budget-item">
                        <div class="budget-label">Couple</div>
                        <div class="budget-value">$${data.monthlyBudget.couple.toLocaleString()}</div>
                    </div>
                    <div class="budget-item">
                        <div class="budget-label">Family</div>
                        <div class="budget-value">$${data.monthlyBudget.family.toLocaleString()}</div>
                    </div>
                </div>
            </div>

            <!-- Housing Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🏠</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Housing</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>1BR Rent</span>
                        <span class="breakdown-value">$${data.breakdown.housing.rentOneBR}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>3BR Rent</span>
                        <span class="breakdown-value">$${data.breakdown.housing.rentThreeBR}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Price/sqm</span>
                        <span class="breakdown-value">$${data.breakdown.housing.buyPricePerSqM}</span>
                    </div>
                </div>
            </div>

            <!-- Food Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🍽️</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Food & Dining</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Groceries</span>
                        <span class="breakdown-value">$${data.breakdown.food.groceriesMonthly}/mo</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Cheap meal</span>
                        <span class="breakdown-value">$${data.breakdown.food.mealInexpensive}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Restaurant</span>
                        <span class="breakdown-value">$${data.breakdown.food.mealMidRange}</span>
                    </div>
                </div>
            </div>

            <!-- Transport Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🚗</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Transport</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Monthly pass</span>
                        <span class="breakdown-value">$${data.breakdown.transport.monthlyPass}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Taxi/km</span>
                        <span class="breakdown-value">$${data.breakdown.transport.taxiPerKm}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Gas/liter</span>
                        <span class="breakdown-value">$${data.breakdown.transport.gasolinePerLiter}</span>
                    </div>
                </div>
            </div>

            <!-- Utilities Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">💡</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Utilities</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Basic bills</span>
                        <span class="breakdown-value">$${data.breakdown.utilities.basicMonthly}/mo</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Internet ${data.breakdown.utilities.internetMbps}Mbps</span>
                        <span class="breakdown-value">Included</span>
                    </div>
                </div>
            </div>

            <!-- Healthcare Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🏥</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Healthcare</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Doctor visit</span>
                        <span class="breakdown-value">$${data.breakdown.healthcare.doctorVisit}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Insurance</span>
                        <span class="breakdown-value">$${data.breakdown.healthcare.insuranceMonthly}/mo</span>
                    </div>
                </div>
            </div>

            <!-- Entertainment Card -->
            <div class="breakdown-card">
                <div class="breakdown-header">
                    <span class="breakdown-icon">🎮</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Entertainment</span>
                </div>
                <div class="breakdown-items">
                    <div class="breakdown-item">
                        <span>Gym</span>
                        <span class="breakdown-value">$${data.breakdown.entertainment.gymMembership}/mo</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Cinema</span>
                        <span class="breakdown-value">$${data.breakdown.entertainment.cinemaTicket}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Beer</span>
                        <span class="breakdown-value">$${data.breakdown.entertainment.beerBar}</span>
                    </div>
                </div>
            </div>

            <!-- Currency Card -->
            <div class="currency-card">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 18px;">💱</span>
                    <span style="font-family: 'Kalam', cursive; font-size: 14px; color: #2d2d2d;">Currency</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 16px; font-weight: bold; color: #2d2d2d;">${data.currency}</span>
                    <span style="font-size: 12px; color: rgba(45,45,45,0.7);">1 USD = ${data.exchangeRate} ${data.currency}</span>
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
