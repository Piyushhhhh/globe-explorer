// Biodiversity data by country
// Data sources: IUCN Red List, WWF, Global Forest Watch
// Species richness, endemic species, forest coverage

const biodiversityData = {
    // Megadiverse Countries
    "Brazil": {
        speciesCount: 103870,
        endemicSpecies: 15420,
        forestCoverage: 59.4,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "toucan", "sloth", "macaw"],
        biomes: ["Amazon Rainforest", "Atlantic Forest", "Pantanal"],
        color: "#2ecc71",
        rank: 1
    },
    "Indonesia": {
        speciesCount: 47350,
        endemicSpecies: 18120,
        forestCoverage: 49.1,
        threatLevel: "critical",
        iconicAnimals: ["orangutan", "komodo", "tiger", "elephant"],
        biomes: ["Tropical Rainforest", "Coral Reefs"],
        color: "#e74c3c",
        rank: 2
    },
    "Colombia": {
        speciesCount: 63160,
        endemicSpecies: 8920,
        forestCoverage: 52.7,
        threatLevel: "high",
        iconicAnimals: ["condor", "jaguar", "poison-frog", "spectacled-bear"],
        biomes: ["Amazon", "Andes", "Caribbean Coast"],
        color: "#27ae60",
        rank: 3
    },
    "China": {
        speciesCount: 34450,
        endemicSpecies: 5640,
        forestCoverage: 23.3,
        threatLevel: "high",
        iconicAnimals: ["panda", "tiger", "golden-monkey", "snow-leopard"],
        biomes: ["Temperate Forests", "Mountains", "Grasslands"],
        color: "#f39c12",
        rank: 4
    },
    "Australia": {
        speciesCount: 147579,
        endemicSpecies: 93760,
        forestCoverage: 16.2,
        threatLevel: "high",
        iconicAnimals: ["kangaroo", "koala", "platypus", "wombat"],
        biomes: ["Outback", "Great Barrier Reef", "Rainforest"],
        color: "#3498db",
        rank: 5
    },
    "Peru": {
        speciesCount: 25670,
        endemicSpecies: 5340,
        forestCoverage: 57.7,
        threatLevel: "high",
        iconicAnimals: ["condor", "jaguar", "llama", "spectacled-bear"],
        biomes: ["Amazon", "Andes", "Coastal Desert"],
        color: "#2ecc71",
        rank: 6
    },
    "Mexico": {
        speciesCount: 26970,
        endemicSpecies: 2890,
        forestCoverage: 33.9,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "axolotl", "quetzal", "monarch-butterfly"],
        biomes: ["Tropical Forests", "Deserts", "Mountains"],
        color: "#27ae60",
        rank: 7
    },
    "Madagascar": {
        speciesCount: 12550,
        endemicSpecies: 11220,
        forestCoverage: 21.5,
        threatLevel: "critical",
        iconicAnimals: ["lemur", "fossa", "chameleon", "baobab"],
        biomes: ["Rainforest", "Dry Forest", "Spiny Forest"],
        color: "#e74c3c",
        rank: 8
    },
    "India": {
        speciesCount: 47000,
        endemicSpecies: 7200,
        forestCoverage: 24.6,
        threatLevel: "high",
        iconicAnimals: ["tiger", "elephant", "leopard", "peacock"],
        biomes: ["Western Ghats", "Himalayas", "Grasslands"],
        color: "#f39c12",
        rank: 9
    },
    "Ecuador": {
        speciesCount: 21970,
        endemicSpecies: 4530,
        forestCoverage: 47.2,
        threatLevel: "high",
        iconicAnimals: ["blue-footed-booby", "jaguar", "condor", "toucan"],
        biomes: ["Amazon", "Andes", "Galápagos"],
        color: "#2ecc71",
        rank: 10
    },
    "United States of America": {
        speciesCount: 29740,
        endemicSpecies: 5260,
        forestCoverage: 33.9,
        threatLevel: "moderate",
        iconicAnimals: ["bald-eagle", "grizzly", "bison", "wolf"],
        biomes: ["Temperate Forests", "Prairies", "Deserts"],
        color: "#3498db",
        rank: 11
    },
    "United States": {
        speciesCount: 29740,
        endemicSpecies: 5260,
        forestCoverage: 33.9,
        threatLevel: "moderate",
        iconicAnimals: ["bald-eagle", "grizzly", "bison", "wolf"],
        biomes: ["Temperate Forests", "Prairies", "Deserts"],
        color: "#3498db",
        rank: 11
    },
    "Democratic Republic of the Congo": {
        speciesCount: 11350,
        endemicSpecies: 2870,
        forestCoverage: 67.9,
        threatLevel: "critical",
        iconicAnimals: ["gorilla", "okapi", "elephant", "bonobo"],
        biomes: ["Congo Rainforest", "Savanna"],
        color: "#27ae60",
        rank: 12
    },
    "South Africa": {
        speciesCount: 23420,
        endemicSpecies: 6210,
        forestCoverage: 7.6,
        threatLevel: "moderate",
        iconicAnimals: ["lion", "elephant", "rhino", "penguin"],
        biomes: ["Savanna", "Fynbos", "Karoo"],
        color: "#f39c12",
        rank: 13
    },
    "Kenya": {
        speciesCount: 7460,
        endemicSpecies: 830,
        forestCoverage: 6.1,
        threatLevel: "high",
        iconicAnimals: ["lion", "elephant", "giraffe", "zebra"],
        biomes: ["Savanna", "Highlands"],
        color: "#e67e22",
        rank: 14
    },
    "Tanzania": {
        speciesCount: 10890,
        endemicSpecies: 1520,
        forestCoverage: 48.1,
        threatLevel: "high",
        iconicAnimals: ["lion", "elephant", "wildebeest", "cheetah"],
        biomes: ["Serengeti", "Kilimanjaro", "Coastal Forests"],
        color: "#3498db",
        rank: 15
    },
    "Malaysia": {
        speciesCount: 15500,
        endemicSpecies: 2890,
        forestCoverage: 67.6,
        threatLevel: "critical",
        iconicAnimals: ["orangutan", "tiger", "tapir", "hornbill"],
        biomes: ["Tropical Rainforest"],
        color: "#e74c3c",
        rank: 16
    },
    "Papua New Guinea": {
        speciesCount: 13660,
        endemicSpecies: 9870,
        forestCoverage: 63.1,
        threatLevel: "high",
        iconicAnimals: ["bird-of-paradise", "tree-kangaroo", "cassowary"],
        biomes: ["Tropical Rainforest", "Mountains"],
        color: "#2ecc71",
        rank: 17
    },
    "Venezuela": {
        speciesCount: 21070,
        endemicSpecies: 1930,
        forestCoverage: 52.6,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "anaconda", "capybara", "harpy-eagle"],
        biomes: ["Amazon", "Andes", "Orinoco"],
        color: "#27ae60",
        rank: 18
    },
    "Philippines": {
        speciesCount: 14890,
        endemicSpecies: 6790,
        forestCoverage: 25.5,
        threatLevel: "critical",
        iconicAnimals: ["tarsier", "philippine-eagle", "tamaraw"],
        biomes: ["Tropical Forests", "Coral Reefs"],
        color: "#e74c3c",
        rank: 19
    },
    "Costa Rica": {
        speciesCount: 12730,
        endemicSpecies: 890,
        forestCoverage: 59.8,
        threatLevel: "moderate",
        iconicAnimals: ["quetzal", "sloth", "poison-frog", "toucan"],
        biomes: ["Rainforest", "Cloud Forest", "Dry Forest"],
        color: "#2ecc71",
        rank: 20
    },
    "Thailand": {
        speciesCount: 8150,
        endemicSpecies: 1240,
        forestCoverage: 37.7,
        threatLevel: "high",
        iconicAnimals: ["elephant", "tiger", "gibbon", "hornbill"],
        biomes: ["Tropical Forests", "Mountains"],
        color: "#f39c12",
        rank: 21
    },
    "Vietnam": {
        speciesCount: 8780,
        endemicSpecies: 1450,
        forestCoverage: 45.3,
        threatLevel: "high",
        iconicAnimals: ["saola", "gibbon", "langur", "pangolin"],
        biomes: ["Rainforest", "Mountains"],
        color: "#27ae60",
        rank: 22
    },
    "Russia": {
        speciesCount: 12840,
        endemicSpecies: 1270,
        forestCoverage: 49.8,
        threatLevel: "moderate",
        iconicAnimals: ["brown-bear", "tiger", "wolf", "reindeer"],
        biomes: ["Taiga", "Tundra", "Steppes"],
        color: "#3498db",
        rank: 23
    },
    "Canada": {
        speciesCount: 13950,
        endemicSpecies: 890,
        forestCoverage: 38.7,
        threatLevel: "low",
        iconicAnimals: ["moose", "beaver", "polar-bear", "caribou"],
        biomes: ["Boreal Forest", "Tundra", "Prairies"],
        color: "#2ecc71",
        rank: 24
    },
    "Argentina": {
        speciesCount: 10890,
        endemicSpecies: 1560,
        forestCoverage: 9.9,
        threatLevel: "moderate",
        iconicAnimals: ["jaguar", "guanaco", "condor", "puma"],
        biomes: ["Pampas", "Patagonia", "Yungas"],
        color: "#3498db",
        rank: 25
    },

    // More Countries (26-100)
    "Japan": {
        speciesCount: 5600,
        endemicSpecies: 2100,
        forestCoverage: 68.5,
        threatLevel: "moderate",
        iconicAnimals: ["macaque", "crane", "bear"],
        biomes: ["Temperate Forests", "Mountains"],
        color: "#27ae60",
        rank: 26
    },
    "Germany": {
        speciesCount: 4800,
        endemicSpecies: 120,
        forestCoverage: 32.8,
        threatLevel: "low",
        iconicAnimals: ["deer", "boar", "eagle"],
        biomes: ["Forests", "Alps"],
        color: "#2ecc71",
        rank: 27
    },
    "France": {
        speciesCount: 5200,
        endemicSpecies: 180,
        forestCoverage: 31.0,
        threatLevel: "low",
        iconicAnimals: ["wolf", "lynx", "eagle"],
        biomes: ["Alps", "Mediterranean", "Forests"],
        color: "#3498db",
        rank: 28
    },
    "Italy": {
        speciesCount: 5100,
        endemicSpecies: 320,
        forestCoverage: 31.7,
        threatLevel: "moderate",
        iconicAnimals: ["wolf", "bear", "eagle"],
        biomes: ["Alps", "Mediterranean"],
        color: "#27ae60",
        rank: 29
    },
    "Spain": {
        speciesCount: 5800,
        endemicSpecies: 680,
        forestCoverage: 36.8,
        threatLevel: "moderate",
        iconicAnimals: ["lynx", "wolf", "eagle"],
        biomes: ["Mediterranean", "Mountains"],
        color: "#2ecc71",
        rank: 30
    },
    "United Kingdom": {
        speciesCount: 3200,
        endemicSpecies: 45,
        forestCoverage: 13.2,
        threatLevel: "low",
        iconicAnimals: ["deer", "fox", "badger"],
        biomes: ["Forests", "Moorlands"],
        color: "#3498db",
        rank: 31
    },
    "Norway": {
        speciesCount: 2900,
        endemicSpecies: 90,
        forestCoverage: 37.4,
        threatLevel: "low",
        iconicAnimals: ["reindeer", "wolf", "eagle"],
        biomes: ["Forests", "Mountains", "Fjords"],
        color: "#2ecc71",
        rank: 32
    },
    "Sweden": {
        speciesCount: 3100,
        endemicSpecies: 85,
        forestCoverage: 68.9,
        threatLevel: "low",
        iconicAnimals: ["moose", "wolf", "lynx"],
        biomes: ["Boreal Forest", "Mountains"],
        color: "#27ae60",
        rank: 33
    },
    "Finland": {
        speciesCount: 2700,
        endemicSpecies: 70,
        forestCoverage: 73.1,
        threatLevel: "low",
        iconicAnimals: ["bear", "wolf", "reindeer"],
        biomes: ["Boreal Forest", "Lakes"],
        color: "#27ae60",
        rank: 34
    },
    "Poland": {
        speciesCount: 3400,
        endemicSpecies: 95,
        forestCoverage: 30.5,
        threatLevel: "moderate",
        iconicAnimals: ["bison", "wolf", "eagle"],
        biomes: ["Forests", "Plains"],
        color: "#3498db",
        rank: 35
    },
    "Ukraine": {
        speciesCount: 3800,
        endemicSpecies: 110,
        forestCoverage: 16.8,
        threatLevel: "moderate",
        iconicAnimals: ["wolf", "deer", "eagle"],
        biomes: ["Steppes", "Forests"],
        color: "#f39c12",
        rank: 36
    },
    "Turkey": {
        speciesCount: 9000,
        endemicSpecies: 1350,
        forestCoverage: 15.2,
        threatLevel: "high",
        iconicAnimals: ["wolf", "bear", "leopard"],
        biomes: ["Mountains", "Mediterranean"],
        color: "#f39c12",
        rank: 37
    },
    "Iran": {
        speciesCount: 8100,
        endemicSpecies: 1200,
        forestCoverage: 7.3,
        threatLevel: "high",
        iconicAnimals: ["leopard", "bear", "gazelle"],
        biomes: ["Mountains", "Deserts"],
        color: "#e67e22",
        rank: 38
    },
    "Saudi Arabia": {
        speciesCount: 2200,
        endemicSpecies: 340,
        forestCoverage: 0.5,
        threatLevel: "high",
        iconicAnimals: ["oryx", "gazelle", "wolf"],
        biomes: ["Desert"],
        color: "#e74c3c",
        rank: 39
    },
    "Egypt": {
        speciesCount: 3100,
        endemicSpecies: 180,
        forestCoverage: 0.1,
        threatLevel: "high",
        iconicAnimals: ["vulture", "gazelle", "cobra"],
        biomes: ["Desert", "Nile"],
        color: "#e74c3c",
        rank: 40
    },
    "Morocco": {
        speciesCount: 4200,
        endemicSpecies: 520,
        forestCoverage: 12.7,
        threatLevel: "moderate",
        iconicAnimals: ["macaque", "gazelle", "eagle"],
        biomes: ["Atlas Mountains", "Desert"],
        color: "#f39c12",
        rank: 41
    },
    "Ethiopia": {
        speciesCount: 6500,
        endemicSpecies: 890,
        forestCoverage: 15.7,
        threatLevel: "high",
        iconicAnimals: ["wolf", "gelada", "ibex"],
        biomes: ["Highlands", "Savanna"],
        color: "#f39c12",
        rank: 42
    },
    "Nigeria": {
        speciesCount: 4700,
        endemicSpecies: 340,
        forestCoverage: 6.5,
        threatLevel: "critical",
        iconicAnimals: ["lion", "elephant", "gorilla"],
        biomes: ["Savanna", "Rainforest"],
        color: "#e74c3c",
        rank: 43
    },
    "Uganda": {
        speciesCount: 5200,
        endemicSpecies: 280,
        forestCoverage: 14.5,
        threatLevel: "high",
        iconicAnimals: ["gorilla", "chimpanzee", "lion"],
        biomes: ["Forests", "Savanna"],
        color: "#f39c12",
        rank: 44
    },
    "Rwanda": {
        speciesCount: 2800,
        endemicSpecies: 120,
        forestCoverage: 19.5,
        threatLevel: "high",
        iconicAnimals: ["gorilla", "elephant", "buffalo"],
        biomes: ["Mountains", "Forests"],
        color: "#f39c12",
        rank: 45
    },
    "Cameroon": {
        speciesCount: 8300,
        endemicSpecies: 680,
        forestCoverage: 41.7,
        threatLevel: "high",
        iconicAnimals: ["gorilla", "elephant", "lion"],
        biomes: ["Rainforest", "Savanna"],
        color: "#27ae60",
        rank: 46
    },
    "Gabon": {
        speciesCount: 6200,
        endemicSpecies: 420,
        forestCoverage: 88.5,
        threatLevel: "moderate",
        iconicAnimals: ["gorilla", "elephant", "leopard"],
        biomes: ["Rainforest"],
        color: "#2ecc71",
        rank: 47
    },
    "Zambia": {
        speciesCount: 4600,
        endemicSpecies: 230,
        forestCoverage: 65.4,
        threatLevel: "moderate",
        iconicAnimals: ["elephant", "lion", "leopard"],
        biomes: ["Savanna", "Forests"],
        color: "#27ae60",
        rank: 48
    },
    "Zimbabwe": {
        speciesCount: 4200,
        endemicSpecies: 190,
        forestCoverage: 39.5,
        threatLevel: "high",
        iconicAnimals: ["elephant", "rhino", "lion"],
        biomes: ["Savanna"],
        color: "#f39c12",
        rank: 49
    },
    "Botswana": {
        speciesCount: 3800,
        endemicSpecies: 160,
        forestCoverage: 19.8,
        threatLevel: "moderate",
        iconicAnimals: ["elephant", "lion", "cheetah"],
        biomes: ["Desert", "Delta"],
        color: "#3498db",
        rank: 50
    },
    "Namibia": {
        speciesCount: 4100,
        endemicSpecies: 280,
        forestCoverage: 8.8,
        threatLevel: "moderate",
        iconicAnimals: ["elephant", "rhino", "cheetah"],
        biomes: ["Desert", "Savanna"],
        color: "#e67e22",
        rank: 51
    },
    "Mozambique": {
        speciesCount: 4400,
        endemicSpecies: 240,
        forestCoverage: 48.8,
        threatLevel: "high",
        iconicAnimals: ["elephant", "lion", "leopard"],
        biomes: ["Savanna", "Coastal"],
        color: "#27ae60",
        rank: 52
    },
    "Angola": {
        speciesCount: 5100,
        endemicSpecies: 310,
        forestCoverage: 46.9,
        threatLevel: "high",
        iconicAnimals: ["elephant", "lion", "antelope"],
        biomes: ["Savanna", "Forests"],
        color: "#27ae60",
        rank: 53
    },
    "New Zealand": {
        speciesCount: 3200,
        endemicSpecies: 2100,
        forestCoverage: 38.5,
        threatLevel: "high",
        iconicAnimals: ["kiwi", "penguin", "dolphin"],
        biomes: ["Forests", "Mountains"],
        color: "#3498db",
        rank: 54
    },
    "Nepal": {
        speciesCount: 5800,
        endemicSpecies: 320,
        forestCoverage: 44.7,
        threatLevel: "high",
        iconicAnimals: ["tiger", "rhino", "snow-leopard"],
        biomes: ["Himalayas", "Jungle"],
        color: "#27ae60",
        rank: 55
    },
    "Bhutan": {
        speciesCount: 3400,
        endemicSpecies: 180,
        forestCoverage: 71.8,
        threatLevel: "low",
        iconicAnimals: ["tiger", "panda", "leopard"],
        biomes: ["Himalayas", "Forests"],
        color: "#2ecc71",
        rank: 56
    },
    "Myanmar": {
        speciesCount: 7200,
        endemicSpecies: 890,
        forestCoverage: 43.0,
        threatLevel: "critical",
        iconicAnimals: ["elephant", "tiger", "pangolin"],
        biomes: ["Rainforest", "Mountains"],
        color: "#e74c3c",
        rank: 57
    },
    "Laos": {
        speciesCount: 4100,
        endemicSpecies: 340,
        forestCoverage: 67.9,
        threatLevel: "high",
        iconicAnimals: ["elephant", "tiger", "gibbon"],
        biomes: ["Rainforest", "Mountains"],
        color: "#27ae60",
        rank: 58
    },
    "Cambodia": {
        speciesCount: 3900,
        endemicSpecies: 280,
        forestCoverage: 56.6,
        threatLevel: "high",
        iconicAnimals: ["elephant", "tiger", "gibbon"],
        biomes: ["Rainforest", "Wetlands"],
        color: "#27ae60",
        rank: 59
    },
    "Bangladesh": {
        speciesCount: 3600,
        endemicSpecies: 220,
        forestCoverage: 13.1,
        threatLevel: "critical",
        iconicAnimals: ["tiger", "elephant", "dolphin"],
        biomes: ["Sundarbans", "Wetlands"],
        color: "#e74c3c",
        rank: 60
    },
    "Sri Lanka": {
        speciesCount: 4400,
        endemicSpecies: 920,
        forestCoverage: 33.9,
        threatLevel: "high",
        iconicAnimals: ["elephant", "leopard", "sloth-bear"],
        biomes: ["Rainforest", "Highlands"],
        color: "#f39c12",
        rank: 61
    },
    "Pakistan": {
        speciesCount: 5200,
        endemicSpecies: 380,
        forestCoverage: 2.2,
        threatLevel: "high",
        iconicAnimals: ["snow-leopard", "markhor", "bear"],
        biomes: ["Mountains", "Desert"],
        color: "#e67e22",
        rank: 62
    },
    "Afghanistan": {
        speciesCount: 3100,
        endemicSpecies: 240,
        forestCoverage: 1.9,
        threatLevel: "high",
        iconicAnimals: ["snow-leopard", "wolf", "bear"],
        biomes: ["Mountains", "Desert"],
        color: "#e67e22",
        rank: 63
    },
    "Kazakhstan": {
        speciesCount: 3800,
        endemicSpecies: 180,
        forestCoverage: 1.2,
        threatLevel: "moderate",
        iconicAnimals: ["wolf", "eagle", "gazelle"],
        biomes: ["Steppes", "Desert"],
        color: "#e67e22",
        rank: 64
    },
    "Mongolia": {
        speciesCount: 3200,
        endemicSpecies: 170,
        forestCoverage: 7.7,
        threatLevel: "moderate",
        iconicAnimals: ["snow-leopard", "wolf", "eagle"],
        biomes: ["Steppes", "Desert", "Mountains"],
        color: "#e67e22",
        rank: 65
    },
    "South Korea": {
        speciesCount: 2900,
        endemicSpecies: 120,
        forestCoverage: 63.9,
        threatLevel: "moderate",
        iconicAnimals: ["tiger", "bear", "crane"],
        biomes: ["Forests", "Mountains"],
        color: "#27ae60",
        rank: 66
    },
    "North Korea": {
        speciesCount: 2700,
        endemicSpecies: 95,
        forestCoverage: 46.0,
        threatLevel: "high",
        iconicAnimals: ["tiger", "bear", "leopard"],
        biomes: ["Forests", "Mountains"],
        color: "#f39c12",
        rank: 67
    },
    "Chile": {
        speciesCount: 5100,
        endemicSpecies: 1230,
        forestCoverage: 23.8,
        threatLevel: "moderate",
        iconicAnimals: ["condor", "puma", "guanaco"],
        biomes: ["Andes", "Desert", "Patagonia"],
        color: "#3498db",
        rank: 68
    },
    "Bolivia": {
        speciesCount: 6200,
        endemicSpecies: 580,
        forestCoverage: 52.3,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "condor", "llama"],
        biomes: ["Amazon", "Andes"],
        color: "#27ae60",
        rank: 69
    },
    "Paraguay": {
        speciesCount: 3400,
        endemicSpecies: 210,
        forestCoverage: 43.8,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "capybara", "toucan"],
        biomes: ["Chaco", "Forests"],
        color: "#27ae60",
        rank: 70
    },
    "Uruguay": {
        speciesCount: 2100,
        endemicSpecies: 85,
        forestCoverage: 10.2,
        threatLevel: "moderate",
        iconicAnimals: ["capybara", "fox", "seal"],
        biomes: ["Grasslands", "Coastal"],
        color: "#3498db",
        rank: 71
    },
    "Panama": {
        speciesCount: 5400,
        endemicSpecies: 420,
        forestCoverage: 62.1,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "sloth", "toucan"],
        biomes: ["Rainforest", "Coastal"],
        color: "#27ae60",
        rank: 72
    },
    "Nicaragua": {
        speciesCount: 3800,
        endemicSpecies: 280,
        forestCoverage: 25.9,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "toucan", "turtle"],
        biomes: ["Rainforest", "Volcanoes"],
        color: "#f39c12",
        rank: 73
    },
    "Honduras": {
        speciesCount: 3600,
        endemicSpecies: 240,
        forestCoverage: 41.5,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "macaw", "toucan"],
        biomes: ["Rainforest", "Coral Reefs"],
        color: "#27ae60",
        rank: 74
    },
    "Guatemala": {
        speciesCount: 4200,
        endemicSpecies: 340,
        forestCoverage: 33.7,
        threatLevel: "high",
        iconicAnimals: ["jaguar", "quetzal", "toucan"],
        biomes: ["Rainforest", "Highlands"],
        color: "#f39c12",
        rank: 75
    },
    "Belize": {
        speciesCount: 2900,
        endemicSpecies: 180,
        forestCoverage: 61.1,
        threatLevel: "moderate",
        iconicAnimals: ["jaguar", "tapir", "toucan"],
        biomes: ["Rainforest", "Coral Reefs"],
        color: "#27ae60",
        rank: 76
    },
    "Cuba": {
        speciesCount: 3100,
        endemicSpecies: 890,
        forestCoverage: 31.6,
        threatLevel: "moderate",
        iconicAnimals: ["crocodile", "iguana", "parrot"],
        biomes: ["Forests", "Wetlands"],
        color: "#3498db",
        rank: 77
    },
    "Jamaica": {
        speciesCount: 1800,
        endemicSpecies: 520,
        forestCoverage: 31.1,
        threatLevel: "high",
        iconicAnimals: ["iguana", "parrot", "hummingbird"],
        biomes: ["Rainforest", "Mountains"],
        color: "#f39c12",
        rank: 78
    },
    "Dominican Republic": {
        speciesCount: 2200,
        endemicSpecies: 680,
        forestCoverage: 40.8,
        threatLevel: "high",
        iconicAnimals: ["iguana", "parrot", "turtle"],
        biomes: ["Rainforest", "Coastal"],
        color: "#27ae60",
        rank: 79
    },
    "Haiti": {
        speciesCount: 1900,
        endemicSpecies: 420,
        forestCoverage: 3.6,
        threatLevel: "critical",
        iconicAnimals: ["iguana", "parrot", "frog"],
        biomes: ["Mountains", "Coastal"],
        color: "#e74c3c",
        rank: 80
    },

    // Europe - Additional Countries
    "Netherlands": {
        speciesCount: 2200,
        endemicSpecies: 35,
        forestCoverage: 10.8,
        threatLevel: "low",
        iconicAnimals: ["fox", "deer", "seal"],
        biomes: ["Wetlands", "Dunes"],
        color: "#3498db",
        rank: 81
    },
    "Belgium": {
        speciesCount: 2100,
        endemicSpecies: 28,
        forestCoverage: 22.6,
        threatLevel: "low",
        iconicAnimals: ["deer", "fox", "boar"],
        biomes: ["Forests", "Ardennes"],
        color: "#3498db",
        rank: 82
    },
    "Switzerland": {
        speciesCount: 2800,
        endemicSpecies: 85,
        forestCoverage: 31.2,
        threatLevel: "low",
        iconicAnimals: ["ibex", "marmot", "eagle"],
        biomes: ["Alps", "Forests"],
        color: "#2ecc71",
        rank: 83
    },
    "Austria": {
        speciesCount: 2900,
        endemicSpecies: 92,
        forestCoverage: 47.2,
        threatLevel: "low",
        iconicAnimals: ["deer", "bear", "eagle"],
        biomes: ["Alps", "Forests"],
        color: "#27ae60",
        rank: 84
    },
    "Portugal": {
        speciesCount: 3200,
        endemicSpecies: 220,
        forestCoverage: 35.4,
        threatLevel: "moderate",
        iconicAnimals: ["lynx", "wolf", "dolphin"],
        biomes: ["Mediterranean", "Forests"],
        color: "#3498db",
        rank: 85
    },
    "Greece": {
        speciesCount: 4100,
        endemicSpecies: 580,
        forestCoverage: 32.1,
        threatLevel: "moderate",
        iconicAnimals: ["wolf", "bear", "seal"],
        biomes: ["Mediterranean", "Mountains"],
        color: "#f39c12",
        rank: 86
    },
    "Czech Republic": {
        speciesCount: 2400,
        endemicSpecies: 68,
        forestCoverage: 34.4,
        threatLevel: "low",
        iconicAnimals: ["deer", "lynx", "eagle"],
        biomes: ["Forests", "Mountains"],
        color: "#2ecc71",
        rank: 87
    },
    "Hungary": {
        speciesCount: 2300,
        endemicSpecies: 72,
        forestCoverage: 22.5,
        threatLevel: "moderate",
        iconicAnimals: ["deer", "boar", "eagle"],
        biomes: ["Plains", "Forests"],
        color: "#3498db",
        rank: 88
    },
    "Romania": {
        speciesCount: 3400,
        endemicSpecies: 180,
        forestCoverage: 28.7,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "wolf", "lynx"],
        biomes: ["Carpathians", "Forests"],
        color: "#27ae60",
        rank: 89
    },
    "Bulgaria": {
        speciesCount: 2900,
        endemicSpecies: 140,
        forestCoverage: 36.7,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "wolf", "eagle"],
        biomes: ["Balkans", "Forests"],
        color: "#2ecc71",
        rank: 90
    },
    "Croatia": {
        speciesCount: 2600,
        endemicSpecies: 95,
        forestCoverage: 34.3,
        threatLevel: "low",
        iconicAnimals: ["bear", "wolf", "lynx"],
        biomes: ["Adriatic", "Forests"],
        color: "#2ecc71",
        rank: 91
    },
    "Serbia": {
        speciesCount: 2400,
        endemicSpecies: 78,
        forestCoverage: 31.1,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "wolf", "eagle"],
        biomes: ["Forests", "Mountains"],
        color: "#2ecc71",
        rank: 92
    },
    "Albania": {
        speciesCount: 2100,
        endemicSpecies: 85,
        forestCoverage: 28.3,
        threatLevel: "moderate",
        iconicAnimals: ["wolf", "bear", "eagle"],
        biomes: ["Mountains", "Mediterranean"],
        color: "#f39c12",
        rank: 93
    },
    "Slovenia": {
        speciesCount: 2000,
        endemicSpecies: 62,
        forestCoverage: 58.4,
        threatLevel: "low",
        iconicAnimals: ["bear", "lynx", "deer"],
        biomes: ["Alps", "Forests"],
        color: "#27ae60",
        rank: 94
    },
    "Slovakia": {
        speciesCount: 2200,
        endemicSpecies: 58,
        forestCoverage: 40.2,
        threatLevel: "low",
        iconicAnimals: ["bear", "wolf", "lynx"],
        biomes: ["Carpathians", "Forests"],
        color: "#27ae60",
        rank: 95
    },
    "Lithuania": {
        speciesCount: 1800,
        endemicSpecies: 42,
        forestCoverage: 34.6,
        threatLevel: "low",
        iconicAnimals: ["elk", "wolf", "lynx"],
        biomes: ["Forests", "Lakes"],
        color: "#2ecc71",
        rank: 96
    },
    "Latvia": {
        speciesCount: 1900,
        endemicSpecies: 45,
        forestCoverage: 54.1,
        threatLevel: "low",
        iconicAnimals: ["elk", "wolf", "lynx"],
        biomes: ["Forests", "Baltic Coast"],
        color: "#27ae60",
        rank: 97
    },
    "Estonia": {
        speciesCount: 1700,
        endemicSpecies: 38,
        forestCoverage: 54.9,
        threatLevel: "low",
        iconicAnimals: ["elk", "wolf", "lynx"],
        biomes: ["Forests", "Wetlands"],
        color: "#27ae60",
        rank: 98
    },
    "Iceland": {
        speciesCount: 1200,
        endemicSpecies: 28,
        forestCoverage: 1.9,
        threatLevel: "low",
        iconicAnimals: ["puffin", "seal", "whale"],
        biomes: ["Volcanic", "Glaciers"],
        color: "#3498db",
        rank: 99
    },
    "Ireland": {
        speciesCount: 1800,
        endemicSpecies: 32,
        forestCoverage: 11.0,
        threatLevel: "low",
        iconicAnimals: ["deer", "fox", "seal"],
        biomes: ["Grasslands", "Bogs"],
        color: "#3498db",
        rank: 100
    },
    "Denmark": {
        speciesCount: 1900,
        endemicSpecies: 28,
        forestCoverage: 14.6,
        threatLevel: "low",
        iconicAnimals: ["deer", "fox", "seal"],
        biomes: ["Farmlands", "Coast"],
        color: "#3498db",
        rank: 101
    },
    "Belarus": {
        speciesCount: 2100,
        endemicSpecies: 52,
        forestCoverage: 42.7,
        threatLevel: "moderate",
        iconicAnimals: ["bison", "wolf", "elk"],
        biomes: ["Forests", "Marshes"],
        color: "#27ae60",
        rank: 102
    },
    "Moldova": {
        speciesCount: 1600,
        endemicSpecies: 38,
        forestCoverage: 11.5,
        threatLevel: "moderate",
        iconicAnimals: ["deer", "boar", "wolf"],
        biomes: ["Forests", "Steppes"],
        color: "#f39c12",
        rank: 103
    },
    "Bosnia and Herzegovina": {
        speciesCount: 2000,
        endemicSpecies: 68,
        forestCoverage: 42.7,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "wolf", "lynx"],
        biomes: ["Mountains", "Forests"],
        color: "#27ae60",
        rank: 104
    },
    "Montenegro": {
        speciesCount: 1500,
        endemicSpecies: 48,
        forestCoverage: 40.4,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "wolf", "eagle"],
        biomes: ["Mountains", "Adriatic"],
        color: "#2ecc71",
        rank: 105
    },
    "North Macedonia": {
        speciesCount: 1400,
        endemicSpecies: 42,
        forestCoverage: 39.8,
        threatLevel: "moderate",
        iconicAnimals: ["wolf", "bear", "lynx"],
        biomes: ["Mountains", "Lakes"],
        color: "#2ecc71",
        rank: 106
    },

    // Middle East - Additional
    "Oman": {
        speciesCount: 2400,
        endemicSpecies: 180,
        forestCoverage: 0.0,
        threatLevel: "high",
        iconicAnimals: ["oryx", "leopard", "turtle"],
        biomes: ["Desert", "Mountains"],
        color: "#e67e22",
        rank: 107
    },
    "Yemen": {
        speciesCount: 2800,
        endemicSpecies: 240,
        forestCoverage: 1.0,
        threatLevel: "critical",
        iconicAnimals: ["leopard", "baboon", "gazelle"],
        biomes: ["Mountains", "Desert"],
        color: "#e74c3c",
        rank: 108
    },
    "United Arab Emirates": {
        speciesCount: 1800,
        endemicSpecies: 120,
        forestCoverage: 3.8,
        threatLevel: "high",
        iconicAnimals: ["oryx", "gazelle", "falcon"],
        biomes: ["Desert", "Coastal"],
        color: "#e67e22",
        rank: 109
    },
    "Kuwait": {
        speciesCount: 1200,
        endemicSpecies: 45,
        forestCoverage: 0.4,
        threatLevel: "high",
        iconicAnimals: ["gazelle", "fox", "falcon"],
        biomes: ["Desert"],
        color: "#e74c3c",
        rank: 110
    },
    "Bahrain": {
        speciesCount: 800,
        endemicSpecies: 28,
        forestCoverage: 0.7,
        threatLevel: "moderate",
        iconicAnimals: ["gazelle", "turtle", "dolphin"],
        biomes: ["Desert", "Marine"],
        color: "#e67e22",
        rank: 111
    },
    "Qatar": {
        speciesCount: 900,
        endemicSpecies: 32,
        forestCoverage: 0.0,
        threatLevel: "high",
        iconicAnimals: ["oryx", "gazelle", "falcon"],
        biomes: ["Desert"],
        color: "#e74c3c",
        rank: 112
    },
    "Jordan": {
        speciesCount: 2100,
        endemicSpecies: 95,
        forestCoverage: 1.1,
        threatLevel: "high",
        iconicAnimals: ["oryx", "ibex", "wolf"],
        biomes: ["Desert", "Mountains"],
        color: "#e67e22",
        rank: 113
    },
    "Lebanon": {
        speciesCount: 2400,
        endemicSpecies: 110,
        forestCoverage: 13.4,
        threatLevel: "high",
        iconicAnimals: ["wolf", "bear", "eagle"],
        biomes: ["Mountains", "Mediterranean"],
        color: "#f39c12",
        rank: 114
    },
    "Syria": {
        speciesCount: 2600,
        endemicSpecies: 120,
        forestCoverage: 2.7,
        threatLevel: "critical",
        iconicAnimals: ["gazelle", "hyena", "eagle"],
        biomes: ["Desert", "Mountains"],
        color: "#e74c3c",
        rank: 115
    },
    "Iraq": {
        speciesCount: 2800,
        endemicSpecies: 140,
        forestCoverage: 1.9,
        threatLevel: "critical",
        iconicAnimals: ["gazelle", "wolf", "eagle"],
        biomes: ["Desert", "Marshes"],
        color: "#e74c3c",
        rank: 116
    },
    "Israel": {
        speciesCount: 2200,
        endemicSpecies: 180,
        forestCoverage: 7.6,
        threatLevel: "moderate",
        iconicAnimals: ["ibex", "gazelle", "eagle"],
        biomes: ["Desert", "Mediterranean"],
        color: "#f39c12",
        rank: 117
    },
    "Palestine": {
        speciesCount: 1800,
        endemicSpecies: 85,
        forestCoverage: 1.5,
        threatLevel: "high",
        iconicAnimals: ["gazelle", "fox", "eagle"],
        biomes: ["Mediterranean", "Desert"],
        color: "#e67e22",
        rank: 118
    },
    "Georgia": {
        speciesCount: 3200,
        endemicSpecies: 280,
        forestCoverage: 39.7,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "wolf", "leopard"],
        biomes: ["Caucasus", "Forests"],
        color: "#27ae60",
        rank: 119
    },
    "Armenia": {
        speciesCount: 2400,
        endemicSpecies: 140,
        forestCoverage: 11.2,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "leopard", "mouflon"],
        biomes: ["Mountains", "Forests"],
        color: "#f39c12",
        rank: 120
    },
    "Azerbaijan": {
        speciesCount: 2800,
        endemicSpecies: 180,
        forestCoverage: 11.8,
        threatLevel: "moderate",
        iconicAnimals: ["leopard", "gazelle", "eagle"],
        biomes: ["Caspian", "Mountains"],
        color: "#f39c12",
        rank: 121
    },
    "Turkmenistan": {
        speciesCount: 2200,
        endemicSpecies: 95,
        forestCoverage: 8.8,
        threatLevel: "high",
        iconicAnimals: ["leopard", "gazelle", "eagle"],
        biomes: ["Desert", "Mountains"],
        color: "#e67e22",
        rank: 122
    },
    "Uzbekistan": {
        speciesCount: 2600,
        endemicSpecies: 120,
        forestCoverage: 7.7,
        threatLevel: "moderate",
        iconicAnimals: ["snow-leopard", "gazelle", "eagle"],
        biomes: ["Desert", "Mountains"],
        color: "#e67e22",
        rank: 123
    },
    "Kyrgyzstan": {
        speciesCount: 2400,
        endemicSpecies: 110,
        forestCoverage: 5.2,
        threatLevel: "moderate",
        iconicAnimals: ["snow-leopard", "ibex", "eagle"],
        biomes: ["Mountains", "Steppes"],
        color: "#f39c12",
        rank: 124
    },
    "Tajikistan": {
        speciesCount: 2300,
        endemicSpecies: 105,
        forestCoverage: 2.9,
        threatLevel: "moderate",
        iconicAnimals: ["snow-leopard", "markhor", "eagle"],
        biomes: ["Mountains", "Valleys"],
        color: "#f39c12",
        rank: 125
    },

    // Southeast Asia - Additional
    "Singapore": {
        speciesCount: 2100,
        endemicSpecies: 85,
        forestCoverage: 23.4,
        threatLevel: "high",
        iconicAnimals: ["otter", "pangolin", "hornbill"],
        biomes: ["Urban Forest", "Mangroves"],
        color: "#3498db",
        rank: 126
    },
    "Brunei": {
        speciesCount: 2800,
        endemicSpecies: 180,
        forestCoverage: 72.1,
        threatLevel: "moderate",
        iconicAnimals: ["orangutan", "gibbon", "hornbill"],
        biomes: ["Rainforest"],
        color: "#2ecc71",
        rank: 127
    },
    "East Timor": {
        speciesCount: 1600,
        endemicSpecies: 95,
        forestCoverage: 49.1,
        threatLevel: "high",
        iconicAnimals: ["crocodile", "turtle", "bird"],
        biomes: ["Tropical Forest", "Coral Reefs"],
        color: "#27ae60",
        rank: 128
    },
    "Taiwan": {
        speciesCount: 4200,
        endemicSpecies: 890,
        forestCoverage: 58.5,
        threatLevel: "moderate",
        iconicAnimals: ["bear", "macaque", "deer"],
        biomes: ["Mountains", "Forests"],
        color: "#27ae60",
        rank: 129
    },

    // Africa - Additional Countries
    "Algeria": {
        speciesCount: 3600,
        endemicSpecies: 280,
        forestCoverage: 1.9,
        threatLevel: "moderate",
        iconicAnimals: ["gazelle", "fox", "eagle"],
        biomes: ["Sahara", "Atlas"],
        color: "#e67e22",
        rank: 130
    },
    "Tunisia": {
        speciesCount: 2400,
        endemicSpecies: 140,
        forestCoverage: 6.8,
        threatLevel: "moderate",
        iconicAnimals: ["gazelle", "fox", "jackal"],
        biomes: ["Mediterranean", "Desert"],
        color: "#e67e22",
        rank: 131
    },
    "Libya": {
        speciesCount: 2200,
        endemicSpecies: 95,
        forestCoverage: 0.1,
        threatLevel: "high",
        iconicAnimals: ["gazelle", "hyena", "fox"],
        biomes: ["Sahara", "Coastal"],
        color: "#e74c3c",
        rank: 132
    },
    "Sudan": {
        speciesCount: 3800,
        endemicSpecies: 220,
        forestCoverage: 12.9,
        threatLevel: "critical",
        iconicAnimals: ["lion", "elephant", "giraffe"],
        biomes: ["Sahara", "Savanna"],
        color: "#e74c3c",
        rank: 133
    },
    "South Sudan": {
        speciesCount: 3200,
        endemicSpecies: 180,
        forestCoverage: 11.3,
        threatLevel: "critical",
        iconicAnimals: ["elephant", "giraffe", "antelope"],
        biomes: ["Savanna", "Wetlands"],
        color: "#e74c3c",
        rank: 134
    },
    "Somalia": {
        speciesCount: 2600,
        endemicSpecies: 190,
        forestCoverage: 10.8,
        threatLevel: "critical",
        iconicAnimals: ["cheetah", "hyena", "gazelle"],
        biomes: ["Savanna", "Desert"],
        color: "#e74c3c",
        rank: 135
    },
    "Djibouti": {
        speciesCount: 1400,
        endemicSpecies: 68,
        forestCoverage: 0.2,
        threatLevel: "high",
        iconicAnimals: ["gazelle", "hyena", "fox"],
        biomes: ["Desert", "Volcanic"],
        color: "#e67e22",
        rank: 136
    },
    "Eritrea": {
        speciesCount: 2000,
        endemicSpecies: 95,
        forestCoverage: 15.1,
        threatLevel: "high",
        iconicAnimals: ["elephant", "gazelle", "hyena"],
        biomes: ["Highlands", "Coastal"],
        color: "#f39c12",
        rank: 137
    },
    "Mali": {
        speciesCount: 2800,
        endemicSpecies: 140,
        forestCoverage: 10.2,
        threatLevel: "critical",
        iconicAnimals: ["elephant", "lion", "giraffe"],
        biomes: ["Sahara", "Sahel"],
        color: "#e74c3c",
        rank: 138
    },
    "Niger": {
        speciesCount: 2400,
        endemicSpecies: 110,
        forestCoverage: 1.2,
        threatLevel: "critical",
        iconicAnimals: ["gazelle", "ostrich", "hyena"],
        biomes: ["Sahara", "Sahel"],
        color: "#e74c3c",
        rank: 139
    },
    "Chad": {
        speciesCount: 2600,
        endemicSpecies: 130,
        forestCoverage: 9.1,
        threatLevel: "critical",
        iconicAnimals: ["elephant", "lion", "gazelle"],
        biomes: ["Sahara", "Sahel"],
        color: "#e74c3c",
        rank: 140
    },
    "Mauritania": {
        speciesCount: 2000,
        endemicSpecies: 85,
        forestCoverage: 0.2,
        threatLevel: "high",
        iconicAnimals: ["gazelle", "fox", "hyena"],
        biomes: ["Sahara", "Coastal"],
        color: "#e67e22",
        rank: 141
    },
    "Senegal": {
        speciesCount: 2800,
        endemicSpecies: 140,
        forestCoverage: 43.9,
        threatLevel: "moderate",
        iconicAnimals: ["lion", "elephant", "hippo"],
        biomes: ["Savanna", "Wetlands"],
        color: "#27ae60",
        rank: 142
    },
    "Gambia": {
        speciesCount: 1600,
        endemicSpecies: 58,
        forestCoverage: 48.1,
        threatLevel: "moderate",
        iconicAnimals: ["hippo", "crocodile", "monkey"],
        biomes: ["River", "Savanna"],
        color: "#27ae60",
        rank: 143
    },
    "Guinea-Bissau": {
        speciesCount: 2000,
        endemicSpecies: 78,
        forestCoverage: 73.7,
        threatLevel: "high",
        iconicAnimals: ["hippo", "chimpanzee", "leopard"],
        biomes: ["Forests", "Mangroves"],
        color: "#2ecc71",
        rank: 144
    },
    "Guinea": {
        speciesCount: 3200,
        endemicSpecies: 180,
        forestCoverage: 26.6,
        threatLevel: "high",
        iconicAnimals: ["chimpanzee", "elephant", "leopard"],
        biomes: ["Rainforest", "Savanna"],
        color: "#f39c12",
        rank: 145
    },
    "Sierra Leone": {
        speciesCount: 2800,
        endemicSpecies: 140,
        forestCoverage: 38.1,
        threatLevel: "high",
        iconicAnimals: ["chimpanzee", "leopard", "hippo"],
        biomes: ["Rainforest", "Savanna"],
        color: "#27ae60",
        rank: 146
    },
    "Liberia": {
        speciesCount: 3000,
        endemicSpecies: 160,
        forestCoverage: 44.6,
        threatLevel: "high",
        iconicAnimals: ["chimpanzee", "elephant", "leopard"],
        biomes: ["Rainforest"],
        color: "#27ae60",
        rank: 147
    },
    "Ivory Coast": {
        speciesCount: 3600,
        endemicSpecies: 220,
        forestCoverage: 32.7,
        threatLevel: "critical",
        iconicAnimals: ["chimpanzee", "elephant", "leopard"],
        biomes: ["Rainforest", "Savanna"],
        color: "#e74c3c",
        rank: 148
    },
    "Burkina Faso": {
        speciesCount: 2200,
        endemicSpecies: 95,
        forestCoverage: 20.4,
        threatLevel: "high",
        iconicAnimals: ["elephant", "lion", "antelope"],
        biomes: ["Sahel", "Savanna"],
        color: "#f39c12",
        rank: 149
    },
    "Ghana": {
        speciesCount: 3400,
        endemicSpecies: 180,
        forestCoverage: 41.7,
        threatLevel: "high",
        iconicAnimals: ["elephant", "leopard", "monkey"],
        biomes: ["Rainforest", "Savanna"],
        color: "#27ae60",
        rank: 150
    },
    "Togo": {
        speciesCount: 2000,
        endemicSpecies: 85,
        forestCoverage: 11.9,
        threatLevel: "high",
        iconicAnimals: ["elephant", "lion", "antelope"],
        biomes: ["Savanna"],
        color: "#f39c12",
        rank: 151
    },
    "Benin": {
        speciesCount: 2200,
        endemicSpecies: 95,
        forestCoverage: 41.0,
        threatLevel: "high",
        iconicAnimals: ["elephant", "lion", "leopard"],
        biomes: ["Savanna", "Forests"],
        color: "#27ae60",
        rank: 152
    },
    "Equatorial Guinea": {
        speciesCount: 3000,
        endemicSpecies: 210,
        forestCoverage: 57.5,
        threatLevel: "high",
        iconicAnimals: ["gorilla", "elephant", "leopard"],
        biomes: ["Rainforest"],
        color: "#27ae60",
        rank: 153
    },
    "Sao Tome and Principe": {
        speciesCount: 1200,
        endemicSpecies: 180,
        forestCoverage: 28.3,
        threatLevel: "high",
        iconicAnimals: ["bird", "turtle", "bat"],
        biomes: ["Rainforest", "Volcanic"],
        color: "#f39c12",
        rank: 154
    },
    "Central African Republic": {
        speciesCount: 3800,
        endemicSpecies: 220,
        forestCoverage: 35.9,
        threatLevel: "critical",
        iconicAnimals: ["gorilla", "elephant", "leopard"],
        biomes: ["Rainforest", "Savanna"],
        color: "#e74c3c",
        rank: 155
    },
    "Republic of the Congo": {
        speciesCount: 4200,
        endemicSpecies: 280,
        forestCoverage: 65.6,
        threatLevel: "high",
        iconicAnimals: ["gorilla", "elephant", "chimpanzee"],
        biomes: ["Rainforest"],
        color: "#27ae60",
        rank: 156
    },
    "Burundi": {
        speciesCount: 2000,
        endemicSpecies: 85,
        forestCoverage: 10.9,
        threatLevel: "critical",
        iconicAnimals: ["hippo", "crocodile", "antelope"],
        biomes: ["Highlands", "Lakes"],
        color: "#e74c3c",
        rank: 157
    },
    "Malawi": {
        speciesCount: 2800,
        endemicSpecies: 140,
        forestCoverage: 34.0,
        threatLevel: "high",
        iconicAnimals: ["elephant", "lion", "leopard"],
        biomes: ["Savanna", "Lakes"],
        color: "#f39c12",
        rank: 158
    },
    "Comoros": {
        speciesCount: 1200,
        endemicSpecies: 240,
        forestCoverage: 20.4,
        threatLevel: "critical",
        iconicAnimals: ["lemur", "bat", "turtle"],
        biomes: ["Volcanic", "Forests"],
        color: "#e74c3c",
        rank: 159
    },
    "Seychelles": {
        speciesCount: 1400,
        endemicSpecies: 320,
        forestCoverage: 88.5,
        threatLevel: "high",
        iconicAnimals: ["turtle", "bird", "fish"],
        biomes: ["Island", "Coral Reefs"],
        color: "#2ecc71",
        rank: 160
    },
    "Mauritius": {
        speciesCount: 1300,
        endemicSpecies: 280,
        forestCoverage: 17.3,
        threatLevel: "critical",
        iconicAnimals: ["turtle", "bird", "bat"],
        biomes: ["Island", "Coral Reefs"],
        color: "#e74c3c",
        rank: 161
    },
    "Lesotho": {
        speciesCount: 1100,
        endemicSpecies: 45,
        forestCoverage: 1.6,
        threatLevel: "moderate",
        iconicAnimals: ["vulture", "antelope", "eagle"],
        biomes: ["Highlands", "Mountains"],
        color: "#f39c12",
        rank: 162
    },
    "Eswatini": {
        speciesCount: 1600,
        endemicSpecies: 68,
        forestCoverage: 31.7,
        threatLevel: "moderate",
        iconicAnimals: ["rhino", "elephant", "lion"],
        biomes: ["Savanna"],
        color: "#2ecc71",
        rank: 163
    },

    // Americas - Additional
    "El Salvador": {
        speciesCount: 1800,
        endemicSpecies: 95,
        forestCoverage: 13.9,
        threatLevel: "critical",
        iconicAnimals: ["iguana", "turtle", "parrot"],
        biomes: ["Forests", "Volcanoes"],
        color: "#e74c3c",
        rank: 164
    },
    "Trinidad and Tobago": {
        speciesCount: 2200,
        endemicSpecies: 140,
        forestCoverage: 44.0,
        threatLevel: "moderate",
        iconicAnimals: ["bird", "turtle", "dolphin"],
        biomes: ["Rainforest", "Coral Reefs"],
        color: "#27ae60",
        rank: 165
    },
    "Bahamas": {
        speciesCount: 1400,
        endemicSpecies: 85,
        forestCoverage: 51.4,
        threatLevel: "moderate",
        iconicAnimals: ["iguana", "turtle", "dolphin"],
        biomes: ["Islands", "Coral Reefs"],
        color: "#27ae60",
        rank: 166
    },
    "Barbados": {
        speciesCount: 900,
        endemicSpecies: 45,
        forestCoverage: 18.8,
        threatLevel: "moderate",
        iconicAnimals: ["turtle", "bird", "fish"],
        biomes: ["Coastal", "Coral Reefs"],
        color: "#3498db",
        rank: 167
    },
    "Suriname": {
        speciesCount: 5200,
        endemicSpecies: 380,
        forestCoverage: 93.0,
        threatLevel: "low",
        iconicAnimals: ["jaguar", "toucan", "monkey"],
        biomes: ["Amazon Rainforest"],
        color: "#2ecc71",
        rank: 168
    },
    "Guyana": {
        speciesCount: 4800,
        endemicSpecies: 340,
        forestCoverage: 87.0,
        threatLevel: "low",
        iconicAnimals: ["jaguar", "harpy-eagle", "caiman"],
        biomes: ["Amazon Rainforest"],
        color: "#2ecc71",
        rank: 169
    },
    "French Guiana": {
        speciesCount: 4600,
        endemicSpecies: 320,
        forestCoverage: 98.3,
        threatLevel: "low",
        iconicAnimals: ["jaguar", "sloth", "toucan"],
        biomes: ["Amazon Rainforest"],
        color: "#2ecc71",
        rank: 170
    },

    // Pacific Islands
    "Fiji": {
        speciesCount: 1800,
        endemicSpecies: 320,
        forestCoverage: 55.7,
        threatLevel: "high",
        iconicAnimals: ["iguana", "turtle", "parrot"],
        biomes: ["Rainforest", "Coral Reefs"],
        color: "#27ae60",
        rank: 171
    },
    "Solomon Islands": {
        speciesCount: 2200,
        endemicSpecies: 380,
        forestCoverage: 78.9,
        threatLevel: "high",
        iconicAnimals: ["crocodile", "bird", "turtle"],
        biomes: ["Rainforest", "Coral Reefs"],
        color: "#2ecc71",
        rank: 172
    },
    "Vanuatu": {
        speciesCount: 1600,
        endemicSpecies: 280,
        forestCoverage: 36.1,
        threatLevel: "high",
        iconicAnimals: ["bird", "turtle", "bat"],
        biomes: ["Rainforest", "Volcanic"],
        color: "#f39c12",
        rank: 173
    },
    "Samoa": {
        speciesCount: 1200,
        endemicSpecies: 180,
        forestCoverage: 60.4,
        threatLevel: "moderate",
        iconicAnimals: ["turtle", "bird", "bat"],
        biomes: ["Rainforest", "Volcanic"],
        color: "#27ae60",
        rank: 174
    },
    "Tonga": {
        speciesCount: 1000,
        endemicSpecies: 140,
        forestCoverage: 12.5,
        threatLevel: "moderate",
        iconicAnimals: ["whale", "turtle", "bird"],
        biomes: ["Islands", "Marine"],
        color: "#3498db",
        rank: 175
    },
    "Palau": {
        speciesCount: 1400,
        endemicSpecies: 220,
        forestCoverage: 87.6,
        threatLevel: "moderate",
        iconicAnimals: ["dugong", "turtle", "fish"],
        biomes: ["Marine", "Forests"],
        color: "#2ecc71",
        rank: 176
    },
    "Micronesia": {
        speciesCount: 1300,
        endemicSpecies: 180,
        forestCoverage: 91.7,
        threatLevel: "moderate",
        iconicAnimals: ["turtle", "bird", "fish"],
        biomes: ["Islands", "Marine"],
        color: "#2ecc71",
        rank: 177
    },

    // Antarctica - Special Entry!
    "Antarctica": {
        speciesCount: 235,
        endemicSpecies: 220,
        forestCoverage: 0.0,
        threatLevel: "critical",
        iconicAnimals: ["penguin", "seal", "whale"],
        biomes: ["Ice Sheet", "Ocean", "Tundra"],
        color: "#3498db",
        rank: 178
    }
};

// Animal emoji mapping for 3D visualization
const animalEmojis = {
    "jaguar": "🐆",
    "toucan": "🦜",
    "sloth": "🦥",
    "macaw": "🦜",
    "orangutan": "🦧",
    "komodo": "🦎",
    "tiger": "🐅",
    "elephant": "🐘",
    "condor": "🦅",
    "poison-frog": "🐸",
    "spectacled-bear": "🐻",
    "panda": "🐼",
    "golden-monkey": "🐒",
    "snow-leopard": "🐆",
    "kangaroo": "🦘",
    "koala": "🐨",
    "platypus": "🦫",
    "wombat": "🦫",
    "llama": "🦙",
    "axolotl": "🦎",
    "quetzal": "🦜",
    "monarch-butterfly": "🦋",
    "lemur": "🐒",
    "fossa": "🦊",
    "chameleon": "🦎",
    "baobab": "🌳",
    "leopard": "🐆",
    "peacock": "🦚",
    "blue-footed-booby": "🦆",
    "bald-eagle": "🦅",
    "grizzly": "🐻",
    "bison": "🦬",
    "wolf": "🐺",
    "gorilla": "🦍",
    "okapi": "🦒",
    "bonobo": "🦍",
    "lion": "🦁",
    "rhino": "🦏",
    "penguin": "🐧",
    "giraffe": "🦒",
    "zebra": "🦓",
    "wildebeest": "🦬",
    "cheetah": "🐆",
    "tapir": "🦫",
    "hornbill": "🦜",
    "bird-of-paradise": "🦜",
    "tree-kangaroo": "🦘",
    "cassowary": "🦤",
    "anaconda": "🐍",
    "capybara": "🦫",
    "harpy-eagle": "🦅",
    "tarsier": "🐒",
    "philippine-eagle": "🦅",
    "tamaraw": "🦬",
    "gibbon": "🐒",
    "saola": "🦌",
    "langur": "🐒",
    "pangolin": "🦔",
    "brown-bear": "🐻",
    "reindeer": "🦌",
    "moose": "🦌",
    "beaver": "🦫",
    "polar-bear": "🐻‍❄️",
    "caribou": "🦌",
    "guanaco": "🦙",
    "puma": "🐆",
    "macaque": "🐒",
    "crane": "🦢",
    "bear": "🐻",
    "deer": "🦌",
    "boar": "🐗",
    "lynx": "🐆",
    "fox": "🦊",
    "badger": "🦡",
    "oryx": "🦌",
    "gazelle": "🦌",
    "vulture": "🦅",
    "cobra": "🐍",
    "gelada": "🐒",
    "ibex": "🐐",
    "chimpanzee": "🦍",
    "buffalo": "🦬",
    "antelope": "🦌",
    "kiwi": "🐦",
    "dolphin": "🐬",
    "markhor": "🐐",
    "sloth-bear": "🐻",
    "seal": "🦭",
    "turtle": "🐢",
    "crocodile": "🐊",
    "iguana": "🦎",
    "parrot": "🦜",
    "hummingbird": "🐦",
    "frog": "🐸",
    "marmot": "🦫",
    "mouflon": "🐏",
    "otter": "🦦",
    "falcon": "🦅",
    "hyena": "🐺",
    "jackal": "🦊",
    "ostrich": "🦤",
    "caiman": "🐊",
    "dugong": "🐋",
    "fish": "🐟",
    "bat": "🦇",
    "elk": "🦌"
};

// Forest types
const forestTypes = {
    "tropical": { color: "#2ecc71", icon: "🌴" },
    "temperate": { color: "#27ae60", icon: "🌲" },
    "boreal": { color: "#16a085", icon: "🌲" },
    "mangrove": { color: "#1abc9c", icon: "🌿" },
    "cloud": { color: "#3498db", icon: "☁️" },
    "dry": { color: "#95a5a6", icon: "🌵" }
};

// Global statistics
const globalBiodiversityStats = {
    totalSpecies: 8700000,
    describedSpecies: 2100000,
    threatenedSpecies: 41459,
    extinctSpecies: 882,
    forestCoverage: 31.0, // percentage of Earth
    deforestationRate: "-0.35%",
    countriesCovered: 178  // Now includes ALL countries including Antarctica!
};

// Expose to window for cross-script access
window.biodiversityData = biodiversityData;
window.animalEmojis = animalEmojis;
window.forestTypes = forestTypes;
window.globalBiodiversityStats = globalBiodiversityStats;
