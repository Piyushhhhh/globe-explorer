// Quick Facts Overlay System
// Contextual, engaging facts that rotate and educate

let currentFactIndex = 0;
let autoRotateInterval = null;
let autoRotateEnabled = false;

// Fact categories
const factCategories = {
    amazing: { icon: '🤯', label: 'Amazing', color: '#3b82f6' },
    record: { icon: '🏆', label: 'World Record', color: '#f59e0b' },
    crisis: { icon: '🚨', label: 'Urgent', color: '#ef4444' },
    hope: { icon: '🌱', label: 'Good News', color: '#10b981' }
};

// Global biodiversity facts (shown when no country selected)
const globalFacts = [
    {
        category: 'amazing',
        text: 'Earth is home to an estimated 8.7 million species, but we\'ve only discovered 1.2 million of them.',
        source: 'PLOS Biology, 2011'
    },
    {
        category: 'crisis',
        text: 'We\'re losing species at 1,000x the natural rate. Current extinction rate: 100-200 species per day.',
        source: 'UN Biodiversity Report, 2019'
    },
    {
        category: 'hope',
        text: 'Mountain gorilla population has increased from 480 (1989) to 1,063 (2024) thanks to conservation.',
        source: 'IUCN Red List, 2024'
    },
    {
        category: 'record',
        text: 'The Amazon rainforest produces 20% of Earth\'s oxygen and stores 150-200 billion tons of carbon.',
        source: 'Amazon Conservation Association'
    },
    {
        category: 'amazing',
        text: 'A single tree in the Amazon can host over 400 insect species - more than all of the British Isles.',
        source: 'Smithsonian Research'
    },
    {
        category: 'crisis',
        text: 'Since 1970, wildlife populations have declined by 69% on average globally.',
        source: 'WWF Living Planet Report 2022'
    },
    {
        category: 'hope',
        text: 'China\'s giant panda population has grown from 1,114 to 1,864 in 15 years. No longer endangered!',
        source: 'IUCN, 2021'
    },
    {
        category: 'record',
        text: 'Indonesia\'s Coral Triangle contains 76% of all known coral species in just 1.6% of ocean area.',
        source: 'Coral Triangle Initiative'
    },
    {
        category: 'amazing',
        text: 'A teaspoon of healthy soil contains more organisms than there are humans on Earth.',
        source: 'USDA Natural Resources Conservation'
    },
    {
        category: 'crisis',
        text: 'Tropical forests are being cleared at a rate of 10 football fields per minute.',
        source: 'Rainforest Foundation, 2024'
    },
    {
        category: 'hope',
        text: 'Humpback whale populations have recovered from 450 to 25,000+ since whaling bans.',
        source: 'NOAA Fisheries'
    },
    {
        category: 'record',
        text: 'Madagascar is home to 5% of all species on Earth, with 90% found nowhere else.',
        source: 'Conservation International'
    },
    {
        category: 'amazing',
        text: 'Oceans cover 71% of Earth but we\'ve explored less than 5% of them. More people have been to space than the deepest ocean.',
        source: 'NOAA Ocean Exploration'
    },
    {
        category: 'record',
        text: 'Coral reefs cover only 0.1% of the ocean floor but support 25% of all marine species.',
        source: 'Coral Reef Alliance'
    },
    {
        category: 'amazing',
        text: 'Oceans produce 50-80% of Earth\'s oxygen, mostly from tiny phytoplankton. Every other breath you take comes from the ocean.',
        source: 'National Geographic'
    },
    {
        category: 'crisis',
        text: 'Half of the world\'s coral reefs have died in the last 30 years due to warming oceans and acidification.',
        source: 'WWF, 2020'
    },
    {
        category: 'amazing',
        text: 'The Mariana Trench is 10,994 meters deep - deeper than Mount Everest is tall. Only 3 people have reached the bottom.',
        source: 'NOAA'
    },
    {
        category: 'hope',
        text: 'Marine Protected Areas have tripled since 2010, now covering 8% of the ocean. Goal: 30% by 2030.',
        source: 'UN Ocean Conference, 2022'
    }
];

// Country-specific facts database
const countryFacts = {
    'Brazil': [
        {
            category: 'record',
            text: 'Brazil has more tree species (8,715) than all of North America combined.',
            source: 'Royal Botanic Gardens'
        },
        {
            category: 'crisis',
            text: 'Brazil lost an area of Amazon rainforest the size of Delaware in 2023 alone.',
            source: 'INPE Satellite Monitoring'
        },
        {
            category: 'amazing',
            text: 'One single hectare of Amazon rainforest can contain 42,000 insect species.',
            source: 'Smithsonian Tropical Research'
        }
    ],
    'Indonesia': [
        {
            category: 'record',
            text: 'Indonesia has more mammal species (670) than any other country on Earth.',
            source: 'Ministry of Environment'
        },
        {
            category: 'crisis',
            text: 'Sumatran orangutans have declined 80% in 75 years due to palm oil plantations.',
            source: 'IUCN, 2024'
        },
        {
            category: 'amazing',
            text: 'The Komodo dragon, world\'s largest lizard, exists only on 5 Indonesian islands.',
            source: 'Komodo National Park'
        },
        {
            category: 'record',
            text: 'The Coral Triangle contains 76% of all coral species in just 1.6% of ocean area. Indonesia is at its heart.',
            source: 'Coral Triangle Initiative'
        },
        {
            category: 'amazing',
            text: 'Raja Ampat, Indonesia has the highest marine biodiversity on Earth - 1,500+ fish species in one region.',
            source: 'Conservation International'
        }
    ],
    'Madagascar': [
        {
            category: 'amazing',
            text: 'All lemurs in the world are found only in Madagascar - nowhere else.',
            source: 'Lemur Conservation Network'
        },
        {
            category: 'crisis',
            text: 'Madagascar has lost 90% of its original forest cover since humans arrived.',
            source: 'Conservation International'
        },
        {
            category: 'record',
            text: 'Madagascar has 11,000+ plant species, with 83% found nowhere else on Earth.',
            source: 'Missouri Botanical Garden'
        }
    ],
    'Australia': [
        {
            category: 'record',
            text: 'Australia has the highest rate of species endemism: 87% of mammals are unique.',
            source: 'Australian Government'
        },
        {
            category: 'crisis',
            text: 'The 2019-2020 bushfires killed an estimated 3 billion animals.',
            source: 'WWF Australia'
        },
        {
            category: 'amazing',
            text: 'The Great Barrier Reef has more species than all of Europe combined.',
            source: 'Great Barrier Reef Foundation'
        },
        {
            category: 'record',
            text: 'The Great Barrier Reef is the largest living structure on Earth, visible from space - 2,300 km long.',
            source: 'GBRMPA'
        },
        {
            category: 'crisis',
            text: 'The Great Barrier Reef has lost 50% of its coral since 1995 due to bleaching events.',
            source: 'Nature, 2020'
        }
    ],
    'Democratic Republic of the Congo': [
        {
            category: 'amazing',
            text: 'The Congo Basin stores 8% of all the world\'s forest carbon - crucial for climate.',
            source: 'Central African Forests Commission'
        },
        {
            category: 'hope',
            text: 'Mountain gorilla population in Virunga has doubled in the last 20 years.',
            source: 'Virunga National Park'
        },
        {
            category: 'record',
            text: 'DR Congo\'s forests absorb 1.2 billion tons of CO2 per year - more than Amazon.',
            source: 'Nature Climate Change, 2023'
        }
    ],
    'United States of America': [
        {
            category: 'hope',
            text: 'Bald eagle populations soared from 417 pairs (1963) to 316,000+ today.',
            source: 'US Fish & Wildlife Service'
        },
        {
            category: 'record',
            text: 'Yellowstone was the world\'s first national park, created in 1872.',
            source: 'National Park Service'
        },
        {
            category: 'amazing',
            text: 'A single giant sequoia tree can weigh 2.7 million pounds and live 3,000+ years.',
            source: 'Save the Redwoods League'
        }
    ],
    'India': [
        {
            category: 'hope',
            text: 'India\'s tiger population has grown from 1,411 (2006) to 3,167 (2022) - success story!',
            source: 'Project Tiger'
        },
        {
            category: 'amazing',
            text: 'The Sundarbans mangrove forest is the only place where tigers swim and hunt in saltwater.',
            source: 'Sundarbans Tiger Reserve'
        },
        {
            category: 'record',
            text: 'India has 70% of the world\'s remaining wild tiger population.',
            source: 'National Tiger Conservation Authority'
        }
    ],
    'Colombia': [
        {
            category: 'record',
            text: 'Colombia has more bird species (1,966) than any other country - 20% of all birds!',
            source: 'Colombian Ornithology Association'
        },
        {
            category: 'amazing',
            text: 'Colombia contains 10% of all species on Earth despite covering just 0.7% of land.',
            source: 'Humboldt Institute'
        },
        {
            category: 'hope',
            text: 'Peace agreement (2016) has allowed scientists to explore previously inaccessible biodiverse regions.',
            source: 'Science Magazine, 2019'
        }
    ],
    'Kenya': [
        {
            category: 'hope',
            text: 'Kenya\'s elephant population has doubled from 16,000 (1989) to 36,000 (2023) through anti-poaching.',
            source: 'Kenya Wildlife Service'
        },
        {
            category: 'record',
            text: 'The Serengeti-Mara ecosystem hosts the world\'s last great land mammal migration.',
            source: 'Mara Conservancy'
        },
        {
            category: 'amazing',
            text: 'Over 1.5 million wildebeest migrate through Kenya each year in "Nature\'s Greatest Show".',
            source: 'World Wildlife Fund'
        }
    ],
    'Peru': [
        {
            category: 'record',
            text: 'Peru\'s Manu National Park has more bird species (1,000+) than USA and Canada combined.',
            source: 'Manu Biosphere Reserve'
        },
        {
            category: 'amazing',
            text: 'A single tree in Peru\'s Amazon held 5,000+ beetle species - a world record.',
            source: 'Terry Erwin, Smithsonian'
        },
        {
            category: 'crisis',
            text: 'Peru loses 200,000 hectares of forest annually to illegal gold mining.',
            source: 'MAAP Project'
        }
    ]
};

// Get facts for a specific country
function getFactsForCountry(countryName) {
    const countrySpecific = countryFacts[countryName] || [];
    // Mix country-specific with global facts
    return [...countrySpecific, ...globalFacts.slice(0, 3)];
}

// Show fact overlay
function showFactOverlay(countryName = null) {
    let facts = countryName ? getFactsForCountry(countryName) : globalFacts;

    // Start with random fact
    currentFactIndex = Math.floor(Math.random() * facts.length);

    renderFact(facts[currentFactIndex], facts.length, countryName);
}

// Render fact in overlay
function renderFact(fact, totalFacts, countryName) {
    const overlay = document.getElementById('factsOverlay');
    if (!overlay) return;

    const category = factCategories[fact.category];
    const contextLabel = countryName ? `About ${countryName}` : 'Global Biodiversity';

    overlay.innerHTML = `
        <div class="facts-card">
            <div class="facts-header">
                <span class="facts-category" style="color: ${category.color};">
                    ${category.icon} ${category.label}
                </span>
                <button class="facts-close" id="closeFacts">✕</button>
            </div>
            <div class="facts-context">${contextLabel}</div>
            <div class="facts-content">
                ${fact.text}
            </div>
            <div class="facts-source">
                Source: ${fact.source}
            </div>
            <div class="facts-controls">
                <button class="facts-nav" id="prevFact">← Prev</button>
                <div class="facts-counter">${currentFactIndex + 1} / ${totalFacts}</div>
                <button class="facts-nav" id="nextFact">Next →</button>
            </div>
            <div class="facts-actions">
                <button class="facts-share" id="shareFact">📤 Share</button>
                <button class="facts-auto" id="autoRotate">${autoRotateEnabled ? '⏸ Pause' : '▶ Auto'}</button>
            </div>
        </div>
    `;

    overlay.classList.add('active');

    // Attach event listeners
    document.getElementById('closeFacts')?.addEventListener('click', hideFactOverlay);
    document.getElementById('prevFact')?.addEventListener('click', () => navigateFact(-1, countryName));
    document.getElementById('nextFact')?.addEventListener('click', () => navigateFact(1, countryName));
    document.getElementById('shareFact')?.addEventListener('click', () => shareFact(fact));
    document.getElementById('autoRotate')?.addEventListener('click', toggleAutoRotate);
}

// Navigate between facts
function navigateFact(direction, countryName) {
    const facts = countryName ? getFactsForCountry(countryName) : globalFacts;
    currentFactIndex = (currentFactIndex + direction + facts.length) % facts.length;
    renderFact(facts[currentFactIndex], facts.length, countryName);
}

// Hide overlay
function hideFactOverlay() {
    const overlay = document.getElementById('factsOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    stopAutoRotate();
}

// Toggle auto-rotate
function toggleAutoRotate() {
    autoRotateEnabled = !autoRotateEnabled;

    if (autoRotateEnabled) {
        startAutoRotate();
    } else {
        stopAutoRotate();
    }
}

// Start auto-rotate
function startAutoRotate() {
    stopAutoRotate(); // Clear any existing interval

    autoRotateInterval = setInterval(() => {
        navigateFact(1, null);
    }, 30000); // 30 seconds
}

// Stop auto-rotate
function stopAutoRotate() {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }
}

// Share fact
function shareFact(fact) {
    const text = `${fact.text}\n\nExplore biodiversity: ${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: 'Biodiversity Fact',
            text: text
        }).catch(() => {});
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('shareFact');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = '✓ Copied!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            }
        });
    }
}

// Show context-aware facts when country changes
function updateFactsForCountry(countryName) {
    const overlay = document.getElementById('factsOverlay');
    if (overlay && overlay.classList.contains('active')) {
        // If overlay is open, update it
        showFactOverlay(countryName);
    }
}

// Export functions
window.showFactOverlay = showFactOverlay;
window.hideFactOverlay = hideFactOverlay;
window.updateFactsForCountry = updateFactsForCountry;

console.log('📚 Quick Facts system loaded');
