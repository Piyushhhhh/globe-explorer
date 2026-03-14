// Safety & Security Data by Country (2024-2026)
// Data includes: crime rates, political stability, personal safety, risk factors
// Sources: Global Peace Index, World Bank, UN Crime Stats, Transparency International, Freedom House
// Index: 0-100 where 100 = safest (Iceland, Singapore, Switzerland)

const safetyData = {
    // VERY SAFE (Index 85-100) - Safest destinations worldwide
    "Iceland": {
        overallSafetyIndex: 95.8,
        rank: 1,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 1.2,
            homicideRate: 0.3,
            propertyCrimeRate: 18.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 98.5,
            corruptionIndex: 74, // CPI score (higher = less corrupt)
            democracyIndex: 9.2
        },
        personal: {
            womenSafetyScore: 98,
            lgbtqSafetyScore: 96,
            touristSafetyScore: 95
        },
        risks: {
            naturalDisasterRisk: "moderate",
            earthquakeRisk: 5,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Singapore": {
        overallSafetyIndex: 94.5,
        rank: 2,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 0.8,
            homicideRate: 0.2,
            propertyCrimeRate: 15.2,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 92.5,
            corruptionIndex: 83,
            democracyIndex: 6.4
        },
        personal: {
            womenSafetyScore: 93,
            lgbtqSafetyScore: 52,
            touristSafetyScore: 96
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Japan": {
        overallSafetyIndex: 93.2,
        rank: 3,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 1.5,
            homicideRate: 0.3,
            propertyCrimeRate: 22.8,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 88.5,
            corruptionIndex: 73,
            democracyIndex: 8.1
        },
        personal: {
            womenSafetyScore: 89,
            lgbtqSafetyScore: 68,
            touristSafetyScore: 94
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 9,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Switzerland": {
        overallSafetyIndex: 92.8,
        rank: 4,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 2.8,
            homicideRate: 0.5,
            propertyCrimeRate: 38.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 96.5,
            corruptionIndex: 82,
            democracyIndex: 9.1
        },
        personal: {
            womenSafetyScore: 95,
            lgbtqSafetyScore: 89,
            touristSafetyScore: 93
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Norway": {
        overallSafetyIndex: 91.5,
        rank: 5,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 5.2,
            homicideRate: 0.5,
            propertyCrimeRate: 42.3,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 97.2,
            corruptionIndex: 84,
            democracyIndex: 9.8
        },
        personal: {
            womenSafetyScore: 96,
            lgbtqSafetyScore: 93,
            touristSafetyScore: 92
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Denmark": {
        overallSafetyIndex: 91.2,
        rank: 6,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 4.5,
            homicideRate: 1.0,
            propertyCrimeRate: 48.2,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 95.8,
            corruptionIndex: 88,
            democracyIndex: 9.6
        },
        personal: {
            womenSafetyScore: 94,
            lgbtqSafetyScore: 91,
            touristSafetyScore: 91
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Finland": {
        overallSafetyIndex: 90.8,
        rank: 7,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 6.2,
            homicideRate: 1.4,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 94.5,
            corruptionIndex: 87,
            democracyIndex: 9.3
        },
        personal: {
            womenSafetyScore: 93,
            lgbtqSafetyScore: 90,
            touristSafetyScore: 90
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Austria": {
        overallSafetyIndex: 89.5,
        rank: 8,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 5.8,
            homicideRate: 0.7,
            propertyCrimeRate: 45.2,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 91.2,
            corruptionIndex: 77,
            democracyIndex: 8.3
        },
        personal: {
            womenSafetyScore: 91,
            lgbtqSafetyScore: 86,
            touristSafetyScore: 90
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "New Zealand": {
        overallSafetyIndex: 89.2,
        rank: 9,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 0.7,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 93.5,
            corruptionIndex: 87,
            democracyIndex: 9.4
        },
        personal: {
            womenSafetyScore: 92,
            lgbtqSafetyScore: 88,
            touristSafetyScore: 91
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Portugal": {
        overallSafetyIndex: 88.5,
        rank: 10,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 0.7,
            propertyCrimeRate: 55.2,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 88.5,
            corruptionIndex: 62,
            democracyIndex: 8.2
        },
        personal: {
            womenSafetyScore: 88,
            lgbtqSafetyScore: 82,
            touristSafetyScore: 89
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Slovenia": {
        overallSafetyIndex: 87.8,
        rank: 11,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 6.5,
            homicideRate: 0.6,
            propertyCrimeRate: 42.8,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 85.5,
            corruptionIndex: 56,
            democracyIndex: 7.5
        },
        personal: {
            womenSafetyScore: 86,
            lgbtqSafetyScore: 75,
            touristSafetyScore: 88
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Czech Republic": {
        overallSafetyIndex: 87.2,
        rank: 12,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 7.2,
            homicideRate: 0.6,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 84.5,
            corruptionIndex: 56,
            democracyIndex: 7.9
        },
        personal: {
            womenSafetyScore: 84,
            lgbtqSafetyScore: 72,
            touristSafetyScore: 87
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Canada": {
        overallSafetyIndex: 86.8,
        rank: 13,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 1.8,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 90.5,
            corruptionIndex: 74,
            democracyIndex: 9.2
        },
        personal: {
            womenSafetyScore: 89,
            lgbtqSafetyScore: 87,
            touristSafetyScore: 88
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Australia": {
        overallSafetyIndex: 86.2,
        rank: 14,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 15.8,
            homicideRate: 0.9,
            propertyCrimeRate: 65.2,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 89.5,
            corruptionIndex: 75,
            democracyIndex: 8.9
        },
        personal: {
            womenSafetyScore: 87,
            lgbtqSafetyScore: 85,
            touristSafetyScore: 89
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    "Germany": {
        overallSafetyIndex: 85.5,
        rank: 15,
        safetyTier: "very-safe",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 0.8,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 88.5,
            corruptionIndex: 79,
            democracyIndex: 8.7
        },
        personal: {
            womenSafetyScore: 86,
            lgbtqSafetyScore: 82,
            touristSafetyScore: 87
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#10b981",
        status: "very-safe",
        lastUpdated: "2026-03-01"
    },

    // SAFE (Index 70-84) - Generally safe with normal precautions
    "Ireland": {
        overallSafetyIndex: 84.5,
        rank: 16,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 14.2,
            homicideRate: 0.9,
            propertyCrimeRate: 62.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 87.5,
            corruptionIndex: 74,
            democracyIndex: 9.0
        },
        personal: {
            womenSafetyScore: 85,
            lgbtqSafetyScore: 84,
            touristSafetyScore: 86
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Netherlands": {
        overallSafetyIndex: 83.8,
        rank: 17,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 0.6,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 86.5,
            corruptionIndex: 79,
            democracyIndex: 9.1
        },
        personal: {
            womenSafetyScore: 84,
            lgbtqSafetyScore: 90,
            touristSafetyScore: 85
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Sweden": {
        overallSafetyIndex: 82.5,
        rank: 18,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 1.2,
            propertyCrimeRate: 75.8,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 89.5,
            corruptionIndex: 82,
            democracyIndex: 9.4
        },
        personal: {
            womenSafetyScore: 87,
            lgbtqSafetyScore: 89,
            touristSafetyScore: 84
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Spain": {
        overallSafetyIndex: 81.2,
        rank: 19,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 0.7,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 60,
            democracyIndex: 8.1
        },
        personal: {
            womenSafetyScore: 82,
            lgbtqSafetyScore: 77,
            touristSafetyScore: 83
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Italy": {
        overallSafetyIndex: 80.5,
        rank: 20,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 11.8,
            homicideRate: 0.6,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 75.5,
            corruptionIndex: 56,
            democracyIndex: 7.7
        },
        personal: {
            womenSafetyScore: 79,
            lgbtqSafetyScore: 71,
            touristSafetyScore: 81
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "France": {
        overallSafetyIndex: 79.8,
        rank: 21,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 13.5,
            homicideRate: 1.2,
            propertyCrimeRate: 78.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 71,
            democracyIndex: 8.0
        },
        personal: {
            womenSafetyScore: 77,
            lgbtqSafetyScore: 79,
            touristSafetyScore: 80
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "United Kingdom": {
        overallSafetyIndex: 78.5,
        rank: 22,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 18.2,
            homicideRate: 1.2,
            propertyCrimeRate: 85.2,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 76.5,
            corruptionIndex: 73,
            democracyIndex: 8.5
        },
        personal: {
            womenSafetyScore: 78,
            lgbtqSafetyScore: 81,
            touristSafetyScore: 79
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Belgium": {
        overallSafetyIndex: 77.2,
        rank: 23,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 16.8,
            homicideRate: 1.7,
            propertyCrimeRate: 82.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 74.5,
            corruptionIndex: 73,
            democracyIndex: 7.8
        },
        personal: {
            womenSafetyScore: 76,
            lgbtqSafetyScore: 82,
            touristSafetyScore: 77
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Poland": {
        overallSafetyIndex: 76.5,
        rank: 24,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 0.7,
            propertyCrimeRate: 52.8,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 56,
            democracyIndex: 7.0
        },
        personal: {
            womenSafetyScore: 73,
            lgbtqSafetyScore: 58,
            touristSafetyScore: 77
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "South Korea": {
        overallSafetyIndex: 75.8,
        rank: 25,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 6.8,
            homicideRate: 0.6,
            propertyCrimeRate: 45.2,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 65.5,
            corruptionIndex: 62,
            democracyIndex: 8.0
        },
        personal: {
            womenSafetyScore: 71,
            lgbtqSafetyScore: 52,
            touristSafetyScore: 78
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Estonia": {
        overallSafetyIndex: 74.5,
        rank: 26,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 8.2,
            homicideRate: 1.9,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 74,
            democracyIndex: 7.9
        },
        personal: {
            womenSafetyScore: 75,
            lgbtqSafetyScore: 67,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Chile": {
        overallSafetyIndex: 73.2,
        rank: 27,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 15.5,
            homicideRate: 3.8,
            propertyCrimeRate: 88.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 67,
            democracyIndex: 7.9
        },
        personal: {
            womenSafetyScore: 70,
            lgbtqSafetyScore: 65,
            touristSafetyScore: 73
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 9,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "United States": {
        overallSafetyIndex: 72.5,
        rank: 28,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 5.0,
            propertyCrimeRate: 118.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 67,
            democracyIndex: 8.3
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 68,
            touristSafetyScore: 74
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "United States of America": {
        overallSafetyIndex: 72.5,
        rank: 28,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 5.0,
            propertyCrimeRate: 118.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 67,
            democracyIndex: 8.3
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 68,
            touristSafetyScore: 74
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Croatia": {
        overallSafetyIndex: 71.8,
        rank: 29,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 7.8,
            homicideRate: 0.9,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 66.5,
            corruptionIndex: 50,
            democracyIndex: 6.8
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 60,
            touristSafetyScore: 75
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "United Arab Emirates": {
        overallSafetyIndex: 70.5,
        rank: 30,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 3.2,
            homicideRate: 0.5,
            propertyCrimeRate: 25.8,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 67,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 82
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    // MODERATE (Index 50-69) - Exercise caution, some risks present
    "Greece": {
        overallSafetyIndex: 68.5,
        rank: 31,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 0.8,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 49,
            democracyIndex: 7.4
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 64,
            touristSafetyScore: 70
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Romania": {
        overallSafetyIndex: 67.2,
        rank: 32,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 11.2,
            homicideRate: 1.3,
            propertyCrimeRate: 65.8,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 44,
            democracyIndex: 6.4
        },
        personal: {
            womenSafetyScore: 65,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 68
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "China": {
        overallSafetyIndex: 65.8,
        rank: 33,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 6.2,
            homicideRate: 0.6,
            propertyCrimeRate: 35.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 42,
            democracyIndex: 2.1
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Argentina": {
        overallSafetyIndex: 64.5,
        rank: 34,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 5.3,
            propertyCrimeRate: 95.2,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 54.5,
            corruptionIndex: 38,
            democracyIndex: 7.0
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 72,
            touristSafetyScore: 65
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Thailand": {
        overallSafetyIndex: 63.2,
        rank: 35,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 2.6,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 36,
            democracyIndex: 5.8
        },
        personal: {
            womenSafetyScore: 64,
            lgbtqSafetyScore: 58,
            touristSafetyScore: 68
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 4,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Malaysia": {
        overallSafetyIndex: 62.5,
        rank: 36,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 7.8,
            homicideRate: 2.1,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 48,
            democracyIndex: 7.3
        },
        personal: {
            womenSafetyScore: 61,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 67
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Turkey": {
        overallSafetyIndex: 61.2,
        rank: 37,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.8,
            homicideRate: 2.6,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 38,
            democracyIndex: 4.2
        },
        personal: {
            womenSafetyScore: 55,
            lgbtqSafetyScore: 38,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Indonesia": {
        overallSafetyIndex: 60.5,
        rank: 38,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 6.5,
            homicideRate: 0.4,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 34,
            democracyIndex: 6.7
        },
        personal: {
            womenSafetyScore: 58,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 63
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 9,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Vietnam": {
        overallSafetyIndex: 59.8,
        rank: 39,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 5.8,
            homicideRate: 1.5,
            propertyCrimeRate: 38.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 36,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 66
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Morocco": {
        overallSafetyIndex: 58.5,
        rank: 40,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 8.2,
            homicideRate: 1.3,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 55.5,
            corruptionIndex: 38,
            democracyIndex: 5.0
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 24,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Jordan": {
        overallSafetyIndex: 57.2,
        rank: 41,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 4.5,
            homicideRate: 1.8,
            propertyCrimeRate: 32.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 48,
            democracyIndex: 3.9
        },
        personal: {
            womenSafetyScore: 55,
            lgbtqSafetyScore: 22,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Tunisia": {
        overallSafetyIndex: 56.5,
        rank: 42,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 2.8,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 43,
            democracyIndex: 6.3
        },
        personal: {
            womenSafetyScore: 54,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 58
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "high",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Peru": {
        overallSafetyIndex: 55.8,
        rank: 43,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 7.9,
            propertyCrimeRate: 82.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 36,
            democracyIndex: 6.5
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 58,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Egypt": {
        overallSafetyIndex: 54.5,
        rank: 44,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 7.8,
            homicideRate: 2.5,
            propertyCrimeRate: 45.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 30,
            democracyIndex: 3.1
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 58
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "high",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "India": {
        overallSafetyIndex: 53.2,
        rank: 45,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 3.1,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 55.5,
            corruptionIndex: 40,
            democracyIndex: 7.2
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 35,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 6,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Philippines": {
        overallSafetyIndex: 52.5,
        rank: 46,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 15.8,
            homicideRate: 8.9,
            propertyCrimeRate: 75.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 33,
            democracyIndex: 6.7
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 54
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 9,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Kenya": {
        overallSafetyIndex: 51.8,
        rank: 47,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 4.9,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 32,
            democracyIndex: 5.2
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 52
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "high",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Ecuador": {
        overallSafetyIndex: 50.5,
        rank: 48,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 12.7,
            propertyCrimeRate: 95.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 36,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 52,
            touristSafetyScore: 50
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    // RISKY (Index 35-49) - Significant risks, extra precautions needed
    "Pakistan": {
        overallSafetyIndex: 48.5,
        rank: 49,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 4.4,
            propertyCrimeRate: 88.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 32.5,
            corruptionIndex: 28,
            democracyIndex: 4.3
        },
        personal: {
            womenSafetyScore: 35,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 42
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 7,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Nigeria": {
        overallSafetyIndex: 47.2,
        rank: 50,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 9.8,
            propertyCrimeRate: 112.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 35.5,
            corruptionIndex: 24,
            democracyIndex: 4.5
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 40
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Bangladesh": {
        overallSafetyIndex: 46.5,
        rank: 51,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 2.5,
            propertyCrimeRate: 75.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 38.5,
            corruptionIndex: 26,
            democracyIndex: 5.9
        },
        personal: {
            womenSafetyScore: 32,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 5,
            terrorismRisk: "high",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Colombia": {
        overallSafetyIndex: 45.8,
        rank: 52,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 32.5,
            homicideRate: 25.9,
            propertyCrimeRate: 125.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 39,
            democracyIndex: 7.1
        },
        personal: {
            womenSafetyScore: 45,
            lgbtqSafetyScore: 62,
            touristSafetyScore: 46
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "medium",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "South Africa": {
        overallSafetyIndex: 44.5,
        rank: 53,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 45.8,
            homicideRate: 36.4,
            propertyCrimeRate: 158.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 43,
            democracyIndex: 7.1
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 68,
            touristSafetyScore: 48
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Brazil": {
        overallSafetyIndex: 43.2,
        rank: 54,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 38.5,
            homicideRate: 27.4,
            propertyCrimeRate: 142.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 38,
            democracyIndex: 6.9
        },
        personal: {
            womenSafetyScore: 44,
            lgbtqSafetyScore: 58,
            touristSafetyScore: 45
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Mexico": {
        overallSafetyIndex: 42.5,
        rank: 55,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 35.8,
            homicideRate: 29.1,
            propertyCrimeRate: 135.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 45.5,
            corruptionIndex: 31,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 40,
            lgbtqSafetyScore: 55,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Russia": {
        overallSafetyIndex: 41.8,
        rank: 56,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 6.8,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 35.5,
            corruptionIndex: 28,
            democracyIndex: 2.3
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 48
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "medium",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Iran": {
        overallSafetyIndex: 40.5,
        rank: 57,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 2.5,
            propertyCrimeRate: 45.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 28.5,
            corruptionIndex: 25,
            democracyIndex: 2.0
        },
        personal: {
            womenSafetyScore: 28,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 42
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Venezuela": {
        overallSafetyIndex: 38.2,
        rank: 58,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 58.5,
            homicideRate: 49.2,
            propertyCrimeRate: 185.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 18.5,
            corruptionIndex: 14,
            democracyIndex: 3.1
        },
        personal: {
            womenSafetyScore: 32,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 28
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Myanmar": {
        overallSafetyIndex: 36.5,
        rank: 59,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 15.5,
            homicideRate: 2.4,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 12.5,
            corruptionIndex: 23,
            democracyIndex: 1.1
        },
        personal: {
            womenSafetyScore: 35,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 32
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 7,
            terrorismRisk: "medium",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    // DANGEROUS (Index 0-34) - High danger, travel not recommended
    "Yemen": {
        overallSafetyIndex: 32.5,
        rank: 60,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 35.5,
            homicideRate: 6.8,
            propertyCrimeRate: 125.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 8.5,
            corruptionIndex: 16,
            democracyIndex: 1.9
        },
        personal: {
            womenSafetyScore: 18,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 12
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Syria": {
        overallSafetyIndex: 28.2,
        rank: 61,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 42.5,
            homicideRate: 8.9,
            propertyCrimeRate: 145.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 5.5,
            corruptionIndex: 13,
            democracyIndex: 1.4
        },
        personal: {
            womenSafetyScore: 15,
            lgbtqSafetyScore: 4,
            touristSafetyScore: 8
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Afghanistan": {
        overallSafetyIndex: 24.5,
        rank: 62,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 38.5,
            homicideRate: 6.5,
            propertyCrimeRate: 135.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 4.5,
            corruptionIndex: 16,
            democracyIndex: 0.9
        },
        personal: {
            womenSafetyScore: 8,
            lgbtqSafetyScore: 2,
            touristSafetyScore: 5
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Iraq": {
        overallSafetyIndex: 26.8,
        rank: 63,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 32.5,
            homicideRate: 9.9,
            propertyCrimeRate: 118.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 12.5,
            corruptionIndex: 21,
            democracyIndex: 3.0
        },
        personal: {
            womenSafetyScore: 22,
            lgbtqSafetyScore: 6,
            touristSafetyScore: 15
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 4,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Somalia": {
        overallSafetyIndex: 22.5,
        rank: 64,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 48.5,
            homicideRate: 12.6,
            propertyCrimeRate: 165.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 3.5,
            corruptionIndex: 11,
            democracyIndex: 1.5
        },
        personal: {
            womenSafetyScore: 12,
            lgbtqSafetyScore: 3,
            touristSafetyScore: 6
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 3,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Libya": {
        overallSafetyIndex: 25.2,
        rank: 65,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 38.5,
            homicideRate: 7.8,
            propertyCrimeRate: 135.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 6.5,
            corruptionIndex: 17,
            democracyIndex: 2.0
        },
        personal: {
            womenSafetyScore: 18,
            lgbtqSafetyScore: 4,
            touristSafetyScore: 10
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Sudan": {
        overallSafetyIndex: 27.5,
        rank: 66,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 6.4,
            propertyCrimeRate: 105.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 8.5,
            corruptionIndex: 16,
            democracyIndex: 1.8
        },
        personal: {
            womenSafetyScore: 20,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 18
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "South Sudan": {
        overallSafetyIndex: 18.5,
        rank: 165,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 45.5,
            homicideRate: 13.9,
            propertyCrimeRate: 155.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 2.5,
            corruptionIndex: 12,
            democracyIndex: 1.3
        },
        personal: {
            womenSafetyScore: 10,
            lgbtqSafetyScore: 4,
            touristSafetyScore: 8
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 2,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "S. Sudan": {
        overallSafetyIndex: 18.5,
        rank: 165,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 45.5,
            homicideRate: 13.9,
            propertyCrimeRate: 155.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 2.5,
            corruptionIndex: 12,
            democracyIndex: 1.3
        },
        personal: {
            womenSafetyScore: 10,
            lgbtqSafetyScore: 4,
            touristSafetyScore: 8
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 2,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Central African Republic": {
        overallSafetyIndex: 19.5,
        rank: 67,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 52.5,
            homicideRate: 19.8,
            propertyCrimeRate: 175.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 2.5,
            corruptionIndex: 24,
            democracyIndex: 1.6
        },
        personal: {
            womenSafetyScore: 10,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 8
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Central African Rep.": {
        overallSafetyIndex: 19.5,
        rank: 67,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 52.5,
            homicideRate: 19.8,
            propertyCrimeRate: 175.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 2.5,
            corruptionIndex: 24,
            democracyIndex: 1.6
        },
        personal: {
            womenSafetyScore: 10,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 8
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    // Additional Safe Countries
    "Uruguay": {
        overallSafetyIndex: 70.2,
        rank: 68,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 11.8,
            homicideRate: 8.5,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 73,
            democracyIndex: 8.9
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 78,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Costa Rica": {
        overallSafetyIndex: 72.8,
        rank: 69,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 11.5,
            homicideRate: 11.7,
            propertyCrimeRate: 65.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 76.5,
            corruptionIndex: 58,
            democracyIndex: 8.2
        },
        personal: {
            womenSafetyScore: 74,
            lgbtqSafetyScore: 70,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 7,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Hungary": {
        overallSafetyIndex: 73.5,
        rank: 70,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 9.8,
            homicideRate: 2.2,
            propertyCrimeRate: 55.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 43,
            democracyIndex: 6.6
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 54,
            touristSafetyScore: 75
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Slovakia": {
        overallSafetyIndex: 74.8,
        rank: 71,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 1.1,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 50,
            democracyIndex: 7.2
        },
        personal: {
            womenSafetyScore: 74,
            lgbtqSafetyScore: 62,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Taiwan": {
        overallSafetyIndex: 80.2,
        rank: 72,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 4.2,
            homicideRate: 0.8,
            propertyCrimeRate: 28.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 68,
            democracyIndex: 8.9
        },
        personal: {
            womenSafetyScore: 82,
            lgbtqSafetyScore: 76,
            touristSafetyScore: 84
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 9,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    // Additional Moderate Countries
    "Albania": {
        overallSafetyIndex: 67.5,
        rank: 73,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 2.3,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 35,
            democracyIndex: 6.1
        },
        personal: {
            womenSafetyScore: 65,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 68
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Serbia": {
        overallSafetyIndex: 66.8,
        rank: 74,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 1.2,
            propertyCrimeRate: 62.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 36,
            democracyIndex: 6.3
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 67
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Bulgaria": {
        overallSafetyIndex: 68.2,
        rank: 75,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 11.8,
            homicideRate: 1.5,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 42,
            democracyIndex: 7.0
        },
        personal: {
            womenSafetyScore: 67,
            lgbtqSafetyScore: 52,
            touristSafetyScore: 69
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Kazakhstan": {
        overallSafetyIndex: 64.8,
        rank: 76,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 4.9,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 34,
            democracyIndex: 3.1
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 4,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Mongolia": {
        overallSafetyIndex: 63.5,
        rank: 77,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 6.2,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 35,
            democracyIndex: 6.5
        },
        personal: {
            womenSafetyScore: 64,
            lgbtqSafetyScore: 38,
            touristSafetyScore: 66
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Sri Lanka": {
        overallSafetyIndex: 58.8,
        rank: 78,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 2.6,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 36,
            democracyIndex: 5.7
        },
        personal: {
            womenSafetyScore: 56,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 4,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Nepal": {
        overallSafetyIndex: 57.5,
        rank: 79,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 6.5,
            homicideRate: 2.8,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 33,
            democracyIndex: 5.3
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 10,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Bolivia": {
        overallSafetyIndex: 56.2,
        rank: 80,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 6.3,
            propertyCrimeRate: 82.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 45.5,
            corruptionIndex: 30,
            democracyIndex: 5.7
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Paraguay": {
        overallSafetyIndex: 55.5,
        rank: 81,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 8.1,
            propertyCrimeRate: 75.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 28,
            democracyIndex: 6.2
        },
        personal: {
            womenSafetyScore: 54,
            lgbtqSafetyScore: 52,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Senegal": {
        overallSafetyIndex: 60.2,
        rank: 82,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 7.9,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 43,
            democracyIndex: 6.7
        },
        personal: {
            womenSafetyScore: 58,
            lgbtqSafetyScore: 22,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Ghana": {
        overallSafetyIndex: 61.5,
        rank: 83,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 2.1,
            propertyCrimeRate: 65.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 65.5,
            corruptionIndex: 43,
            democracyIndex: 6.5
        },
        personal: {
            womenSafetyScore: 60,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Tanzania": {
        overallSafetyIndex: 58.2,
        rank: 84,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 6.5,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 38,
            democracyIndex: 5.1
        },
        personal: {
            womenSafetyScore: 56,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 60
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Uganda": {
        overallSafetyIndex: 54.8,
        rank: 85,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 6.2,
            propertyCrimeRate: 78.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 27,
            democracyIndex: 4.5
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Ethiopia": {
        overallSafetyIndex: 50.8,
        rank: 86,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 7.6,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 35.5,
            corruptionIndex: 37,
            democracyIndex: 3.4
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 48
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 5,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Cambodia": {
        overallSafetyIndex: 57.8,
        rank: 87,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 2.4,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 21,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 56,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 60
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Laos": {
        overallSafetyIndex: 61.8,
        rank: 88,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 6.5,
            homicideRate: 6.2,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 29,
            democracyIndex: 2.0
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 24,
            touristSafetyScore: 66
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    // Additional Risky Countries
    "Guatemala": {
        overallSafetyIndex: 46.8,
        rank: 89,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 22.4,
            propertyCrimeRate: 105.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 25,
            democracyIndex: 5.8
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 46
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Honduras": {
        overallSafetyIndex: 42.2,
        rank: 90,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 42.5,
            homicideRate: 38.9,
            propertyCrimeRate: 145.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 38.5,
            corruptionIndex: 23,
            democracyIndex: 5.3
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 40
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 6,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "El Salvador": {
        overallSafetyIndex: 44.5,
        rank: 91,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 38.5,
            homicideRate: 52.0,
            propertyCrimeRate: 135.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 33,
            democracyIndex: 6.2
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 52,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Nicaragua": {
        overallSafetyIndex: 48.8,
        rank: 92,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 7.4,
            propertyCrimeRate: 75.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 32.5,
            corruptionIndex: 20,
            democracyIndex: 3.3
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 50
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Haiti": {
        overallSafetyIndex: 34.5,
        rank: 93,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 42.5,
            homicideRate: 10.9,
            propertyCrimeRate: 145.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 15.5,
            corruptionIndex: 18,
            democracyIndex: 4.0
        },
        personal: {
            womenSafetyScore: 28,
            lgbtqSafetyScore: 22,
            touristSafetyScore: 26
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 9,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Jamaica": {
        overallSafetyIndex: 45.2,
        rank: 94,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 35.8,
            homicideRate: 46.5,
            propertyCrimeRate: 128.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 44,
            democracyIndex: 7.2
        },
        personal: {
            womenSafetyScore: 46,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 48
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Zimbabwe": {
        overallSafetyIndex: 42.8,
        rank: 95,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 6.7,
            propertyCrimeRate: 95.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 28.5,
            corruptionIndex: 23,
            democracyIndex: 3.2
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 42
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Cameroon": {
        overallSafetyIndex: 44.2,
        rank: 96,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 24.5,
            homicideRate: 5.8,
            propertyCrimeRate: 98.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 32.5,
            corruptionIndex: 25,
            democracyIndex: 3.5
        },
        personal: {
            womenSafetyScore: 36,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 42
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Democratic Republic of the Congo": {
        overallSafetyIndex: 33.5,
        rank: 97,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 48.5,
            homicideRate: 13.5,
            propertyCrimeRate: 165.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 8.5,
            corruptionIndex: 19,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 18,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 22
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 3,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Dem. Rep. Congo": {
        overallSafetyIndex: 33.5,
        rank: 97,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 48.5,
            homicideRate: 13.5,
            propertyCrimeRate: 165.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 8.5,
            corruptionIndex: 19,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 18,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 22
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 3,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Angola": {
        overallSafetyIndex: 43.8,
        rank: 98,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 26.5,
            homicideRate: 6.8,
            propertyCrimeRate: 105.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 27,
            democracyIndex: 3.4
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Mozambique": {
        overallSafetyIndex: 40.5,
        rank: 99,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 3.4,
            propertyCrimeRate: 112.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 32.5,
            corruptionIndex: 25,
            democracyIndex: 4.8
        },
        personal: {
            womenSafetyScore: 34,
            lgbtqSafetyScore: 14,
            touristSafetyScore: 38
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 2,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Algeria": {
        overallSafetyIndex: 47.5,
        rank: 100,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 1.4,
            propertyCrimeRate: 65.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 38.5,
            corruptionIndex: 30,
            democracyIndex: 3.7
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 46
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "high",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    // Additional Safe & Moderate Countries
    "Lithuania": {
        overallSafetyIndex: 76.2,
        rank: 101,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 4.6,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 61,
            democracyIndex: 7.5
        },
        personal: {
            womenSafetyScore: 76,
            lgbtqSafetyScore: 62,
            touristSafetyScore: 77
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Latvia": {
        overallSafetyIndex: 75.5,
        rank: 102,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 8.2,
            homicideRate: 3.5,
            propertyCrimeRate: 55.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 76.5,
            corruptionIndex: 59,
            democracyIndex: 7.3
        },
        personal: {
            womenSafetyScore: 75,
            lgbtqSafetyScore: 58,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Botswana": {
        overallSafetyIndex: 68.8,
        rank: 103,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 15.0,
            propertyCrimeRate: 78.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 75.5,
            corruptionIndex: 60,
            democracyIndex: 7.4
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Namibia": {
        overallSafetyIndex: 66.5,
        rank: 104,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 17.2,
            propertyCrimeRate: 82.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 49,
            democracyIndex: 6.7
        },
        personal: {
            womenSafetyScore: 64,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 68
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Mauritius": {
        overallSafetyIndex: 72.8,
        rank: 105,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 2.7,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 54,
            democracyIndex: 8.2
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Oman": {
        overallSafetyIndex: 71.5,
        rank: 106,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 3.8,
            homicideRate: 0.5,
            propertyCrimeRate: 28.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 76.5,
            corruptionIndex: 52,
            democracyIndex: 3.0
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 78
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Qatar": {
        overallSafetyIndex: 78.5,
        rank: 107,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 2.5,
            homicideRate: 0.4,
            propertyCrimeRate: 22.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 82.5,
            corruptionIndex: 58,
            democracyIndex: 2.5
        },
        personal: {
            womenSafetyScore: 74,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 84
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Kuwait": {
        overallSafetyIndex: 74.2,
        rank: 108,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 3.2,
            homicideRate: 1.8,
            propertyCrimeRate: 28.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 42,
            democracyIndex: 3.9
        },
        personal: {
            womenSafetyScore: 70,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Bahrain": {
        overallSafetyIndex: 72.8,
        rank: 109,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 4.5,
            homicideRate: 0.6,
            propertyCrimeRate: 32.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 42,
            democracyIndex: 2.5
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Saudi Arabia": {
        overallSafetyIndex: 67.8,
        rank: 110,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 4.8,
            homicideRate: 1.5,
            propertyCrimeRate: 35.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 52,
            democracyIndex: 1.9
        },
        personal: {
            womenSafetyScore: 58,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Azerbaijan": {
        overallSafetyIndex: 65.5,
        rank: 111,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 2.2,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 30,
            democracyIndex: 2.7
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 66
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Armenia": {
        overallSafetyIndex: 69.2,
        rank: 112,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 1.9,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 42,
            democracyIndex: 5.7
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 70
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Georgia": {
        overallSafetyIndex: 71.8,
        rank: 113,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 2.7,
            propertyCrimeRate: 45.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 56,
            democracyIndex: 5.5
        },
        personal: {
            womenSafetyScore: 70,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 74
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 7,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Uzbekistan": {
        overallSafetyIndex: 64.2,
        rank: 114,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 3.5,
            propertyCrimeRate: 45.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 28,
            democracyIndex: 2.0
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 66
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 6,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Kyrgyzstan": {
        overallSafetyIndex: 60.5,
        rank: 115,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 4.1,
            propertyCrimeRate: 65.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 27,
            democracyIndex: 4.9
        },
        personal: {
            womenSafetyScore: 58,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Tajikistan": {
        overallSafetyIndex: 57.8,
        rank: 116,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 2.1,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 25,
            democracyIndex: 2.0
        },
        personal: {
            womenSafetyScore: 54,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 58
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 9,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Turkmenistan": {
        overallSafetyIndex: 62.5,
        rank: 117,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 5.5,
            homicideRate: 5.5,
            propertyCrimeRate: 38.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 19,
            democracyIndex: 1.7
        },
        personal: {
            womenSafetyScore: 60,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 8,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Lebanon": {
        overallSafetyIndex: 48.2,
        rank: 118,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 4.4,
            propertyCrimeRate: 65.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 22.5,
            corruptionIndex: 24,
            democracyIndex: 3.6
        },
        personal: {
            womenSafetyScore: 46,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 42
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Israel": {
        overallSafetyIndex: 69.5,
        rank: 119,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.8,
            homicideRate: 1.4,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 59,
            democracyIndex: 7.9
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 78,
            touristSafetyScore: 68
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 4,
            terrorismRisk: "high",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Palestine": {
        overallSafetyIndex: 43.5,
        rank: 120,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 2.4,
            propertyCrimeRate: 82.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 18.5,
            corruptionIndex: 31,
            democracyIndex: 3.0
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 36
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "very-high",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "North Korea": {
        overallSafetyIndex: 29.5,
        rank: 121,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 15.5,
            homicideRate: 4.4,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 16,
            democracyIndex: 1.1
        },
        personal: {
            womenSafetyScore: 24,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 12
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Fiji": {
        overallSafetyIndex: 68.5,
        rank: 122,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 2.8,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 65.5,
            corruptionIndex: 44,
            democracyIndex: 5.7
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 7,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Papua New Guinea": {
        overallSafetyIndex: 39.5,
        rank: 123,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 38.5,
            homicideRate: 10.9,
            propertyCrimeRate: 135.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 27,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 28,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 34
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 9,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Madagascar": {
        overallSafetyIndex: 52.5,
        rank: 124,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 8.1,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 45.5,
            corruptionIndex: 25,
            democracyIndex: 5.3
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 54
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Zambia": {
        overallSafetyIndex: 56.8,
        rank: 125,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 5.3,
            propertyCrimeRate: 78.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 33,
            democracyIndex: 5.7
        },
        personal: {
            womenSafetyScore: 54,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 58
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Malawi": {
        overallSafetyIndex: 59.5,
        rank: 126,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 11.5,
            homicideRate: 1.8,
            propertyCrimeRate: 62.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 35,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 56,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Rwanda": {
        overallSafetyIndex: 67.5,
        rank: 127,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 2.5,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 54,
            democracyIndex: 3.4
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Burundi": {
        overallSafetyIndex: 35.5,
        rank: 128,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 6.1,
            propertyCrimeRate: 95.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 18.5,
            corruptionIndex: 17,
            democracyIndex: 2.1
        },
        personal: {
            womenSafetyScore: 28,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 30
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 3,
            terrorismRisk: "medium",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Mali": {
        overallSafetyIndex: 31.5,
        rank: 129,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 10.8,
            propertyCrimeRate: 112.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 12.5,
            corruptionIndex: 28,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 22,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 16
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Niger": {
        overallSafetyIndex: 33.8,
        rank: 130,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 4.4,
            propertyCrimeRate: 82.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 22.5,
            corruptionIndex: 32,
            democracyIndex: 3.2
        },
        personal: {
            womenSafetyScore: 28,
            lgbtqSafetyScore: 6,
            touristSafetyScore: 24
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 1,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Chad": {
        overallSafetyIndex: 30.5,
        rank: 131,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 32.5,
            homicideRate: 9.4,
            propertyCrimeRate: 118.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 15.5,
            corruptionIndex: 20,
            democracyIndex: 1.6
        },
        personal: {
            womenSafetyScore: 18,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 14
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Mauritania": {
        overallSafetyIndex: 46.5,
        rank: 132,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 10.3,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 28,
            democracyIndex: 4.0
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 6,
            touristSafetyScore: 42
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "high",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Benin": {
        overallSafetyIndex: 62.8,
        rank: 133,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 9.3,
            propertyCrimeRate: 55.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 42,
            democracyIndex: 5.9
        },
        personal: {
            womenSafetyScore: 60,
            lgbtqSafetyScore: 14,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Togo": {
        overallSafetyIndex: 58.5,
        rank: 134,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 12.5,
            homicideRate: 10.2,
            propertyCrimeRate: 65.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 30,
            democracyIndex: 3.4
        },
        personal: {
            womenSafetyScore: 54,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 58
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Guinea": {
        overallSafetyIndex: 45.8,
        rank: 135,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 8.9,
            propertyCrimeRate: 95.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 32.5,
            corruptionIndex: 25,
            democracyIndex: 2.8
        },
        personal: {
            womenSafetyScore: 38,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 40
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Ivory Coast": {
        overallSafetyIndex: 54.2,
        rank: 136,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 11.8,
            propertyCrimeRate: 78.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 36,
            democracyIndex: 4.7
        },
        personal: {
            womenSafetyScore: 50,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 54
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Burkina Faso": {
        overallSafetyIndex: 37.5,
        rank: 137,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 7.9,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 22.5,
            corruptionIndex: 40,
            democracyIndex: 3.5
        },
        personal: {
            womenSafetyScore: 32,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 28
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Liberia": {
        overallSafetyIndex: 48.5,
        rank: 138,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 19.5,
            homicideRate: 3.2,
            propertyCrimeRate: 88.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 28,
            democracyIndex: 5.3
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 46
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Sierra Leone": {
        overallSafetyIndex: 52.8,
        rank: 139,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 16.5,
            homicideRate: 1.7,
            propertyCrimeRate: 78.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 55.5,
            corruptionIndex: 34,
            democracyIndex: 5.7
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 14,
            touristSafetyScore: 52
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Eritrea": {
        overallSafetyIndex: 32.8,
        rank: 140,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 8.0,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 22.5,
            corruptionIndex: 21,
            democracyIndex: 1.4
        },
        personal: {
            womenSafetyScore: 24,
            lgbtqSafetyScore: 6,
            touristSafetyScore: 18
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 4,
            terrorismRisk: "medium",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Djibouti": {
        overallSafetyIndex: 53.5,
        rank: 141,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 7.9,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 30,
            democracyIndex: 2.8
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 54
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Somalia": {
        overallSafetyIndex: 22.5,
        rank: 142,
        safetyTier: "dangerous",
        crime: {
            violentCrimeRate: 48.5,
            homicideRate: 12.6,
            propertyCrimeRate: 165.5,
            pettyTheftRisk: "extreme"
        },
        political: {
            stabilityIndex: 3.5,
            corruptionIndex: 11,
            democracyIndex: 1.5
        },
        personal: {
            womenSafetyScore: 12,
            lgbtqSafetyScore: 3,
            touristSafetyScore: 6
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 3,
            terrorismRisk: "extreme",
            conflictZone: true
        },
        color: "#dc2626",
        status: "dangerous",
        lastUpdated: "2026-03-01"
    },

    "Gabon": {
        overallSafetyIndex: 61.5,
        rank: 143,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 13.5,
            homicideRate: 8.2,
            propertyCrimeRate: 68.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 31,
            democracyIndex: 3.9
        },
        personal: {
            womenSafetyScore: 58,
            lgbtqSafetyScore: 14,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Republic of Congo": {
        overallSafetyIndex: 49.5,
        rank: 144,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 21.5,
            homicideRate: 12.6,
            propertyCrimeRate: 92.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 19,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Republic of the Congo": {
        overallSafetyIndex: 49.5,
        rank: 144,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 21.5,
            homicideRate: 12.6,
            propertyCrimeRate: 92.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 19,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Congo": {
        overallSafetyIndex: 49.5,
        rank: 144,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 21.5,
            homicideRate: 12.6,
            propertyCrimeRate: 92.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 42.5,
            corruptionIndex: 19,
            democracyIndex: 2.9
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 10,
            touristSafetyScore: 44
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Equatorial Guinea": {
        overallSafetyIndex: 43.8,
        rank: 145,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 20.7,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 17,
            democracyIndex: 1.7
        },
        personal: {
            womenSafetyScore: 36,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 40
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Swaziland": {
        overallSafetyIndex: 54.8,
        rank: 146,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 19.5,
            homicideRate: 14.0,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 33,
            democracyIndex: 3.1
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Lesotho": {
        overallSafetyIndex: 48.2,
        rank: 147,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 28.5,
            homicideRate: 41.2,
            propertyCrimeRate: 112.5,
            pettyTheftRisk: "very-high"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 41,
            democracyIndex: 6.1
        },
        personal: {
            womenSafetyScore: 42,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 46
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Comoros": {
        overallSafetyIndex: 56.5,
        rank: 148,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 7.6,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 21,
            democracyIndex: 3.4
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 58
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 5,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Cape Verde": {
        overallSafetyIndex: 66.8,
        rank: 149,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 8.6,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 75.5,
            corruptionIndex: 58,
            democracyIndex: 7.8
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 70
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Sao Tome and Principe": {
        overallSafetyIndex: 67.5,
        rank: 150,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 4.9,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 72.5,
            corruptionIndex: 45,
            democracyIndex: 7.0
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 28,
            touristSafetyScore: 70
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Gambia": {
        overallSafetyIndex: 63.5,
        rank: 151,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 9.2,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 34,
            democracyIndex: 5.1
        },
        personal: {
            womenSafetyScore: 60,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 64
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Guinea-Bissau": {
        overallSafetyIndex: 41.5,
        rank: 152,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 22.5,
            homicideRate: 8.9,
            propertyCrimeRate: 95.5,
            pettyTheftRisk: "high"
        },
        political: {
            stabilityIndex: 28.5,
            corruptionIndex: 21,
            democracyIndex: 3.5
        },
        personal: {
            womenSafetyScore: 34,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 36
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Maldives": {
        overallSafetyIndex: 71.2,
        rank: 153,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 4.5,
            homicideRate: 2.5,
            propertyCrimeRate: 32.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 40,
            democracyIndex: 5.3
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 8,
            touristSafetyScore: 78
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Seychelles": {
        overallSafetyIndex: 74.5,
        rank: 154,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 6.5,
            homicideRate: 7.5,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 70,
            democracyIndex: 6.5
        },
        personal: {
            womenSafetyScore: 74,
            lgbtqSafetyScore: 38,
            touristSafetyScore: 78
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Brunei": {
        overallSafetyIndex: 79.5,
        rank: 155,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 2.8,
            homicideRate: 0.5,
            propertyCrimeRate: 22.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 85.5,
            corruptionIndex: 60,
            democracyIndex: 2.6
        },
        personal: {
            womenSafetyScore: 76,
            lgbtqSafetyScore: 5,
            touristSafetyScore: 84
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Timor-Leste": {
        overallSafetyIndex: 54.5,
        rank: 156,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 4.9,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 52.5,
            corruptionIndex: 36,
            democracyIndex: 6.4
        },
        personal: {
            womenSafetyScore: 52,
            lgbtqSafetyScore: 18,
            touristSafetyScore: 56
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 7,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Bhutan": {
        overallSafetyIndex: 72.5,
        rank: 157,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 4.5,
            homicideRate: 2.2,
            propertyCrimeRate: 32.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 78.5,
            corruptionIndex: 68,
            democracyIndex: 5.6
        },
        personal: {
            womenSafetyScore: 72,
            lgbtqSafetyScore: 22,
            touristSafetyScore: 78
        },
        risks: {
            naturalDisasterRisk: "high",
            earthquakeRisk: 7,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Belarus": {
        overallSafetyIndex: 63.8,
        rank: 158,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 2.4,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 48.5,
            corruptionIndex: 41,
            democracyIndex: 2.6
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 12,
            touristSafetyScore: 62
        },
        risks: {
            naturalDisasterRisk: "very-low",
            earthquakeRisk: 1,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Moldova": {
        overallSafetyIndex: 65.5,
        rank: 159,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 3.2,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 39,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 64,
            lgbtqSafetyScore: 38,
            touristSafetyScore: 66
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 3,
            terrorismRisk: "low",
            conflictZone: true
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Ukraine": {
        overallSafetyIndex: 35.8,
        rank: 160,
        safetyTier: "risky",
        crime: {
            violentCrimeRate: 14.5,
            homicideRate: 6.2,
            propertyCrimeRate: 72.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 12.5,
            corruptionIndex: 36,
            democracyIndex: 5.9
        },
        personal: {
            womenSafetyScore: 48,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 28
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 2,
            terrorismRisk: "medium",
            conflictZone: true
        },
        color: "#ef4444",
        status: "risky",
        lastUpdated: "2026-03-01"
    },

    "Bosnia and Herzegovina": {
        overallSafetyIndex: 69.5,
        rank: 161,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 1.4,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 35,
            democracyIndex: 5.2
        },
        personal: {
            womenSafetyScore: 68,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 70
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Montenegro": {
        overallSafetyIndex: 70.8,
        rank: 162,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 2.5,
            propertyCrimeRate: 45.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 45,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 70,
            lgbtqSafetyScore: 48,
            touristSafetyScore: 72
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "North Macedonia": {
        overallSafetyIndex: 68.5,
        rank: 163,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 9.5,
            homicideRate: 1.5,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 62.5,
            corruptionIndex: 39,
            democracyIndex: 6.0
        },
        personal: {
            womenSafetyScore: 67,
            lgbtqSafetyScore: 42,
            touristSafetyScore: 69
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 5,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Kosovo": {
        overallSafetyIndex: 67.2,
        rank: 164,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 10.5,
            homicideRate: 2.3,
            propertyCrimeRate: 58.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 58.5,
            corruptionIndex: 36,
            democracyIndex: 5.4
        },
        personal: {
            womenSafetyScore: 66,
            lgbtqSafetyScore: 32,
            touristSafetyScore: 68
        },
        risks: {
            naturalDisasterRisk: "low",
            earthquakeRisk: 4,
            terrorismRisk: "low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Hong Kong": {
        overallSafetyIndex: 82.5,
        rank: 166,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 2.8,
            homicideRate: 0.3,
            propertyCrimeRate: 25.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 76,
            democracyIndex: 5.5
        },
        personal: {
            womenSafetyScore: 84,
            lgbtqSafetyScore: 72,
            touristSafetyScore: 86
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Macau": {
        overallSafetyIndex: 84.8,
        rank: 167,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 1.5,
            homicideRate: 0.2,
            propertyCrimeRate: 18.5,
            pettyTheftRisk: "very-low"
        },
        political: {
            stabilityIndex: 75.5,
            corruptionIndex: 70,
            democracyIndex: 4.8
        },
        personal: {
            womenSafetyScore: 86,
            lgbtqSafetyScore: 65,
            touristSafetyScore: 88
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Puerto Rico": {
        overallSafetyIndex: 58.5,
        rank: 168,
        safetyTier: "moderate",
        crime: {
            violentCrimeRate: 18.5,
            homicideRate: 18.5,
            propertyCrimeRate: 85.5,
            pettyTheftRisk: "medium"
        },
        political: {
            stabilityIndex: 68.5,
            corruptionIndex: 48,
            democracyIndex: 7.5
        },
        personal: {
            womenSafetyScore: 62,
            lgbtqSafetyScore: 68,
            touristSafetyScore: 60
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 6,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#f59e0b",
        status: "moderate",
        lastUpdated: "2026-03-01"
    },

    "Guam": {
        overallSafetyIndex: 72.8,
        rank: 169,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 8.5,
            homicideRate: 2.5,
            propertyCrimeRate: 52.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 82.5,
            corruptionIndex: 65,
            democracyIndex: 8.0
        },
        personal: {
            womenSafetyScore: 74,
            lgbtqSafetyScore: 78,
            touristSafetyScore: 76
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 8,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Aruba": {
        overallSafetyIndex: 76.5,
        rank: 170,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 6.5,
            homicideRate: 3.2,
            propertyCrimeRate: 42.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 82.5,
            corruptionIndex: 68,
            democracyIndex: 7.8
        },
        personal: {
            womenSafetyScore: 78,
            lgbtqSafetyScore: 82,
            touristSafetyScore: 80
        },
        risks: {
            naturalDisasterRisk: "medium",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Cayman Islands": {
        overallSafetyIndex: 78.2,
        rank: 171,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 5.5,
            homicideRate: 7.7,
            propertyCrimeRate: 38.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 88.5,
            corruptionIndex: 72,
            democracyIndex: 8.2
        },
        personal: {
            womenSafetyScore: 80,
            lgbtqSafetyScore: 78,
            touristSafetyScore: 82
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 3,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    },

    "Bermuda": {
        overallSafetyIndex: 77.8,
        rank: 172,
        safetyTier: "safe",
        crime: {
            violentCrimeRate: 7.5,
            homicideRate: 7.9,
            propertyCrimeRate: 48.5,
            pettyTheftRisk: "low"
        },
        political: {
            stabilityIndex: 86.5,
            corruptionIndex: 70,
            democracyIndex: 8.5
        },
        personal: {
            womenSafetyScore: 79,
            lgbtqSafetyScore: 80,
            touristSafetyScore: 81
        },
        risks: {
            naturalDisasterRisk: "very-high",
            earthquakeRisk: 2,
            terrorismRisk: "very-low",
            conflictZone: false
        },
        color: "#22c55e",
        status: "safe",
        lastUpdated: "2026-03-01"
    }
};

// Safety Status Categories
const safetyStatus = {
    "very-safe": { range: "85-100", color: "#10b981", icon: "🟢", description: "Extremely safe, minimal risks" },
    "safe": { range: "70-84", color: "#22c55e", icon: "✅", description: "Generally safe with normal precautions" },
    "moderate": { range: "50-69", color: "#f59e0b", icon: "⚠️", description: "Exercise caution, some risks present" },
    "risky": { range: "35-49", color: "#ef4444", icon: "⚡", description: "Significant risks, extra precautions needed" },
    "dangerous": { range: "0-34", color: "#dc2626", icon: "🔴", description: "High danger, travel not recommended" }
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.safetyData = safetyData;
    window.safetyStatus = safetyStatus;
}
