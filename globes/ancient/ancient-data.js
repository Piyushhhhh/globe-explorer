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
        significance: "Last remaining wonder of the ancient world. Precision engineering marvel - aligned to true north within 0.05 degrees.",
        discovery: "Always known to history. Serious archaeological study began in 1800s.",
        visitors: "14 million annually",
        image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80",
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
        significance: "Parthenon dedicated to Athena. Built without mortar using 13,400 stones. Pioneered democracy and philosophy.",
        discovery: "Continuous occupation. Parthenon built 447-432 BCE under Pericles.",
        visitors: "7 million annually (Acropolis)",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
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
        significance: "Colosseum held 50,000 spectators. Used innovative concrete and complex underground systems.",
        discovery: "Continuous occupation since founding. Colosseum completed 80 CE.",
        visitors: "9 million annually (Colosseum)",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
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
        significance: "Most intact pre-Columbian ruins. Built without mortar using perfectly cut stones that fit together seamlessly.",
        discovery: "Rediscovered by Hiram Bingham in 1911, though locals always knew of it.",
        visitors: "1.5 million annually (limited permits)",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80",
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
        significance: "El Castillo creates snake shadow during equinoxes. Sacred Cenote used for human sacrifices.",
        discovery: "Spanish conquistadors documented it in 1500s. Major excavations began 1924.",
        visitors: "2.6 million annually",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
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
        significance: "Visible from low Earth orbit. Took over 2,000 years to complete with millions of workers.",
        discovery: "Always known. Became a symbol of Chinese resilience and engineering prowess.",
        visitors: "10 million annually",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
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
        significance: "Covers 162 hectares. Built without mortar using sandstone blocks weighing up to 1.5 tons each.",
        discovery: "Never truly lost, but brought to Western attention by French explorer Henri Mouhot in 1860.",
        visitors: "2.6 million annually",
        image: "https://images.unsplash.com/photo-1545058210-3042112eeb5e?w=600&q=80",
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
        significance: "Half built, half carved into rock. Sophisticated water management system with dams and cisterns.",
        discovery: "Introduced to Western world by Swiss explorer Johann Ludwig Burckhardt in 1812.",
        visitors: "1 million annually",
        image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=600&q=80",
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
        significance: "Bluestones transported 250km from Wales. Aligned with summer solstice sunrise and winter sunset.",
        discovery: "Always known to locals. First detailed study by architect Inigo Jones in 1640.",
        visitors: "1.6 million annually",
        image: "https://images.unsplash.com/photo-1599833975787-5456e1b3821e?w=600&q=80",
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
        icon: "🐫",
        description: "Ancient network of trade routes connecting East and West",
        period: "~200 BCE - 1450 CE",
        distance: "~6,400 km (4,000 miles)",
        duration: "Journey took 6-12 months",
        mainGoods: [
            "Silk, porcelain, tea from China",
            "Spices, gems, ivory from India",
            "Gold, glass, wool from Rome",
            "Horses, jade, precious metals"
        ],
        transportation: [
            "Camel caravans (primary in deserts)",
            "Horse and donkey pack trains",
            "River boats on parts of route",
            "Walking merchants with goods"
        ],
        whoUsed: [
            "Chinese Han Dynasty merchants",
            "Persian Sassanid traders",
            "Roman Empire merchants",
            "Sogdian middlemen (Central Asia)",
            "Arab and Indian traders"
        ],
        significance: "Connected three continents and facilitated cultural exchange, spread of religions (Buddhism, Islam), and technological innovations. Greatest trade network in ancient history.",
        keyCities: ["Xi'an (Chang'an)", "Samarkand", "Baghdad", "Damascus", "Constantinople", "Venice", "Rome"],
        image: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=600&q=80"
    },
    {
        name: "Spice Route",
        paths: [
            { start: { lat: 6.9, lng: 79.9 }, end: { lat: 30.0, lng: 31.2 } },  // Sri Lanka to Alexandria
            { start: { lat: 13.0, lng: 80.2 }, end: { lat: 15.5, lng: 48.5 } }  // India to Yemen
        ],
        color: "#cd7f32",
        icon: "⛵",
        description: "Maritime routes trading spices, silk, and precious goods",
        period: "~3000 BCE - 1500 CE",
        distance: "~6,000 km (3,700 miles) by sea",
        duration: "Journey took 3-6 months depending on monsoon winds",
        mainGoods: [
            "Black pepper, cinnamon, cardamom",
            "Cloves, nutmeg, ginger",
            "Sandalwood, precious stones",
            "Silk, cotton textiles",
            "Ivory, gold, pearls"
        ],
        transportation: [
            "Dhow sailing ships (Indian Ocean)",
            "Arab trading vessels",
            "Chinese junks",
            "Coastal galleys and barges"
        ],
        whoUsed: [
            "Arab merchants (dominated trade)",
            "Indian Tamil and Malayalam traders",
            "Indonesian and Malay sailors",
            "Roman and later European buyers",
            "Chinese maritime expeditions"
        ],
        significance: "Made spices worth their weight in gold. Drove European Age of Exploration. Routes relied on monsoon wind patterns - summer winds northeast, winter southwest.",
        keyCities: ["Calicut", "Colombo", "Aden", "Muscat", "Alexandria", "Venice", "Malacca"],
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
    },
    {
        name: "Incense Route",
        paths: [
            { start: { lat: 15.0, lng: 44.0 }, end: { lat: 31.8, lng: 35.2 } }  // Yemen to Jerusalem
        ],
        color: "#b87333",
        icon: "🏜️",
        description: "Ancient trade route for frankincense and myrrh",
        period: "~1500 BCE - 300 CE",
        distance: "~2,400 km (1,500 miles)",
        duration: "Journey took 2-3 months",
        mainGoods: [
            "Frankincense (from Boswellia trees)",
            "Myrrh (aromatic resin)",
            "Balsam and other perfumes",
            "Precious stones, gold"
        ],
        transportation: [
            "Camel caravans (can carry 200kg each)",
            "Donkey trains for smaller loads",
            "Desert guides (Nabataeans specialized)"
        ],
        whoUsed: [
            "Nabataean traders (controlled route)",
            "Arab Bedouin merchants",
            "Jewish traders to Jerusalem",
            "Egyptian and Roman buyers",
            "Sabaean kingdom merchants"
        ],
        significance: "Frankincense and myrrh were worth more than gold in ancient times. Used in religious ceremonies across Egypt, Greece, Rome, and Jerusalem. Made Nabataean kingdom wealthy.",
        keyCities: ["Shabwa", "Ma'rib", "Petra", "Gaza", "Jerusalem"],
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80"
    },
    {
        name: "Amber Road",
        paths: [
            { start: { lat: 54.7, lng: 20.5 }, end: { lat: 41.9, lng: 12.5 } }  // Baltic to Rome
        ],
        color: "#daa520",
        icon: "🎨",
        description: "Trade route for amber from the Baltic to Mediterranean",
        period: "~3000 BCE - 500 CE",
        distance: "~1,800 km (1,100 miles)",
        duration: "Journey took 1-2 months",
        mainGoods: [
            "Baltic amber (fossilized tree resin)",
            "Furs from northern forests",
            "Timber, honey, wax",
            "Salt from northern mines"
        ],
        transportation: [
            "River boats on Vistula and Danube",
            "Ox-drawn wagons overland",
            "Pack horses through mountain passes",
            "Small sailing vessels on rivers"
        ],
        whoUsed: [
            "Germanic tribes (primary collectors)",
            "Celtic middlemen traders",
            "Etruscan and Roman buyers",
            "Greek merchants",
            "Nordic Vikings (later periods)"
        ],
        significance: "Amber was prized by Romans as 'gold of the north' for jewelry and medicine. Created early European trade network predating the Roman Empire.",
        keyCities: ["Kaliningrad (ancient Sambia)", "Krakow", "Vienna", "Aquileia", "Rome"],
        image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=600&q=80"
    },
    {
        name: "Trans-Saharan Trade Route",
        paths: [
            { start: { lat: 6.5, lng: -1.6 }, end: { lat: 33.9, lng: -6.9 } },  // Ghana to Morocco
            { start: { lat: 12.6, lng: -8.0 }, end: { lat: 36.8, lng: 10.2 } }  // Mali to Tunisia
        ],
        color: "#e6b800",
        icon: "🐪",
        description: "Ancient caravan routes crossing the Sahara Desert",
        period: "~500 BCE - 1500 CE",
        distance: "~2,000 km (1,250 miles)",
        duration: "Journey took 2-4 months",
        mainGoods: [
            "Gold from West African kingdoms",
            "Salt from Saharan mines",
            "Ivory, slaves",
            "Kola nuts, leather goods"
        ],
        transportation: [
            "Camel caravans (1000+ camels)",
            "Only camels could survive desert",
            "Berber guides essential",
            "Travel only in cooler seasons"
        ],
        whoUsed: [
            "Berber traders (North Africa)",
            "West African kingdom merchants",
            "Arab Muslim traders",
            "Tuareg nomadic guides",
            "Mali and Ghana empire traders"
        ],
        significance: "Salt was traded pound-for-pound for gold. Made Mali Empire wealthiest kingdom in Africa. Spread Islam across Sahara. Trade peaked under Mansa Musa (1312-1337).",
        keyCities: ["Timbuktu", "Gao", "Marrakesh", "Fez", "Cairo", "Kumbi Saleh"],
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80"
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
