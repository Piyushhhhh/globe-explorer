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
        images: [
            "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
            "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
            "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80"
        ],
        didYouKnow: [
            "Originally covered in smooth white limestone casing stones that reflected sunlight, making them shine like 'jewels'",
            "The Great Pyramid was the tallest man-made structure for 3,800 years until Lincoln Cathedral in 1311 CE",
            "Built with approximately 2.3 million stone blocks, each weighing 2.5 to 15 tons",
            "Internal temperature stays constant at 20°C (68°F) regardless of outside weather",
            "The four sides face almost exactly north, south, east and west with incredible precision"
        ],
        artifacts: [
            {
                name: "Solar Boat of Khufu",
                description: "Intact full-size ship buried at the pyramid's base, possibly for pharaoh's journey in afterlife",
                image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80"
            },
            {
                name: "Pyramid Capstone",
                description: "Golden pyramidion that once crowned the apex, now lost to history",
                image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80"
            }
        ],
        relatedSites: ["Luxor (Ancient Thebes)", "Abu Simbel", "Saqqara (Step Pyramid)"],
        externalLinks: {
            wikipedia: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
            virtualTour: "https://artsandculture.google.com/asset/the-great-pyramids-of-giza/",
            video: "https://www.youtube.com/results?search_query=giza+pyramids+documentary"
        },
        markerImage: "https://api.iconify.design/mdi/pyramid.svg?color=%23d4af37&width=32",
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
        significance: "City of temples - Karnak and Luxor. Valley of the Kings contains 63 royal tombs including Tutankhamun's.",
        discovery: "Ancient capital known throughout history. Napoleon's expedition (1798) sparked modern Egyptology.",
        visitors: "4 million annually",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80",
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
        significance: "Four colossal statues of Ramesses II, each 20 meters tall. Sun illuminates inner sanctum twice yearly.",
        discovery: "Rediscovered 1813 by Swiss explorer J.L. Burckhardt. Relocated 1964-68 to escape Lake Nasser flooding.",
        visitors: "400,000 annually",
        image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80",
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
        significance: "Library held 400,000 scrolls - largest collection of antiquity. Lighthouse (Pharos) stood 100+ meters tall.",
        discovery: "Continuously inhabited. Underwater archaeology reveals submerged royal quarters and the Pharos.",
        visitors: "1.5 million annually",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80",
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
        significance: "Site of Hammurabi's Code - first written laws. Ishtar Gate reconstructed in Berlin's Pergamon Museum.",
        discovery: "Excavated by Robert Koldewey (1899-1917). Identified biblical city of Nebuchadnezzar II.",
        visitors: "Limited access due to regional instability",
        image: "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=600&q=80",
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
        significance: "Great Ziggurat dedicated to moon god Nanna. Royal tombs contained gold artifacts and evidence of human sacrifice.",
        discovery: "Excavated by Sir Leonard Woolley (1922-1934). Revealed Sumerian wealth and craftsmanship.",
        visitors: "Restricted access",
        image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&q=80",
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
        significance: "Library contained Epic of Gilgamesh and ancient flood story. Walls stretched 12km with 15 gates.",
        discovery: "Excavated by Austen Henry Layard (1845-1851). Clay tablets revolutionized understanding of Mesopotamia.",
        visitors: "Limited due to conflict",
        image: "https://images.unsplash.com/photo-1610721446630-e29f007391f5?w=600&q=80",
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
        significance: "Magnificent stone reliefs show tribute bearers from 23 subject nations. Apadana Palace held 10,000 guests.",
        discovery: "Known to locals. Studied by Europeans since 1600s. Major excavations began 1930s.",
        visitors: "800,000 annually",
        image: "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?w=600&q=80",
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
        markerImage: "https://api.iconify.design/game-icons/greek-temple.svg?color=%23b87333&width=32",
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
        significance: "Nine layers of settlement spanning 4,000 years. Confirmed Homer's epic was based on real place and events.",
        discovery: "Heinrich Schliemann excavated 1871-1890. Found 'Priam's Treasure' - gold artifacts from Troy II.",
        visitors: "600,000 annually",
        image: "https://images.unsplash.com/photo-1551432274-47b0c61fb05c?w=600&q=80",
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
        significance: "Pythia priestess delivered prophecies in Apollo's temple. Treasury houses held offerings from city-states.",
        discovery: "French School of Archaeology excavated 1892-1903. Revealed Temple of Apollo and Sacred Way.",
        visitors: "700,000 annually",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
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
        markerImage: "https://api.iconify.design/game-icons/roman-shield.svg?color=%23b87333&width=32",
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
        significance: "Preserved frescoes, mosaics, and bodies show daily Roman life. Graffiti reveals ancient humor and politics.",
        discovery: "Rediscovered 1748. Excavations ongoing - still 1/3 remains unexcavated for future technology.",
        visitors: "4 million annually",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
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
        images: [
            "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
            "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
            "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80"
        ],
        didYouKnow: [
            "Built without using wheels, iron tools, or draft animals - only bronze tools and stone hammers",
            "Sits on two fault lines but has never been destroyed by earthquake due to precise stonework that 'dances' with tremors",
            "Contains over 150 buildings ranging from baths and houses to temples and sanctuaries",
            "Only 400 people lived there at its peak - it was likely a royal estate, not a city",
            "Never found by Spanish conquistadors - remained hidden for 400 years"
        ],
        artifacts: [
            {
                name: "Intihuatana Stone",
                description: "'Hitching post of the Sun' - astronomic clock/calendar carved from granite",
                image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&q=80"
            },
            {
                name: "Temple of the Three Windows",
                description: "Ceremonial temple with three trapezoidal windows overlooking the plaza",
                image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=80"
            }
        ],
        relatedSites: ["Cusco", "Chichen Itza", "Angkor Wat"],
        externalLinks: {
            wikipedia: "https://en.wikipedia.org/wiki/Machu_Picchu",
            virtualTour: "https://artsandculture.google.com/story/machu-picchu",
            video: "https://www.youtube.com/results?search_query=machu+picchu+documentary"
        },
        markerImage: "https://api.iconify.design/game-icons/stone-tower.svg?color=%23d4af37&width=32",
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
        significance: "Pyramid of the Sun is 3rd largest pyramid in world. Avenue of the Dead runs 2.5km through city center.",
        discovery: "Known to Aztecs who named it 'Place of the Gods'. Systematic excavation began 1905.",
        visitors: "4.5 million annually",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
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
        markerImage: "https://api.iconify.design/game-icons/stone-temple.svg?color=%23d4af37&width=32",
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
        significance: "Temple IV stands 65 meters tall - tallest pre-Columbian structure. Population peaked at 100,000+.",
        discovery: "Spanish missionaries visited 1696. Scientifically mapped by Teobert Maler (1895-1904).",
        visitors: "500,000 annually",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
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
        significance: "Inca walls so precise a knife blade can't fit between stones. Spanish built churches on Inca foundations.",
        discovery: "Spanish conquest 1533. Inca stonework revealed beneath colonial buildings after earthquakes.",
        visitors: "2 million annually",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80",
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
        markerImage: "https://api.iconify.design/game-icons/great-wall.svg?color=%23cd7f32&width=32",
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
        significance: "Each warrior has unique facial features. Accompanied by 520 horses and 150 cavalry. Originally painted.",
        discovery: "Farmers digging a well discovered fragments in March 1974. Full scale excavation ongoing.",
        visitors: "3 million annually",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
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
        image: "https://cdn.pixabay.com/photo/2017/05/26/11/29/angkor-wat-2345136_1280.jpg",
        markerImage: "https://api.iconify.design/game-icons/pagoda.svg?color=%23d4af37&width=32",
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
        significance: "Built with 2 million stone blocks without mortar. Represents Buddhist cosmology and enlightenment path.",
        discovery: "Rediscovered 1814 by Sir Thomas Stamford Raffles. Restored by UNESCO 1975-1982.",
        visitors: "5 million annually",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
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
        significance: "Covered drainage system, public baths, standardized bricks. No palaces or temples - egalitarian society.",
        discovery: "Discovered 1922 by R.D. Banerji. Excavations revealed Bronze Age urban sophistication.",
        visitors: "100,000 annually",
        image: "https://images.unsplash.com/photo-1599833975787-5456e1b3821e?w=600&q=80",
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
        significance: "International trade hub with million inhabitants at peak. 400+ temples, destroyed by Burmese in 1767.",
        discovery: "Known throughout history. Became archaeological park 1976. Ongoing restoration of temples.",
        visitors: "5.5 million annually",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
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
        markerImage: "https://api.iconify.design/game-icons/greek-temple.svg?color=%23b87333&width=32",
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
        significance: "Western Wall - last remnant of Second Temple. Church of Holy Sepulchre marks Jesus' crucifixion site.",
        discovery: "Continuously inhabited for 5,000+ years. Archaeological excavations reveal multiple layers of history.",
        visitors: "3.5 million annually",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
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
        significance: "Blend of Greco-Roman and Persian architecture. Queen Zenobia briefly challenged Rome's power.",
        discovery: "Known to travelers. Documented by Europeans in 1600s-1700s. ISIS destroyed monuments 2015-2017.",
        visitors: "Pre-war: 150,000 annually. Currently restricted.",
        image: "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=600&q=80",
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
        significance: "Great Enclosure's walls reach 11m high. Center of gold trade route to Indian Ocean. Name means 'stone houses'.",
        discovery: "Documented by Portuguese 1500s. Explored by Europeans 1871. Symbols inspired modern Zimbabwe flag.",
        visitors: "150,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
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
        significance: "Controlled Western Mediterranean trade. Three Punic Wars with Rome ended in total destruction 146 BCE.",
        discovery: "Rebuilt by Romans, then by Arabs. Systematic excavation began French colonial era (1857).",
        visitors: "1.2 million annually",
        image: "https://images.unsplash.com/photo-1593032465175-94d8f1b53736?w=600&q=80",
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
        significance: "Remarkably preserved theater, forum, and Severan Basilica. Buried by sand, protecting from looting.",
        discovery: "Rediscovered early 1900s. Italian excavations 1920s-1930s revealed stunning Roman architecture.",
        visitors: "50,000 annually (limited access)",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
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
        markerImage: "https://api.iconify.design/game-icons/stone-pile.svg?color=%23cd7f32&width=32",
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
        significance: "Lion Gate entrance is Europe's oldest monumental sculpture. Treasury of Atreus - perfect corbelled dome.",
        discovery: "Heinrich Schliemann excavated 1874-1876. Found gold 'Mask of Agamemnon' and royal shaft graves.",
        visitors: "300,000 annually",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
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
        significance: "Multi-story palace complex with advanced plumbing. Frescoes depict bull-leaping ceremonies.",
        discovery: "Excavated by Sir Arthur Evans 1900-1905. Controversial reconstructions gave modern view of Minoan life.",
        visitors: "400,000 annually",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
        icon: "🏛️",
        unesco: false
    },

    // AMERICAS - ADDITIONAL CIVILIZATIONS
    {
        name: "La Venta",
        lat: 18.1031,
        lng: -94.0442,
        civilization: "Olmec",
        period: "ancient",
        founded: "~1200 BCE",
        type: "Ceremonial Center",
        description: "Major Olmec center famous for colossal stone heads. Oldest major civilization in Mesoamerica.",
        significance: "Four massive stone heads weighing up to 50 tons. Influenced all later Mesoamerican cultures including Maya and Aztec.",
        discovery: "Discovered 1925 by Franz Blom and Oliver La Farge. Major excavations 1940s revealed pyramid complex.",
        visitors: "50,000 annually",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
        icon: "🗿",
        unesco: false
    },
    {
        name: "San Lorenzo",
        lat: 17.9500,
        lng: -94.7833,
        civilization: "Olmec",
        period: "ancient",
        founded: "~1500 BCE",
        type: "City",
        description: "Earliest known Olmec center. Site of ten colossal heads and sophisticated drainage systems.",
        significance: "Oldest colossal heads in Mesoamerica. Advanced hydraulic engineering with stone drain systems.",
        discovery: "Excavated by Matthew Stirling 1940s. Revealed Olmec as 'mother culture' of Mesoamerica.",
        visitors: "Limited access",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
        icon: "🗿",
        unesco: false
    },
    {
        name: "Nazca Lines",
        lat: -14.7390,
        lng: -75.1300,
        civilization: "Nazca",
        period: "classical",
        founded: "~200 BCE",
        type: "Geoglyphs",
        description: "Massive ground drawings in the Peruvian desert. Figures include animals, plants, and geometric shapes.",
        significance: "Lines span 450 sq km. Best viewed from air. Purpose debated: astronomical calendar, ritual pathways, or water cult.",
        discovery: "Noticed by aviators 1920s-30s. Studied extensively by Maria Reiche from 1940s until her death in 1998.",
        visitors: "100,000 annually (observation tower)",
        image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=600&q=80",
        icon: "🦅",
        unesco: true
    },
    {
        name: "Huaca de la Luna",
        lat: -8.1356,
        lng: -79.0056,
        civilization: "Moche",
        period: "classical",
        founded: "~100 CE",
        type: "Temple",
        description: "Massive adobe pyramid with vibrant murals. Center of Moche religious and political power.",
        significance: "Multi-colored friezes still visible after 1,500 years. Evidence of human sacrifice rituals.",
        discovery: "Excavated since 1990s. Each layer reveals stunning polychrome murals and new construction phases.",
        visitors: "200,000 annually",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80",
        icon: "🏔️",
        unesco: false
    },
    {
        name: "Mesa Verde",
        lat: 37.2309,
        lng: -108.4618,
        civilization: "Ancestral Puebloans",
        period: "medieval",
        founded: "~600 CE",
        type: "Cliff Dwellings",
        description: "Spectacular cliff dwellings built into canyon walls. Home to Ancestral Puebloan people for 700 years.",
        significance: "Cliff Palace has 150 rooms and 23 kivas. Abandoned around 1300 CE, possibly due to drought.",
        discovery: "Rediscovered by cowboys Richard Wetherill and Charlie Mason in 1888. National Park since 1906.",
        visitors: "550,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
        icon: "🏜️",
        unesco: true
    },
    {
        name: "Chaco Canyon",
        lat: 36.0608,
        lng: -107.9650,
        civilization: "Ancestral Puebloans",
        period: "medieval",
        founded: "~850 CE",
        type: "Great House Complex",
        description: "Major center of Ancestral Puebloan culture. Features massive Great Houses and ancient roads.",
        significance: "Pueblo Bonito had 600+ rooms. Astronomical alignments mark solstices and lunar cycles.",
        discovery: "Documented by U.S. Army Lt. James Simpson in 1849. Major excavations began 1890s.",
        visitors: "40,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
        icon: "🏛️",
        unesco: true
    },

    // ASIA - ADDITIONAL CIVILIZATIONS
    {
        name: "Hattusa",
        lat: 40.0192,
        lng: 34.6150,
        civilization: "Hittite",
        period: "ancient",
        founded: "~1600 BCE",
        type: "City",
        description: "Capital of the Hittite Empire. Famous for Lion Gate and extensive cuneiform archives.",
        significance: "One of Bronze Age's great powers, rivaling Egypt. Archives revealed Hittite-Egyptian peace treaty (1259 BCE).",
        discovery: "Identified by Hugo Winckler in 1906. Excavations revealed vast city with 6km of walls.",
        visitors: "150,000 annually",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        icon: "🦁",
        unesco: true
    },
    {
        name: "Nara (Todai-ji)",
        lat: 34.6889,
        lng: 135.8397,
        civilization: "Ancient Japan",
        period: "medieval",
        founded: "752 CE",
        type: "Temple",
        description: "Japan's first permanent capital. Todai-ji houses world's largest bronze Buddha statue.",
        significance: "Great Buddha Hall is world's largest wooden building. Buddha statue stands 15 meters tall.",
        discovery: "Continuously maintained since construction. Temple complex represents peak of Nara period culture.",
        visitors: "3 million annually",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
        icon: "⛩️",
        unesco: true
    },
    {
        name: "Gyeongju",
        lat: 35.8562,
        lng: 129.2247,
        civilization: "Ancient Korea",
        period: "medieval",
        founded: "57 BCE",
        type: "City",
        description: "Capital of Silla Kingdom for nearly 1,000 years. 'Museum without walls' with countless relics.",
        significance: "Over 200 burial mounds contain gold crowns and treasures. Cheomseongdae is world's oldest observatory.",
        discovery: "Continuous heritage. Major excavations 20th century revealed stunning gold artifacts.",
        visitors: "10 million annually",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80",
        icon: "👑",
        unesco: true
    },
    {
        name: "Goguryeo Tombs",
        lat: 41.1400,
        lng: 126.1800,
        civilization: "Ancient Korea",
        period: "classical",
        founded: "~400 CE",
        type: "Tombs",
        description: "Royal tombs with stunning murals depicting daily life, mythology, and afterlife beliefs.",
        significance: "63 tombs with vivid wall paintings. Show Korean, Chinese, and nomadic influences.",
        discovery: "Known locally. Systematic study began Japanese colonial period. Many tombs in North Korea.",
        visitors: "Limited (many in DPRK)",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80",
        icon: "🎨",
        unesco: true
    },

    // AFRICA - ADDITIONAL CIVILIZATIONS
    {
        name: "Meroë",
        lat: 16.9383,
        lng: 33.7492,
        civilization: "Kushite",
        period: "classical",
        founded: "~800 BCE",
        type: "City",
        description: "Capital of Kingdom of Kush. Features more pyramids than Egypt (over 200 steep-sided pyramids).",
        significance: "Iron production center - 'Birmingham of Africa'. Unique Meroitic script still partially undeciphered.",
        discovery: "Documented by European explorers 1800s. Extensive excavations began 1900s.",
        visitors: "10,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
        icon: "🔺",
        unesco: true
    },
    {
        name: "Kerma",
        lat: 19.6114,
        lng: 30.4103,
        civilization: "Nubian",
        period: "ancient",
        founded: "~2500 BCE",
        type: "City",
        description: "Capital of ancient Nubian Kingdom of Kerma. Rival to Egypt with distinct African culture.",
        significance: "Massive mud-brick deffufa (temple) still stands. Rich burials show wealth from gold and ivory trade.",
        discovery: "Excavated by George Reisner 1913-1916. Recent work reveals sophisticated urban planning.",
        visitors: "5,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
        icon: "🏛️",
        unesco: false
    },
    {
        name: "Aksum",
        lat: 14.1319,
        lng: 38.7167,
        civilization: "Axumite",
        period: "classical",
        founded: "~400 BCE",
        type: "City",
        description: "Capital of ancient Kingdom of Aksum. Famous for towering stone obelisks and early Christianity.",
        significance: "Tallest obelisk stood 33 meters. Claims to house the Ark of the Covenant. Major trading power linking Rome, India, and Arabia.",
        discovery: "Known through history. German Aksum Expedition 1906 began systematic archaeology.",
        visitors: "50,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
        icon: "⛪",
        unesco: true
    },

    // EUROPE - ADDITIONAL CIVILIZATIONS
    {
        name: "Newgrange",
        lat: 53.6947,
        lng: -6.4753,
        civilization: "Celtic",
        period: "ancient",
        founded: "~3200 BCE",
        type: "Passage Tomb",
        description: "Prehistoric monument older than Stonehenge and the Pyramids. Features spectacular solar alignment.",
        significance: "Winter solstice sunrise illuminates inner chamber for 17 minutes. Demonstrates sophisticated astronomical knowledge.",
        discovery: "Always known locally. Excavated and restored 1962-1975 by Michael J. O'Kelly.",
        visitors: "200,000 annually (lottery for solstice access)",
        image: "https://images.unsplash.com/photo-1599833975787-5456e1b3821e?w=600&q=80",
        icon: "⭕",
        unesco: true
    },
    {
        name: "Carnac Stones",
        lat: 47.5833,
        lng: -3.0833,
        civilization: "Celtic",
        period: "ancient",
        founded: "~4500 BCE",
        type: "Standing Stones",
        description: "Largest megalithic site in the world. Over 3,000 standing stones arranged in mysterious patterns.",
        significance: "Stones stretch over 4km in rows. Purpose unknown - astronomical observatory, religious site, or territorial markers?",
        discovery: "Always known. Academic study began 1800s. Many stones restored to standing position in 1900s.",
        visitors: "300,000 annually",
        image: "https://images.unsplash.com/photo-1599833975787-5456e1b3821e?w=600&q=80",
        icon: "🗿",
        unesco: false
    },
    {
        name: "L'Anse aux Meadows",
        lat: 51.5944,
        lng: -55.5333,
        civilization: "Norse",
        period: "medieval",
        founded: "~1000 CE",
        type: "Settlement",
        description: "Only confirmed Viking settlement in North America. Proves Norse reached Americas 500 years before Columbus.",
        significance: "Eight Norse structures. Evidence of ironworking. Settlement lasted only a few years.",
        discovery: "Discovered by Helge Ingstad and Anne Stine Ingstad in 1960. Excavated 1961-1968.",
        visitors: "30,000 annually",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&q=80",
        icon: "⚔️",
        unesco: true
    },
    {
        name: "Old Uppsala",
        lat: 59.8986,
        lng: 17.6333,
        civilization: "Norse",
        period: "medieval",
        founded: "~500 CE",
        type: "Religious Center",
        description: "Ancient Swedish religious and political center. Site of massive burial mounds and pre-Christian temple.",
        significance: "Three royal mounds house legendary Swedish kings. Temple site of human and animal sacrifices every 9 years.",
        discovery: "Always prominent landmark. Excavations 1800s-2000s reveal complex ritual landscape.",
        visitors: "100,000 annually",
        image: "https://images.unsplash.com/photo-1599833975787-5456e1b3821e?w=600&q=80",
        icon: "⚔️",
        unesco: false
    },

    // PACIFIC
    {
        name: "Easter Island (Rapa Nui)",
        lat: -27.1127,
        lng: -109.3497,
        civilization: "Rapa Nui",
        period: "medieval",
        founded: "~1200 CE",
        type: "Island Settlement",
        description: "Remote Polynesian island famous for 887 massive moai stone statues. Mystery of how they were moved.",
        significance: "Moai statues represent ancestors. Largest weighs 82 tons, stands 10 meters. Society collapsed due to deforestation and resource depletion.",
        discovery: "Encountered by Europeans on Easter Sunday 1722. Thor Heyerdahl expeditions 1955-56 sparked modern research.",
        visitors: "100,000 annually",
        image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=80",
        icon: "🗿",
        unesco: true
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
