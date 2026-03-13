// Ocean Health Data by Coastal Countries and Marine Regions
// Data includes: ocean health index, coral reefs, marine protected areas, overfishing, pollution
// Sources: Ocean Health Index 2024, NOAA, IUCN, Marine Conservation Institute

const oceanData = {
    // Top Ocean Health Countries
    "Australia": {
        oceanHealthScore: 78,
        coralReefHealth: "moderate",
        marineProtectedArea: 41.2,
        overfishingRisk: "low",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 25760,
        rank: 5,
        status: "good",
        color: "#10b981",
        keyIssues: ["Coral bleaching", "Marine heatwaves"],
        marineLife: ["Great Barrier Reef", "Whale sharks", "Sea turtles"]
    },

    "Norway": {
        oceanHealthScore: 85,
        coralReefHealth: "n/a",
        marineProtectedArea: 15.8,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 0.9,
        coastlineLength: 25148,
        rank: 1,
        status: "excellent",
        color: "#10b981",
        keyIssues: ["Sustainable fishing", "Cold water corals"],
        marineLife: ["Atlantic cod", "Orcas", "Herring"]
    },

    "Iceland": {
        oceanHealthScore: 82,
        coralReefHealth: "n/a",
        marineProtectedArea: 12.1,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 0.8,
        coastlineLength: 4970,
        rank: 2,
        status: "excellent",
        color: "#10b981",
        keyIssues: ["Climate change", "Whale conservation"],
        marineLife: ["Whales", "Puffins", "Atlantic salmon"]
    },

    "New Zealand": {
        oceanHealthScore: 80,
        coralReefHealth: "good",
        marineProtectedArea: 30.4,
        overfishingRisk: "moderate",
        plasticPollution: "low",
        seaTempAnomaly: 0.7,
        coastlineLength: 15134,
        rank: 3,
        status: "excellent",
        color: "#10b981",
        keyIssues: ["Marine reserves", "Kaikoura ecosystem"],
        marineLife: ["Dolphins", "Fur seals", "Blue whales"]
    },

    "Canada": {
        oceanHealthScore: 79,
        coralReefHealth: "n/a",
        marineProtectedArea: 13.8,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.1,
        coastlineLength: 202080,
        rank: 4,
        status: "good",
        color: "#10b981",
        keyIssues: ["Arctic warming", "Sustainable fisheries"],
        marineLife: ["Polar bears", "Narwhals", "Belugas"]
    },

    "United States": {
        oceanHealthScore: 71,
        coralReefHealth: "poor",
        marineProtectedArea: 26.5,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 19924,
        rank: 12,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Gulf dead zone", "Overfishing"],
        marineLife: ["Sea otters", "Manatees", "Sea turtles"]
    },

    "United States of America": {
        oceanHealthScore: 71,
        coralReefHealth: "poor",
        marineProtectedArea: 26.5,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 19924,
        rank: 12,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Gulf dead zone", "Overfishing"],
        marineLife: ["Sea otters", "Manatees", "Sea turtles"]
    },

    "Indonesia": {
        oceanHealthScore: 62,
        coralReefHealth: "poor",
        marineProtectedArea: 7.9,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.4,
        coastlineLength: 54716,
        rank: 34,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Overfishing", "Coral destruction", "Plastic waste"],
        marineLife: ["Coral reefs", "Manta rays", "Whale sharks"]
    },

    "Philippines": {
        oceanHealthScore: 58,
        coralReefHealth: "critical",
        marineProtectedArea: 1.8,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.5,
        coastlineLength: 36289,
        rank: 45,
        status: "critical",
        color: "#dc2626",
        keyIssues: ["Dynamite fishing", "Coral loss", "Pollution"],
        marineLife: ["Coral reefs", "Dugongs", "Tuna"]
    },

    "Japan": {
        oceanHealthScore: 68,
        coralReefHealth: "moderate",
        marineProtectedArea: 8.3,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 29751,
        rank: 18,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Whaling", "Plastic pollution"],
        marineLife: ["Bluefin tuna", "Dolphins", "Sea turtles"]
    },

    "China": {
        oceanHealthScore: 61,
        coralReefHealth: "poor",
        marineProtectedArea: 4.6,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.3,
        coastlineLength: 14500,
        rank: 37,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Overfishing", "Pollution", "Illegal fishing"],
        marineLife: ["Chinese white dolphin", "Sea turtles", "Horseshoe crabs"]
    },

    "India": {
        oceanHealthScore: 60,
        coralReefHealth: "moderate",
        marineProtectedArea: 2.4,
        overfishingRisk: "high",
        plasticPollution: "critical",
        seaTempAnomaly: 1.2,
        coastlineLength: 7516,
        rank: 40,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Plastic pollution", "Overfishing", "Coastal development"],
        marineLife: ["Olive ridley turtles", "Dolphins", "Dugongs"]
    },

    "Brazil": {
        oceanHealthScore: 65,
        coralReefHealth: "moderate",
        marineProtectedArea: 26.4,
        overfishingRisk: "moderate",
        plasticPollution: "high",
        seaTempAnomaly: 0.9,
        coastlineLength: 7491,
        rank: 28,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Amazon reef protection", "Coastal pollution"],
        marineLife: ["Sea turtles", "Manatees", "Coral reefs"]
    },

    "South Africa": {
        oceanHealthScore: 66,
        coralReefHealth: "moderate",
        marineProtectedArea: 5.4,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.0,
        coastlineLength: 2798,
        rank: 25,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Shark conservation", "Overfishing"],
        marineLife: ["Great white sharks", "Penguins", "Whales"]
    },

    "United Kingdom": {
        oceanHealthScore: 74,
        coralReefHealth: "n/a",
        marineProtectedArea: 38.0,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.0,
        coastlineLength: 12429,
        rank: 9,
        status: "good",
        color: "#10b981",
        keyIssues: ["Marine reserves", "Sustainable fishing"],
        marineLife: ["Seals", "Basking sharks", "Dolphins"]
    },

    "Mexico": {
        oceanHealthScore: 67,
        coralReefHealth: "poor",
        marineProtectedArea: 23.1,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 9330,
        rank: 22,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Vaquita extinction", "Overfishing"],
        marineLife: ["Vaquita", "Gray whales", "Sea turtles"]
    },

    "Chile": {
        oceanHealthScore: 72,
        coralReefHealth: "n/a",
        marineProtectedArea: 42.4,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 6435,
        rank: 11,
        status: "good",
        color: "#10b981",
        keyIssues: ["Marine parks", "Sustainable aquaculture"],
        marineLife: ["Humboldt penguins", "Blue whales", "Sea lions"]
    },

    "Thailand": {
        oceanHealthScore: 59,
        coralReefHealth: "poor",
        marineProtectedArea: 3.1,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.4,
        coastlineLength: 3219,
        rank: 43,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Coral bleaching", "Tourism impact", "Overfishing"],
        marineLife: ["Coral reefs", "Whale sharks", "Manta rays"]
    },

    "Vietnam": {
        oceanHealthScore: 57,
        coralReefHealth: "poor",
        marineProtectedArea: 0.4,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.3,
        coastlineLength: 3444,
        rank: 47,
        status: "critical",
        color: "#dc2626",
        keyIssues: ["Plastic pollution", "Overfishing", "Habitat loss"],
        marineLife: ["Coral reefs", "Dugongs", "Sea turtles"]
    },

    "Greece": {
        oceanHealthScore: 70,
        coralReefHealth: "moderate",
        marineProtectedArea: 19.6,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.2,
        coastlineLength: 13676,
        rank: 15,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Mediterranean overfishing", "Pollution"],
        marineLife: ["Monk seals", "Sea turtles", "Dolphins"]
    },

    "Italy": {
        oceanHealthScore: 69,
        coralReefHealth: "moderate",
        marineProtectedArea: 19.1,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 7600,
        rank: 16,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Mediterranean health", "Overfishing"],
        marineLife: ["Dolphins", "Sea turtles", "Tuna"]
    },

    "Spain": {
        oceanHealthScore: 70,
        coralReefHealth: "moderate",
        marineProtectedArea: 12.2,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 4964,
        rank: 14,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Marine reserves"],
        marineLife: ["Bluefin tuna", "Orcas", "Loggerhead turtles"]
    },

    "France": {
        oceanHealthScore: 73,
        coralReefHealth: "moderate",
        marineProtectedArea: 23.5,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.0,
        coastlineLength: 4853,
        rank: 10,
        status: "good",
        color: "#10b981",
        keyIssues: ["Marine parks", "Sustainable fishing"],
        marineLife: ["Dolphins", "Sea turtles", "Coral reefs (overseas)"]
    },

    "Ecuador": {
        oceanHealthScore: 75,
        coralReefHealth: "good",
        marineProtectedArea: 32.1,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 2237,
        rank: 7,
        status: "good",
        color: "#10b981",
        keyIssues: ["Galapagos protection", "Illegal fishing"],
        marineLife: ["Galapagos marine life", "Sea lions", "Marine iguanas"]
    },

    "Costa Rica": {
        oceanHealthScore: 76,
        coralReefHealth: "moderate",
        marineProtectedArea: 28.8,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 1290,
        rank: 6,
        status: "good",
        color: "#10b981",
        keyIssues: ["Marine parks", "Turtle conservation"],
        marineLife: ["Sea turtles", "Humpback whales", "Dolphins"]
    },

    "Maldives": {
        oceanHealthScore: 64,
        coralReefHealth: "poor",
        marineProtectedArea: 0.3,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.5,
        coastlineLength: 644,
        rank: 30,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Sea level rise"],
        marineLife: ["Manta rays", "Whale sharks", "Coral reefs"]
    },

    "Seychelles": {
        oceanHealthScore: 77,
        coralReefHealth: "moderate",
        marineProtectedArea: 32.0,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.2,
        coastlineLength: 491,
        rank: 8,
        status: "good",
        color: "#10b981",
        keyIssues: ["Marine reserves", "Climate adaptation"],
        marineLife: ["Sea turtles", "Whale sharks", "Coral reefs"]
    },

    "Palau": {
        oceanHealthScore: 81,
        coralReefHealth: "good",
        marineProtectedArea: 80.0,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.3,
        coastlineLength: 1519,
        rank: 4,
        status: "excellent",
        color: "#10b981",
        keyIssues: ["Marine sanctuary", "Coral protection"],
        marineLife: ["Jellyfish lake", "Sharks", "Manta rays"]
    },

    "Egypt": {
        oceanHealthScore: 63,
        coralReefHealth: "moderate",
        marineProtectedArea: 11.7,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.2,
        coastlineLength: 2450,
        rank: 32,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Red Sea health", "Tourism impact"],
        marineLife: ["Red Sea coral", "Dolphins", "Sea turtles"]
    },

    "Turkey": {
        oceanHealthScore: 65,
        coralReefHealth: "moderate",
        marineProtectedArea: 4.2,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 7200,
        rank: 27,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Mediterranean pollution", "Overfishing"],
        marineLife: ["Monk seals", "Sea turtles", "Dolphins"]
    },

    // Additional European Countries
    "Portugal": {
        oceanHealthScore: 72,
        coralReefHealth: "moderate",
        marineProtectedArea: 9.8,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 1793,
        rank: 13,
        status: "good",
        color: "#10b981",
        keyIssues: ["Overfishing", "Coastal development"],
        marineLife: ["Sardines", "Cork oak habitats", "Monk seals"]
    },

    "Ireland": {
        oceanHealthScore: 75,
        coralReefHealth: "n/a",
        marineProtectedArea: 2.1,
        overfishingRisk: "moderate",
        plasticPollution: "low",
        seaTempAnomaly: 0.9,
        coastlineLength: 1448,
        rank: 8,
        status: "good",
        color: "#10b981",
        keyIssues: ["Marine protection", "Sustainable fishing"],
        marineLife: ["Dolphins", "Whales", "Seals"]
    },

    "Denmark": {
        oceanHealthScore: 74,
        coralReefHealth: "n/a",
        marineProtectedArea: 12.4,
        overfishingRisk: "moderate",
        plasticPollution: "low",
        seaTempAnomaly: 1.0,
        coastlineLength: 7314,
        rank: 10,
        status: "good",
        color: "#10b981",
        keyIssues: ["Baltic Sea health", "Wind farms"],
        marineLife: ["Harbor porpoises", "Seals", "Cod"]
    },

    "Sweden": {
        oceanHealthScore: 76,
        coralReefHealth: "n/a",
        marineProtectedArea: 11.3,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.0,
        coastlineLength: 3218,
        rank: 7,
        status: "good",
        color: "#10b981",
        keyIssues: ["Baltic conservation", "Algae blooms"],
        marineLife: ["Harbor seals", "Herring", "Pike"]
    },

    "Finland": {
        oceanHealthScore: 73,
        coralReefHealth: "n/a",
        marineProtectedArea: 10.9,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.1,
        coastlineLength: 1250,
        rank: 11,
        status: "good",
        color: "#10b981",
        keyIssues: ["Baltic Sea protection", "Climate change"],
        marineLife: ["Ringed seals", "Baltic salmon", "Pike"]
    },

    "Croatia": {
        oceanHealthScore: 68,
        coralReefHealth: "moderate",
        marineProtectedArea: 1.8,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 5835,
        rank: 19,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Adriatic health", "Tourism impact"],
        marineLife: ["Dolphins", "Monk seals", "Sea turtles"]
    },

    "Albania": {
        oceanHealthScore: 62,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.5,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 362,
        rank: 35,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Pollution", "Illegal fishing"],
        marineLife: ["Sea turtles", "Dolphins", "Monk seals"]
    },

    "Montenegro": {
        oceanHealthScore: 63,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.2,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 293,
        rank: 33,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coastal development", "Tourism"],
        marineLife: ["Dolphins", "Sea turtles", "Fish"]
    },

    // Asian Countries
    "South Korea": {
        oceanHealthScore: 66,
        coralReefHealth: "moderate",
        marineProtectedArea: 1.8,
        overfishingRisk: "critical",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 2413,
        rank: 24,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Pollution"],
        marineLife: ["Minke whales", "Dolphins", "Tuna"]
    },

    "Bangladesh": {
        oceanHealthScore: 54,
        coralReefHealth: "poor",
        marineProtectedArea: 4.8,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.3,
        coastlineLength: 580,
        rank: 50,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Pollution", "Climate vulnerability"],
        marineLife: ["Hilsa fish", "Irrawaddy dolphins", "Sea turtles"]
    },

    "Pakistan": {
        oceanHealthScore: 56,
        coralReefHealth: "poor",
        marineProtectedArea: 0.3,
        overfishingRisk: "high",
        plasticPollution: "critical",
        seaTempAnomaly: 1.2,
        coastlineLength: 1046,
        rank: 48,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Pollution", "Overfishing", "Habitat loss"],
        marineLife: ["Green turtles", "Humpback dolphins", "Sharks"]
    },

    "Sri Lanka": {
        oceanHealthScore: 61,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.01,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 1340,
        rank: 39,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Overfishing"],
        marineLife: ["Blue whales", "Dolphins", "Sea turtles"]
    },

    "Myanmar": {
        oceanHealthScore: 55,
        coralReefHealth: "poor",
        marineProtectedArea: 0.6,
        overfishingRisk: "critical",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 1930,
        rank: 49,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Overfishing", "Habitat destruction"],
        marineLife: ["Dolphins", "Dugongs", "Sea turtles"]
    },

    "Malaysia": {
        oceanHealthScore: 60,
        coralReefHealth: "poor",
        marineProtectedArea: 4.2,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.4,
        coastlineLength: 4675,
        rank: 41,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Overfishing", "Pollution"],
        marineLife: ["Turtles", "Whale sharks", "Coral reefs"]
    },

    "Singapore": {
        oceanHealthScore: 63,
        coralReefHealth: "poor",
        marineProtectedArea: 0.0,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 193,
        rank: 31,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Urban development", "Shipping traffic"],
        marineLife: ["Seahorses", "Octopuses", "Reef fish"]
    },

    // African Countries
    "Morocco": {
        oceanHealthScore: 67,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.8,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.0,
        coastlineLength: 1835,
        rank: 21,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Climate change"],
        marineLife: ["Sardines", "Dolphins", "Monk seals"]
    },

    "Tunisia": {
        oceanHealthScore: 64,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.5,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.2,
        coastlineLength: 1148,
        rank: 29,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Mediterranean pollution", "Overfishing"],
        marineLife: ["Tuna", "Sea turtles", "Dolphins"]
    },

    "Algeria": {
        oceanHealthScore: 62,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.1,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.2,
        coastlineLength: 998,
        rank: 36,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Pollution", "Overfishing"],
        marineLife: ["Dolphins", "Tuna", "Sardines"]
    },

    "Libya": {
        oceanHealthScore: 58,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.0,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 1770,
        rank: 44,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Pollution", "Lack of management"],
        marineLife: ["Tuna", "Sea turtles", "Dolphins"]
    },

    "Senegal": {
        oceanHealthScore: 64,
        coralReefHealth: "moderate",
        marineProtectedArea: 12.8,
        overfishingRisk: "critical",
        plasticPollution: "moderate",
        seaTempAnomaly: 0.9,
        coastlineLength: 531,
        rank: 26,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Climate change"],
        marineLife: ["Sea turtles", "Dolphins", "Fish stocks"]
    },

    "Nigeria": {
        oceanHealthScore: 52,
        coralReefHealth: "poor",
        marineProtectedArea: 0.3,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.1,
        coastlineLength: 853,
        rank: 52,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Oil pollution", "Overfishing", "Plastic waste"],
        marineLife: ["Manatees", "Sea turtles", "Dolphins"]
    },

    "Ghana": {
        oceanHealthScore: 57,
        coralReefHealth: "moderate",
        marineProtectedArea: 1.7,
        overfishingRisk: "critical",
        plasticPollution: "high",
        seaTempAnomaly: 1.0,
        coastlineLength: 539,
        rank: 46,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Overfishing", "Plastic pollution"],
        marineLife: ["Sea turtles", "Dolphins", "Sharks"]
    },

    "Namibia": {
        oceanHealthScore: 68,
        coralReefHealth: "n/a",
        marineProtectedArea: 10.2,
        overfishingRisk: "moderate",
        plasticPollution: "low",
        seaTempAnomaly: 0.8,
        coastlineLength: 1572,
        rank: 17,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Climate change", "Sustainable fishing"],
        marineLife: ["Cape fur seals", "Dolphins", "Penguins"]
    },

    "Mozambique": {
        oceanHealthScore: 59,
        coralReefHealth: "moderate",
        marineProtectedArea: 5.4,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 2470,
        rank: 42,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Overfishing", "Coastal development"],
        marineLife: ["Dugongs", "Whale sharks", "Manta rays"]
    },

    "Tanzania": {
        oceanHealthScore: 62,
        coralReefHealth: "moderate",
        marineProtectedArea: 5.9,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 1424,
        rank: 34,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Overfishing"],
        marineLife: ["Whale sharks", "Sea turtles", "Coral reefs"]
    },

    "Kenya": {
        oceanHealthScore: 63,
        coralReefHealth: "moderate",
        marineProtectedArea: 4.1,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 536,
        rank: 32,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral damage", "Overfishing"],
        marineLife: ["Sea turtles", "Dolphins", "Whale sharks"]
    },

    "Madagascar": {
        oceanHealthScore: 60,
        coralReefHealth: "moderate",
        marineProtectedArea: 8.9,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.1,
        coastlineLength: 4828,
        rank: 38,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Climate change"],
        marineLife: ["Whale sharks", "Sea turtles", "Lemurs nearby"]
    },

    "Mauritius": {
        oceanHealthScore: 65,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.03,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 177,
        rank: 28,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Tourism impact", "Coral bleaching"],
        marineLife: ["Dolphins", "Sea turtles", "Coral reefs"]
    },

    // Americas
    "Argentina": {
        oceanHealthScore: 69,
        coralReefHealth: "n/a",
        marineProtectedArea: 8.4,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 0.9,
        coastlineLength: 4989,
        rank: 16,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Marine protection"],
        marineLife: ["Southern right whales", "Penguins", "Sea lions"]
    },

    "Uruguay": {
        oceanHealthScore: 67,
        coralReefHealth: "n/a",
        marineProtectedArea: 0.2,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 0.9,
        coastlineLength: 660,
        rank: 20,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "Coastal development"],
        marineLife: ["Sea lions", "Dolphins", "Seabirds"]
    },

    "Peru": {
        oceanHealthScore: 64,
        coralReefHealth: "moderate",
        marineProtectedArea: 8.1,
        overfishingRisk: "critical",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 2414,
        rank: 30,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Overfishing", "El Niño impacts"],
        marineLife: ["Humboldt penguins", "Sea lions", "Anchovies"]
    },

    "Colombia": {
        oceanHealthScore: 63,
        coralReefHealth: "moderate",
        marineProtectedArea: 13.4,
        overfishingRisk: "moderate",
        plasticPollution: "high",
        seaTempAnomaly: 1.1,
        coastlineLength: 3208,
        rank: 33,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral protection", "Pollution"],
        marineLife: ["Humpback whales", "Sea turtles", "Coral reefs"]
    },

    "Venezuela": {
        oceanHealthScore: 56,
        coralReefHealth: "poor",
        marineProtectedArea: 0.4,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.2,
        coastlineLength: 2800,
        rank: 47,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Pollution", "Management issues"],
        marineLife: ["Sea turtles", "Dolphins", "Coral reefs"]
    },

    "Panama": {
        oceanHealthScore: 66,
        coralReefHealth: "moderate",
        marineProtectedArea: 14.8,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.2,
        coastlineLength: 2490,
        rank: 23,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Shipping impact", "Coral health"],
        marineLife: ["Humpback whales", "Sea turtles", "Sharks"]
    },

    "Cuba": {
        oceanHealthScore: 70,
        coralReefHealth: "good",
        marineProtectedArea: 25.4,
        overfishingRisk: "moderate",
        plasticPollution: "low",
        seaTempAnomaly: 1.2,
        coastlineLength: 3735,
        rank: 15,
        status: "good",
        color: "#10b981",
        keyIssues: ["Coral conservation", "Climate change"],
        marineLife: ["Manatees", "Sea turtles", "Coral reefs"]
    },

    "Jamaica": {
        oceanHealthScore: 61,
        coralReefHealth: "poor",
        marineProtectedArea: 0.4,
        overfishingRisk: "high",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 1022,
        rank: 37,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral decline", "Tourism impact"],
        marineLife: ["Sea turtles", "Coral reefs", "Dolphins"]
    },

    "Haiti": {
        oceanHealthScore: 48,
        coralReefHealth: "critical",
        marineProtectedArea: 0.4,
        overfishingRisk: "critical",
        plasticPollution: "critical",
        seaTempAnomaly: 1.3,
        coastlineLength: 1771,
        rank: 55,
        status: "critical",
        color: "#dc2626",
        keyIssues: ["Deforestation", "Pollution", "Poverty"],
        marineLife: ["Sea turtles", "Coral reefs", "Manatees"]
    },

    "Dominican Republic": {
        oceanHealthScore: 59,
        coralReefHealth: "poor",
        marineProtectedArea: 1.3,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 1288,
        rank: 41,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Tourism impact", "Overfishing"],
        marineLife: ["Humpback whales", "Sea turtles", "Coral"]
    },

    // Oceania
    "Papua New Guinea": {
        oceanHealthScore: 66,
        coralReefHealth: "moderate",
        marineProtectedArea: 2.8,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 5152,
        rank: 25,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Climate change", "Development"],
        marineLife: ["Coral reefs", "Whale sharks", "Manta rays"]
    },

    "Fiji": {
        oceanHealthScore: 68,
        coralReefHealth: "moderate",
        marineProtectedArea: 3.9,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.4,
        coastlineLength: 1129,
        rank: 18,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Climate vulnerability"],
        marineLife: ["Manta rays", "Sharks", "Coral reefs"]
    },

    "Solomon Islands": {
        oceanHealthScore: 64,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.6,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 5313,
        rank: 31,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Logging runoff", "Overfishing"],
        marineLife: ["Dugongs", "Sea turtles", "Coral reefs"]
    },

    "Vanuatu": {
        oceanHealthScore: 67,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.2,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.3,
        coastlineLength: 2528,
        rank: 22,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Climate change", "Sea level rise"],
        marineLife: ["Dugongs", "Turtles", "Coral reefs"]
    },

    "Samoa": {
        oceanHealthScore: 69,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.5,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.3,
        coastlineLength: 403,
        rank: 17,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Climate change", "Coral bleaching"],
        marineLife: ["Sea turtles", "Coral reefs", "Tropical fish"]
    },

    "Tonga": {
        oceanHealthScore: 70,
        coralReefHealth: "moderate",
        marineProtectedArea: 3.1,
        overfishingRisk: "low",
        plasticPollution: "low",
        seaTempAnomaly: 1.2,
        coastlineLength: 419,
        rank: 14,
        status: "good",
        color: "#10b981",
        keyIssues: ["Climate change", "Whale conservation"],
        marineLife: ["Humpback whales", "Sea turtles", "Coral"]
    },

    // Middle East
    "Oman": {
        oceanHealthScore: 66,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.1,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.4,
        coastlineLength: 2092,
        rank: 26,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coral bleaching", "Climate change"],
        marineLife: ["Whale sharks", "Dolphins", "Sea turtles"]
    },

    "Yemen": {
        oceanHealthScore: 51,
        coralReefHealth: "poor",
        marineProtectedArea: 0.0,
        overfishingRisk: "critical",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 1906,
        rank: 53,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Conflict", "Overfishing", "Pollution"],
        marineLife: ["Coral reefs", "Dolphins", "Sharks"]
    },

    "United Arab Emirates": {
        oceanHealthScore: 60,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.3,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.5,
        coastlineLength: 1318,
        rank: 40,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Coastal development", "Heat stress"],
        marineLife: ["Dolphins", "Dugongs", "Sea turtles"]
    },

    "Qatar": {
        oceanHealthScore: 57,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.0,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.6,
        coastlineLength: 563,
        rank: 45,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Heat stress", "Development"],
        marineLife: ["Dugongs", "Sea turtles", "Coral"]
    },

    "Kuwait": {
        oceanHealthScore: 54,
        coralReefHealth: "poor",
        marineProtectedArea: 0.0,
        overfishingRisk: "moderate",
        plasticPollution: "high",
        seaTempAnomaly: 1.5,
        coastlineLength: 499,
        rank: 51,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Oil pollution", "Heat stress"],
        marineLife: ["Dolphins", "Sea snakes", "Coral"]
    },

    "Bahrain": {
        oceanHealthScore: 55,
        coralReefHealth: "poor",
        marineProtectedArea: 0.0,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.5,
        coastlineLength: 161,
        rank: 50,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Development", "Pollution"],
        marineLife: ["Dolphins", "Sea turtles", "Dugongs"]
    },

    "Israel": {
        oceanHealthScore: 65,
        coralReefHealth: "moderate",
        marineProtectedArea: 1.3,
        overfishingRisk: "moderate",
        plasticPollution: "moderate",
        seaTempAnomaly: 1.3,
        coastlineLength: 273,
        rank: 29,
        status: "moderate",
        color: "#3b82f6",
        keyIssues: ["Red Sea conservation", "Mediterranean health"],
        marineLife: ["Dolphins", "Sea turtles", "Coral reefs"]
    },

    "Lebanon": {
        oceanHealthScore: 58,
        coralReefHealth: "moderate",
        marineProtectedArea: 0.1,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 225,
        rank: 44,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Pollution", "Overfishing"],
        marineLife: ["Sea turtles", "Dolphins", "Mediterranean fish"]
    },

    "Syria": {
        oceanHealthScore: 50,
        coralReefHealth: "poor",
        marineProtectedArea: 0.0,
        overfishingRisk: "high",
        plasticPollution: "high",
        seaTempAnomaly: 1.3,
        coastlineLength: 193,
        rank: 54,
        status: "poor",
        color: "#ef4444",
        keyIssues: ["Conflict", "Pollution", "Lack of management"],
        marineLife: ["Sea turtles", "Dolphins", "Mediterranean species"]
    }
};

// Ocean Health Status Categories
const healthStatus = {
    excellent: { min: 80, color: "#10b981", icon: "🌊" },
    good: { min: 70, color: "#3b82f6", icon: "💙" },
    moderate: { min: 60, color: "#f59e0b", icon: "⚠️" },
    poor: { min: 50, color: "#ef4444", icon: "😰" },
    critical: { min: 0, color: "#dc2626", icon: "🚨" }
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.oceanData = oceanData;
    window.healthStatus = healthStatus;
}
