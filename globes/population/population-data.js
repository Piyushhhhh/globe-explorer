// Population and demographic data by country (2026 estimates)
// Data sources: UN World Population Prospects, World Bank, National Census Data
// Population in millions, density in people per km², growth rate in %
// Note: India became the world's most populous country in 2023

const populationData = {
    // Top 10 Most Populous Countries
    "India": {
        population: 1450.94,
        density: 470,
        growthRate: 0.78,
        urbanization: 36.4,
        medianAge: 28.4,
        lifeExpectancy: 71.2,
        fertilityRate: 1.98,
        rank: 1,
        trend: "growing",
        color: "#10b981"
    },

    "China": {
        population: 1419.32,
        density: 147,
        growthRate: -0.15,
        urbanization: 65.2,
        medianAge: 39.0,
        lifeExpectancy: 77.7,
        fertilityRate: 1.24,
        rank: 2,
        trend: "declining",
        color: "#ef4444"
    },

    "United States": {
        population: 343.42,
        density: 36,
        growthRate: 0.48,
        urbanization: 83.3,
        medianAge: 38.7,
        lifeExpectancy: 79.1,
        fertilityRate: 1.64,
        rank: 3,
        trend: "stable",
        color: "#3b82f6"
    },

    "United States of America": {
        population: 343.42,
        density: 36,
        growthRate: 0.48,
        urbanization: 83.3,
        medianAge: 38.7,
        lifeExpectancy: 79.1,
        fertilityRate: 1.64,
        rank: 3,
        trend: "stable",
        color: "#3b82f6"
    },

    "Indonesia": {
        population: 277.53,
        density: 145,
        growthRate: 0.74,
        urbanization: 57.3,
        medianAge: 30.2,
        lifeExpectancy: 71.7,
        fertilityRate: 2.15,
        rank: 4,
        trend: "growing",
        color: "#10b981"
    },

    "Pakistan": {
        population: 240.49,
        density: 312,
        growthRate: 1.91,
        urbanization: 37.7,
        medianAge: 22.8,
        lifeExpectancy: 67.3,
        fertilityRate: 3.35,
        rank: 5,
        trend: "growing",
        color: "#10b981"
    },

    "Brazil": {
        population: 216.42,
        density: 25,
        growthRate: 0.52,
        urbanization: 87.6,
        medianAge: 33.2,
        lifeExpectancy: 75.9,
        fertilityRate: 1.64,
        rank: 6,
        trend: "stable",
        color: "#3b82f6"
    },

    "Nigeria": {
        population: 233.92,
        density: 254,
        growthRate: 2.38,
        urbanization: 53.5,
        medianAge: 18.8,
        lifeExpectancy: 55.2,
        fertilityRate: 5.09,
        rank: 7,
        trend: "growing",
        color: "#10b981"
    },

    "Bangladesh": {
        population: 172.95,
        density: 1265,
        growthRate: 0.91,
        urbanization: 39.7,
        medianAge: 27.6,
        lifeExpectancy: 72.8,
        fertilityRate: 1.97,
        rank: 8,
        trend: "growing",
        color: "#10b981"
    },

    "Russia": {
        population: 144.44,
        density: 9,
        growthRate: -0.19,
        urbanization: 74.8,
        medianAge: 39.6,
        lifeExpectancy: 72.6,
        fertilityRate: 1.51,
        rank: 9,
        trend: "declining",
        color: "#ef4444"
    },

    "Mexico": {
        population: 128.46,
        density: 65,
        growthRate: 0.75,
        urbanization: 81.0,
        medianAge: 29.3,
        lifeExpectancy: 75.1,
        fertilityRate: 1.82,
        rank: 10,
        trend: "stable",
        color: "#3b82f6"
    },

    // 11-30
    "Japan": {
        population: 123.29,
        density: 338,
        growthRate: -0.53,
        urbanization: 91.8,
        medianAge: 48.7,
        lifeExpectancy: 84.8,
        fertilityRate: 1.30,
        rank: 11,
        trend: "declining",
        color: "#ef4444"
    },

    "Ethiopia": {
        population: 126.53,
        density: 115,
        growthRate: 2.46,
        urbanization: 22.7,
        medianAge: 19.5,
        lifeExpectancy: 67.8,
        fertilityRate: 4.03,
        rank: 12,
        trend: "growing",
        color: "#10b981"
    },

    "Philippines": {
        population: 117.34,
        density: 391,
        growthRate: 1.54,
        urbanization: 47.9,
        medianAge: 25.7,
        lifeExpectancy: 71.1,
        fertilityRate: 2.52,
        rank: 13,
        trend: "growing",
        color: "#10b981"
    },

    "Egypt": {
        population: 112.72,
        density: 113,
        growthRate: 1.56,
        urbanization: 43.1,
        medianAge: 24.6,
        lifeExpectancy: 72.0,
        fertilityRate: 2.76,
        rank: 14,
        trend: "growing",
        color: "#10b981"
    },

    "Vietnam": {
        population: 98.86,
        density: 314,
        growthRate: 0.70,
        urbanization: 38.8,
        medianAge: 32.5,
        lifeExpectancy: 75.4,
        fertilityRate: 1.94,
        rank: 15,
        trend: "stable",
        color: "#3b82f6"
    },

    "Democratic Republic of the Congo": {
        population: 102.26,
        density: 45,
        growthRate: 3.10,
        urbanization: 46.4,
        medianAge: 16.7,
        lifeExpectancy: 60.7,
        fertilityRate: 5.56,
        rank: 16,
        trend: "growing",
        color: "#10b981"
    },

    "Iran": {
        population: 89.17,
        density: 54,
        growthRate: 0.70,
        urbanization: 76.8,
        medianAge: 32.0,
        lifeExpectancy: 76.7,
        fertilityRate: 1.70,
        rank: 17,
        trend: "stable",
        color: "#3b82f6"
    },

    "Turkey": {
        population: 85.82,
        density: 110,
        growthRate: 0.83,
        urbanization: 76.6,
        medianAge: 32.2,
        lifeExpectancy: 77.7,
        fertilityRate: 1.88,
        rank: 18,
        trend: "stable",
        color: "#3b82f6"
    },

    "Germany": {
        population: 83.29,
        density: 233,
        growthRate: -0.14,
        urbanization: 77.8,
        medianAge: 47.8,
        lifeExpectancy: 81.7,
        fertilityRate: 1.53,
        rank: 19,
        trend: "declining",
        color: "#ef4444"
    },

    "Thailand": {
        population: 71.80,
        density: 140,
        growthRate: 0.15,
        urbanization: 52.9,
        medianAge: 40.1,
        lifeExpectancy: 77.7,
        fertilityRate: 1.36,
        rank: 20,
        trend: "stable",
        color: "#3b82f6"
    },

    "United Kingdom": {
        population: 67.74,
        density: 280,
        growthRate: 0.53,
        urbanization: 84.2,
        medianAge: 40.6,
        lifeExpectancy: 81.3,
        fertilityRate: 1.56,
        rank: 21,
        trend: "stable",
        color: "#3b82f6"
    },

    "France": {
        population: 64.76,
        density: 119,
        growthRate: 0.22,
        urbanization: 81.5,
        medianAge: 41.7,
        lifeExpectancy: 82.5,
        fertilityRate: 1.79,
        rank: 22,
        trend: "stable",
        color: "#3b82f6"
    },

    "Italy": {
        population: 58.76,
        density: 195,
        growthRate: -0.28,
        urbanization: 71.7,
        medianAge: 47.9,
        lifeExpectancy: 83.6,
        fertilityRate: 1.24,
        rank: 23,
        trend: "declining",
        color: "#ef4444"
    },

    "Tanzania": {
        population: 67.44,
        density: 76,
        growthRate: 2.88,
        urbanization: 36.5,
        medianAge: 18.2,
        lifeExpectancy: 66.2,
        fertilityRate: 4.58,
        rank: 24,
        trend: "growing",
        color: "#10b981"
    },

    "South Africa": {
        population: 60.41,
        density: 49,
        growthRate: 1.10,
        urbanization: 68.1,
        medianAge: 28.1,
        lifeExpectancy: 64.1,
        fertilityRate: 2.27,
        rank: 25,
        trend: "growing",
        color: "#10b981"
    },

    "South Korea": {
        population: 51.71,
        density: 527,
        growthRate: -0.09,
        urbanization: 81.4,
        medianAge: 44.5,
        lifeExpectancy: 83.7,
        fertilityRate: 0.81,
        rank: 26,
        trend: "declining",
        color: "#ef4444"
    },

    "Kenya": {
        population: 55.10,
        density: 97,
        growthRate: 2.01,
        urbanization: 28.9,
        medianAge: 20.1,
        lifeExpectancy: 66.7,
        fertilityRate: 3.29,
        rank: 27,
        trend: "growing",
        color: "#10b981"
    },

    "Myanmar": {
        population: 54.58,
        density: 83,
        growthRate: 0.74,
        urbanization: 31.7,
        medianAge: 29.2,
        lifeExpectancy: 67.9,
        fertilityRate: 2.09,
        rank: 28,
        trend: "stable",
        color: "#3b82f6"
    },

    "Colombia": {
        population: 52.09,
        density: 46,
        growthRate: 0.74,
        urbanization: 81.9,
        medianAge: 31.2,
        lifeExpectancy: 77.6,
        fertilityRate: 1.71,
        rank: 29,
        trend: "stable",
        color: "#3b82f6"
    },

    "Spain": {
        population: 47.42,
        density: 94,
        growthRate: -0.07,
        urbanization: 81.3,
        medianAge: 44.9,
        lifeExpectancy: 83.7,
        fertilityRate: 1.19,
        rank: 30,
        trend: "declining",
        color: "#ef4444"
    },

    // Additional important countries
    "Argentina": {
        population: 45.81,
        density: 17,
        growthRate: 0.83,
        urbanization: 92.3,
        medianAge: 32.0,
        lifeExpectancy: 76.8,
        fertilityRate: 1.89,
        rank: 31,
        trend: "stable",
        color: "#3b82f6"
    },

    "Algeria": {
        population: 45.61,
        density: 19,
        growthRate: 1.85,
        urbanization: 74.9,
        medianAge: 29.1,
        lifeExpectancy: 76.9,
        fertilityRate: 2.90,
        rank: 32,
        trend: "growing",
        color: "#10b981"
    },

    "Sudan": {
        population: 48.11,
        density: 26,
        growthRate: 2.37,
        urbanization: 35.6,
        medianAge: 19.7,
        lifeExpectancy: 65.1,
        fertilityRate: 4.43,
        rank: 33,
        trend: "growing",
        color: "#10b981"
    },

    "Ukraine": {
        population: 36.74,
        density: 61,
        growthRate: -6.60,
        urbanization: 69.9,
        medianAge: 41.2,
        lifeExpectancy: 71.6,
        fertilityRate: 1.22,
        rank: 34,
        trend: "declining",
        color: "#ef4444"
    },

    "Uganda": {
        population: 48.58,
        density: 228,
        growthRate: 2.87,
        urbanization: 26.2,
        medianAge: 16.7,
        lifeExpectancy: 63.4,
        fertilityRate: 4.74,
        rank: 35,
        trend: "growing",
        color: "#10b981"
    },

    "Canada": {
        population: 39.74,
        density: 4,
        growthRate: 2.70,
        urbanization: 81.9,
        medianAge: 41.8,
        lifeExpectancy: 82.7,
        fertilityRate: 1.43,
        rank: 36,
        trend: "growing",
        color: "#10b981"
    },

    "Poland": {
        population: 37.66,
        density: 121,
        growthRate: -0.58,
        urbanization: 60.0,
        medianAge: 41.9,
        lifeExpectancy: 77.9,
        fertilityRate: 1.33,
        rank: 37,
        trend: "declining",
        color: "#ef4444"
    },

    "Morocco": {
        population: 37.84,
        density: 85,
        growthRate: 0.99,
        urbanization: 64.7,
        medianAge: 29.9,
        lifeExpectancy: 76.9,
        fertilityRate: 2.31,
        rank: 38,
        trend: "stable",
        color: "#3b82f6"
    },

    "Saudi Arabia": {
        population: 36.95,
        density: 17,
        growthRate: 1.48,
        urbanization: 84.7,
        medianAge: 31.8,
        lifeExpectancy: 75.5,
        fertilityRate: 2.27,
        rank: 39,
        trend: "growing",
        color: "#10b981"
    },

    "Uzbekistan": {
        population: 35.16,
        density: 79,
        growthRate: 1.48,
        urbanization: 50.4,
        medianAge: 28.3,
        lifeExpectancy: 71.7,
        fertilityRate: 2.76,
        rank: 40,
        trend: "growing",
        color: "#10b981"
    },

    "Malaysia": {
        population: 34.31,
        density: 104,
        growthRate: 1.12,
        urbanization: 78.3,
        medianAge: 30.3,
        lifeExpectancy: 76.2,
        fertilityRate: 1.78,
        rank: 41,
        trend: "stable",
        color: "#3b82f6"
    },

    "Afghanistan": {
        population: 42.24,
        density: 65,
        growthRate: 2.33,
        urbanization: 26.3,
        medianAge: 18.9,
        lifeExpectancy: 64.8,
        fertilityRate: 4.32,
        rank: 42,
        trend: "growing",
        color: "#10b981"
    },

    "Venezuela": {
        population: 28.84,
        density: 32,
        growthRate: 1.24,
        urbanization: 88.4,
        medianAge: 30.0,
        lifeExpectancy: 72.1,
        fertilityRate: 2.20,
        rank: 43,
        trend: "stable",
        color: "#3b82f6"
    },

    "Peru": {
        population: 34.35,
        density: 27,
        growthRate: 1.42,
        urbanization: 78.9,
        medianAge: 31.0,
        lifeExpectancy: 77.0,
        fertilityRate: 2.12,
        rank: 44,
        trend: "stable",
        color: "#3b82f6"
    },

    "Angola": {
        population: 36.68,
        density: 29,
        growthRate: 3.27,
        urbanization: 67.7,
        medianAge: 16.8,
        lifeExpectancy: 61.6,
        fertilityRate: 5.25,
        rank: 45,
        trend: "growing",
        color: "#10b981"
    },

    "Ghana": {
        population: 34.12,
        density: 143,
        growthRate: 2.13,
        urbanization: 58.6,
        medianAge: 21.4,
        lifeExpectancy: 64.2,
        fertilityRate: 3.65,
        rank: 46,
        trend: "growing",
        color: "#10b981"
    },

    "Mozambique": {
        population: 33.90,
        density: 43,
        growthRate: 2.84,
        urbanization: 38.0,
        medianAge: 17.3,
        lifeExpectancy: 60.2,
        fertilityRate: 4.65,
        rank: 47,
        trend: "growing",
        color: "#10b981"
    },

    "Madagascar": {
        population: 30.33,
        density: 52,
        growthRate: 2.39,
        urbanization: 39.9,
        medianAge: 20.3,
        lifeExpectancy: 67.0,
        fertilityRate: 3.88,
        rank: 48,
        trend: "growing",
        color: "#10b981"
    },

    "Australia": {
        population: 26.64,
        density: 3,
        growthRate: 1.31,
        urbanization: 86.6,
        medianAge: 37.5,
        lifeExpectancy: 83.9,
        fertilityRate: 1.58,
        rank: 49,
        trend: "stable",
        color: "#3b82f6"
    },

    "Cameroon": {
        population: 28.65,
        density: 60,
        growthRate: 2.78,
        urbanization: 58.3,
        medianAge: 18.7,
        lifeExpectancy: 60.3,
        fertilityRate: 4.48,
        rank: 50,
        trend: "growing",
        color: "#10b981"
    }
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.populationData = populationData;
}
