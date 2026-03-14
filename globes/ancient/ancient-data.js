// Ancient Civilizations & Lost Cities Data

const ancientSites = [
    // EGYPT
    {
        name: "Giza Pyramids",
        lat: 29.9792,
        lng: 31.1342,
        civilization: "Ancient Egypt",
        period: "ancient",
        founded: "~2580 BCE",
        type: "Monument",
        description: "The Great Pyramid of Khufu, one of the Seven Wonders of the Ancient World. Built as royal tombs during Egypt's Old Kingdom.",
        icon: "🔺",
        unesco: true
    },
    {
        name: "Luxor (Ancient Thebes)",
        lat: 25.6872,
        lng: 32.6396,
        civilization: "Ancient Egypt",
        period: "ancient",
        founded: "~3200 BCE",
        type: "City",
        description: "Capital of Egypt during the New Kingdom. Home to Karnak Temple and the Valley of the Kings.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Abu Simbel",
        lat: 22.3372,
        lng: 31.6258,
        civilization: "Ancient Egypt",
        period: "ancient",
        founded: "~1264 BCE",
        type: "Temple",
        description: "Massive rock temples built by Ramesses II. Relocated in 1968 to save them from rising Nile waters.",
        icon: "⛰️",
        unesco: true
    },
    {
        name: "Alexandria",
        lat: 31.2001,
        lng: 29.9187,
        civilization: "Hellenistic Egypt",
        period: "classical",
        founded: "331 BCE",
        type: "City",
        description: "Founded by Alexander the Great. Home to the Great Library and Lighthouse, ancient wonders now lost.",
        icon: "🏛️",
        unesco: false
    },

    // MESOPOTAMIA
    {
        name: "Babylon",
        lat: 32.5355,
        lng: 44.4275,
        civilization: "Mesopotamia",
        period: "ancient",
        founded: "~2300 BCE",
        type: "City",
        description: "Home to the Hanging Gardens, one of the Seven Wonders. Capital of the Babylonian Empire under Hammurabi and Nebuchadnezzar.",
        icon: "🌆",
        unesco: true
    },
    {
        name: "Ur",
        lat: 30.9625,
        lng: 46.1030,
        civilization: "Sumerian",
        period: "ancient",
        founded: "~3800 BCE",
        type: "City",
        description: "One of the world's earliest cities. Famous for the Ziggurat of Ur and as the birthplace of Abraham.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Nineveh",
        lat: 36.3600,
        lng: 43.1520,
        civilization: "Assyrian",
        period: "ancient",
        founded: "~6000 BCE",
        type: "City",
        description: "Capital of the Neo-Assyrian Empire. Featured the great Library of Ashurbanipal with over 30,000 clay tablets.",
        icon: "📚",
        unesco: true
    },
    {
        name: "Persepolis",
        lat: 29.9346,
        lng: 52.8910,
        civilization: "Persian",
        period: "classical",
        founded: "~518 BCE",
        type: "City",
        description: "Ceremonial capital of the Achaemenid Empire. Burned by Alexander the Great in 330 BCE.",
        icon: "👑",
        unesco: true
    },

    // GREECE & ROME
    {
        name: "Athens (Acropolis)",
        lat: 37.9715,
        lng: 23.7267,
        civilization: "Ancient Greece",
        period: "classical",
        founded: "~508 BCE",
        type: "City",
        description: "Birthplace of democracy and Western philosophy. The Parthenon stands as symbol of classical civilization.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Troy",
        lat: 39.9575,
        lng: 26.2390,
        civilization: "Ancient Greece",
        period: "ancient",
        founded: "~3000 BCE",
        type: "City",
        description: "Legendary city of Homer's Iliad. Discovered by Heinrich Schliemann in 1870s.",
        icon: "🐴",
        unesco: true
    },
    {
        name: "Delphi",
        lat: 38.4824,
        lng: 22.5011,
        civilization: "Ancient Greece",
        period: "classical",
        founded: "~1400 BCE",
        type: "Sanctuary",
        description: "Sacred site and home of the Oracle of Delphi. Greeks believed it was the center of the world.",
        icon: "🔮",
        unesco: true
    },
    {
        name: "Rome (Colosseum)",
        lat: 41.8902,
        lng: 12.4922,
        civilization: "Roman Empire",
        period: "classical",
        founded: "753 BCE",
        type: "City",
        description: "The Eternal City. Center of one of history's greatest empires, spanning three continents.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Pompeii",
        lat: 40.7517,
        lng: 14.4889,
        civilization: "Roman Empire",
        period: "classical",
        founded: "~600 BCE",
        type: "City",
        description: "Roman city frozen in time by the eruption of Mount Vesuvius in 79 CE. Perfectly preserved by volcanic ash.",
        icon: "🌋",
        unesco: true
    },

    // AMERICAS
    {
        name: "Machu Picchu",
        lat: -13.1631,
        lng: -72.5450,
        civilization: "Inca",
        period: "medieval",
        founded: "~1450 CE",
        type: "City",
        description: "Lost city of the Incas, rediscovered in 1911. Built on a mountain ridge 2,430 meters above sea level.",
        icon: "⛰️",
        unesco: true
    },
    {
        name: "Teotihuacan",
        lat: 19.6925,
        lng: -98.8438,
        civilization: "Mesoamerica",
        period: "classical",
        founded: "~100 BCE",
        type: "City",
        description: "Once one of the largest cities in the world (200,000+ people). Home to the Pyramid of the Sun.",
        icon: "🔺",
        unesco: true
    },
    {
        name: "Chichen Itza",
        lat: 20.6843,
        lng: -88.5678,
        civilization: "Maya",
        period: "medieval",
        founded: "~600 CE",
        type: "City",
        description: "One of the New Seven Wonders. Famous for El Castillo pyramid and advanced astronomical knowledge.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Tikal",
        lat: 17.2221,
        lng: -89.6236,
        civilization: "Maya",
        period: "classical",
        founded: "~400 BCE",
        type: "City",
        description: "One of the largest Mayan cities. Features towering pyramids rising above the jungle canopy.",
        icon: "🌴",
        unesco: true
    },
    {
        name: "Cusco",
        lat: -13.5319,
        lng: -71.9675,
        civilization: "Inca",
        period: "medieval",
        founded: "~1200 CE",
        type: "City",
        description: "Capital of the Inca Empire. 'Navel of the World' in Quechua. Built with remarkable precision stonework.",
        icon: "👑",
        unesco: true
    },

    // ASIA
    {
        name: "Great Wall of China",
        lat: 40.4319,
        lng: 116.5704,
        civilization: "China",
        period: "ancient",
        founded: "~220 BCE",
        type: "Fortification",
        description: "The longest wall in the world (21,000+ km). Built over centuries to protect against invasions.",
        icon: "🧱",
        unesco: true
    },
    {
        name: "Terracotta Army (Xi'an)",
        lat: 34.3841,
        lng: 109.2789,
        civilization: "China",
        period: "ancient",
        founded: "~210 BCE",
        type: "Tomb",
        description: "8,000 life-sized terracotta warriors buried with Emperor Qin Shi Huang. Discovered in 1974.",
        icon: "🗿",
        unesco: true
    },
    {
        name: "Angkor Wat",
        lat: 13.4125,
        lng: 103.8670,
        civilization: "Khmer Empire",
        period: "medieval",
        founded: "~1110 CE",
        type: "Temple",
        description: "Largest religious monument in the world. Originally Hindu, later became Buddhist temple complex.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Borobudur",
        lat: -7.6079,
        lng: 110.2038,
        civilization: "Indonesia",
        period: "medieval",
        founded: "~750 CE",
        type: "Temple",
        description: "World's largest Buddhist temple. Features 2,672 relief panels and 504 Buddha statues.",
        icon: "🛕",
        unesco: true
    },
    {
        name: "Mohenjo-daro",
        lat: 27.3275,
        lng: 68.1384,
        civilization: "Indus Valley",
        period: "ancient",
        founded: "~2500 BCE",
        type: "City",
        description: "Advanced Indus Valley city with sophisticated urban planning, drainage systems, and grid layout.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Ayutthaya",
        lat: 14.3532,
        lng: 100.5773,
        civilization: "Thailand",
        period: "medieval",
        founded: "1351 CE",
        type: "City",
        description: "Capital of Siam for 417 years. Once one of the world's largest and wealthiest cities.",
        icon: "👑",
        unesco: true
    },

    // MIDDLE EAST
    {
        name: "Petra",
        lat: 30.3285,
        lng: 35.4444,
        civilization: "Nabataean",
        period: "classical",
        founded: "~312 BCE",
        type: "City",
        description: "The Rose City, carved into pink sandstone cliffs. Trading hub and capital of the Nabataean Kingdom.",
        icon: "🏜️",
        unesco: true
    },
    {
        name: "Jerusalem (Old City)",
        lat: 31.7767,
        lng: 35.2345,
        civilization: "Ancient Israel",
        period: "ancient",
        founded: "~3000 BCE",
        type: "City",
        description: "Holy city for Judaism, Christianity, and Islam. Site of the Temple Mount and Western Wall.",
        icon: "🕌",
        unesco: true
    },
    {
        name: "Palmyra",
        lat: 34.5561,
        lng: 38.2692,
        civilization: "Roman/Palmyrene",
        period: "classical",
        founded: "~2000 BCE",
        type: "City",
        description: "Oasis city and vital caravan stop on the Silk Road. Severely damaged in Syrian civil war.",
        icon: "🏛️",
        unesco: true
    },

    // AFRICA
    {
        name: "Great Zimbabwe",
        lat: -20.2674,
        lng: 30.9339,
        civilization: "Zimbabwe",
        period: "medieval",
        founded: "~1100 CE",
        type: "City",
        description: "Capital of the Kingdom of Zimbabwe. Famous for its massive stone structures built without mortar.",
        icon: "🏛️",
        unesco: true
    },
    {
        name: "Carthage",
        lat: 36.8525,
        lng: 10.3233,
        civilization: "Phoenician",
        period: "classical",
        founded: "814 BCE",
        type: "City",
        description: "Powerful trading empire and rival to Rome. Home of Hannibal who crossed the Alps with elephants.",
        icon: "🐘",
        unesco: true
    },
    {
        name: "Leptis Magna",
        lat: 32.6423,
        lng: 14.2916,
        civilization: "Roman Empire",
        period: "classical",
        founded: "~1100 BCE",
        type: "City",
        description: "One of the most spectacular Roman cities. Birthplace of Emperor Septimius Severus.",
        icon: "🏛️",
        unesco: true
    },

    // EUROPE
    {
        name: "Stonehenge",
        lat: 51.1789,
        lng: -1.8262,
        civilization: "Prehistoric Britain",
        period: "ancient",
        founded: "~3000 BCE",
        type: "Monument",
        description: "Mysterious prehistoric monument. Stones aligned with astronomical events, purpose still debated.",
        icon: "🗿",
        unesco: true
    },
    {
        name: "Mycenae",
        lat: 37.7308,
        lng: 22.7563,
        civilization: "Mycenaean Greece",
        period: "ancient",
        founded: "~1600 BCE",
        type: "City",
        description: "Home of King Agamemnon. Center of Mycenaean civilization that dominated Bronze Age Greece.",
        icon: "👑",
        unesco: true
    },
    {
        name: "Knossos",
        lat: 35.2979,
        lng: 25.1632,
        civilization: "Minoan",
        period: "ancient",
        founded: "~7000 BCE",
        type: "Palace",
        description: "Largest Bronze Age site on Crete. Palace associated with King Minos and the Minotaur legend.",
        icon: "🏛️",
        unesco: false
    }
];

// Major Ancient Trade Routes
const tradeRoutes = [
    {
        name: "Silk Road",
        paths: [
            { start: { lat: 34.2, lng: 108.9 }, end: { lat: 41.9, lng: 12.5 } }, // Xi'an to Rome
            { start: { lat: 34.2, lng: 108.9 }, end: { lat: 35.7, lng: 51.4 } }, // Xi'an to Tehran
            { start: { lat: 35.7, lng: 51.4 }, end: { lat: 41.9, lng: 12.5 } }  // Tehran to Rome
        ],
        color: "#d4af37",
        description: "Ancient network of trade routes connecting East and West"
    },
    {
        name: "Spice Route",
        paths: [
            { start: { lat: 6.9, lng: 79.9 }, end: { lat: 30.0, lng: 31.2 } },  // Sri Lanka to Alexandria
            { start: { lat: 13.0, lng: 80.2 }, end: { lat: 15.5, lng: 48.5 } }  // India to Yemen
        ],
        color: "#cd7f32",
        description: "Maritime routes trading spices, silk, and precious goods"
    },
    {
        name: "Incense Route",
        paths: [
            { start: { lat: 15.0, lng: 44.0 }, end: { lat: 31.8, lng: 35.2 } }  // Yemen to Jerusalem
        ],
        color: "#b87333",
        description: "Ancient trade route for frankincense and myrrh"
    },
    {
        name: "Amber Road",
        paths: [
            { start: { lat: 54.7, lng: 20.5 }, end: { lat: 41.9, lng: 12.5 } }  // Baltic to Rome
        ],
        color: "#daa520",
        description: "Trade route for amber from the Baltic to Mediterranean"
    }
];

// Ancient Empires (for potential timeline feature)
const ancientEmpires = [
    {
        name: "Roman Empire",
        peak: "117 CE",
        color: "#8b0000",
        capital: "Rome"
    },
    {
        name: "Mongol Empire",
        peak: "1279 CE",
        color: "#4b0082",
        capital: "Karakorum"
    },
    {
        name: "Persian Empire",
        peak: "500 BCE",
        color: "#ff8c00",
        capital: "Persepolis"
    },
    {
        name: "Han Dynasty",
        peak: "100 CE",
        color: "#ff4500",
        capital: "Chang'an"
    }
];
