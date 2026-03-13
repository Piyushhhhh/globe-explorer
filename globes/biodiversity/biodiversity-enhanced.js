// Enhanced Interactive Features for Biodiversity Globe

// Interactive State (exposed globally)
const interactiveState = {
    compareMode: false,
    comparedCountries: [],
    currentInsight: 0,
    statsVisible: true
};

// Expose globally
window.interactiveState = interactiveState;

// Initialize enhanced features
function initializeEnhancedFeatures() {
    // Removed: createSearchBar();
    // Removed: createFilterPanel();
    createStatsBoard();
    createInsightsPanel();
    createCompareTool();
    initializeKeyboardShortcuts();
    startInsightsRotation();

    console.log('[ENHANCED] Interactive features loaded (no search/filter)');
}

// Create Search Bar
function createSearchBar() {
    const searchHTML = `
        <div class="search-container" id="searchContainer">
            <div class="search-box">
                <span class="search-icon">🔍</span>
                <input type="text" id="countrySearch" placeholder="Search countries..." />
                <button class="clear-search" id="clearSearch">✕</button>
            </div>
            <div class="search-results" id="searchResults"></div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', searchHTML);

    const searchInput = document.getElementById('countrySearch');
    const searchResults = document.getElementById('searchResults');
    const clearBtn = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        interactiveState.searchQuery = query;

        if (query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.classList.remove('visible');
            return;
        }

        const matches = Object.keys(biodiversityData).filter(country =>
            country.toLowerCase().includes(query)
        ).slice(0, 5);

        if (matches.length > 0) {
            searchResults.innerHTML = matches.map(country => {
                const data = biodiversityData[country];
                return `
                    <div class="search-result-item" data-country="${country}">
                        <span class="result-icon">${getCountryEmoji(country)}</span>
                        <div class="result-details">
                            <div class="result-name">${country}</div>
                            <div class="result-stats">${data.speciesCount.toLocaleString()} species • ${data.forestCoverage}% forest</div>
                        </div>
                    </div>
                `;
            }).join('');
            searchResults.classList.add('visible');

            // Add click handlers
            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const country = item.dataset.country;
                    const countryFeature = window.countriesData.find(f => f.properties.ADMIN === country);
                    if (countryFeature) {
                        const coords = getCountryCenter(countryFeature);
                        selectCountry(country, coords);
                        searchInput.value = '';
                        searchResults.innerHTML = '';
                        searchResults.classList.remove('visible');
                    }
                });
            });
        } else {
            searchResults.innerHTML = '<div class="no-results">No countries found</div>';
            searchResults.classList.add('visible');
        }
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('visible');
    });
}

// Create Filter Panel
function createFilterPanel() {
    const filterHTML = `
        <div class="filter-panel" id="filterPanel">
            <button class="filter-toggle" id="filterToggle">
                <span>🎚️</span>
                <span>Filters</span>
            </button>
            <div class="filter-content" id="filterContent">
                <h3>Filter Countries</h3>

                <div class="filter-section">
                    <h4>Threat Level</h4>
                    <label><input type="checkbox" value="critical" class="threat-filter"> Critical</label>
                    <label><input type="checkbox" value="high" class="threat-filter"> High</label>
                    <label><input type="checkbox" value="moderate" class="threat-filter"> Moderate</label>
                    <label><input type="checkbox" value="low" class="threat-filter"> Low</label>
                </div>

                <div class="filter-section">
                    <h4>Forest Coverage</h4>
                    <label><input type="checkbox" value="high-forest" class="forest-filter"> >50% (Dense)</label>
                    <label><input type="checkbox" value="medium-forest" class="forest-filter"> 20-50% (Medium)</label>
                    <label><input type="checkbox" value="low-forest" class="forest-filter"> <20% (Low)</label>
                </div>

                <div class="filter-section">
                    <h4>View Options</h4>
                    <label><input type="checkbox" id="toggleHeatmap" checked> Show Heatmap</label>
                    <label><input type="checkbox" id="toggleAnimals" checked> Show Animals</label>
                    <label><input type="checkbox" id="toggleForests" checked> Show Forests</label>
                </div>

                <button class="filter-reset" id="resetFilters">Reset All</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', filterHTML);

    const toggleBtn = document.getElementById('filterToggle');
    const content = document.getElementById('filterContent');

    toggleBtn.addEventListener('click', () => {
        content.classList.toggle('visible');
    });

    // Threat filters
    document.querySelectorAll('.threat-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Forest filters
    document.querySelectorAll('.forest-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // View toggles
    document.getElementById('toggleHeatmap').addEventListener('change', (e) => {
        interactiveState.showHeatmap = e.target.checked;
        updateGlobeColors();
    });

    document.getElementById('toggleAnimals').addEventListener('change', (e) => {
        const animalsVisible = e.target.checked;
        globe.htmlElementsData(animalsVisible ? animalsLayer : []);
    });

    document.getElementById('toggleForests').addEventListener('change', (e) => {
        const forestsVisible = e.target.checked;
        globe.arcsData(forestsVisible ? forestsLayer : []);
    });

    // Reset
    document.getElementById('resetFilters').addEventListener('click', () => {
        document.querySelectorAll('.threat-filter, .forest-filter').forEach(cb => cb.checked = false);
        applyFilters();
    });
}

// Apply filters
function applyFilters() {
    const threatFilters = Array.from(document.querySelectorAll('.threat-filter:checked')).map(cb => cb.value);
    const forestFilters = Array.from(document.querySelectorAll('.forest-filter:checked')).map(cb => cb.value);

    interactiveState.activeFilters = [...threatFilters, ...forestFilters];

    // Highlight matching countries
    if (globe && window.countriesData) {
        globe.polygonCapColor((d) => {
            const countryName = d.properties.ADMIN;
            const bioData = biodiversityData[countryName];

            if (!bioData) return 'rgba(50, 50, 50, 0.08)';

            // Check if country matches filters
            let matches = true;
            if (threatFilters.length > 0) {
                matches = matches && threatFilters.includes(bioData.threatLevel);
            }
            if (forestFilters.length > 0) {
                const coverage = bioData.forestCoverage;
                const matchesForest = forestFilters.some(filter => {
                    if (filter === 'high-forest') return coverage > 50;
                    if (filter === 'medium-forest') return coverage >= 20 && coverage <= 50;
                    if (filter === 'low-forest') return coverage < 20;
                    return false;
                });
                matches = matches && matchesForest;
            }

            // If filters active but doesn't match, dim it
            if (interactiveState.activeFilters.length > 0 && !matches) {
                return 'rgba(50, 50, 50, 0.05)';
            }

            // Otherwise show normal colors
            const coverage = bioData.forestCoverage;
            if (coverage > 50) return 'rgba(46, 204, 113, 0.3)';
            if (coverage > 30) return 'rgba(52, 152, 219, 0.25)';
            if (coverage > 10) return 'rgba(243, 156, 18, 0.2)';
            return 'rgba(231, 76, 60, 0.2)';
        });
    }
}

// Create Stats Dashboard
function createStatsBoard() {
    const statsHTML = `
        <div class="stats-dashboard" id="statsDashboard">
            <div class="stats-header">
                <h3>🌍 Global Insights</h3>
                <button class="stats-minimize" id="minimizeStats">−</button>
            </div>
            <div class="stats-content" id="statsContent">
                <div class="stat-box">
                    <div class="stat-label">Most Biodiverse</div>
                    <div class="stat-value" id="topBiodiversity">Brazil</div>
                    <div class="stat-detail">103,870 species</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Most Forests</div>
                    <div class="stat-value" id="topForest">French Guiana</div>
                    <div class="stat-detail">98.3% coverage</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Most Endangered</div>
                    <div class="stat-value" id="topThreat">Haiti</div>
                    <div class="stat-detail">3.6% forest left</div>
                </div>
                <div class="stat-box stat-alert">
                    <div class="stat-label">⚠️ Critical Alert</div>
                    <div class="stat-value">39 Countries</div>
                    <div class="stat-detail">Face severe threats</div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', statsHTML);

    document.getElementById('minimizeStats').addEventListener('click', () => {
        const content = document.getElementById('statsContent');
        const btn = document.getElementById('minimizeStats');
        content.classList.toggle('hidden');
        btn.textContent = content.classList.contains('hidden') ? '+' : '−';
    });
}

// Create Insights Panel (Did You Know)
function createInsightsPanel() {
    const insights = [
        "🦘 Australia has 93,760 endemic species found nowhere else on Earth!",
        "🌳 French Guiana is 98.3% forest - the most forested country!",
        "🐧 Antarctica hosts Emperor Penguins that survive -60°C temperatures!",
        "🦎 Madagascar's wildlife is 89% unique to the island!",
        "🐅 Only 3,900 tigers remain in the wild across 13 countries.",
        "🌴 The Amazon rainforest spans 9 countries and has 10% of Earth's species!",
        "🦍 Mountain Gorillas only live in 3 countries: Uganda, Rwanda, DRC.",
        "🐼 Giant Pandas only live in China and eat 26-84 lbs of bamboo daily!",
        "🦜 Brazil has more bird species (1,800+) than any other country!",
        "🌊 Indonesia has 17,500+ islands - the most biodiverse archipelago!",
        "🦇 Bats pollinate 500+ plant species including mangoes and bananas!",
        "🐘 African elephants are the world's largest land animals!",
        "🦋 Monarch butterflies migrate 3,000 miles from Canada to Mexico!",
        "🌲 Finland has 76% forest coverage - Europe's most forested!",
        "🐻 Polar bears can swim 60 miles without rest in the Arctic!"
    ];

    const insightsHTML = `
        <div class="insights-panel" id="insightsPanel">
            <div class="insight-icon">💡</div>
            <div class="insight-text" id="insightText">${insights[0]}</div>
            <button class="insight-next" id="nextInsight">→</button>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', insightsHTML);

    const textEl = document.getElementById('insightText');
    const nextBtn = document.getElementById('nextInsight');

    nextBtn.addEventListener('click', () => {
        interactiveState.currentInsight = (interactiveState.currentInsight + 1) % insights.length;
        textEl.style.animation = 'none';
        setTimeout(() => {
            textEl.textContent = insights[interactiveState.currentInsight];
            textEl.style.animation = 'slideIn 0.5s ease';
        }, 50);
    });

    // Auto-rotate insights
    window.insightsInterval = setInterval(() => {
        nextBtn.click();
    }, 15000); // Every 15 seconds
}

function startInsightsRotation() {
    // Already handled in createInsightsPanel
}

// Create Compare Tool
function createCompareTool() {
    const compareHTML = `
        <div class="compare-tool" id="compareTool">
            <button class="compare-toggle" id="compareToggle">
                <span>⚖️</span>
                <span>Compare</span>
            </button>
            <div class="compare-panel hidden" id="comparePanel">
                <h3>Compare Countries</h3>
                <div class="compare-slots">
                    <div class="compare-slot" id="compareSlot1">
                        <div class="slot-empty">Click a country</div>
                    </div>
                    <div class="compare-vs">VS</div>
                    <div class="compare-slot" id="compareSlot2">
                        <div class="slot-empty">Click another</div>
                    </div>
                </div>
                <div class="compare-results hidden" id="compareResults"></div>
                <button class="compare-clear" id="clearCompare">Clear</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', compareHTML);

    const toggleBtn = document.getElementById('compareToggle');
    const panel = document.getElementById('comparePanel');

    toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
        interactiveState.compareMode = !panel.classList.contains('hidden');
    });

    document.getElementById('clearCompare').addEventListener('click', () => {
        interactiveState.comparedCountries = [];
        document.getElementById('compareSlot1').innerHTML = '<div class="slot-empty">Click a country</div>';
        document.getElementById('compareSlot2').innerHTML = '<div class="slot-empty">Click another</div>';
        document.getElementById('compareResults').classList.add('hidden');
    });
}

// Add country to comparison
function addToComparison(countryName) {
    if (!interactiveState.compareMode) return;

    const slot1 = document.getElementById('compareSlot1');
    const slot2 = document.getElementById('compareSlot2');
    const resultsEl = document.getElementById('compareResults');

    if (interactiveState.comparedCountries.length === 0) {
        interactiveState.comparedCountries.push(countryName);
        const data = biodiversityData[countryName];
        slot1.innerHTML = `
            <div class="country-name">${countryName}</div>
            <div class="country-quick-stat">${data.speciesCount.toLocaleString()} species</div>
        `;
    } else if (interactiveState.comparedCountries.length === 1) {
        if (interactiveState.comparedCountries[0] === countryName) {
            showToast('Please select a different country', 2000, 'info');
            return;
        }
        interactiveState.comparedCountries.push(countryName);
        const data = biodiversityData[countryName];
        slot2.innerHTML = `
            <div class="country-name">${countryName}</div>
            <div class="country-quick-stat">${data.speciesCount.toLocaleString()} species</div>
        `;

        // Show comparison
        showComparison();
    } else {
        // Reset and start over
        interactiveState.comparedCountries = [countryName];
        const data = biodiversityData[countryName];
        slot1.innerHTML = `
            <div class="country-name">${countryName}</div>
            <div class="country-quick-stat">${data.speciesCount.toLocaleString()} species</div>
        `;
        slot2.innerHTML = '<div class="slot-empty">Click another</div>';
        resultsEl.classList.add('hidden');
    }
}

// Show comparison results
function showComparison() {
    const [country1, country2] = interactiveState.comparedCountries;
    const data1 = biodiversityData[country1];
    const data2 = biodiversityData[country2];
    const resultsEl = document.getElementById('compareResults');

    const compareSpecies = data1.speciesCount > data2.speciesCount ?
        `${country1} has ${(data1.speciesCount - data2.speciesCount).toLocaleString()} more species` :
        `${country2} has ${(data2.speciesCount - data1.speciesCount).toLocaleString()} more species`;

    const compareForest = data1.forestCoverage > data2.forestCoverage ?
        `${country1} has ${(data1.forestCoverage - data2.forestCoverage).toFixed(1)}% more forest` :
        `${country2} has ${(data2.forestCoverage - data1.forestCoverage).toFixed(1)}% more forest`;

    const compareEndemic = data1.endemicSpecies > data2.endemicSpecies ?
        `${country1} has ${(data1.endemicSpecies - data2.endemicSpecies).toLocaleString()} more endemic species` :
        `${country2} has ${(data2.endemicSpecies - data1.endemicSpecies).toLocaleString()} more endemic species`;

    resultsEl.innerHTML = `
        <h4>Comparison Results</h4>
        <div class="comparison-row">
            <span class="compare-label">Species Count:</span>
            <span class="compare-result">${compareSpecies}</span>
        </div>
        <div class="comparison-row">
            <span class="compare-label">Forest Coverage:</span>
            <span class="compare-result">${compareForest}</span>
        </div>
        <div class="comparison-row">
            <span class="compare-label">Endemic Species:</span>
            <span class="compare-result">${compareEndemic}</span>
        </div>
        <div class="comparison-row">
            <span class="compare-label">Threat Level:</span>
            <span class="compare-result">${country1}: ${data1.threatLevel} | ${country2}: ${data2.threatLevel}</span>
        </div>
    `;
    resultsEl.classList.remove('hidden');
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return;

        switch(e.key.toLowerCase()) {
            case 'c':
                document.getElementById('compareToggle').click();
                break;
            case 'i':
            case 'n':
                document.getElementById('nextInsight').click();
                break;
            case 'h':
                // Show help
                showToast('Keyboard: C=Compare, I=Next Insight, R=Reset', 4000, 'info');
                break;
        }
    });
}

// Helper: Get country emoji
function getCountryEmoji(countryName) {
    const emojis = {
        'Brazil': '🇧🇷', 'China': '🇨🇳', 'India': '🇮🇳', 'United States': '🇺🇸',
        'United States of America': '🇺🇸', 'Australia': '🇦🇺', 'Indonesia': '🇮🇩',
        'Mexico': '🇲🇽', 'Japan': '🇯🇵', 'Germany': '🇩🇪', 'France': '🇫🇷',
        'United Kingdom': '🇬🇧', 'Italy': '🇮🇹', 'Spain': '🇪🇸', 'Canada': '🇨🇦',
        'Russia': '🇷🇺', 'South Korea': '🇰🇷', 'Antarctica': '🇦🇶'
    };
    return emojis[countryName] || '🌍';
}

// Update globe colors
function updateGlobeColors() {
    if (!globe || !window.countriesData) return;
    globe.polygonsData(window.countriesData);
}

// Export for use in main file
window.initializeEnhancedFeatures = initializeEnhancedFeatures;
window.addToComparisonMode = addToComparison;
