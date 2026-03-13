// Global temperature data by country (2023 estimates)
// Data sources: NOAA, NASA GISS, Berkeley Earth, Climate.gov
// Temperature anomalies relative to 1951-1980 baseline
// All temperatures in °C

const temperatureData = {
    // Countries with highest warming (Arctic and Northern regions)
    "Russia": {
        avgTemp: -5.5,
        anomaly: 2.8,
        trend: "+0.08°C/yr",
        rank: 1,
        baseline: -8.3,
        seasonal: { winter: -15, spring: -2, summer: 12, autumn: -3 },
        color: "#e74c3c"
    },
    "Canada": {
        avgTemp: -5.4,
        anomaly: 2.5,
        trend: "+0.06°C/yr",
        rank: 2,
        baseline: -7.9,
        seasonal: { winter: -18, spring: 0, summer: 15, autumn: 2 },
        color: "#e74c3c"
    },
    "Finland": {
        avgTemp: 1.7,
        anomaly: 2.3,
        trend: "+0.07°C/yr",
        rank: 3,
        baseline: -0.6,
        seasonal: { winter: -8, spring: 2, summer: 16, autumn: 5 },
        color: "#e74c3c"
    },
    "Sweden": {
        avgTemp: 2.1,
        anomaly: 2.2,
        trend: "+0.06°C/yr",
        rank: 4,
        baseline: -0.1,
        seasonal: { winter: -6, spring: 3, summer: 15, autumn: 6 },
        color: "#e74c3c"
    },
    "Norway": {
        avgTemp: 1.5,
        anomaly: 2.1,
        trend: "+0.06°C/yr",
        rank: 5,
        baseline: -0.6,
        seasonal: { winter: -7, spring: 2, summer: 13, autumn: 5 },
        color: "#e74c3c"
    },
    "Kazakhstan": {
        avgTemp: 6.2,
        anomaly: 2.0,
        trend: "+0.05°C/yr",
        rank: 6,
        baseline: 4.2,
        seasonal: { winter: -8, spring: 8, summer: 23, autumn: 7 },
        color: "#e74c3c"
    },
    "Mongolia": {
        avgTemp: -0.7,
        anomaly: 1.9,
        trend: "+0.05°C/yr",
        rank: 7,
        baseline: -2.6,
        seasonal: { winter: -20, spring: 0, summer: 16, autumn: -2 },
        color: "#e74c3c"
    },
    "United States of America": {
        avgTemp: 11.2,
        anomaly: 1.7,
        trend: "+0.04°C/yr",
        rank: 8,
        baseline: 9.5,
        seasonal: { winter: 0, spring: 10, summer: 22, autumn: 12 },
        color: "#f39c12"
    },
    "United States": {
        avgTemp: 11.2,
        anomaly: 1.7,
        trend: "+0.04°C/yr",
        rank: 8,
        baseline: 9.5,
        seasonal: { winter: 0, spring: 10, summer: 22, autumn: 12 },
        color: "#f39c12"
    },

    // Europe (moderate to high warming)
    "Germany": {
        avgTemp: 9.3,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 10,
        baseline: 7.7,
        seasonal: { winter: 1, spring: 8, summer: 18, autumn: 9 },
        color: "#f39c12"
    },
    "Poland": {
        avgTemp: 8.5,
        anomaly: 1.8,
        trend: "+0.05°C/yr",
        rank: 9,
        baseline: 6.7,
        seasonal: { winter: -2, spring: 7, summer: 18, autumn: 8 },
        color: "#f39c12"
    },
    "France": {
        avgTemp: 12.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 11,
        baseline: 11.0,
        seasonal: { winter: 5, spring: 11, summer: 20, autumn: 12 },
        color: "#f39c12"
    },
    "United Kingdom": {
        avgTemp: 9.7,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 12,
        baseline: 8.3,
        seasonal: { winter: 4, spring: 8, summer: 16, autumn: 10 },
        color: "#f39c12"
    },
    "Spain": {
        avgTemp: 15.0,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 13,
        baseline: 13.4,
        seasonal: { winter: 8, spring: 14, summer: 25, autumn: 15 },
        color: "#f39c12"
    },
    "Italy": {
        avgTemp: 13.8,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 14,
        baseline: 12.3,
        seasonal: { winter: 6, spring: 13, summer: 24, autumn: 14 },
        color: "#f39c12"
    },
    "Greece": {
        avgTemp: 16.4,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 15,
        baseline: 14.9,
        seasonal: { winter: 9, spring: 15, summer: 27, autumn: 17 },
        color: "#f39c12"
    },
    "Austria": {
        avgTemp: 7.0,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 16,
        baseline: 5.4,
        seasonal: { winter: -2, spring: 6, summer: 18, autumn: 7 },
        color: "#f39c12"
    },
    "Switzerland": {
        avgTemp: 5.5,
        anomaly: 1.7,
        trend: "+0.05°C/yr",
        rank: 17,
        baseline: 3.8,
        seasonal: { winter: -2, spring: 5, summer: 15, autumn: 6 },
        color: "#f39c12"
    },
    "Netherlands": {
        avgTemp: 10.2,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 18,
        baseline: 8.8,
        seasonal: { winter: 3, spring: 9, summer: 17, autumn: 10 },
        color: "#f39c12"
    },
    "Belgium": {
        avgTemp: 10.5,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 19,
        baseline: 9.1,
        seasonal: { winter: 3, spring: 9, summer: 18, autumn: 11 },
        color: "#f39c12"
    },

    // Asia
    "China": {
        avgTemp: 8.1,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 20,
        baseline: 6.6,
        seasonal: { winter: -5, spring: 10, summer: 22, autumn: 10 },
        color: "#f39c12"
    },
    "Japan": {
        avgTemp: 11.1,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 21,
        baseline: 9.8,
        seasonal: { winter: 2, spring: 11, summer: 24, autumn: 14 },
        color: "#f39c12"
    },
    "South Korea": {
        avgTemp: 11.5,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 22,
        baseline: 10.1,
        seasonal: { winter: -2, spring: 11, summer: 24, autumn: 12 },
        color: "#f39c12"
    },
    "India": {
        avgTemp: 24.2,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 23,
        baseline: 23.0,
        seasonal: { winter: 15, spring: 27, summer: 32, autumn: 25 },
        color: "#f39c12"
    },
    "Pakistan": {
        avgTemp: 21.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 24,
        baseline: 20.2,
        seasonal: { winter: 12, spring: 24, summer: 32, autumn: 21 },
        color: "#f39c12"
    },
    "Bangladesh": {
        avgTemp: 25.8,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 25,
        baseline: 24.7,
        seasonal: { winter: 19, spring: 27, summer: 29, autumn: 26 },
        color: "#f39c12"
    },
    "Thailand": {
        avgTemp: 27.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 26,
        baseline: 26.0,
        seasonal: { winter: 25, spring: 29, summer: 29, autumn: 27 },
        color: "#f39c12"
    },
    "Vietnam": {
        avgTemp: 24.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 27,
        baseline: 23.5,
        seasonal: { winter: 20, spring: 25, summer: 28, autumn: 25 },
        color: "#f39c12"
    },
    "Indonesia": {
        avgTemp: 26.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 28,
        baseline: 25.6,
        seasonal: { winter: 26, spring: 27, summer: 27, autumn: 26 },
        color: "#f39c12"
    },
    "Philippines": {
        avgTemp: 26.8,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 29,
        baseline: 25.9,
        seasonal: { winter: 25, spring: 27, summer: 28, autumn: 27 },
        color: "#f39c12"
    },
    "Malaysia": {
        avgTemp: 26.7,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 30,
        baseline: 25.8,
        seasonal: { winter: 26, spring: 27, summer: 27, autumn: 27 },
        color: "#f39c12"
    },

    // Middle East and Central Asia (high warming)
    "Iran": {
        avgTemp: 17.0,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 31,
        baseline: 15.4,
        seasonal: { winter: 5, spring: 17, summer: 30, autumn: 16 },
        color: "#f39c12"
    },
    "Turkey": {
        avgTemp: 11.8,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 32,
        baseline: 10.3,
        seasonal: { winter: 2, spring: 11, summer: 23, autumn: 12 },
        color: "#f39c12"
    },
    "Saudi Arabia": {
        avgTemp: 26.0,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 33,
        baseline: 24.6,
        seasonal: { winter: 15, spring: 26, summer: 35, autumn: 25 },
        color: "#f39c12"
    },
    "United Arab Emirates": {
        avgTemp: 27.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 34,
        baseline: 26.2,
        seasonal: { winter: 18, spring: 28, summer: 36, autumn: 27 },
        color: "#f39c12"
    },
    "Iraq": {
        avgTemp: 22.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 35,
        baseline: 21.0,
        seasonal: { winter: 10, spring: 22, summer: 35, autumn: 22 },
        color: "#f39c12"
    },
    "Uzbekistan": {
        avgTemp: 13.8,
        anomaly: 1.7,
        trend: "+0.04°C/yr",
        rank: 36,
        baseline: 12.1,
        seasonal: { winter: -2, spring: 14, summer: 28, autumn: 13 },
        color: "#f39c12"
    },

    // Americas
    "Brazil": {
        avgTemp: 25.0,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 37,
        baseline: 23.9,
        seasonal: { winter: 21, spring: 25, summer: 28, autumn: 25 },
        color: "#f39c12"
    },
    "Mexico": {
        avgTemp: 19.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 38,
        baseline: 18.2,
        seasonal: { winter: 15, spring: 20, summer: 24, autumn: 19 },
        color: "#f39c12"
    },
    "Argentina": {
        avgTemp: 14.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 39,
        baseline: 13.3,
        seasonal: { winter: 7, spring: 15, summer: 22, autumn: 14 },
        color: "#f39c12"
    },
    "Chile": {
        avgTemp: 8.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 40,
        baseline: 7.3,
        seasonal: { winter: 3, spring: 9, summer: 14, autumn: 8 },
        color: "#f39c12"
    },
    "Colombia": {
        avgTemp: 24.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 41,
        baseline: 23.5,
        seasonal: { winter: 23, spring: 24, summer: 25, autumn: 24 },
        color: "#f39c12"
    },
    "Peru": {
        avgTemp: 19.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 42,
        baseline: 18.5,
        seasonal: { winter: 16, spring: 19, summer: 22, autumn: 20 },
        color: "#f39c12"
    },
    "Venezuela": {
        avgTemp: 26.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 43,
        baseline: 25.0,
        seasonal: { winter: 25, spring: 26, summer: 27, autumn: 26 },
        color: "#f39c12"
    },
    "Ecuador": {
        avgTemp: 21.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 44,
        baseline: 20.6,
        seasonal: { winter: 20, spring: 21, summer: 22, autumn: 21 },
        color: "#2ecc71"
    },

    // Africa (varied warming)
    "Egypt": {
        avgTemp: 22.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 45,
        baseline: 21.2,
        seasonal: { winter: 14, spring: 22, summer: 30, autumn: 23 },
        color: "#f39c12"
    },
    "South Africa": {
        avgTemp: 17.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 46,
        baseline: 15.8,
        seasonal: { winter: 10, spring: 17, summer: 24, autumn: 17 },
        color: "#f39c12"
    },
    "Nigeria": {
        avgTemp: 27.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 47,
        baseline: 26.0,
        seasonal: { winter: 25, spring: 28, summer: 28, autumn: 27 },
        color: "#f39c12"
    },
    "Kenya": {
        avgTemp: 24.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 48,
        baseline: 23.5,
        seasonal: { winter: 23, spring: 25, summer: 25, autumn: 24 },
        color: "#f39c12"
    },
    "Algeria": {
        avgTemp: 18.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 49,
        baseline: 17.2,
        seasonal: { winter: 10, spring: 18, summer: 28, autumn: 18 },
        color: "#f39c12"
    },
    "Morocco": {
        avgTemp: 17.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 50,
        baseline: 16.2,
        seasonal: { winter: 10, spring: 17, summer: 26, autumn: 17 },
        color: "#f39c12"
    },

    // Oceania
    "Australia": {
        avgTemp: 21.5,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 51,
        baseline: 20.1,
        seasonal: { winter: 12, spring: 19, summer: 28, autumn: 21 },
        color: "#f39c12"
    },
    "New Zealand": {
        avgTemp: 10.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 52,
        baseline: 9.3,
        seasonal: { winter: 5, spring: 10, summer: 16, autumn: 11 },
        color: "#f39c12"
    },

    // Additional European countries
    "Denmark": {
        avgTemp: 8.0,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 53,
        baseline: 6.5,
        seasonal: { winter: 1, spring: 7, summer: 16, autumn: 8 },
        color: "#f39c12"
    },
    "Ireland": {
        avgTemp: 9.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 54,
        baseline: 8.2,
        seasonal: { winter: 5, spring: 8, summer: 15, autumn: 10 },
        color: "#f39c12"
    },
    "Portugal": {
        avgTemp: 15.5,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 55,
        baseline: 14.1,
        seasonal: { winter: 9, spring: 15, summer: 23, autumn: 16 },
        color: "#f39c12"
    },
    "Czech Republic": {
        avgTemp: 8.5,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 56,
        baseline: 6.9,
        seasonal: { winter: -1, spring: 8, summer: 18, autumn: 8 },
        color: "#f39c12"
    },
    "Romania": {
        avgTemp: 9.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 57,
        baseline: 8.0,
        seasonal: { winter: -1, spring: 10, summer: 21, autumn: 10 },
        color: "#f39c12"
    },
    "Hungary": {
        avgTemp: 10.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 58,
        baseline: 9.0,
        seasonal: { winter: 0, spring: 11, summer: 21, autumn: 11 },
        color: "#f39c12"
    },
    "Bulgaria": {
        avgTemp: 11.5,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 59,
        baseline: 10.1,
        seasonal: { winter: 1, spring: 12, summer: 23, autumn: 12 },
        color: "#f39c12"
    },
    "Serbia": {
        avgTemp: 11.0,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 60,
        baseline: 9.5,
        seasonal: { winter: 0, spring: 12, summer: 22, autumn: 11 },
        color: "#f39c12"
    },

    // Additional Asian countries
    "Singapore": {
        avgTemp: 27.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 61,
        baseline: 26.6,
        seasonal: { winter: 26, spring: 28, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },
    "Myanmar": {
        avgTemp: 26.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 62,
        baseline: 25.0,
        seasonal: { winter: 22, spring: 27, summer: 29, autumn: 26 },
        color: "#f39c12"
    },
    "Cambodia": {
        avgTemp: 27.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 63,
        baseline: 26.5,
        seasonal: { winter: 25, spring: 28, summer: 29, autumn: 27 },
        color: "#f39c12"
    },
    "Laos": {
        avgTemp: 24.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 64,
        baseline: 23.0,
        seasonal: { winter: 19, spring: 25, summer: 28, autumn: 24 },
        color: "#f39c12"
    },

    // Countries with lower warming (typically ocean-influenced)
    "Iceland": {
        avgTemp: 1.8,
        anomaly: 1.9,
        trend: "+0.05°C/yr",
        rank: 65,
        baseline: -0.1,
        seasonal: { winter: -3, spring: 2, summer: 10, autumn: 3 },
        color: "#e74c3c"
    },
    "Greenland": {
        avgTemp: -9.0,
        anomaly: 3.0,
        trend: "+0.09°C/yr",
        rank: 66,
        baseline: -12.0,
        seasonal: { winter: -20, spring: -10, summer: 4, autumn: -8 },
        color: "#e74c3c"
    },

    // Additional Middle Eastern countries
    "Jordan": {
        avgTemp: 18.5,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 67,
        baseline: 17.1,
        seasonal: { winter: 8, spring: 18, summer: 29, autumn: 18 },
        color: "#f39c12"
    },
    "Lebanon": {
        avgTemp: 16.0,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 68,
        baseline: 14.7,
        seasonal: { winter: 10, spring: 16, summer: 24, autumn: 18 },
        color: "#f39c12"
    },
    "Israel": {
        avgTemp: 19.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 69,
        baseline: 18.2,
        seasonal: { winter: 12, spring: 19, summer: 27, autumn: 20 },
        color: "#f39c12"
    },

    // Central American countries
    "Guatemala": {
        avgTemp: 22.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 70,
        baseline: 21.0,
        seasonal: { winter: 20, spring: 22, summer: 23, autumn: 22 },
        color: "#f39c12"
    },
    "Honduras": {
        avgTemp: 23.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 71,
        baseline: 22.5,
        seasonal: { winter: 21, spring: 24, summer: 25, autumn: 23 },
        color: "#f39c12"
    },
    "Nicaragua": {
        avgTemp: 25.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 72,
        baseline: 24.5,
        seasonal: { winter: 24, spring: 26, summer: 27, autumn: 25 },
        color: "#f39c12"
    },
    "Costa Rica": {
        avgTemp: 24.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 73,
        baseline: 23.1,
        seasonal: { winter: 23, spring: 24, summer: 25, autumn: 24 },
        color: "#2ecc71"
    },
    "Panama": {
        avgTemp: 26.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 74,
        baseline: 25.6,
        seasonal: { winter: 25, spring: 27, summer: 27, autumn: 26 },
        color: "#2ecc71"
    },

    // Caribbean (generally lower warming due to ocean influence)
    "Cuba": {
        avgTemp: 25.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 75,
        baseline: 24.1,
        seasonal: { winter: 22, spring: 25, summer: 27, autumn: 26 },
        color: "#2ecc71"
    },
    "Jamaica": {
        avgTemp: 26.5,
        anomaly: 0.8,
        trend: "+0.02°C/yr",
        rank: 76,
        baseline: 25.7,
        seasonal: { winter: 25, spring: 26, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },

    // Additional African countries
    "Ethiopia": {
        avgTemp: 22.0,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 77,
        baseline: 20.9,
        seasonal: { winter: 19, spring: 22, summer: 24, autumn: 22 },
        color: "#f39c12"
    },
    "Tanzania": {
        avgTemp: 23.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 78,
        baseline: 22.5,
        seasonal: { winter: 22, spring: 24, summer: 25, autumn: 23 },
        color: "#f39c12"
    },
    "Uganda": {
        avgTemp: 23.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 79,
        baseline: 22.0,
        seasonal: { winter: 22, spring: 23, summer: 24, autumn: 23 },
        color: "#f39c12"
    },
    "Ghana": {
        avgTemp: 26.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 80,
        baseline: 25.5,
        seasonal: { winter: 25, spring: 27, summer: 27, autumn: 26 },
        color: "#f39c12"
    },

    // Additional Countries - Comprehensive Coverage

    // Central Asia & Caucasus
    "Afghanistan": {
        avgTemp: 12.5,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 81,
        baseline: 11.1,
        seasonal: { winter: -2, spring: 13, summer: 28, autumn: 11 },
        color: "#f39c12"
    },
    "Armenia": {
        avgTemp: 5.5,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 82,
        baseline: 3.9,
        seasonal: { winter: -5, spring: 6, summer: 20, autumn: 6 },
        color: "#f39c12"
    },
    "Azerbaijan": {
        avgTemp: 14.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 83,
        baseline: 13.0,
        seasonal: { winter: 3, spring: 14, summer: 27, autumn: 14 },
        color: "#f39c12"
    },
    "Georgia": {
        avgTemp: 5.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 84,
        baseline: 4.0,
        seasonal: { winter: -2, spring: 6, summer: 19, autumn: 6 },
        color: "#f39c12"
    },
    "Kyrgyzstan": {
        avgTemp: -1.0,
        anomaly: 1.8,
        trend: "+0.05°C/yr",
        rank: 85,
        baseline: -2.8,
        seasonal: { winter: -12, spring: -2, summer: 14, autumn: -1 },
        color: "#f39c12"
    },
    "Tajikistan": {
        avgTemp: 3.0,
        anomaly: 1.7,
        trend: "+0.04°C/yr",
        rank: 86,
        baseline: 1.3,
        seasonal: { winter: -8, spring: 4, summer: 18, autumn: 3 },
        color: "#f39c12"
    },
    "Turkmenistan": {
        avgTemp: 16.0,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 87,
        baseline: 14.4,
        seasonal: { winter: 2, spring: 16, summer: 32, autumn: 15 },
        color: "#f39c12"
    },

    // Eastern Europe
    "Albania": {
        avgTemp: 13.5,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 88,
        baseline: 12.1,
        seasonal: { winter: 5, spring: 13, summer: 24, autumn: 14 },
        color: "#f39c12"
    },
    "Belarus": {
        avgTemp: 7.0,
        anomaly: 1.7,
        trend: "+0.05°C/yr",
        rank: 89,
        baseline: 5.3,
        seasonal: { winter: -5, spring: 7, summer: 18, autumn: 7 },
        color: "#f39c12"
    },
    "Bosnia and Herzegovina": {
        avgTemp: 10.0,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 90,
        baseline: 8.5,
        seasonal: { winter: 0, spring: 10, summer: 22, autumn: 11 },
        color: "#f39c12"
    },
    "Croatia": {
        avgTemp: 11.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 91,
        baseline: 10.0,
        seasonal: { winter: 2, spring: 11, summer: 23, autumn: 12 },
        color: "#f39c12"
    },
    "Cyprus": {
        avgTemp: 19.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 92,
        baseline: 18.2,
        seasonal: { winter: 12, spring: 19, summer: 29, autumn: 21 },
        color: "#f39c12"
    },
    "Czechia": {
        avgTemp: 8.5,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 93,
        baseline: 6.9,
        seasonal: { winter: -1, spring: 8, summer: 18, autumn: 8 },
        color: "#f39c12"
    },
    "Estonia": {
        avgTemp: 5.5,
        anomaly: 1.8,
        trend: "+0.05°C/yr",
        rank: 94,
        baseline: 3.7,
        seasonal: { winter: -5, spring: 5, summer: 17, autumn: 6 },
        color: "#f39c12"
    },
    "Kosovo": {
        avgTemp: 9.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 95,
        baseline: 8.0,
        seasonal: { winter: -1, spring: 10, summer: 21, autumn: 10 },
        color: "#f39c12"
    },
    "Latvia": {
        avgTemp: 6.5,
        anomaly: 1.8,
        trend: "+0.05°C/yr",
        rank: 96,
        baseline: 4.7,
        seasonal: { winter: -4, spring: 6, summer: 17, autumn: 7 },
        color: "#f39c12"
    },
    "Lithuania": {
        avgTemp: 6.5,
        anomaly: 1.8,
        trend: "+0.05°C/yr",
        rank: 97,
        baseline: 4.7,
        seasonal: { winter: -4, spring: 6, summer: 17, autumn: 7 },
        color: "#f39c12"
    },
    "Luxembourg": {
        avgTemp: 9.0,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 98,
        baseline: 7.5,
        seasonal: { winter: 1, spring: 8, summer: 17, autumn: 9 },
        color: "#f39c12"
    },
    "Macedonia": {
        avgTemp: 10.5,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 99,
        baseline: 9.0,
        seasonal: { winter: 0, spring: 11, summer: 22, autumn: 11 },
        color: "#f39c12"
    },
    "Moldova": {
        avgTemp: 9.5,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 100,
        baseline: 7.9,
        seasonal: { winter: -2, spring: 10, summer: 21, autumn: 10 },
        color: "#f39c12"
    },
    "Montenegro": {
        avgTemp: 11.0,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 101,
        baseline: 9.5,
        seasonal: { winter: 2, spring: 11, summer: 22, autumn: 12 },
        color: "#f39c12"
    },
    "Republic of Serbia": {
        avgTemp: 11.0,
        anomaly: 1.5,
        trend: "+0.04°C/yr",
        rank: 102,
        baseline: 9.5,
        seasonal: { winter: 0, spring: 12, summer: 22, autumn: 11 },
        color: "#f39c12"
    },
    "Slovakia": {
        avgTemp: 8.5,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 103,
        baseline: 6.9,
        seasonal: { winter: -1, spring: 8, summer: 18, autumn: 8 },
        color: "#f39c12"
    },
    "Slovenia": {
        avgTemp: 9.0,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 104,
        baseline: 7.4,
        seasonal: { winter: 0, spring: 9, summer: 20, autumn: 9 },
        color: "#f39c12"
    },
    "Ukraine": {
        avgTemp: 8.5,
        anomaly: 1.7,
        trend: "+0.04°C/yr",
        rank: 105,
        baseline: 6.8,
        seasonal: { winter: -3, spring: 9, summer: 20, autumn: 8 },
        color: "#f39c12"
    },

    // Middle East
    "Libya": {
        avgTemp: 21.5,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 106,
        baseline: 20.1,
        seasonal: { winter: 12, spring: 21, summer: 32, autumn: 22 },
        color: "#f39c12"
    },
    "Palestine": {
        avgTemp: 18.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 107,
        baseline: 17.2,
        seasonal: { winter: 11, spring: 18, summer: 28, autumn: 19 },
        color: "#f39c12"
    },
    "Syria": {
        avgTemp: 17.5,
        anomaly: 1.4,
        trend: "+0.04°C/yr",
        rank: 108,
        baseline: 16.1,
        seasonal: { winter: 7, spring: 17, summer: 29, autumn: 17 },
        color: "#f39c12"
    },
    "Yemen": {
        avgTemp: 24.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 109,
        baseline: 22.8,
        seasonal: { winter: 18, spring: 24, summer: 30, autumn: 24 },
        color: "#f39c12"
    },
    "Oman": {
        avgTemp: 27.0,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 110,
        baseline: 25.7,
        seasonal: { winter: 20, spring: 28, summer: 35, autumn: 27 },
        color: "#f39c12"
    },
    "Qatar": {
        avgTemp: 28.0,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 111,
        baseline: 26.7,
        seasonal: { winter: 18, spring: 28, summer: 37, autumn: 28 },
        color: "#f39c12"
    },
    "Kuwait": {
        avgTemp: 26.0,
        anomaly: 1.4,
        trend: "+0.03°C/yr",
        rank: 112,
        baseline: 24.6,
        seasonal: { winter: 13, spring: 26, summer: 38, autumn: 26 },
        color: "#f39c12"
    },

    // Asia-Pacific
    "Bhutan": {
        avgTemp: 7.5,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 113,
        baseline: 5.9,
        seasonal: { winter: -2, spring: 8, summer: 18, autumn: 7 },
        color: "#f39c12"
    },
    "Brunei": {
        avgTemp: 27.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 114,
        baseline: 26.6,
        seasonal: { winter: 26, spring: 28, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },
    "East Timor": {
        avgTemp: 26.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 115,
        baseline: 25.1,
        seasonal: { winter: 25, spring: 26, summer: 27, autumn: 26 },
        color: "#2ecc71"
    },
    "Laos": {
        avgTemp: 24.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 116,
        baseline: 23.0,
        seasonal: { winter: 19, spring: 25, summer: 28, autumn: 24 },
        color: "#f39c12"
    },
    "Mongolia": {
        avgTemp: -0.7,
        anomaly: 1.9,
        trend: "+0.05°C/yr",
        rank: 117,
        baseline: -2.6,
        seasonal: { winter: -20, spring: 0, summer: 16, autumn: -2 },
        color: "#e74c3c"
    },
    "Nepal": {
        avgTemp: 8.0,
        anomaly: 1.6,
        trend: "+0.04°C/yr",
        rank: 118,
        baseline: 6.4,
        seasonal: { winter: 0, spring: 9, summer: 19, autumn: 8 },
        color: "#f39c12"
    },
    "North Korea": {
        avgTemp: 6.0,
        anomaly: 1.7,
        trend: "+0.04°C/yr",
        rank: 119,
        baseline: 4.3,
        seasonal: { winter: -8, spring: 7, summer: 22, autumn: 6 },
        color: "#f39c12"
    },
    "Papua New Guinea": {
        avgTemp: 25.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 120,
        baseline: 24.6,
        seasonal: { winter: 24, spring: 25, summer: 26, autumn: 25 },
        color: "#2ecc71"
    },
    "Solomon Islands": {
        avgTemp: 26.5,
        anomaly: 0.8,
        trend: "+0.02°C/yr",
        rank: 121,
        baseline: 25.7,
        seasonal: { winter: 25, spring: 26, summer: 27, autumn: 26 },
        color: "#2ecc71"
    },
    "Sri Lanka": {
        avgTemp: 27.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 122,
        baseline: 26.0,
        seasonal: { winter: 25, spring: 27, summer: 28, autumn: 27 },
        color: "#f39c12"
    },
    "Taiwan": {
        avgTemp: 23.0,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 123,
        baseline: 21.9,
        seasonal: { winter: 16, spring: 22, summer: 28, autumn: 24 },
        color: "#f39c12"
    },
    "Fiji": {
        avgTemp: 25.0,
        anomaly: 0.8,
        trend: "+0.02°C/yr",
        rank: 124,
        baseline: 24.2,
        seasonal: { winter: 23, spring: 25, summer: 26, autumn: 25 },
        color: "#2ecc71"
    },
    "Vanuatu": {
        avgTemp: 25.0,
        anomaly: 0.8,
        trend: "+0.02°C/yr",
        rank: 125,
        baseline: 24.2,
        seasonal: { winter: 23, spring: 25, summer: 27, autumn: 25 },
        color: "#2ecc71"
    },
    "New Caledonia": {
        avgTemp: 23.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 126,
        baseline: 22.1,
        seasonal: { winter: 19, spring: 22, summer: 26, autumn: 24 },
        color: "#2ecc71"
    },

    // Africa
    "Angola": {
        avgTemp: 22.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 127,
        baseline: 21.0,
        seasonal: { winter: 19, spring: 22, summer: 24, autumn: 22 },
        color: "#f39c12"
    },
    "Benin": {
        avgTemp: 27.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 128,
        baseline: 26.5,
        seasonal: { winter: 26, spring: 28, summer: 28, autumn: 27 },
        color: "#f39c12"
    },
    "Botswana": {
        avgTemp: 21.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 129,
        baseline: 19.8,
        seasonal: { winter: 13, spring: 22, summer: 27, autumn: 21 },
        color: "#f39c12"
    },
    "Burkina Faso": {
        avgTemp: 28.0,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 130,
        baseline: 26.9,
        seasonal: { winter: 25, spring: 30, summer: 30, autumn: 27 },
        color: "#f39c12"
    },
    "Burundi": {
        avgTemp: 20.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 131,
        baseline: 19.0,
        seasonal: { winter: 19, spring: 20, summer: 21, autumn: 20 },
        color: "#f39c12"
    },
    "Cameroon": {
        avgTemp: 24.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 132,
        baseline: 23.0,
        seasonal: { winter: 23, spring: 24, summer: 25, autumn: 24 },
        color: "#f39c12"
    },
    "Central African Republic": {
        avgTemp: 25.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 133,
        baseline: 24.0,
        seasonal: { winter: 24, spring: 25, summer: 26, autumn: 25 },
        color: "#f39c12"
    },
    "Chad": {
        avgTemp: 27.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 134,
        baseline: 26.3,
        seasonal: { winter: 23, spring: 30, summer: 32, autumn: 27 },
        color: "#f39c12"
    },
    "Republic of the Congo": {
        avgTemp: 25.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 135,
        baseline: 24.0,
        seasonal: { winter: 24, spring: 25, summer: 26, autumn: 25 },
        color: "#f39c12"
    },
    "Democratic Republic of the Congo": {
        avgTemp: 24.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 136,
        baseline: 23.0,
        seasonal: { winter: 23, spring: 24, summer: 25, autumn: 24 },
        color: "#f39c12"
    },
    "Djibouti": {
        avgTemp: 29.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 137,
        baseline: 27.8,
        seasonal: { winter: 25, spring: 29, summer: 34, autumn: 29 },
        color: "#f39c12"
    },
    "Equatorial Guinea": {
        avgTemp: 25.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 138,
        baseline: 24.1,
        seasonal: { winter: 24, spring: 25, summer: 26, autumn: 25 },
        color: "#2ecc71"
    },
    "Eritrea": {
        avgTemp: 27.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 139,
        baseline: 25.8,
        seasonal: { winter: 23, spring: 27, summer: 31, autumn: 27 },
        color: "#f39c12"
    },
    "Gabon": {
        avgTemp: 25.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 140,
        baseline: 24.6,
        seasonal: { winter: 24, spring: 25, summer: 26, autumn: 25 },
        color: "#2ecc71"
    },
    "Gambia": {
        avgTemp: 27.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 141,
        baseline: 26.5,
        seasonal: { winter: 24, spring: 28, summer: 29, autumn: 27 },
        color: "#f39c12"
    },
    "Guinea": {
        avgTemp: 26.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 142,
        baseline: 25.0,
        seasonal: { winter: 24, spring: 27, summer: 27, autumn: 26 },
        color: "#f39c12"
    },
    "Guinea-Bissau": {
        avgTemp: 27.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 143,
        baseline: 26.0,
        seasonal: { winter: 24, spring: 28, summer: 28, autumn: 27 },
        color: "#f39c12"
    },
    "Ivory Coast": {
        avgTemp: 26.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 144,
        baseline: 25.5,
        seasonal: { winter: 25, spring: 27, summer: 27, autumn: 26 },
        color: "#f39c12"
    },
    "Lesotho": {
        avgTemp: 11.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 145,
        baseline: 9.8,
        seasonal: { winter: 3, spring: 11, summer: 18, autumn: 11 },
        color: "#f39c12"
    },
    "Liberia": {
        avgTemp: 25.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 146,
        baseline: 24.5,
        seasonal: { winter: 24, spring: 26, summer: 26, autumn: 25 },
        color: "#f39c12"
    },
    "Madagascar": {
        avgTemp: 21.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 147,
        baseline: 20.5,
        seasonal: { winter: 18, spring: 21, summer: 25, autumn: 22 },
        color: "#f39c12"
    },
    "Malawi": {
        avgTemp: 22.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 148,
        baseline: 21.0,
        seasonal: { winter: 17, spring: 22, summer: 26, autumn: 23 },
        color: "#f39c12"
    },
    "Mali": {
        avgTemp: 28.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 149,
        baseline: 27.3,
        seasonal: { winter: 24, spring: 32, summer: 32, autumn: 28 },
        color: "#f39c12"
    },
    "Mauritania": {
        avgTemp: 28.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 150,
        baseline: 26.8,
        seasonal: { winter: 22, spring: 30, summer: 33, autumn: 28 },
        color: "#f39c12"
    },
    "Mozambique": {
        avgTemp: 24.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 151,
        baseline: 23.0,
        seasonal: { winter: 19, spring: 24, summer: 28, autumn: 25 },
        color: "#f39c12"
    },
    "Namibia": {
        avgTemp: 20.0,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 152,
        baseline: 18.8,
        seasonal: { winter: 13, spring: 20, summer: 26, autumn: 21 },
        color: "#f39c12"
    },
    "Niger": {
        avgTemp: 28.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 153,
        baseline: 27.3,
        seasonal: { winter: 23, spring: 33, summer: 33, autumn: 28 },
        color: "#f39c12"
    },
    "Rwanda": {
        avgTemp: 19.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 154,
        baseline: 18.0,
        seasonal: { winter: 18, spring: 19, summer: 20, autumn: 19 },
        color: "#f39c12"
    },
    "Senegal": {
        avgTemp: 28.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 155,
        baseline: 27.0,
        seasonal: { winter: 24, spring: 29, summer: 30, autumn: 28 },
        color: "#f39c12"
    },
    "Sierra Leone": {
        avgTemp: 26.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 156,
        baseline: 25.0,
        seasonal: { winter: 25, spring: 26, summer: 27, autumn: 26 },
        color: "#f39c12"
    },
    "Somalia": {
        avgTemp: 27.5,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 157,
        baseline: 26.4,
        seasonal: { winter: 25, spring: 28, summer: 30, autumn: 27 },
        color: "#f39c12"
    },
    "Somaliland": {
        avgTemp: 27.5,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 158,
        baseline: 26.4,
        seasonal: { winter: 25, spring: 28, summer: 30, autumn: 27 },
        color: "#f39c12"
    },
    "South Sudan": {
        avgTemp: 27.0,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 159,
        baseline: 25.9,
        seasonal: { winter: 25, spring: 28, summer: 29, autumn: 27 },
        color: "#f39c12"
    },
    "Sudan": {
        avgTemp: 27.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 160,
        baseline: 26.3,
        seasonal: { winter: 23, spring: 30, summer: 32, autumn: 28 },
        color: "#f39c12"
    },
    "Swaziland": {
        avgTemp: 17.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 161,
        baseline: 16.3,
        seasonal: { winter: 11, spring: 18, summer: 23, autumn: 18 },
        color: "#f39c12"
    },
    "United Republic of Tanzania": {
        avgTemp: 23.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 162,
        baseline: 22.5,
        seasonal: { winter: 22, spring: 24, summer: 25, autumn: 23 },
        color: "#f39c12"
    },
    "Togo": {
        avgTemp: 27.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 163,
        baseline: 26.0,
        seasonal: { winter: 25, spring: 28, summer: 28, autumn: 27 },
        color: "#f39c12"
    },
    "Tunisia": {
        avgTemp: 18.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 164,
        baseline: 17.2,
        seasonal: { winter: 11, spring: 18, summer: 28, autumn: 19 },
        color: "#f39c12"
    },
    "Zambia": {
        avgTemp: 20.0,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 165,
        baseline: 18.9,
        seasonal: { winter: 16, spring: 21, summer: 24, autumn: 20 },
        color: "#f39c12"
    },
    "Zimbabwe": {
        avgTemp: 19.5,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 166,
        baseline: 18.4,
        seasonal: { winter: 14, spring: 20, summer: 24, autumn: 20 },
        color: "#f39c12"
    },
    "Western Sahara": {
        avgTemp: 22.0,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 167,
        baseline: 20.7,
        seasonal: { winter: 15, spring: 21, summer: 28, autumn: 23 },
        color: "#f39c12"
    },

    // Americas
    "Belize": {
        avgTemp: 26.0,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 168,
        baseline: 25.0,
        seasonal: { winter: 23, spring: 26, summer: 28, autumn: 26 },
        color: "#f39c12"
    },
    "Bolivia": {
        avgTemp: 16.5,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 169,
        baseline: 15.4,
        seasonal: { winter: 13, spring: 17, summer: 20, autumn: 16 },
        color: "#f39c12"
    },
    "Dominican Republic": {
        avgTemp: 25.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 170,
        baseline: 24.6,
        seasonal: { winter: 23, spring: 25, summer: 27, autumn: 26 },
        color: "#2ecc71"
    },
    "El Salvador": {
        avgTemp: 24.5,
        anomaly: 1.0,
        trend: "+0.02°C/yr",
        rank: 171,
        baseline: 23.5,
        seasonal: { winter: 22, spring: 25, summer: 26, autumn: 24 },
        color: "#f39c12"
    },
    "Guyana": {
        avgTemp: 26.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 172,
        baseline: 25.6,
        seasonal: { winter: 26, spring: 27, summer: 27, autumn: 26 },
        color: "#2ecc71"
    },
    "Haiti": {
        avgTemp: 25.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 173,
        baseline: 24.6,
        seasonal: { winter: 23, spring: 25, summer: 28, autumn: 26 },
        color: "#2ecc71"
    },
    "Paraguay": {
        avgTemp: 22.5,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 174,
        baseline: 21.4,
        seasonal: { winter: 17, spring: 23, summer: 28, autumn: 22 },
        color: "#f39c12"
    },
    "Suriname": {
        avgTemp: 27.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 175,
        baseline: 26.1,
        seasonal: { winter: 26, spring: 27, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },
    "The Bahamas": {
        avgTemp: 25.5,
        anomaly: 0.8,
        trend: "+0.02°C/yr",
        rank: 176,
        baseline: 24.7,
        seasonal: { winter: 21, spring: 24, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },
    "Trinidad and Tobago": {
        avgTemp: 26.5,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 177,
        baseline: 25.6,
        seasonal: { winter: 25, spring: 27, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },
    "Uruguay": {
        avgTemp: 17.5,
        anomaly: 1.2,
        trend: "+0.03°C/yr",
        rank: 178,
        baseline: 16.3,
        seasonal: { winter: 11, spring: 17, summer: 24, autumn: 18 },
        color: "#f39c12"
    },

    // Territories and Special Cases
    "Puerto Rico": {
        avgTemp: 26.0,
        anomaly: 0.9,
        trend: "+0.02°C/yr",
        rank: 179,
        baseline: 25.1,
        seasonal: { winter: 23, spring: 25, summer: 28, autumn: 27 },
        color: "#2ecc71"
    },
    "Greenland": {
        avgTemp: -9.0,
        anomaly: 3.0,
        trend: "+0.09°C/yr",
        rank: 180,
        baseline: -12.0,
        seasonal: { winter: -20, spring: -10, summer: 4, autumn: -8 },
        color: "#e74c3c"
    },
    "Northern Cyprus": {
        avgTemp: 19.5,
        anomaly: 1.3,
        trend: "+0.03°C/yr",
        rank: 181,
        baseline: 18.2,
        seasonal: { winter: 12, spring: 19, summer: 29, autumn: 21 },
        color: "#f39c12"
    },
    "Falkland Islands": {
        avgTemp: 5.5,
        anomaly: 1.1,
        trend: "+0.03°C/yr",
        rank: 182,
        baseline: 4.4,
        seasonal: { winter: 2, spring: 5, summer: 9, autumn: 6 },
        color: "#f39c12"
    }
};

// Global temperature statistics
const globalTempStats = {
    globalAvgAnomaly: "+1.35°C",
    totalCountries: Object.keys(temperatureData).length,
    highestWarming: "Russia (+2.8°C)",
    lowestWarming: "Caribbean Islands (+0.8°C)",
    baseline: "1951-1980 average",
    year: 2023
};
