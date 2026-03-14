// Cost of Living Data by Country (2024-2026)
// Data includes: housing, food, transport, utilities, healthcare, entertainment costs
// Sources: Numbeo, World Bank PPP, OECD, UBS Prices & Earnings
// Index: 0-100 where 100 = most expensive (Switzerland/Monaco)

const costData = {
    // VERY AFFORDABLE (Index 20-35) - Digital Nomad Paradises
    "India": {
        overallIndex: 22.5,
        rank: 168,
        monthlyBudget: {
            single: 600,
            couple: 950,
            family: 1500
        },
        breakdown: {
            housing: { rentOneBR: 200, rentThreeBR: 400, buyPricePerSqM: 1200 },
            food: { groceriesMonthly: 120, mealInexpensive: 2.5, mealMidRange: 12, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 12, taxiPerKm: 0.25, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 35, internetMbps: 80 },
            healthcare: { doctorVisit: 15, insuranceMonthly: 40 },
            entertainment: { gymMembership: 20, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "INR",
        exchangeRate: 83.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 168,
        lastUpdated: "2026-03-01"
    },

    "Vietnam": {
        overallIndex: 30.2,
        rank: 155,
        monthlyBudget: {
            single: 800,
            couple: 1350,
            family: 2100
        },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 600, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 180, mealInexpensive: 2, mealMidRange: 10, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.40, gasolinePerLiter: 1.00 },
            utilities: { basicMonthly: 55, internetMbps: 120 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 60 },
            entertainment: { gymMembership: 30, cinemaTicket: 4.5, beerBar: 1.5 }
        },
        currency: "VND",
        exchangeRate: 24500,
        color: "#10b981",
        status: "very-affordable",
        rank: 155,
        lastUpdated: "2026-03-01"
    },

    "Thailand": {
        overallIndex: 34.8,
        rank: 142,
        monthlyBudget: {
            single: 1200,
            couple: 2100,
            family: 3400
        },
        breakdown: {
            housing: { rentOneBR: 350, rentThreeBR: 750, buyPricePerSqM: 3200 },
            food: { groceriesMonthly: 250, mealInexpensive: 3.5, mealMidRange: 20, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.60, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 85, internetMbps: 180 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 35, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "THB",
        exchangeRate: 35.5,
        color: "#10b981",
        status: "very-affordable",
        rank: 142,
        lastUpdated: "2026-03-01"
    },

    "Indonesia": {
        overallIndex: 29.5,
        rank: 158,
        monthlyBudget: {
            single: 750,
            couple: 1300,
            family: 2000
        },
        breakdown: {
            housing: { rentOneBR: 280, rentThreeBR: 550, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 200, mealInexpensive: 2.5, mealMidRange: 12, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 18, taxiPerKm: 0.35, gasolinePerLiter: 0.75 },
            utilities: { basicMonthly: 65, internetMbps: 95 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 55 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "IDR",
        exchangeRate: 15750,
        color: "#10b981",
        status: "very-affordable",
        rank: 158,
        lastUpdated: "2026-03-01"
    },

    "Mexico": {
        overallIndex: 35.2,
        rank: 140,
        monthlyBudget: {
            single: 1100,
            couple: 1900,
            family: 3100
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2800 },
            food: { groceriesMonthly: 230, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 20, taxiPerKm: 0.50, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 70, internetMbps: 110 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 90 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "MXN",
        exchangeRate: 17.5,
        color: "#10b981",
        status: "very-affordable",
        rank: 140,
        lastUpdated: "2026-03-01"
    },

    "Colombia": {
        overallIndex: 31.8,
        rank: 152,
        monthlyBudget: {
            single: 850,
            couple: 1450,
            family: 2300
        },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 620, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 210, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 22, taxiPerKm: 0.45, gasolinePerLiter: 0.90 },
            utilities: { basicMonthly: 60, internetMbps: 100 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "COP",
        exchangeRate: 4200,
        color: "#10b981",
        status: "very-affordable",
        rank: 152,
        lastUpdated: "2026-03-01"
    },

    "Philippines": {
        overallIndex: 32.5,
        rank: 150,
        monthlyBudget: {
            single: 900,
            couple: 1550,
            family: 2500
        },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 600, buyPricePerSqM: 2600 },
            food: { groceriesMonthly: 220, mealInexpensive: 3, mealMidRange: 14, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.40, gasolinePerLiter: 1.15 },
            utilities: { basicMonthly: 90, internetMbps: 85 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 65 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 1.8 }
        },
        currency: "PHP",
        exchangeRate: 56.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 150,
        lastUpdated: "2026-03-01"
    },

    // AFFORDABLE (Index 35-50) - Good Value
    "Poland": {
        overallIndex: 42.5,
        rank: 118,
        monthlyBudget: {
            single: 1400,
            couple: 2400,
            family: 3800
        },
        breakdown: {
            housing: { rentOneBR: 550, rentThreeBR: 900, buyPricePerSqM: 3500 },
            food: { groceriesMonthly: 280, mealInexpensive: 7, mealMidRange: 25, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 28, taxiPerKm: 0.70, gasolinePerLiter: 1.45 },
            utilities: { basicMonthly: 180, internetMbps: 150 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 100 },
            entertainment: { gymMembership: 35, cinemaTicket: 8, beerBar: 3.5 }
        },
        currency: "PLN",
        exchangeRate: 4.0,
        color: "#22c55e",
        status: "affordable",
        rank: 118,
        lastUpdated: "2026-03-01"
    },

    "Portugal": {
        overallIndex: 48.2,
        rank: 95,
        monthlyBudget: {
            single: 1800,
            couple: 3000,
            family: 4600
        },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1300, buyPricePerSqM: 4200 },
            food: { groceriesMonthly: 320, mealInexpensive: 10, mealMidRange: 30, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 40, taxiPerKm: 0.90, gasolinePerLiter: 1.80 },
            utilities: { basicMonthly: 110, internetMbps: 200 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 120 },
            entertainment: { gymMembership: 40, cinemaTicket: 9, beerBar: 3 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#22c55e",
        status: "affordable",
        rank: 95,
        lastUpdated: "2026-03-01"
    },

    "Spain": {
        overallIndex: 52.8,
        rank: 82,
        monthlyBudget: {
            single: 2100,
            couple: 3500,
            family: 5200
        },
        breakdown: {
            housing: { rentOneBR: 900, rentThreeBR: 1500, buyPricePerSqM: 4800 },
            food: { groceriesMonthly: 350, mealInexpensive: 12, mealMidRange: 35, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 55, taxiPerKm: 1.10, gasolinePerLiter: 1.70 },
            utilities: { basicMonthly: 140, internetMbps: 220 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 140 },
            entertainment: { gymMembership: 45, cinemaTicket: 10, beerBar: 3.5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#22c55e",
        status: "affordable",
        rank: 82,
        lastUpdated: "2026-03-01"
    },

    "Greece": {
        overallIndex: 47.5,
        rank: 98,
        monthlyBudget: {
            single: 1650,
            couple: 2800,
            family: 4300
        },
        breakdown: {
            housing: { rentOneBR: 550, rentThreeBR: 950, buyPricePerSqM: 3200 },
            food: { groceriesMonthly: 300, mealInexpensive: 12, mealMidRange: 30, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 30, taxiPerKm: 1.20, gasolinePerLiter: 1.95 },
            utilities: { basicMonthly: 130, internetMbps: 180 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 110 },
            entertainment: { gymMembership: 38, cinemaTicket: 9, beerBar: 4 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#22c55e",
        status: "affordable",
        rank: 98,
        lastUpdated: "2026-03-01"
    },

    "Turkey": {
        overallIndex: 38.2,
        rank: 132,
        monthlyBudget: {
            single: 1250,
            couple: 2100,
            family: 3400
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 280, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 15, taxiPerKm: 0.50, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 95, internetMbps: 140 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 80 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 3 }
        },
        currency: "TRY",
        exchangeRate: 32.5,
        color: "#22c55e",
        status: "affordable",
        rank: 132,
        lastUpdated: "2026-03-01"
    },

    "Czech Republic": {
        overallIndex: 48.8,
        rank: 92,
        monthlyBudget: {
            single: 1850,
            couple: 3100,
            family: 4700
        },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1200, buyPricePerSqM: 4000 },
            food: { groceriesMonthly: 320, mealInexpensive: 8, mealMidRange: 28, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 25, taxiPerKm: 0.80, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 220, internetMbps: 180 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 110 },
            entertainment: { gymMembership: 38, cinemaTicket: 9, beerBar: 2.5 }
        },
        currency: "CZK",
        exchangeRate: 23.0,
        color: "#22c55e",
        status: "affordable",
        rank: 92,
        lastUpdated: "2026-03-01"
    },

    // MODERATE (Index 50-70) - Developed Nations
    "Italy": {
        overallIndex: 58.2,
        rank: 68,
        monthlyBudget: {
            single: 2500,
            couple: 4200,
            family: 6200
        },
        breakdown: {
            housing: { rentOneBR: 1100, rentThreeBR: 1900, buyPricePerSqM: 5500 },
            food: { groceriesMonthly: 400, mealInexpensive: 15, mealMidRange: 40, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 35, taxiPerKm: 1.50, gasolinePerLiter: 1.85 },
            utilities: { basicMonthly: 180, internetMbps: 200 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 160 },
            entertainment: { gymMembership: 50, cinemaTicket: 11, beerBar: 5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#fbbf24",
        status: "moderate",
        rank: 68,
        lastUpdated: "2026-03-01"
    },

    "France": {
        overallIndex: 62.5,
        rank: 58,
        monthlyBudget: {
            single: 2800,
            couple: 4700,
            family: 6900
        },
        breakdown: {
            housing: { rentOneBR: 1200, rentThreeBR: 2100, buyPricePerSqM: 6200 },
            food: { groceriesMonthly: 450, mealInexpensive: 16, mealMidRange: 45, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 75, taxiPerKm: 1.70, gasolinePerLiter: 1.90 },
            utilities: { basicMonthly: 170, internetMbps: 230 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 180 },
            entertainment: { gymMembership: 55, cinemaTicket: 12, beerBar: 6 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#fbbf24",
        status: "moderate",
        rank: 58,
        lastUpdated: "2026-03-01"
    },

    "Germany": {
        overallIndex: 61.8,
        rank: 60,
        monthlyBudget: {
            single: 2750,
            couple: 4600,
            family: 6800
        },
        breakdown: {
            housing: { rentOneBR: 1150, rentThreeBR: 2000, buyPricePerSqM: 5800 },
            food: { groceriesMonthly: 420, mealInexpensive: 13, mealMidRange: 42, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 70, taxiPerKm: 2.00, gasolinePerLiter: 1.95 },
            utilities: { basicMonthly: 280, internetMbps: 250 },
            healthcare: { doctorVisit: 90, insuranceMonthly: 200 },
            entertainment: { gymMembership: 52, cinemaTicket: 13, beerBar: 4.5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#fbbf24",
        status: "moderate",
        rank: 60,
        lastUpdated: "2026-03-01"
    },

    "Japan": {
        overallIndex: 59.5,
        rank: 65,
        monthlyBudget: {
            single: 2600,
            couple: 4400,
            family: 6500
        },
        breakdown: {
            housing: { rentOneBR: 900, rentThreeBR: 1600, buyPricePerSqM: 7500 },
            food: { groceriesMonthly: 480, mealInexpensive: 8, mealMidRange: 35, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 65, taxiPerKm: 1.20, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 180, internetMbps: 280 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 150 },
            entertainment: { gymMembership: 70, cinemaTicket: 18, beerBar: 5 }
        },
        currency: "JPY",
        exchangeRate: 150.0,
        color: "#fbbf24",
        status: "moderate",
        rank: 65,
        lastUpdated: "2026-03-01"
    },

    "South Korea": {
        overallIndex: 56.2,
        rank: 72,
        monthlyBudget: {
            single: 2400,
            couple: 4000,
            family: 6000
        },
        breakdown: {
            housing: { rentOneBR: 850, rentThreeBR: 1500, buyPricePerSqM: 8200 },
            food: { groceriesMonthly: 420, mealInexpensive: 7, mealMidRange: 25, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 55, taxiPerKm: 1.00, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 160, internetMbps: 300 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 130 },
            entertainment: { gymMembership: 65, cinemaTicket: 12, beerBar: 4 }
        },
        currency: "KRW",
        exchangeRate: 1320.0,
        color: "#fbbf24",
        status: "moderate",
        rank: 72,
        lastUpdated: "2026-03-01"
    },

    "Canada": {
        overallIndex: 60.8,
        rank: 62,
        monthlyBudget: {
            single: 2700,
            couple: 4500,
            family: 6700
        },
        breakdown: {
            housing: { rentOneBR: 1400, rentThreeBR: 2400, buyPricePerSqM: 6000 },
            food: { groceriesMonthly: 380, mealInexpensive: 18, mealMidRange: 50, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 95, taxiPerKm: 1.50, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 150, internetMbps: 220 },
            healthcare: { doctorVisit: 120, insuranceMonthly: 220 },
            entertainment: { gymMembership: 50, cinemaTicket: 14, beerBar: 6 }
        },
        currency: "CAD",
        exchangeRate: 1.35,
        color: "#fbbf24",
        status: "moderate",
        rank: 62,
        lastUpdated: "2026-03-01"
    },

    "Australia": {
        overallIndex: 65.5,
        rank: 52,
        monthlyBudget: {
            single: 3200,
            couple: 5400,
            family: 7800
        },
        breakdown: {
            housing: { rentOneBR: 1600, rentThreeBR: 2800, buyPricePerSqM: 7500 },
            food: { groceriesMonthly: 480, mealInexpensive: 18, mealMidRange: 55, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 130, taxiPerKm: 1.80, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 220, internetMbps: 200 },
            healthcare: { doctorVisit: 85, insuranceMonthly: 180 },
            entertainment: { gymMembership: 70, cinemaTicket: 16, beerBar: 8 }
        },
        currency: "AUD",
        exchangeRate: 1.52,
        color: "#fbbf24",
        status: "moderate",
        rank: 52,
        lastUpdated: "2026-03-01"
    },

    "New Zealand": {
        overallIndex: 63.2,
        rank: 56,
        monthlyBudget: {
            single: 2900,
            couple: 4900,
            family: 7200
        },
        breakdown: {
            housing: { rentOneBR: 1300, rentThreeBR: 2200, buyPricePerSqM: 6500 },
            food: { groceriesMonthly: 450, mealInexpensive: 16, mealMidRange: 50, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 120, taxiPerKm: 1.60, gasolinePerLiter: 1.80 },
            utilities: { basicMonthly: 180, internetMbps: 190 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 160 },
            entertainment: { gymMembership: 60, cinemaTicket: 15, beerBar: 7 }
        },
        currency: "NZD",
        exchangeRate: 1.68,
        color: "#fbbf24",
        status: "moderate",
        rank: 56,
        lastUpdated: "2026-03-01"
    },

    // EXPENSIVE (Index 70-85) - High Cost
    "United Kingdom": {
        overallIndex: 72.8,
        rank: 38,
        monthlyBudget: {
            single: 3600,
            couple: 6000,
            family: 8800
        },
        breakdown: {
            housing: { rentOneBR: 1800, rentThreeBR: 3200, buyPricePerSqM: 8500 },
            food: { groceriesMonthly: 520, mealInexpensive: 18, mealMidRange: 55, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 180, taxiPerKm: 2.20, gasolinePerLiter: 1.90 },
            utilities: { basicMonthly: 280, internetMbps: 210 },
            healthcare: { doctorVisit: 100, insuranceMonthly: 200 },
            entertainment: { gymMembership: 55, cinemaTicket: 15, beerBar: 7 }
        },
        currency: "GBP",
        exchangeRate: 0.79,
        color: "#f97316",
        status: "expensive",
        rank: 38,
        lastUpdated: "2026-03-01"
    },

    "United States": {
        overallIndex: 75.2,
        rank: 32,
        monthlyBudget: {
            single: 3900,
            couple: 6500,
            family: 9500
        },
        breakdown: {
            housing: { rentOneBR: 1900, rentThreeBR: 3400, buyPricePerSqM: 6800 },
            food: { groceriesMonthly: 550, mealInexpensive: 18, mealMidRange: 60, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 70, taxiPerKm: 1.40, gasolinePerLiter: 1.00 },
            utilities: { basicMonthly: 200, internetMbps: 240 },
            healthcare: { doctorVisit: 150, insuranceMonthly: 450 },
            entertainment: { gymMembership: 60, cinemaTicket: 15, beerBar: 7 }
        },
        currency: "USD",
        exchangeRate: 1.0,
        color: "#f97316",
        status: "expensive",
        rank: 32,
        lastUpdated: "2026-03-01"
    },

    "United States of America": {
        overallIndex: 75.2,
        rank: 32,
        monthlyBudget: {
            single: 3900,
            couple: 6500,
            family: 9500
        },
        breakdown: {
            housing: { rentOneBR: 1900, rentThreeBR: 3400, buyPricePerSqM: 6800 },
            food: { groceriesMonthly: 550, mealInexpensive: 18, mealMidRange: 60, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 70, taxiPerKm: 1.40, gasolinePerLiter: 1.00 },
            utilities: { basicMonthly: 200, internetMbps: 240 },
            healthcare: { doctorVisit: 150, insuranceMonthly: 450 },
            entertainment: { gymMembership: 60, cinemaTicket: 15, beerBar: 7 }
        },
        currency: "USD",
        exchangeRate: 1.0,
        color: "#f97316",
        status: "expensive",
        rank: 32,
        lastUpdated: "2026-03-01"
    },

    "Netherlands": {
        overallIndex: 70.5,
        rank: 42,
        monthlyBudget: {
            single: 3400,
            couple: 5700,
            family: 8400
        },
        breakdown: {
            housing: { rentOneBR: 1600, rentThreeBR: 2800, buyPricePerSqM: 6500 },
            food: { groceriesMonthly: 480, mealInexpensive: 17, mealMidRange: 50, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 100, taxiPerKm: 2.50, gasolinePerLiter: 2.10 },
            utilities: { basicMonthly: 220, internetMbps: 280 },
            healthcare: { doctorVisit: 90, insuranceMonthly: 190 },
            entertainment: { gymMembership: 48, cinemaTicket: 14, beerBar: 5.5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#f97316",
        status: "expensive",
        rank: 42,
        lastUpdated: "2026-03-01"
    },

    "Belgium": {
        overallIndex: 68.8,
        rank: 45,
        monthlyBudget: {
            single: 3250,
            couple: 5500,
            family: 8100
        },
        breakdown: {
            housing: { rentOneBR: 1500, rentThreeBR: 2600, buyPricePerSqM: 5800 },
            food: { groceriesMonthly: 460, mealInexpensive: 16, mealMidRange: 48, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 50, taxiPerKm: 2.20, gasolinePerLiter: 1.95 },
            utilities: { basicMonthly: 240, internetMbps: 240 },
            healthcare: { doctorVisit: 85, insuranceMonthly: 170 },
            entertainment: { gymMembership: 45, cinemaTicket: 13, beerBar: 4.5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#f97316",
        status: "expensive",
        rank: 45,
        lastUpdated: "2026-03-01"
    },

    "Sweden": {
        overallIndex: 71.2,
        rank: 40,
        monthlyBudget: {
            single: 3500,
            couple: 5900,
            family: 8600
        },
        breakdown: {
            housing: { rentOneBR: 1400, rentThreeBR: 2500, buyPricePerSqM: 7200 },
            food: { groceriesMonthly: 500, mealInexpensive: 15, mealMidRange: 52, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 90, taxiPerKm: 2.00, gasolinePerLiter: 2.05 },
            utilities: { basicMonthly: 150, internetMbps: 260 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 140 },
            entertainment: { gymMembership: 50, cinemaTicket: 16, beerBar: 8 }
        },
        currency: "SEK",
        exchangeRate: 10.5,
        color: "#f97316",
        status: "expensive",
        rank: 40,
        lastUpdated: "2026-03-01"
    },

    "Austria": {
        overallIndex: 69.5,
        rank: 44,
        monthlyBudget: {
            single: 3300,
            couple: 5600,
            family: 8200
        },
        breakdown: {
            housing: { rentOneBR: 1450, rentThreeBR: 2550, buyPricePerSqM: 6800 },
            food: { groceriesMonthly: 470, mealInexpensive: 14, mealMidRange: 45, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 50, taxiPerKm: 1.80, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 260, internetMbps: 250 },
            healthcare: { doctorVisit: 95, insuranceMonthly: 190 },
            entertainment: { gymMembership: 48, cinemaTicket: 13, beerBar: 4.5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#f97316",
        status: "expensive",
        rank: 44,
        lastUpdated: "2026-03-01"
    },

    // VERY EXPENSIVE (Index 85-100) - Luxury Markets
    "Norway": {
        overallIndex: 88.5,
        rank: 8,
        monthlyBudget: {
            single: 4800,
            couple: 8000,
            family: 11500
        },
        breakdown: {
            housing: { rentOneBR: 1800, rentThreeBR: 3200, buyPricePerSqM: 8500 },
            food: { groceriesMonthly: 650, mealInexpensive: 22, mealMidRange: 80, mcdonaldsMeal: 14 },
            transport: { monthlyPass: 90, taxiPerKm: 2.50, gasolinePerLiter: 2.20 },
            utilities: { basicMonthly: 180, internetMbps: 280 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 160 },
            entertainment: { gymMembership: 60, cinemaTicket: 18, beerBar: 11 }
        },
        currency: "NOK",
        exchangeRate: 10.8,
        color: "#dc2626",
        status: "very-expensive",
        rank: 8,
        lastUpdated: "2026-03-01"
    },

    "Switzerland": {
        overallIndex: 100.0,
        rank: 1,
        monthlyBudget: {
            single: 6500,
            couple: 10800,
            family: 15500
        },
        breakdown: {
            housing: { rentOneBR: 2400, rentThreeBR: 4200, buyPricePerSqM: 14000 },
            food: { groceriesMonthly: 850, mealInexpensive: 28, mealMidRange: 100, mcdonaldsMeal: 16 },
            transport: { monthlyPass: 90, taxiPerKm: 4.00, gasolinePerLiter: 1.85 },
            utilities: { basicMonthly: 220, internetMbps: 290 },
            healthcare: { doctorVisit: 180, insuranceMonthly: 450 },
            entertainment: { gymMembership: 85, cinemaTicket: 20, beerBar: 8 }
        },
        currency: "CHF",
        exchangeRate: 0.88,
        color: "#dc2626",
        status: "very-expensive",
        rank: 1,
        lastUpdated: "2026-03-01"
    },

    "Denmark": {
        overallIndex: 85.2,
        rank: 12,
        monthlyBudget: {
            single: 4500,
            couple: 7500,
            family: 10800
        },
        breakdown: {
            housing: { rentOneBR: 1700, rentThreeBR: 3000, buyPricePerSqM: 7500 },
            food: { groceriesMonthly: 600, mealInexpensive: 20, mealMidRange: 70, mcdonaldsMeal: 13 },
            transport: { monthlyPass: 75, taxiPerKm: 2.30, gasolinePerLiter: 2.10 },
            utilities: { basicMonthly: 180, internetMbps: 270 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 150 },
            entertainment: { gymMembership: 55, cinemaTicket: 16, beerBar: 8 }
        },
        currency: "DKK",
        exchangeRate: 6.9,
        color: "#dc2626",
        status: "very-expensive",
        rank: 12,
        lastUpdated: "2026-03-01"
    },

    "Iceland": {
        overallIndex: 90.8,
        rank: 5,
        monthlyBudget: {
            single: 5200,
            couple: 8700,
            family: 12500
        },
        breakdown: {
            housing: { rentOneBR: 1900, rentThreeBR: 3400, buyPricePerSqM: 9200 },
            food: { groceriesMonthly: 700, mealInexpensive: 25, mealMidRange: 85, mcdonaldsMeal: 15 },
            transport: { monthlyPass: 95, taxiPerKm: 2.80, gasolinePerLiter: 2.25 },
            utilities: { basicMonthly: 120, internetMbps: 250 },
            healthcare: { doctorVisit: 90, insuranceMonthly: 170 },
            entertainment: { gymMembership: 70, cinemaTicket: 19, beerBar: 12 }
        },
        currency: "ISK",
        exchangeRate: 137.0,
        color: "#dc2626",
        status: "very-expensive",
        rank: 5,
        lastUpdated: "2026-03-01"
    },

    "Singapore": {
        overallIndex: 82.5,
        rank: 18,
        monthlyBudget: {
            single: 4200,
            couple: 7000,
            family: 10200
        },
        breakdown: {
            housing: { rentOneBR: 2200, rentThreeBR: 4000, buyPricePerSqM: 18000 },
            food: { groceriesMonthly: 550, mealInexpensive: 8, mealMidRange: 40, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 90, taxiPerKm: 0.80, gasolinePerLiter: 2.40 },
            utilities: { basicMonthly: 150, internetMbps: 300 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 180 },
            entertainment: { gymMembership: 100, cinemaTicket: 12, beerBar: 10 }
        },
        currency: "SGD",
        exchangeRate: 1.34,
        color: "#dc2626",
        status: "very-expensive",
        rank: 18,
        lastUpdated: "2026-03-01"
    },

    "Hong Kong": {
        overallIndex: 87.2,
        rank: 10,
        monthlyBudget: {
            single: 4700,
            couple: 7800,
            family: 11200
        },
        breakdown: {
            housing: { rentOneBR: 2600, rentThreeBR: 4600, buyPricePerSqM: 22000 },
            food: { groceriesMonthly: 580, mealInexpensive: 7, mealMidRange: 35, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 50, taxiPerKm: 1.20, gasolinePerLiter: 2.80 },
            utilities: { basicMonthly: 140, internetMbps: 280 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 200 },
            entertainment: { gymMembership: 110, cinemaTicket: 14, beerBar: 8 }
        },
        currency: "HKD",
        exchangeRate: 7.8,
        color: "#dc2626",
        status: "very-expensive",
        rank: 10,
        lastUpdated: "2026-03-01"
    },

    "Singapore": {
        overallIndex: 88.5,
        rank: 8,
        monthlyBudget: {
            single: 4850,
            couple: 8100,
            family: 11600
        },
        breakdown: {
            housing: { rentOneBR: 2800, rentThreeBR: 5000, buyPricePerSqM: 24000 },
            food: { groceriesMonthly: 600, mealInexpensive: 8, mealMidRange: 40, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 90, taxiPerKm: 0.80, gasolinePerLiter: 2.40 },
            utilities: { basicMonthly: 130, internetMbps: 300 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 180 },
            entertainment: { gymMembership: 120, cinemaTicket: 15, beerBar: 10 }
        },
        currency: "SGD",
        exchangeRate: 1.35,
        color: "#dc2626",
        status: "very-expensive",
        rank: 8,
        lastUpdated: "2026-03-01"
    },

    // Additional Key Markets
    "Israel": {
        overallIndex: 74.5,
        rank: 34,
        monthlyBudget: {
            single: 3800,
            couple: 6300,
            family: 9200
        },
        breakdown: {
            housing: { rentOneBR: 1700, rentThreeBR: 3000, buyPricePerSqM: 8500 },
            food: { groceriesMonthly: 530, mealInexpensive: 18, mealMidRange: 55, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 65, taxiPerKm: 1.40, gasolinePerLiter: 1.95 },
            utilities: { basicMonthly: 190, internetMbps: 210 },
            healthcare: { doctorVisit: 75, insuranceMonthly: 170 },
            entertainment: { gymMembership: 70, cinemaTicket: 14, beerBar: 8 }
        },
        currency: "ILS",
        exchangeRate: 3.6,
        color: "#f97316",
        status: "expensive",
        rank: 34,
        lastUpdated: "2026-03-01"
    },

    "United Arab Emirates": {
        overallIndex: 66.8,
        rank: 48,
        monthlyBudget: {
            single: 3100,
            couple: 5200,
            family: 7600
        },
        breakdown: {
            housing: { rentOneBR: 1400, rentThreeBR: 2500, buyPricePerSqM: 5500 },
            food: { groceriesMonthly: 480, mealInexpensive: 10, mealMidRange: 40, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 90, taxiPerKm: 0.60, gasolinePerLiter: 0.70 },
            utilities: { basicMonthly: 160, internetMbps: 240 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 180 },
            entertainment: { gymMembership: 80, cinemaTicket: 12, beerBar: 12 }
        },
        currency: "AED",
        exchangeRate: 3.67,
        color: "#fbbf24",
        status: "moderate",
        rank: 48,
        lastUpdated: "2026-03-01"
    },

    "Saudi Arabia": {
        overallIndex: 45.2,
        rank: 105,
        monthlyBudget: {
            single: 1600,
            couple: 2700,
            family: 4100
        },
        breakdown: {
            housing: { rentOneBR: 650, rentThreeBR: 1200, buyPricePerSqM: 3200 },
            food: { groceriesMonthly: 350, mealInexpensive: 8, mealMidRange: 30, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 35, taxiPerKm: 0.50, gasolinePerLiter: 0.55 },
            utilities: { basicMonthly: 110, internetMbps: 200 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 120 },
            entertainment: { gymMembership: 60, cinemaTicket: 11, beerBar: 0 }
        },
        currency: "SAR",
        exchangeRate: 3.75,
        color: "#22c55e",
        status: "affordable",
        rank: 105,
        lastUpdated: "2026-03-01"
    },

    "Brazil": {
        overallIndex: 36.8,
        rank: 138,
        monthlyBudget: {
            single: 1150,
            couple: 1950,
            family: 3100
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2800 },
            food: { groceriesMonthly: 260, mealInexpensive: 6, mealMidRange: 20, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 45, taxiPerKm: 0.80, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 85, internetMbps: 140 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 90 },
            entertainment: { gymMembership: 35, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "BRL",
        exchangeRate: 5.0,
        color: "#22c55e",
        status: "affordable",
        rank: 138,
        lastUpdated: "2026-03-01"
    },

    "Argentina": {
        overallIndex: 33.5,
        rank: 145,
        monthlyBudget: {
            single: 950,
            couple: 1600,
            family: 2600
        },
        breakdown: {
            housing: { rentOneBR: 350, rentThreeBR: 650, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 240, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.40, gasolinePerLiter: 0.90 },
            utilities: { basicMonthly: 70, internetMbps: 120 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2 }
        },
        currency: "ARS",
        exchangeRate: 850.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 145,
        lastUpdated: "2026-03-01"
    },

    "Chile": {
        overallIndex: 44.8,
        rank: 108,
        monthlyBudget: {
            single: 1550,
            couple: 2600,
            family: 4000
        },
        breakdown: {
            housing: { rentOneBR: 600, rentThreeBR: 1100, buyPricePerSqM: 3400 },
            food: { groceriesMonthly: 310, mealInexpensive: 9, mealMidRange: 28, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 50, taxiPerKm: 0.70, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 120, internetMbps: 160 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 110 },
            entertainment: { gymMembership: 45, cinemaTicket: 8, beerBar: 3.5 }
        },
        currency: "CLP",
        exchangeRate: 920.0,
        color: "#22c55e",
        status: "affordable",
        rank: 108,
        lastUpdated: "2026-03-01"
    },

    "South Africa": {
        overallIndex: 39.5,
        rank: 128,
        monthlyBudget: {
            single: 1300,
            couple: 2200,
            family: 3500
        },
        breakdown: {
            housing: { rentOneBR: 450, rentThreeBR: 850, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 270, mealInexpensive: 7, mealMidRange: 22, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 35, taxiPerKm: 0.60, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 95, internetMbps: 100 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 120 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "ZAR",
        exchangeRate: 18.5,
        color: "#22c55e",
        status: "affordable",
        rank: 128,
        lastUpdated: "2026-03-01"
    },

    "Egypt": {
        overallIndex: 26.8,
        rank: 162,
        monthlyBudget: {
            single: 650,
            couple: 1100,
            family: 1800
        },
        breakdown: {
            housing: { rentOneBR: 180, rentThreeBR: 350, buyPricePerSqM: 1400 },
            food: { groceriesMonthly: 160, mealInexpensive: 3, mealMidRange: 12, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 8, taxiPerKm: 0.20, gasolinePerLiter: 0.45 },
            utilities: { basicMonthly: 40, internetMbps: 90 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 50 },
            entertainment: { gymMembership: 25, cinemaTicket: 5, beerBar: 2.5 }
        },
        currency: "EGP",
        exchangeRate: 31.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 162,
        lastUpdated: "2026-03-01"
    },

    "Morocco": {
        overallIndex: 34.2,
        rank: 143,
        monthlyBudget: {
            single: 1000,
            couple: 1700,
            family: 2700
        },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 600, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 220, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 20, taxiPerKm: 0.50, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 65, internetMbps: 110 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 60 },
            entertainment: { gymMembership: 28, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "MAD",
        exchangeRate: 10.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 143,
        lastUpdated: "2026-03-01"
    },

    "Kenya": {
        overallIndex: 35.8,
        rank: 139,
        monthlyBudget: {
            single: 1100,
            couple: 1850,
            family: 2950
        },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 700, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 240, mealInexpensive: 4, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 30, taxiPerKm: 0.55, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 75, internetMbps: 85 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 35, cinemaTicket: 6, beerBar: 2 }
        },
        currency: "KES",
        exchangeRate: 130.0,
        color: "#22c55e",
        status: "affordable",
        rank: 139,
        lastUpdated: "2026-03-01"
    },

    // Additional Asian Countries
    "Pakistan": {
        overallIndex: 20.5,
        rank: 172,
        monthlyBudget: {
            single: 550,
            couple: 900,
            family: 1400
        },
        breakdown: {
            housing: { rentOneBR: 150, rentThreeBR: 300, buyPricePerSqM: 900 },
            food: { groceriesMonthly: 130, mealInexpensive: 2, mealMidRange: 8, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 8, taxiPerKm: 0.20, gasolinePerLiter: 1.05 },
            utilities: { basicMonthly: 45, internetMbps: 70 },
            healthcare: { doctorVisit: 12, insuranceMonthly: 35 },
            entertainment: { gymMembership: 18, cinemaTicket: 4, beerBar: 0 }
        },
        currency: "PKR",
        exchangeRate: 280.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 172,
        lastUpdated: "2026-03-01"
    },

    "Bangladesh": {
        overallIndex: 24.2,
        rank: 165,
        monthlyBudget: {
            single: 650,
            couple: 1050,
            family: 1650
        },
        breakdown: {
            housing: { rentOneBR: 180, rentThreeBR: 350, buyPricePerSqM: 1100 },
            food: { groceriesMonthly: 140, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 10, taxiPerKm: 0.25, gasolinePerLiter: 1.15 },
            utilities: { basicMonthly: 50, internetMbps: 60 },
            healthcare: { doctorVisit: 15, insuranceMonthly: 40 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 0 }
        },
        currency: "BDT",
        exchangeRate: 110.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 165,
        lastUpdated: "2026-03-01"
    },

    "Taiwan": {
        overallIndex: 58.5,
        rank: 68,
        monthlyBudget: {
            single: 2400,
            couple: 4000,
            family: 6000
        },
        breakdown: {
            housing: { rentOneBR: 850, rentThreeBR: 1500, buyPricePerSqM: 6500 },
            food: { groceriesMonthly: 380, mealInexpensive: 4.5, mealMidRange: 25, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 40, taxiPerKm: 0.80, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 110, internetMbps: 280 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 90 },
            entertainment: { gymMembership: 45, cinemaTicket: 10, beerBar: 4 }
        },
        currency: "TWD",
        exchangeRate: 31.5,
        color: "#fbbf24",
        status: "moderate",
        rank: 68,
        lastUpdated: "2026-03-01"
    },

    "Myanmar": {
        overallIndex: 27.8,
        rank: 160,
        monthlyBudget: {
            single: 700,
            couple: 1150,
            family: 1850
        },
        breakdown: {
            housing: { rentOneBR: 220, rentThreeBR: 450, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 170, mealInexpensive: 2, mealMidRange: 10, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 12, taxiPerKm: 0.30, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 60, internetMbps: 50 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 50 },
            entertainment: { gymMembership: 25, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "MMK",
        exchangeRate: 2100.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 160,
        lastUpdated: "2026-03-01"
    },

    "Cambodia": {
        overallIndex: 31.2,
        rank: 153,
        monthlyBudget: {
            single: 850,
            couple: 1400,
            family: 2200
        },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 550, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 190, mealInexpensive: 2.5, mealMidRange: 12, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 0, taxiPerKm: 0.40, gasolinePerLiter: 1.15 },
            utilities: { basicMonthly: 80, internetMbps: 90 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 65 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 1.8 }
        },
        currency: "KHR",
        exchangeRate: 4100.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 153,
        lastUpdated: "2026-03-01"
    },

    "Qatar": {
        overallIndex: 68.5,
        rank: 44,
        monthlyBudget: {
            single: 3300,
            couple: 5500,
            family: 8000
        },
        breakdown: {
            housing: { rentOneBR: 1500, rentThreeBR: 2700, buyPricePerSqM: 6000 },
            food: { groceriesMonthly: 500, mealInexpensive: 10, mealMidRange: 45, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 40, taxiPerKm: 0.50, gasolinePerLiter: 0.50 },
            utilities: { basicMonthly: 140, internetMbps: 250 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 200 },
            entertainment: { gymMembership: 90, cinemaTicket: 13, beerBar: 0 }
        },
        currency: "QAR",
        exchangeRate: 3.64,
        color: "#fbbf24",
        status: "moderate",
        rank: 44,
        lastUpdated: "2026-03-01"
    },

    "Oman": {
        overallIndex: 52.8,
        rank: 81,
        monthlyBudget: {
            single: 2100,
            couple: 3500,
            family: 5300
        },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1400, buyPricePerSqM: 3800 },
            food: { groceriesMonthly: 380, mealInexpensive: 7, mealMidRange: 28, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 35, taxiPerKm: 0.45, gasolinePerLiter: 0.55 },
            utilities: { basicMonthly: 100, internetMbps: 180 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 140 },
            entertainment: { gymMembership: 60, cinemaTicket: 10, beerBar: 0 }
        },
        currency: "OMR",
        exchangeRate: 0.38,
        color: "#fbbf24",
        status: "moderate",
        rank: 81,
        lastUpdated: "2026-03-01"
    },

    // Additional European Countries
    "Russia": {
        overallIndex: 36.2,
        rank: 137,
        monthlyBudget: {
            single: 1150,
            couple: 1950,
            family: 3100
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 260, mealInexpensive: 6, mealMidRange: 20, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.35, gasolinePerLiter: 0.70 },
            utilities: { basicMonthly: 90, internetMbps: 160 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 35, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "RUB",
        exchangeRate: 90.0,
        color: "#22c55e",
        status: "affordable",
        rank: 137,
        lastUpdated: "2026-03-01"
    },

    "Ireland": {
        overallIndex: 78.2,
        rank: 26,
        monthlyBudget: {
            single: 4100,
            couple: 6800,
            family: 9800
        },
        breakdown: {
            housing: { rentOneBR: 1900, rentThreeBR: 3200, buyPricePerSqM: 9500 },
            food: { groceriesMonthly: 560, mealInexpensive: 18, mealMidRange: 60, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 140, taxiPerKm: 1.80, gasolinePerLiter: 1.80 },
            utilities: { basicMonthly: 180, internetMbps: 220 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 180 },
            entertainment: { gymMembership: 65, cinemaTicket: 12, beerBar: 7 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#f97316",
        status: "expensive",
        rank: 26,
        lastUpdated: "2026-03-01"
    },

    "Finland": {
        overallIndex: 76.8,
        rank: 30,
        monthlyBudget: {
            single: 3900,
            couple: 6500,
            family: 9400
        },
        breakdown: {
            housing: { rentOneBR: 1300, rentThreeBR: 2200, buyPricePerSqM: 7500 },
            food: { groceriesMonthly: 540, mealInexpensive: 15, mealMidRange: 55, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 65, taxiPerKm: 1.90, gasolinePerLiter: 2.00 },
            utilities: { basicMonthly: 140, internetMbps: 240 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 140 },
            entertainment: { gymMembership: 55, cinemaTicket: 14, beerBar: 7 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#f97316",
        status: "expensive",
        rank: 30,
        lastUpdated: "2026-03-01"
    },

    "Romania": {
        overallIndex: 37.8,
        rank: 133,
        monthlyBudget: {
            single: 1250,
            couple: 2100,
            family: 3400
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 700, buyPricePerSqM: 2600 },
            food: { groceriesMonthly: 270, mealInexpensive: 7, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.60, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 120, internetMbps: 180 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 85 },
            entertainment: { gymMembership: 30, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "RON",
        exchangeRate: 4.6,
        color: "#22c55e",
        status: "affordable",
        rank: 133,
        lastUpdated: "2026-03-01"
    },

    "Hungary": {
        overallIndex: 43.5,
        rank: 112,
        monthlyBudget: {
            single: 1450,
            couple: 2450,
            family: 3900
        },
        breakdown: {
            housing: { rentOneBR: 550, rentThreeBR: 950, buyPricePerSqM: 3300 },
            food: { groceriesMonthly: 290, mealInexpensive: 8, mealMidRange: 25, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 30, taxiPerKm: 0.85, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 150, internetMbps: 160 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 95 },
            entertainment: { gymMembership: 38, cinemaTicket: 8, beerBar: 2.8 }
        },
        currency: "HUF",
        exchangeRate: 360.0,
        color: "#22c55e",
        status: "affordable",
        rank: 112,
        lastUpdated: "2026-03-01"
    },

    "Croatia": {
        overallIndex: 51.2,
        rank: 86,
        monthlyBudget: {
            single: 2000,
            couple: 3400,
            family: 5100
        },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1300, buyPricePerSqM: 4000 },
            food: { groceriesMonthly: 340, mealInexpensive: 10, mealMidRange: 30, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 50, taxiPerKm: 1.00, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 150, internetMbps: 190 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 110 },
            entertainment: { gymMembership: 42, cinemaTicket: 9, beerBar: 3.5 }
        },
        currency: "EUR",
        exchangeRate: 0.92,
        color: "#fbbf24",
        status: "moderate",
        rank: 86,
        lastUpdated: "2026-03-01"
    },

    // Additional American Countries
    "Peru": {
        overallIndex: 35.5,
        rank: 141,
        monthlyBudget: {
            single: 1100,
            couple: 1850,
            family: 3000
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 250, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 20, taxiPerKm: 0.50, gasolinePerLiter: 1.25 },
            utilities: { basicMonthly: 70, internetMbps: 110 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 85 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "PEN",
        exchangeRate: 3.7,
        color: "#22c55e",
        status: "affordable",
        rank: 141,
        lastUpdated: "2026-03-01"
    },

    "Costa Rica": {
        overallIndex: 46.8,
        rank: 101,
        monthlyBudget: {
            single: 1700,
            couple: 2900,
            family: 4400
        },
        breakdown: {
            housing: { rentOneBR: 650, rentThreeBR: 1200, buyPricePerSqM: 3600 },
            food: { groceriesMonthly: 320, mealInexpensive: 8, mealMidRange: 25, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 45, taxiPerKm: 0.80, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 100, internetMbps: 140 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 120 },
            entertainment: { gymMembership: 40, cinemaTicket: 8, beerBar: 3 }
        },
        currency: "CRC",
        exchangeRate: 520.0,
        color: "#22c55e",
        status: "affordable",
        rank: 101,
        lastUpdated: "2026-03-01"
    },

    "Panama": {
        overallIndex: 53.5,
        rank: 78,
        monthlyBudget: {
            single: 2150,
            couple: 3600,
            family: 5400
        },
        breakdown: {
            housing: { rentOneBR: 850, rentThreeBR: 1500, buyPricePerSqM: 4500 },
            food: { groceriesMonthly: 380, mealInexpensive: 9, mealMidRange: 30, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 30, taxiPerKm: 0.70, gasolinePerLiter: 0.90 },
            utilities: { basicMonthly: 120, internetMbps: 160 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 130 },
            entertainment: { gymMembership: 50, cinemaTicket: 9, beerBar: 3.5 }
        },
        currency: "USD",
        exchangeRate: 1.0,
        color: "#fbbf24",
        status: "moderate",
        rank: 78,
        lastUpdated: "2026-03-01"
    },

    "Uruguay": {
        overallIndex: 48.5,
        rank: 94,
        monthlyBudget: {
            single: 1800,
            couple: 3050,
            family: 4700
        },
        breakdown: {
            housing: { rentOneBR: 700, rentThreeBR: 1250, buyPricePerSqM: 3800 },
            food: { groceriesMonthly: 330, mealInexpensive: 10, mealMidRange: 30, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 40, taxiPerKm: 0.90, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 130, internetMbps: 150 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 115 },
            entertainment: { gymMembership: 45, cinemaTicket: 8.5, beerBar: 3.5 }
        },
        currency: "UYU",
        exchangeRate: 39.0,
        color: "#22c55e",
        status: "affordable",
        rank: 94,
        lastUpdated: "2026-03-01"
    },

    "Ecuador": {
        overallIndex: 34.5,
        rank: 144,
        monthlyBudget: {
            single: 1000,
            couple: 1700,
            family: 2750
        },
        breakdown: {
            housing: { rentOneBR: 350, rentThreeBR: 650, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 240, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.55, gasolinePerLiter: 0.70 },
            utilities: { basicMonthly: 75, internetMbps: 100 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "USD",
        exchangeRate: 1.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 144,
        lastUpdated: "2026-03-01"
    },

    // Additional African Countries
    "Nigeria": {
        overallIndex: 32.8,
        rank: 148,
        monthlyBudget: {
            single: 900,
            couple: 1500,
            family: 2450
        },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 600, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 210, mealInexpensive: 3, mealMidRange: 14, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.40, gasolinePerLiter: 0.85 },
            utilities: { basicMonthly: 80, internetMbps: 75 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "NGN",
        exchangeRate: 780.0,
        color: "#10b981",
        status: "very-affordable",
        rank: 148,
        lastUpdated: "2026-03-01"
    },

    "Ghana": {
        overallIndex: 36.5,
        rank: 136,
        monthlyBudget: {
            single: 1150,
            couple: 1900,
            family: 3050
        },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 260, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 30, taxiPerKm: 0.50, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 90, internetMbps: 80 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 35, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "GHS",
        exchangeRate: 12.0,
        color: "#22c55e",
        status: "affordable",
        rank: 136,
        lastUpdated: "2026-03-01"
    },

    "Tunisia": {
        overallIndex: 30.8,
        rank: 154,
        monthlyBudget: {
            single: 850,
            couple: 1400,
            family: 2250
        },
        breakdown: {
            housing: { rentOneBR: 250, rentThreeBR: 500, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 200, mealInexpensive: 3, mealMidRange: 12, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 0.75 },
            utilities: { basicMonthly: 60, internetMbps: 100 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 25, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "TND",
        exchangeRate: 3.1,
        color: "#10b981",
        status: "very-affordable",
        rank: 154,
        lastUpdated: "2026-03-01"
    },

    // More Asian Countries
    "Sri Lanka": {
        overallIndex: 28.5,
        rank: 159,
        monthlyBudget: { single: 750, couple: 1250, family: 2000 },
        breakdown: {
            housing: { rentOneBR: 250, rentThreeBR: 500, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 180, mealInexpensive: 2.5, mealMidRange: 11, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 65, internetMbps: 75 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 25, cinemaTicket: 4, beerBar: 2 }
        },
        currency: "LKR", exchangeRate: 325.0, color: "#10b981", status: "very-affordable", rank: 159, lastUpdated: "2026-03-01"
    },

    "Nepal": {
        overallIndex: 25.2,
        rank: 164,
        monthlyBudget: { single: 650, couple: 1050, family: 1700 },
        breakdown: {
            housing: { rentOneBR: 180, rentThreeBR: 350, buyPricePerSqM: 1400 },
            food: { groceriesMonthly: 150, mealInexpensive: 2, mealMidRange: 9, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 10, taxiPerKm: 0.30, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 45, internetMbps: 60 },
            healthcare: { doctorVisit: 12, insuranceMonthly: 35 },
            entertainment: { gymMembership: 20, cinemaTicket: 4, beerBar: 2 }
        },
        currency: "NPR", exchangeRate: 133.0, color: "#10b981", status: "very-affordable", rank: 164, lastUpdated: "2026-03-01"
    },

    "Laos": {
        overallIndex: 29.8,
        rank: 156,
        monthlyBudget: { single: 800, couple: 1300, family: 2050 },
        breakdown: {
            housing: { rentOneBR: 280, rentThreeBR: 550, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 190, mealInexpensive: 2.5, mealMidRange: 12, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 12, taxiPerKm: 0.40, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 70, internetMbps: 70 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 28, cinemaTicket: 4.5, beerBar: 1.8 }
        },
        currency: "LAK", exchangeRate: 21000.0, color: "#10b981", status: "very-affordable", rank: 156, lastUpdated: "2026-03-01"
    },

    "Malaysia": {
        overallIndex: 38.5,
        rank: 130,
        monthlyBudget: { single: 1300, couple: 2200, family: 3500 },
        breakdown: {
            housing: { rentOneBR: 450, rentThreeBR: 850, buyPricePerSqM: 3000 },
            food: { groceriesMonthly: 270, mealInexpensive: 3, mealMidRange: 15, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 22, taxiPerKm: 0.40, gasolinePerLiter: 0.55 },
            utilities: { basicMonthly: 75, internetMbps: 130 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 3 }
        },
        currency: "MYR", exchangeRate: 4.7, color: "#22c55e", status: "affordable", rank: 130, lastUpdated: "2026-03-01"
    },

    "Mongolia": {
        overallIndex: 33.2,
        rank: 147,
        monthlyBudget: { single: 950, couple: 1600, family: 2550 },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 600, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 230, mealInexpensive: 4, mealMidRange: 14, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 12, taxiPerKm: 0.35, gasolinePerLiter: 1.00 },
            utilities: { basicMonthly: 80, internetMbps: 90 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 65 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "MNT", exchangeRate: 3450.0, color: "#10b981", status: "very-affordable", rank: 147, lastUpdated: "2026-03-01"
    },

    "Kazakhstan": {
        overallIndex: 37.5,
        rank: 134,
        monthlyBudget: { single: 1200, couple: 2000, family: 3200 },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 260, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.30, gasolinePerLiter: 0.65 },
            utilities: { basicMonthly: 95, internetMbps: 140 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "KZT", exchangeRate: 450.0, color: "#22c55e", status: "affordable", rank: 134, lastUpdated: "2026-03-01"
    },

    "Uzbekistan": {
        overallIndex: 26.5,
        rank: 163,
        monthlyBudget: { single: 700, couple: 1150, family: 1850 },
        breakdown: {
            housing: { rentOneBR: 220, rentThreeBR: 450, buyPricePerSqM: 1500 },
            food: { groceriesMonthly: 170, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 10, taxiPerKm: 0.20, gasolinePerLiter: 0.80 },
            utilities: { basicMonthly: 55, internetMbps: 80 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 45 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "UZS", exchangeRate: 12500.0, color: "#10b981", status: "very-affordable", rank: 163, lastUpdated: "2026-03-01"
    },

    "Azerbaijan": {
        overallIndex: 35.8,
        rank: 138,
        monthlyBudget: { single: 1100, couple: 1850, family: 3000 },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 700, buyPricePerSqM: 2300 },
            food: { groceriesMonthly: 250, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.30, gasolinePerLiter: 0.70 },
            utilities: { basicMonthly: 85, internetMbps: 110 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5.5, beerBar: 2.5 }
        },
        currency: "AZN", exchangeRate: 1.7, color: "#22c55e", status: "affordable", rank: 138, lastUpdated: "2026-03-01"
    },

    "Georgia": {
        overallIndex: 36.8,
        rank: 135,
        monthlyBudget: { single: 1150, couple: 1950, family: 3150 },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 260, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 18, taxiPerKm: 0.40, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 80, internetMbps: 130 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "GEL", exchangeRate: 2.7, color: "#22c55e", status: "affordable", rank: 135, lastUpdated: "2026-03-01"
    },

    "Armenia": {
        overallIndex: 34.5,
        rank: 146,
        monthlyBudget: { single: 1000, couple: 1700, family: 2750 },
        breakdown: {
            housing: { rentOneBR: 350, rentThreeBR: 650, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 240, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 1.15 },
            utilities: { basicMonthly: 70, internetMbps: 100 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 65 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "AMD", exchangeRate: 400.0, color: "#10b981", status: "very-affordable", rank: 146, lastUpdated: "2026-03-01"
    },

    // More European Countries
    "Ukraine": {
        overallIndex: 32.5,
        rank: 149,
        monthlyBudget: { single: 900, couple: 1500, family: 2450 },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 550, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 220, mealInexpensive: 4, mealMidRange: 14, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 12, taxiPerKm: 0.30, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 90, internetMbps: 120 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 50 },
            entertainment: { gymMembership: 25, cinemaTicket: 5, beerBar: 1.8 }
        },
        currency: "UAH", exchangeRate: 37.0, color: "#10b981", status: "very-affordable", rank: 149, lastUpdated: "2026-03-01"
    },

    "Bulgaria": {
        overallIndex: 41.2,
        rank: 121,
        monthlyBudget: { single: 1350, couple: 2300, family: 3700 },
        breakdown: {
            housing: { rentOneBR: 450, rentThreeBR: 800, buyPricePerSqM: 2800 },
            food: { groceriesMonthly: 270, mealInexpensive: 6, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.60, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 130, internetMbps: 140 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 85 },
            entertainment: { gymMembership: 32, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "BGN", exchangeRate: 1.8, color: "#22c55e", status: "affordable", rank: 121, lastUpdated: "2026-03-01"
    },

    "Serbia": {
        overallIndex: 39.8,
        rank: 127,
        monthlyBudget: { single: 1300, couple: 2200, family: 3550 },
        breakdown: {
            housing: { rentOneBR: 420, rentThreeBR: 750, buyPricePerSqM: 2600 },
            food: { groceriesMonthly: 260, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 22, taxiPerKm: 0.55, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 110, internetMbps: 125 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "RSD", exchangeRate: 108.0, color: "#22c55e", status: "affordable", rank: 127, lastUpdated: "2026-03-01"
    },

    "Slovakia": {
        overallIndex: 50.5,
        rank: 88,
        monthlyBudget: { single: 1950, couple: 3300, family: 5000 },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1300, buyPricePerSqM: 4200 },
            food: { groceriesMonthly: 330, mealInexpensive: 9, mealMidRange: 28, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 45, taxiPerKm: 0.95, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 160, internetMbps: 175 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 110 },
            entertainment: { gymMembership: 40, cinemaTicket: 9, beerBar: 3 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 88, lastUpdated: "2026-03-01"
    },

    "Slovenia": {
        overallIndex: 58.2,
        rank: 69,
        monthlyBudget: { single: 2400, couple: 4050, family: 6100 },
        breakdown: {
            housing: { rentOneBR: 850, rentThreeBR: 1500, buyPricePerSqM: 5200 },
            food: { groceriesMonthly: 380, mealInexpensive: 11, mealMidRange: 35, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 50, taxiPerKm: 1.20, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 150, internetMbps: 195 },
            healthcare: { doctorVisit: 55, insuranceMonthly: 130 },
            entertainment: { gymMembership: 48, cinemaTicket: 10, beerBar: 4 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 69, lastUpdated: "2026-03-01"
    },

    "Estonia": {
        overallIndex: 54.8,
        rank: 76,
        monthlyBudget: { single: 2200, couple: 3700, family: 5550 },
        breakdown: {
            housing: { rentOneBR: 800, rentThreeBR: 1400, buyPricePerSqM: 4600 },
            food: { groceriesMonthly: 360, mealInexpensive: 10, mealMidRange: 32, mcdonaldsMeal: 8.5 },
            transport: { monthlyPass: 30, taxiPerKm: 1.10, gasolinePerLiter: 1.70 },
            utilities: { basicMonthly: 145, internetMbps: 210 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 120 },
            entertainment: { gymMembership: 42, cinemaTicket: 9, beerBar: 4.5 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 76, lastUpdated: "2026-03-01"
    },

    "Latvia": {
        overallIndex: 51.5,
        rank: 85,
        monthlyBudget: { single: 2000, couple: 3400, family: 5150 },
        breakdown: {
            housing: { rentOneBR: 700, rentThreeBR: 1250, buyPricePerSqM: 4000 },
            food: { groceriesMonthly: 340, mealInexpensive: 9, mealMidRange: 30, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 35, taxiPerKm: 1.05, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 135, internetMbps: 190 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 110 },
            entertainment: { gymMembership: 38, cinemaTicket: 8.5, beerBar: 4 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 85, lastUpdated: "2026-03-01"
    },

    "Lithuania": {
        overallIndex: 52.8,
        rank: 80,
        monthlyBudget: { single: 2100, couple: 3550, family: 5350 },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1300, buyPricePerSqM: 4300 },
            food: { groceriesMonthly: 350, mealInexpensive: 9.5, mealMidRange: 32, mcdonaldsMeal: 8.5 },
            transport: { monthlyPass: 40, taxiPerKm: 1.00, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 140, internetMbps: 200 },
            healthcare: { doctorVisit: 48, insuranceMonthly: 115 },
            entertainment: { gymMembership: 40, cinemaTicket: 9, beerBar: 4.5 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 80, lastUpdated: "2026-03-01"
    },

    "Malta": {
        overallIndex: 61.5,
        rank: 60,
        monthlyBudget: { single: 2600, couple: 4350, family: 6500 },
        breakdown: {
            housing: { rentOneBR: 1000, rentThreeBR: 1800, buyPricePerSqM: 5500 },
            food: { groceriesMonthly: 410, mealInexpensive: 13, mealMidRange: 40, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 50, taxiPerKm: 1.50, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 110, internetMbps: 200 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 140 },
            entertainment: { gymMembership: 50, cinemaTicket: 10, beerBar: 4 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 60, lastUpdated: "2026-03-01"
    },

    "Cyprus": {
        overallIndex: 63.2,
        rank: 56,
        monthlyBudget: { single: 2750, couple: 4600, family: 6900 },
        breakdown: {
            housing: { rentOneBR: 1050, rentThreeBR: 1900, buyPricePerSqM: 5800 },
            food: { groceriesMonthly: 430, mealInexpensive: 14, mealMidRange: 42, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 55, taxiPerKm: 1.30, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 120, internetMbps: 205 },
            healthcare: { doctorVisit: 65, insuranceMonthly: 150 },
            entertainment: { gymMembership: 55, cinemaTicket: 11, beerBar: 4.5 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 56, lastUpdated: "2026-03-01"
    },

    "Luxembourg": {
        overallIndex: 84.5,
        rank: 15,
        monthlyBudget: { single: 4500, couple: 7500, family: 10800 },
        breakdown: {
            housing: { rentOneBR: 1900, rentThreeBR: 3400, buyPricePerSqM: 11000 },
            food: { groceriesMonthly: 600, mealInexpensive: 20, mealMidRange: 70, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 0, taxiPerKm: 2.50, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 200, internetMbps: 260 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 190 },
            entertainment: { gymMembership: 75, cinemaTicket: 15, beerBar: 7 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#dc2626", status: "very-expensive", rank: 15, lastUpdated: "2026-03-01"
    },

    // More Middle East
    "Kuwait": {
        overallIndex: 57.5,
        rank: 70,
        monthlyBudget: { single: 2350, couple: 3950, family: 5900 },
        breakdown: {
            housing: { rentOneBR: 850, rentThreeBR: 1600, buyPricePerSqM: 4800 },
            food: { groceriesMonthly: 400, mealInexpensive: 8, mealMidRange: 32, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 0, taxiPerKm: 0.40, gasolinePerLiter: 0.35 },
            utilities: { basicMonthly: 110, internetMbps: 210 },
            healthcare: { doctorVisit: 55, insuranceMonthly: 160 },
            entertainment: { gymMembership: 70, cinemaTicket: 11, beerBar: 0 }
        },
        currency: "KWD", exchangeRate: 0.31, color: "#fbbf24", status: "moderate", rank: 70, lastUpdated: "2026-03-01"
    },

    "Bahrain": {
        overallIndex: 61.8,
        rank: 59,
        monthlyBudget: { single: 2600, couple: 4400, family: 6600 },
        breakdown: {
            housing: { rentOneBR: 950, rentThreeBR: 1750, buyPricePerSqM: 5200 },
            food: { groceriesMonthly: 420, mealInexpensive: 9, mealMidRange: 35, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 0, taxiPerKm: 0.45, gasolinePerLiter: 0.40 },
            utilities: { basicMonthly: 100, internetMbps: 225 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 170 },
            entertainment: { gymMembership: 75, cinemaTicket: 12, beerBar: 8 }
        },
        currency: "BHD", exchangeRate: 0.38, color: "#fbbf24", status: "moderate", rank: 59, lastUpdated: "2026-03-01"
    },

    "Jordan": {
        overallIndex: 44.5,
        rank: 109,
        monthlyBudget: { single: 1550, couple: 2600, family: 4050 },
        breakdown: {
            housing: { rentOneBR: 550, rentThreeBR: 1000, buyPricePerSqM: 2800 },
            food: { groceriesMonthly: 300, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 30, taxiPerKm: 0.70, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 95, internetMbps: 140 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 100 },
            entertainment: { gymMembership: 42, cinemaTicket: 8, beerBar: 0 }
        },
        currency: "JOD", exchangeRate: 0.71, color: "#22c55e", status: "affordable", rank: 109, lastUpdated: "2026-03-01"
    },

    "Lebanon": {
        overallIndex: 42.8,
        rank: 115,
        monthlyBudget: { single: 1450, couple: 2450, family: 3900 },
        breakdown: {
            housing: { rentOneBR: 500, rentThreeBR: 950, buyPricePerSqM: 3000 },
            food: { groceriesMonthly: 290, mealInexpensive: 6, mealMidRange: 24, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 25, taxiPerKm: 0.65, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 100, internetMbps: 110 },
            healthcare: { doctorVisit: 38, insuranceMonthly: 95 },
            entertainment: { gymMembership: 40, cinemaTicket: 8, beerBar: 4 }
        },
        currency: "LBP", exchangeRate: 89500.0, color: "#22c55e", status: "affordable", rank: 115, lastUpdated: "2026-03-01"
    },

    // More African Countries
    "Algeria": {
        overallIndex: 28.8,
        rank: 157,
        monthlyBudget: { single: 750, couple: 1250, family: 2000 },
        breakdown: {
            housing: { rentOneBR: 240, rentThreeBR: 480, buyPricePerSqM: 1500 },
            food: { groceriesMonthly: 180, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 8, taxiPerKm: 0.25, gasolinePerLiter: 0.35 },
            utilities: { basicMonthly: 55, internetMbps: 85 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 50 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 2 }
        },
        currency: "DZD", exchangeRate: 135.0, color: "#10b981", status: "very-affordable", rank: 157, lastUpdated: "2026-03-01"
    },

    "Senegal": {
        overallIndex: 38.8,
        rank: 129,
        monthlyBudget: { single: 1300, couple: 2200, family: 3500 },
        breakdown: {
            housing: { rentOneBR: 450, rentThreeBR: 850, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 270, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 28, taxiPerKm: 0.50, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 85, internetMbps: 70 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 35, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#22c55e", status: "affordable", rank: 129, lastUpdated: "2026-03-01"
    },

    "Ivory Coast": {
        overallIndex: 40.5,
        rank: 124,
        monthlyBudget: { single: 1350, couple: 2300, family: 3650 },
        breakdown: {
            housing: { rentOneBR: 480, rentThreeBR: 900, buyPricePerSqM: 2600 },
            food: { groceriesMonthly: 280, mealInexpensive: 4.5, mealMidRange: 18, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 30, taxiPerKm: 0.55, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 90, internetMbps: 65 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 38, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#22c55e", status: "affordable", rank: 124, lastUpdated: "2026-03-01"
    },

    "Ethiopia": {
        overallIndex: 24.5,
        rank: 166,
        monthlyBudget: { single: 650, couple: 1050, family: 1700 },
        breakdown: {
            housing: { rentOneBR: 180, rentThreeBR: 350, buyPricePerSqM: 1300 },
            food: { groceriesMonthly: 150, mealInexpensive: 2, mealMidRange: 9, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 10, taxiPerKm: 0.30, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 50, internetMbps: 55 },
            healthcare: { doctorVisit: 15, insuranceMonthly: 40 },
            entertainment: { gymMembership: 20, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "ETB", exchangeRate: 57.0, color: "#10b981", status: "very-affordable", rank: 166, lastUpdated: "2026-03-01"
    },

    "Tanzania": {
        overallIndex: 33.5,
        rank: 146,
        monthlyBudget: { single: 950, couple: 1600, family: 2600 },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 600, buyPricePerSqM: 1900 },
            food: { groceriesMonthly: 230, mealInexpensive: 3, mealMidRange: 14, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 22, taxiPerKm: 0.45, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 70, internetMbps: 60 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "TZS", exchangeRate: 2550.0, color: "#10b981", status: "very-affordable", rank: 146, lastUpdated: "2026-03-01"
    },

    "Uganda": {
        overallIndex: 31.8,
        rank: 151,
        monthlyBudget: { single: 880, couple: 1450, family: 2350 },
        breakdown: {
            housing: { rentOneBR: 290, rentThreeBR: 550, buyPricePerSqM: 1700 },
            food: { groceriesMonthly: 210, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.40, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 65, internetMbps: 50 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 65 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 1.8 }
        },
        currency: "UGX", exchangeRate: 3850.0, color: "#10b981", status: "very-affordable", rank: 151, lastUpdated: "2026-03-01"
    },

    "Zambia": {
        overallIndex: 34.8,
        rank: 142,
        monthlyBudget: { single: 1050, couple: 1750, family: 2850 },
        breakdown: {
            housing: { rentOneBR: 350, rentThreeBR: 650, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 240, mealInexpensive: 3.5, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.50, gasolinePerLiter: 1.45 },
            utilities: { basicMonthly: 75, internetMbps: 55 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 32, cinemaTicket: 5.5, beerBar: 2 }
        },
        currency: "ZMW", exchangeRate: 26.0, color: "#10b981", status: "very-affordable", rank: 142, lastUpdated: "2026-03-01"
    },

    "Mauritius": {
        overallIndex: 48.8,
        rank: 91,
        monthlyBudget: { single: 1850, couple: 3100, family: 4750 },
        breakdown: {
            housing: { rentOneBR: 650, rentThreeBR: 1200, buyPricePerSqM: 3400 },
            food: { groceriesMonthly: 330, mealInexpensive: 7, mealMidRange: 25, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 35, taxiPerKm: 0.80, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 100, internetMbps: 120 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 110 },
            entertainment: { gymMembership: 42, cinemaTicket: 8, beerBar: 3 }
        },
        currency: "MUR", exchangeRate: 45.0, color: "#22c55e", status: "affordable", rank: 91, lastUpdated: "2026-03-01"
    },

    // More Latin American Countries
    "Bolivia": {
        overallIndex: 29.5,
        rank: 158,
        monthlyBudget: { single: 800, couple: 1300, family: 2100 },
        breakdown: {
            housing: { rentOneBR: 250, rentThreeBR: 500, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 190, mealInexpensive: 3, mealMidRange: 12, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.40, gasolinePerLiter: 0.55 },
            utilities: { basicMonthly: 60, internetMbps: 90 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "BOB", exchangeRate: 6.9, color: "#10b981", status: "very-affordable", rank: 158, lastUpdated: "2026-03-01"
    },

    "Paraguay": {
        overallIndex: 32.2,
        rank: 150,
        monthlyBudget: { single: 900, couple: 1500, family: 2450 },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 550, buyPricePerSqM: 1900 },
            food: { groceriesMonthly: 220, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.45, gasolinePerLiter: 1.15 },
            utilities: { basicMonthly: 70, internetMbps: 100 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5.5, beerBar: 2 }
        },
        currency: "PYG", exchangeRate: 7300.0, color: "#10b981", status: "very-affordable", rank: 150, lastUpdated: "2026-03-01"
    },

    "Venezuela": {
        overallIndex: 28.2,
        rank: 161,
        monthlyBudget: { single: 750, couple: 1250, family: 2000 },
        breakdown: {
            housing: { rentOneBR: 220, rentThreeBR: 450, buyPricePerSqM: 1500 },
            food: { groceriesMonthly: 180, mealInexpensive: 3, mealMidRange: 12, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 0.05 },
            utilities: { basicMonthly: 55, internetMbps: 75 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 25, cinemaTicket: 4.5, beerBar: 2 }
        },
        currency: "VES", exchangeRate: 36.5, color: "#10b981", status: "very-affordable", rank: 161, lastUpdated: "2026-03-01"
    },

    "Guatemala": {
        overallIndex: 36.2,
        rank: 137,
        monthlyBudget: { single: 1150, couple: 1950, family: 3100 },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 700, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 250, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 22, taxiPerKm: 0.50, gasolinePerLiter: 1.05 },
            utilities: { basicMonthly: 75, internetMbps: 105 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "GTQ", exchangeRate: 7.8, color: "#22c55e", status: "affordable", rank: 137, lastUpdated: "2026-03-01"
    },

    "Dominican Republic": {
        overallIndex: 42.5,
        rank: 116,
        monthlyBudget: { single: 1450, couple: 2450, family: 3900 },
        breakdown: {
            housing: { rentOneBR: 500, rentThreeBR: 950, buyPricePerSqM: 2900 },
            food: { groceriesMonthly: 290, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 30, taxiPerKm: 0.60, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 95, internetMbps: 115 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 95 },
            entertainment: { gymMembership: 38, cinemaTicket: 7, beerBar: 3 }
        },
        currency: "DOP", exchangeRate: 58.0, color: "#22c55e", status: "affordable", rank: 116, lastUpdated: "2026-03-01"
    },

    "Jamaica": {
        overallIndex: 47.2,
        rank: 99,
        monthlyBudget: { single: 1750, couple: 2950, family: 4500 },
        breakdown: {
            housing: { rentOneBR: 600, rentThreeBR: 1150, buyPricePerSqM: 3200 },
            food: { groceriesMonthly: 320, mealInexpensive: 7, mealMidRange: 25, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 40, taxiPerKm: 0.75, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 105, internetMbps: 110 },
            healthcare: { doctorVisit: 42, insuranceMonthly: 115 },
            entertainment: { gymMembership: 40, cinemaTicket: 8, beerBar: 3 }
        },
        currency: "JMD", exchangeRate: 155.0, color: "#22c55e", status: "affordable", rank: 99, lastUpdated: "2026-03-01"
    },

    // Oceania
    "Fiji": {
        overallIndex: 51.8,
        rank: 84,
        monthlyBudget: { single: 2050, couple: 3450, family: 5200 },
        breakdown: {
            housing: { rentOneBR: 700, rentThreeBR: 1300, buyPricePerSqM: 3800 },
            food: { groceriesMonthly: 350, mealInexpensive: 8, mealMidRange: 28, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 45, taxiPerKm: 0.90, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 120, internetMbps: 95 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 120 },
            entertainment: { gymMembership: 45, cinemaTicket: 8.5, beerBar: 4 }
        },
        currency: "FJD", exchangeRate: 2.3, color: "#fbbf24", status: "moderate", rank: 84, lastUpdated: "2026-03-01"
    },

    "Papua New Guinea": {
        overallIndex: 46.5,
        rank: 102,
        monthlyBudget: { single: 1700, couple: 2850, family: 4400 },
        breakdown: {
            housing: { rentOneBR: 600, rentThreeBR: 1100, buyPricePerSqM: 3100 },
            food: { groceriesMonthly: 310, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 35, taxiPerKm: 0.70, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 110, internetMbps: 60 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 110 },
            entertainment: { gymMembership: 40, cinemaTicket: 7.5, beerBar: 3.5 }
        },
        currency: "PGK", exchangeRate: 3.9, color: "#22c55e", status: "affordable", rank: 102, lastUpdated: "2026-03-01"
    },

    // CHINA - Major Economy
    "China": {
        overallIndex: 43.8,
        rank: 111,
        monthlyBudget: { single: 1450, couple: 2450, family: 3900 },
        breakdown: {
            housing: { rentOneBR: 500, rentThreeBR: 950, buyPricePerSqM: 4200 },
            food: { groceriesMonthly: 280, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.35, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 85, internetMbps: 200 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 80 },
            entertainment: { gymMembership: 35, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "CNY", exchangeRate: 7.2, color: "#22c55e", status: "affordable", rank: 111, lastUpdated: "2026-03-01"
    },

    // More African Countries - Comprehensive Coverage
    "Zimbabwe": {
        overallIndex: 36.8,
        rank: 135,
        monthlyBudget: { single: 1150, couple: 1950, family: 3100 },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 700, buyPricePerSqM: 2100 },
            food: { groceriesMonthly: 260, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 25, taxiPerKm: 0.50, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 80, internetMbps: 65 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 32, cinemaTicket: 5.5, beerBar: 2 }
        },
        currency: "ZWL", exchangeRate: 13.5, color: "#22c55e", status: "affordable", rank: 135, lastUpdated: "2026-03-01"
    },

    "Botswana": {
        overallIndex: 42.5,
        rank: 117,
        monthlyBudget: { single: 1450, couple: 2450, family: 3900 },
        breakdown: {
            housing: { rentOneBR: 500, rentThreeBR: 950, buyPricePerSqM: 2700 },
            food: { groceriesMonthly: 290, mealInexpensive: 5, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 30, taxiPerKm: 0.55, gasolinePerLiter: 1.25 },
            utilities: { basicMonthly: 90, internetMbps: 85 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 95 },
            entertainment: { gymMembership: 38, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "BWP", exchangeRate: 13.5, color: "#22c55e", status: "affordable", rank: 117, lastUpdated: "2026-03-01"
    },

    "Namibia": {
        overallIndex: 41.8,
        rank: 119,
        monthlyBudget: { single: 1400, couple: 2350, family: 3750 },
        breakdown: {
            housing: { rentOneBR: 480, rentThreeBR: 900, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 280, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 28, taxiPerKm: 0.50, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 85, internetMbps: 80 },
            healthcare: { doctorVisit: 32, insuranceMonthly: 90 },
            entertainment: { gymMembership: 35, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "NAD", exchangeRate: 18.5, color: "#22c55e", status: "affordable", rank: 119, lastUpdated: "2026-03-01"
    },

    "Angola": {
        overallIndex: 48.5,
        rank: 93,
        monthlyBudget: { single: 1850, couple: 3100, family: 4750 },
        breakdown: {
            housing: { rentOneBR: 700, rentThreeBR: 1300, buyPricePerSqM: 3500 },
            food: { groceriesMonthly: 340, mealInexpensive: 7, mealMidRange: 28, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 35, taxiPerKm: 0.70, gasolinePerLiter: 0.45 },
            utilities: { basicMonthly: 110, internetMbps: 70 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 120 },
            entertainment: { gymMembership: 45, cinemaTicket: 8, beerBar: 3.5 }
        },
        currency: "AOA", exchangeRate: 835.0, color: "#22c55e", status: "affordable", rank: 93, lastUpdated: "2026-03-01"
    },

    "Mozambique": {
        overallIndex: 30.5,
        rank: 155,
        monthlyBudget: { single: 850, couple: 1400, family: 2250 },
        breakdown: {
            housing: { rentOneBR: 280, rentThreeBR: 550, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 200, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.40, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 65, internetMbps: 55 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "MZN", exchangeRate: 64.0, color: "#10b981", status: "very-affordable", rank: 155, lastUpdated: "2026-03-01"
    },

    "Rwanda": {
        overallIndex: 35.2,
        rank: 140,
        monthlyBudget: { single: 1100, couple: 1850, family: 3000 },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 700, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 250, mealInexpensive: 3.5, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 28, taxiPerKm: 0.50, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 75, internetMbps: 75 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "RWF", exchangeRate: 1350.0, color: "#10b981", status: "very-affordable", rank: 140, lastUpdated: "2026-03-01"
    },

    "Madagascar": {
        overallIndex: 26.5,
        rank: 163,
        monthlyBudget: { single: 700, couple: 1150, family: 1850 },
        breakdown: {
            housing: { rentOneBR: 220, rentThreeBR: 450, buyPricePerSqM: 1500 },
            food: { groceriesMonthly: 170, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 1.25 },
            utilities: { basicMonthly: 55, internetMbps: 50 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 50 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "MGA", exchangeRate: 4600.0, color: "#10b981", status: "very-affordable", rank: 163, lastUpdated: "2026-03-01"
    },

    "Cameroon": {
        overallIndex: 37.5,
        rank: 134,
        monthlyBudget: { single: 1200, couple: 2000, family: 3200 },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2300 },
            food: { groceriesMonthly: 260, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 28, taxiPerKm: 0.50, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 85, internetMbps: 65 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "XAF", exchangeRate: 605.0, color: "#22c55e", status: "affordable", rank: 134, lastUpdated: "2026-03-01"
    },

    "Democratic Republic of Congo": {
        overallIndex: 33.8,
        rank: 145,
        monthlyBudget: { single: 950, couple: 1600, family: 2600 },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 600, buyPricePerSqM: 1900 },
            food: { groceriesMonthly: 230, mealInexpensive: 3.5, mealMidRange: 14, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 22, taxiPerKm: 0.45, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 70, internetMbps: 45 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 70 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "CDF", exchangeRate: 2800.0, color: "#10b981", status: "very-affordable", rank: 145, lastUpdated: "2026-03-01"
    },

    "Mali": {
        overallIndex: 32.8,
        rank: 148,
        monthlyBudget: { single: 900, couple: 1500, family: 2450 },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 550, buyPricePerSqM: 1700 },
            food: { groceriesMonthly: 210, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.40, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 65, internetMbps: 50 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 25, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#10b981", status: "very-affordable", rank: 148, lastUpdated: "2026-03-01"
    },

    "Burkina Faso": {
        overallIndex: 31.5,
        rank: 152,
        monthlyBudget: { single: 870, couple: 1450, family: 2350 },
        breakdown: {
            housing: { rentOneBR: 280, rentThreeBR: 530, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 200, mealInexpensive: 2.5, mealMidRange: 12, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.35, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 60, internetMbps: 48 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 24, cinemaTicket: 4.5, beerBar: 1.8 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#10b981", status: "very-affordable", rank: 152, lastUpdated: "2026-03-01"
    },

    "Niger": {
        overallIndex: 29.8,
        rank: 156,
        monthlyBudget: { single: 800, couple: 1300, family: 2100 },
        breakdown: {
            housing: { rentOneBR: 250, rentThreeBR: 500, buyPricePerSqM: 1500 },
            food: { groceriesMonthly: 190, mealInexpensive: 2.5, mealMidRange: 11, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.30, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 55, internetMbps: 45 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 50 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#10b981", status: "very-affordable", rank: 156, lastUpdated: "2026-03-01"
    },

    "Benin": {
        overallIndex: 33.2,
        rank: 147,
        monthlyBudget: { single: 920, couple: 1550, family: 2500 },
        breakdown: {
            housing: { rentOneBR: 310, rentThreeBR: 580, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 220, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.40, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 65, internetMbps: 52 },
            healthcare: { doctorVisit: 23, insuranceMonthly: 62 },
            entertainment: { gymMembership: 26, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#10b981", status: "very-affordable", rank: 147, lastUpdated: "2026-03-01"
    },

    "Togo": {
        overallIndex: 32.5,
        rank: 149,
        monthlyBudget: { single: 900, couple: 1500, family: 2450 },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 560, buyPricePerSqM: 1750 },
            food: { groceriesMonthly: 210, mealInexpensive: 2.8, mealMidRange: 12, mcdonaldsMeal: 4.8 },
            transport: { monthlyPass: 18, taxiPerKm: 0.38, gasolinePerLiter: 1.32 },
            utilities: { basicMonthly: 62, internetMbps: 50 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 25, cinemaTicket: 4.5, beerBar: 1.8 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#10b981", status: "very-affordable", rank: 149, lastUpdated: "2026-03-01"
    },

    "Sierra Leone": {
        overallIndex: 30.2,
        rank: 155,
        monthlyBudget: { single: 830, couple: 1380, family: 2200 },
        breakdown: {
            housing: { rentOneBR: 270, rentThreeBR: 520, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 195, mealInexpensive: 2.8, mealMidRange: 12, mcdonaldsMeal: 4.8 },
            transport: { monthlyPass: 18, taxiPerKm: 0.38, gasolinePerLiter: 1.28 },
            utilities: { basicMonthly: 60, internetMbps: 48 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 24, cinemaTicket: 4.5, beerBar: 1.8 }
        },
        currency: "SLL", exchangeRate: 22000.0, color: "#10b981", status: "very-affordable", rank: 155, lastUpdated: "2026-03-01"
    },

    "Liberia": {
        overallIndex: 34.2,
        rank: 144,
        monthlyBudget: { single: 1000, couple: 1680, family: 2700 },
        breakdown: {
            housing: { rentOneBR: 330, rentThreeBR: 620, buyPricePerSqM: 1950 },
            food: { groceriesMonthly: 235, mealInexpensive: 3.5, mealMidRange: 14, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 22, taxiPerKm: 0.42, gasolinePerLiter: 1.38 },
            utilities: { basicMonthly: 72, internetMbps: 52 },
            healthcare: { doctorVisit: 26, insuranceMonthly: 68 },
            entertainment: { gymMembership: 28, cinemaTicket: 5.5, beerBar: 2.2 }
        },
        currency: "LRD", exchangeRate: 190.0, color: "#10b981", status: "very-affordable", rank: 144, lastUpdated: "2026-03-01"
    },

    "Malawi": {
        overallIndex: 28.5,
        rank: 159,
        monthlyBudget: { single: 750, couple: 1250, family: 2000 },
        breakdown: {
            housing: { rentOneBR: 240, rentThreeBR: 480, buyPricePerSqM: 1550 },
            food: { groceriesMonthly: 180, mealInexpensive: 2.5, mealMidRange: 11, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 58, internetMbps: 48 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 50 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 1.8 }
        },
        currency: "MWK", exchangeRate: 1730.0, color: "#10b981", status: "very-affordable", rank: 159, lastUpdated: "2026-03-01"
    },

    "Sudan": {
        overallIndex: 27.2,
        rank: 161,
        monthlyBudget: { single: 720, couple: 1200, family: 1950 },
        breakdown: {
            housing: { rentOneBR: 230, rentThreeBR: 460, buyPricePerSqM: 1400 },
            food: { groceriesMonthly: 175, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 12, taxiPerKm: 0.30, gasolinePerLiter: 0.85 },
            utilities: { basicMonthly: 52, internetMbps: 42 },
            healthcare: { doctorVisit: 16, insuranceMonthly: 45 },
            entertainment: { gymMembership: 20, cinemaTicket: 4, beerBar: 0 }
        },
        currency: "SDG", exchangeRate: 600.0, color: "#10b981", status: "very-affordable", rank: 161, lastUpdated: "2026-03-01"
    },

    "Chad": {
        overallIndex: 39.2,
        rank: 128,
        monthlyBudget: { single: 1300, couple: 2150, family: 3450 },
        breakdown: {
            housing: { rentOneBR: 420, rentThreeBR: 800, buyPricePerSqM: 2300 },
            food: { groceriesMonthly: 280, mealInexpensive: 4.5, mealMidRange: 18, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.52, gasolinePerLiter: 1.45 },
            utilities: { basicMonthly: 88, internetMbps: 48 },
            healthcare: { doctorVisit: 32, insuranceMonthly: 85 },
            entertainment: { gymMembership: 35, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "XAF", exchangeRate: 605.0, color: "#22c55e", status: "affordable", rank: 128, lastUpdated: "2026-03-01"
    },

    "Gabon": {
        overallIndex: 54.2,
        rank: 77,
        monthlyBudget: { single: 2150, couple: 3600, family: 5450 },
        breakdown: {
            housing: { rentOneBR: 820, rentThreeBR: 1500, buyPricePerSqM: 4200 },
            food: { groceriesMonthly: 370, mealInexpensive: 8, mealMidRange: 30, mcdonaldsMeal: 8.5 },
            transport: { monthlyPass: 40, taxiPerKm: 0.85, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 130, internetMbps: 80 },
            healthcare: { doctorVisit: 52, insuranceMonthly: 135 },
            entertainment: { gymMembership: 55, cinemaTicket: 10, beerBar: 4 }
        },
        currency: "XAF", exchangeRate: 605.0, color: "#fbbf24", status: "moderate", rank: 77, lastUpdated: "2026-03-01"
    },

    "Equatorial Guinea": {
        overallIndex: 56.8,
        rank: 72,
        monthlyBudget: { single: 2300, couple: 3850, family: 5800 },
        breakdown: {
            housing: { rentOneBR: 900, rentThreeBR: 1650, buyPricePerSqM: 4600 },
            food: { groceriesMonthly: 390, mealInexpensive: 9, mealMidRange: 32, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 45, taxiPerKm: 0.90, gasolinePerLiter: 0.65 },
            utilities: { basicMonthly: 140, internetMbps: 70 },
            healthcare: { doctorVisit: 58, insuranceMonthly: 145 },
            entertainment: { gymMembership: 60, cinemaTicket: 11, beerBar: 4.5 }
        },
        currency: "XAF", exchangeRate: 605.0, color: "#fbbf24", status: "moderate", rank: 72, lastUpdated: "2026-03-01"
    },

    "Republic of Congo": {
        overallIndex: 44.8,
        rank: 108,
        monthlyBudget: { single: 1550, couple: 2600, family: 4100 },
        breakdown: {
            housing: { rentOneBR: 550, rentThreeBR: 1050, buyPricePerSqM: 3000 },
            food: { groceriesMonthly: 310, mealInexpensive: 5.5, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 32, taxiPerKm: 0.60, gasolinePerLiter: 1.25 },
            utilities: { basicMonthly: 100, internetMbps: 60 },
            healthcare: { doctorVisit: 38, insuranceMonthly: 100 },
            entertainment: { gymMembership: 40, cinemaTicket: 7, beerBar: 3 }
        },
        currency: "XAF", exchangeRate: 605.0, color: "#22c55e", status: "affordable", rank: 108, lastUpdated: "2026-03-01"
    },

    // Middle East - Complete Coverage
    "Iran": {
        overallIndex: 31.5,
        rank: 151,
        monthlyBudget: { single: 870, couple: 1450, family: 2350 },
        breakdown: {
            housing: { rentOneBR: 280, rentThreeBR: 550, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 210, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 10, taxiPerKm: 0.25, gasolinePerLiter: 0.15 },
            utilities: { basicMonthly: 65, internetMbps: 90 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 25, cinemaTicket: 4, beerBar: 0 }
        },
        currency: "IRR", exchangeRate: 42000.0, color: "#10b981", status: "very-affordable", rank: 151, lastUpdated: "2026-03-01"
    },

    "Iraq": {
        overallIndex: 36.5,
        rank: 136,
        monthlyBudget: { single: 1150, couple: 1900, family: 3100 },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 720, buyPricePerSqM: 2100 },
            food: { groceriesMonthly: 260, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 0.45 },
            utilities: { basicMonthly: 80, internetMbps: 75 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 5.5, beerBar: 0 }
        },
        currency: "IQD", exchangeRate: 1310.0, color: "#22c55e", status: "affordable", rank: 136, lastUpdated: "2026-03-01"
    },

    "Syria": {
        overallIndex: 25.8,
        rank: 164,
        monthlyBudget: { single: 680, couple: 1100, family: 1800 },
        breakdown: {
            housing: { rentOneBR: 200, rentThreeBR: 400, buyPricePerSqM: 1200 },
            food: { groceriesMonthly: 165, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 8, taxiPerKm: 0.20, gasolinePerLiter: 0.80 },
            utilities: { basicMonthly: 50, internetMbps: 55 },
            healthcare: { doctorVisit: 15, insuranceMonthly: 45 },
            entertainment: { gymMembership: 20, cinemaTicket: 3.5, beerBar: 0 }
        },
        currency: "SYP", exchangeRate: 13000.0, color: "#10b981", status: "very-affordable", rank: 164, lastUpdated: "2026-03-01"
    },

    "Yemen": {
        overallIndex: 27.5,
        rank: 160,
        monthlyBudget: { single: 730, couple: 1200, family: 1950 },
        breakdown: {
            housing: { rentOneBR: 230, rentThreeBR: 460, buyPricePerSqM: 1400 },
            food: { groceriesMonthly: 175, mealInexpensive: 2.5, mealMidRange: 11, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 12, taxiPerKm: 0.30, gasolinePerLiter: 0.55 },
            utilities: { basicMonthly: 55, internetMbps: 45 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 50 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 0 }
        },
        currency: "YER", exchangeRate: 1050.0, color: "#10b981", status: "very-affordable", rank: 160, lastUpdated: "2026-03-01"
    },

    "Afghanistan": {
        overallIndex: 23.8,
        rank: 167,
        monthlyBudget: { single: 620, couple: 1000, family: 1600 },
        breakdown: {
            housing: { rentOneBR: 170, rentThreeBR: 340, buyPricePerSqM: 1100 },
            food: { groceriesMonthly: 145, mealInexpensive: 2, mealMidRange: 9, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 10, taxiPerKm: 0.25, gasolinePerLiter: 0.90 },
            utilities: { basicMonthly: 48, internetMbps: 40 },
            healthcare: { doctorVisit: 12, insuranceMonthly: 35 },
            entertainment: { gymMembership: 18, cinemaTicket: 3.5, beerBar: 0 }
        },
        currency: "AFN", exchangeRate: 88.0, color: "#10b981", status: "very-affordable", rank: 167, lastUpdated: "2026-03-01"
    },

    // More Asian Countries
    "Brunei": {
        overallIndex: 55.8,
        rank: 74,
        monthlyBudget: { single: 2250, couple: 3750, family: 5650 },
        breakdown: {
            housing: { rentOneBR: 800, rentThreeBR: 1500, buyPricePerSqM: 4500 },
            food: { groceriesMonthly: 370, mealInexpensive: 5, mealMidRange: 25, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 0, taxiPerKm: 0.50, gasolinePerLiter: 0.35 },
            utilities: { basicMonthly: 90, internetMbps: 200 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 100 },
            entertainment: { gymMembership: 50, cinemaTicket: 9, beerBar: 0 }
        },
        currency: "BND", exchangeRate: 1.35, color: "#fbbf24", status: "moderate", rank: 74, lastUpdated: "2026-03-01"
    },

    "Timor-Leste": {
        overallIndex: 42.8,
        rank: 114,
        monthlyBudget: { single: 1450, couple: 2450, family: 3900 },
        breakdown: {
            housing: { rentOneBR: 500, rentThreeBR: 950, buyPricePerSqM: 2700 },
            food: { groceriesMonthly: 290, mealInexpensive: 5, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 0, taxiPerKm: 0.60, gasolinePerLiter: 0.85 },
            utilities: { basicMonthly: 95, internetMbps: 50 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 90 },
            entertainment: { gymMembership: 35, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "USD", exchangeRate: 1.0, color: "#22c55e", status: "affordable", rank: 114, lastUpdated: "2026-03-01"
    },

    "Maldives": {
        overallIndex: 72.5,
        rank: 38,
        monthlyBudget: { single: 3650, couple: 6100, family: 8900 },
        breakdown: {
            housing: { rentOneBR: 1600, rentThreeBR: 2900, buyPricePerSqM: 7500 },
            food: { groceriesMonthly: 510, mealInexpensive: 12, mealMidRange: 45, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 35, taxiPerKm: 1.20, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 150, internetMbps: 120 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 180 },
            entertainment: { gymMembership: 85, cinemaTicket: 12, beerBar: 0 }
        },
        currency: "MVR", exchangeRate: 15.4, color: "#f97316", status: "expensive", rank: 38, lastUpdated: "2026-03-01"
    },

    "Bhutan": {
        overallIndex: 38.5,
        rank: 131,
        monthlyBudget: { single: 1280, couple: 2150, family: 3450 },
        breakdown: {
            housing: { rentOneBR: 420, rentThreeBR: 800, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 270, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.45, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 75, internetMbps: 70 },
            healthcare: { doctorVisit: 15, insuranceMonthly: 60 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "BTN", exchangeRate: 83.0, color: "#22c55e", status: "affordable", rank: 131, lastUpdated: "2026-03-01"
    },

    "North Korea": {
        overallIndex: 19.5,
        rank: 173,
        monthlyBudget: { single: 520, couple: 850, family: 1350 },
        breakdown: {
            housing: { rentOneBR: 140, rentThreeBR: 280, buyPricePerSqM: 800 },
            food: { groceriesMonthly: 125, mealInexpensive: 1.5, mealMidRange: 7, mcdonaldsMeal: 0 },
            transport: { monthlyPass: 5, taxiPerKm: 0.15, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 40, internetMbps: 10 },
            healthcare: { doctorVisit: 8, insuranceMonthly: 25 },
            entertainment: { gymMembership: 15, cinemaTicket: 2, beerBar: 1 }
        },
        currency: "KPW", exchangeRate: 900.0, color: "#10b981", status: "very-affordable", rank: 173, lastUpdated: "2026-03-01"
    },

    // European Countries - Complete
    "Albania": {
        overallIndex: 39.5,
        rank: 126,
        monthlyBudget: { single: 1300, couple: 2200, family: 3550 },
        breakdown: {
            housing: { rentOneBR: 430, rentThreeBR: 800, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 270, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 20, taxiPerKm: 0.50, gasolinePerLiter: 1.65 },
            utilities: { basicMonthly: 85, internetMbps: 115 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2 }
        },
        currency: "ALL", exchangeRate: 100.0, color: "#22c55e", status: "affordable", rank: 126, lastUpdated: "2026-03-01"
    },

    "Bosnia and Herzegovina": {
        overallIndex: 40.8,
        rank: 123,
        monthlyBudget: { single: 1350, couple: 2300, family: 3700 },
        breakdown: {
            housing: { rentOneBR: 450, rentThreeBR: 850, buyPricePerSqM: 2700 },
            food: { groceriesMonthly: 280, mealInexpensive: 5.5, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.55, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 105, internetMbps: 110 },
            healthcare: { doctorVisit: 32, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "BAM", exchangeRate: 1.8, color: "#22c55e", status: "affordable", rank: 123, lastUpdated: "2026-03-01"
    },

    "North Macedonia": {
        overallIndex: 38.8,
        rank: 129,
        monthlyBudget: { single: 1300, couple: 2200, family: 3500 },
        breakdown: {
            housing: { rentOneBR: 420, rentThreeBR: 780, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 270, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 22, taxiPerKm: 0.50, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 95, internetMbps: 105 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2 }
        },
        currency: "MKD", exchangeRate: 57.0, color: "#22c55e", status: "affordable", rank: 129, lastUpdated: "2026-03-01"
    },

    "Montenegro": {
        overallIndex: 45.5,
        rank: 106,
        monthlyBudget: { single: 1600, couple: 2700, family: 4200 },
        breakdown: {
            housing: { rentOneBR: 580, rentThreeBR: 1050, buyPricePerSqM: 3300 },
            food: { groceriesMonthly: 300, mealInexpensive: 7, mealMidRange: 24, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 28, taxiPerKm: 0.70, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 110, internetMbps: 125 },
            healthcare: { doctorVisit: 38, insuranceMonthly: 95 },
            entertainment: { gymMembership: 38, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#22c55e", status: "affordable", rank: 106, lastUpdated: "2026-03-01"
    },

    "Moldova": {
        overallIndex: 33.5,
        rank: 145,
        monthlyBudget: { single: 950, couple: 1600, family: 2600 },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 600, buyPricePerSqM: 1900 },
            food: { groceriesMonthly: 230, mealInexpensive: 4, mealMidRange: 15, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 85, internetMbps: 105 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 65 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "MDL", exchangeRate: 18.0, color: "#10b981", status: "very-affordable", rank: 145, lastUpdated: "2026-03-01"
    },

    "Belarus": {
        overallIndex: 35.8,
        rank: 139,
        monthlyBudget: { single: 1100, couple: 1850, family: 3000 },
        breakdown: {
            housing: { rentOneBR: 370, rentThreeBR: 700, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 250, mealInexpensive: 4.5, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.35, gasolinePerLiter: 1.00 },
            utilities: { basicMonthly: 90, internetMbps: 130 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5.5, beerBar: 2 }
        },
        currency: "BYN", exchangeRate: 3.2, color: "#22c55e", status: "affordable", rank: 139, lastUpdated: "2026-03-01"
    },

    // Central America & Caribbean - Complete
    "Cuba": {
        overallIndex: 34.2,
        rank: 143,
        monthlyBudget: { single: 1000, couple: 1700, family: 2750 },
        breakdown: {
            housing: { rentOneBR: 330, rentThreeBR: 620, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 240, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 0 },
            transport: { monthlyPass: 3, taxiPerKm: 0.50, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 70, internetMbps: 40 },
            healthcare: { doctorVisit: 0, insuranceMonthly: 50 },
            entertainment: { gymMembership: 25, cinemaTicket: 0.5, beerBar: 2 }
        },
        currency: "CUP", exchangeRate: 120.0, color: "#10b981", status: "very-affordable", rank: 143, lastUpdated: "2026-03-01"
    },

    "Haiti": {
        overallIndex: 37.2,
        rank: 133,
        monthlyBudget: { single: 1200, couple: 2000, family: 3250 },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 270, mealInexpensive: 4.5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 25, taxiPerKm: 0.55, gasolinePerLiter: 1.80 },
            utilities: { basicMonthly: 90, internetMbps: 35 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "HTG", exchangeRate: 145.0, color: "#22c55e", status: "affordable", rank: 133, lastUpdated: "2026-03-01"
    },

    "Nicaragua": {
        overallIndex: 33.8,
        rank: 144,
        monthlyBudget: { single: 980, couple: 1650, family: 2650 },
        breakdown: {
            housing: { rentOneBR: 330, rentThreeBR: 620, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 235, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.45, gasolinePerLiter: 1.25 },
            utilities: { basicMonthly: 75, internetMbps: 85 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 5.5, beerBar: 2 }
        },
        currency: "NIO", exchangeRate: 36.5, color: "#10b981", status: "very-affordable", rank: 144, lastUpdated: "2026-03-01"
    },

    "Honduras": {
        overallIndex: 35.2,
        rank: 141,
        monthlyBudget: { single: 1080, couple: 1820, family: 2950 },
        breakdown: {
            housing: { rentOneBR: 360, rentThreeBR: 680, buyPricePerSqM: 2100 },
            food: { groceriesMonthly: 245, mealInexpensive: 4.5, mealMidRange: 17, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 22, taxiPerKm: 0.48, gasolinePerLiter: 1.15 },
            utilities: { basicMonthly: 78, internetMbps: 95 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "HNL", exchangeRate: 24.5, color: "#10b981", status: "very-affordable", rank: 141, lastUpdated: "2026-03-01"
    },

    "El Salvador": {
        overallIndex: 40.5,
        rank: 125,
        monthlyBudget: { single: 1350, couple: 2280, family: 3650 },
        breakdown: {
            housing: { rentOneBR: 470, rentThreeBR: 880, buyPricePerSqM: 2600 },
            food: { groceriesMonthly: 280, mealInexpensive: 5.5, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 28, taxiPerKm: 0.55, gasolinePerLiter: 1.05 },
            utilities: { basicMonthly: 88, internetMbps: 105 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 90 },
            entertainment: { gymMembership: 35, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "USD", exchangeRate: 1.0, color: "#22c55e", status: "affordable", rank: 125, lastUpdated: "2026-03-01"
    },

    "Belize": {
        overallIndex: 48.5,
        rank: 92,
        monthlyBudget: { single: 1850, couple: 3100, family: 4750 },
        breakdown: {
            housing: { rentOneBR: 680, rentThreeBR: 1250, buyPricePerSqM: 3400 },
            food: { groceriesMonthly: 330, mealInexpensive: 7, mealMidRange: 25, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 40, taxiPerKm: 0.75, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 105, internetMbps: 90 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 110 },
            entertainment: { gymMembership: 42, cinemaTicket: 8, beerBar: 3 }
        },
        currency: "BZD", exchangeRate: 2.0, color: "#22c55e", status: "affordable", rank: 92, lastUpdated: "2026-03-01"
    },

    // South America - Complete
    "Guyana": {
        overallIndex: 43.2,
        rank: 113,
        monthlyBudget: { single: 1480, couple: 2500, family: 3950 },
        breakdown: {
            housing: { rentOneBR: 520, rentThreeBR: 980, buyPricePerSqM: 2850 },
            food: { groceriesMonthly: 295, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 30, taxiPerKm: 0.65, gasolinePerLiter: 0.75 },
            utilities: { basicMonthly: 92, internetMbps: 85 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 95 },
            entertainment: { gymMembership: 38, cinemaTicket: 7, beerBar: 2.5 }
        },
        currency: "GYD", exchangeRate: 209.0, color: "#22c55e", status: "affordable", rank: 113, lastUpdated: "2026-03-01"
    },

    "Suriname": {
        overallIndex: 46.8,
        rank: 100,
        monthlyBudget: { single: 1750, couple: 2950, family: 4500 },
        breakdown: {
            housing: { rentOneBR: 630, rentThreeBR: 1180, buyPricePerSqM: 3200 },
            food: { groceriesMonthly: 320, mealInexpensive: 6.5, mealMidRange: 24, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 35, taxiPerKm: 0.70, gasolinePerLiter: 0.65 },
            utilities: { basicMonthly: 98, internetMbps: 80 },
            healthcare: { doctorVisit: 40, insuranceMonthly: 105 },
            entertainment: { gymMembership: 40, cinemaTicket: 7.5, beerBar: 3 }
        },
        currency: "SRD", exchangeRate: 35.0, color: "#22c55e", status: "affordable", rank: 100, lastUpdated: "2026-03-01"
    },

    // More African Countries - Complete Coverage
    "Somalia": {
        overallIndex: 35.8,
        rank: 138,
        monthlyBudget: { single: 1100, couple: 1850, family: 3000 },
        breakdown: {
            housing: { rentOneBR: 370, rentThreeBR: 700, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 250, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.50, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 75, internetMbps: 35 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "SOS", exchangeRate: 570.0, color: "#22c55e", status: "affordable", rank: 138, lastUpdated: "2026-03-01"
    },

    "Eritrea": {
        overallIndex: 31.8,
        rank: 150,
        monthlyBudget: { single: 880, couple: 1450, family: 2350 },
        breakdown: {
            housing: { rentOneBR: 290, rentThreeBR: 550, buyPricePerSqM: 1700 },
            food: { groceriesMonthly: 210, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.40, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 65, internetMbps: 25 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 25, cinemaTicket: 4.5, beerBar: 1.8 }
        },
        currency: "ERN", exchangeRate: 15.0, color: "#10b981", status: "very-affordable", rank: 150, lastUpdated: "2026-03-01"
    },

    "Djibouti": {
        overallIndex: 52.5,
        rank: 83,
        monthlyBudget: { single: 2100, couple: 3500, family: 5300 },
        breakdown: {
            housing: { rentOneBR: 780, rentThreeBR: 1450, buyPricePerSqM: 4100 },
            food: { groceriesMonthly: 360, mealInexpensive: 8, mealMidRange: 30, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 35, taxiPerKm: 0.80, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 125, internetMbps: 65 },
            healthcare: { doctorVisit: 50, insuranceMonthly: 130 },
            entertainment: { gymMembership: 50, cinemaTicket: 9, beerBar: 3.5 }
        },
        currency: "DJF", exchangeRate: 177.0, color: "#fbbf24", status: "moderate", rank: 83, lastUpdated: "2026-03-01"
    },

    "Mauritania": {
        overallIndex: 36.5,
        rank: 137,
        monthlyBudget: { single: 1150, couple: 1950, family: 3100 },
        breakdown: {
            housing: { rentOneBR: 380, rentThreeBR: 720, buyPricePerSqM: 2100 },
            food: { groceriesMonthly: 260, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 22, taxiPerKm: 0.48, gasolinePerLiter: 0.95 },
            utilities: { basicMonthly: 80, internetMbps: 55 },
            healthcare: { doctorVisit: 28, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 5.5, beerBar: 2 }
        },
        currency: "MRU", exchangeRate: 37.0, color: "#22c55e", status: "affordable", rank: 137, lastUpdated: "2026-03-01"
    },

    "Guinea": {
        overallIndex: 33.5,
        rank: 146,
        monthlyBudget: { single: 950, couple: 1600, family: 2600 },
        breakdown: {
            housing: { rentOneBR: 320, rentThreeBR: 600, buyPricePerSqM: 1900 },
            food: { groceriesMonthly: 230, mealInexpensive: 3.5, mealMidRange: 14, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.42, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 70, internetMbps: 45 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 68 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "GNF", exchangeRate: 8600.0, color: "#10b981", status: "very-affordable", rank: 146, lastUpdated: "2026-03-01"
    },

    "Guinea-Bissau": {
        overallIndex: 32.2,
        rank: 150,
        monthlyBudget: { single: 900, couple: 1500, family: 2450 },
        breakdown: {
            housing: { rentOneBR: 300, rentThreeBR: 560, buyPricePerSqM: 1750 },
            food: { groceriesMonthly: 215, mealInexpensive: 3, mealMidRange: 13, mcdonaldsMeal: 5 },
            transport: { monthlyPass: 18, taxiPerKm: 0.40, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 65, internetMbps: 40 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 25, cinemaTicket: 4.5, beerBar: 1.8 }
        },
        currency: "XOF", exchangeRate: 605.0, color: "#10b981", status: "very-affordable", rank: 150, lastUpdated: "2026-03-01"
    },

    "Central African Republic": {
        overallIndex: 37.8,
        rank: 132,
        monthlyBudget: { single: 1250, couple: 2100, family: 3400 },
        breakdown: {
            housing: { rentOneBR: 410, rentThreeBR: 780, buyPricePerSqM: 2200 },
            food: { groceriesMonthly: 270, mealInexpensive: 4.5, mealMidRange: 17, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 25, taxiPerKm: 0.50, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 85, internetMbps: 35 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "XAF", exchangeRate: 605.0, color: "#22c55e", status: "affordable", rank: 132, lastUpdated: "2026-03-01"
    },

    "South Sudan": {
        overallIndex: 41.5,
        rank: 120,
        monthlyBudget: { single: 1400, couple: 2350, family: 3800 },
        breakdown: {
            housing: { rentOneBR: 480, rentThreeBR: 900, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 290, mealInexpensive: 5, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 28, taxiPerKm: 0.55, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 95, internetMbps: 30 },
            healthcare: { doctorVisit: 35, insuranceMonthly: 90 },
            entertainment: { gymMembership: 35, cinemaTicket: 6.5, beerBar: 2.5 }
        },
        currency: "SSP", exchangeRate: 1300.0, color: "#22c55e", status: "affordable", rank: 120, lastUpdated: "2026-03-01"
    },

    "Burundi": {
        overallIndex: 29.5,
        rank: 157,
        monthlyBudget: { single: 800, couple: 1300, family: 2100 },
        breakdown: {
            housing: { rentOneBR: 260, rentThreeBR: 510, buyPricePerSqM: 1600 },
            food: { groceriesMonthly: 190, mealInexpensive: 2.5, mealMidRange: 11, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 15, taxiPerKm: 0.35, gasolinePerLiter: 1.45 },
            utilities: { basicMonthly: 60, internetMbps: 40 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 22, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "BIF", exchangeRate: 2850.0, color: "#10b981", status: "very-affordable", rank: 157, lastUpdated: "2026-03-01"
    },

    "Lesotho": {
        overallIndex: 37.5,
        rank: 134,
        monthlyBudget: { single: 1200, couple: 2000, family: 3250 },
        breakdown: {
            housing: { rentOneBR: 400, rentThreeBR: 750, buyPricePerSqM: 2100 },
            food: { groceriesMonthly: 265, mealInexpensive: 4.5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 30, taxiPerKm: 0.52, gasolinePerLiter: 1.30 },
            utilities: { basicMonthly: 85, internetMbps: 70 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 80 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "LSL", exchangeRate: 18.5, color: "#22c55e", status: "affordable", rank: 134, lastUpdated: "2026-03-01"
    },

    "Eswatini": {
        overallIndex: 39.8,
        rank: 127,
        monthlyBudget: { single: 1320, couple: 2220, family: 3580 },
        breakdown: {
            housing: { rentOneBR: 440, rentThreeBR: 830, buyPricePerSqM: 2400 },
            food: { groceriesMonthly: 275, mealInexpensive: 5, mealMidRange: 19, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 32, taxiPerKm: 0.55, gasolinePerLiter: 1.25 },
            utilities: { basicMonthly: 88, internetMbps: 75 },
            healthcare: { doctorVisit: 32, insuranceMonthly: 85 },
            entertainment: { gymMembership: 33, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "SZL", exchangeRate: 18.5, color: "#22c55e", status: "affordable", rank: 127, lastUpdated: "2026-03-01"
    },

    "Comoros": {
        overallIndex: 40.2,
        rank: 125,
        monthlyBudget: { single: 1330, couple: 2250, family: 3600 },
        breakdown: {
            housing: { rentOneBR: 450, rentThreeBR: 850, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 280, mealInexpensive: 5, mealMidRange: 20, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.55, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 90, internetMbps: 45 },
            healthcare: { doctorVisit: 33, insuranceMonthly: 85 },
            entertainment: { gymMembership: 33, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "KMF", exchangeRate: 455.0, color: "#22c55e", status: "affordable", rank: 125, lastUpdated: "2026-03-01"
    },

    "Seychelles": {
        overallIndex: 73.8,
        rank: 36,
        monthlyBudget: { single: 3750, couple: 6250, family: 9150 },
        breakdown: {
            housing: { rentOneBR: 1650, rentThreeBR: 3000, buyPricePerSqM: 8200 },
            food: { groceriesMonthly: 530, mealInexpensive: 14, mealMidRange: 50, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 50, taxiPerKm: 1.30, gasolinePerLiter: 1.45 },
            utilities: { basicMonthly: 155, internetMbps: 110 },
            healthcare: { doctorVisit: 75, insuranceMonthly: 190 },
            entertainment: { gymMembership: 90, cinemaTicket: 13, beerBar: 5 }
        },
        currency: "SCR", exchangeRate: 13.5, color: "#f97316", status: "expensive", rank: 36, lastUpdated: "2026-03-01"
    },

    "Cape Verde": {
        overallIndex: 44.2,
        rank: 110,
        monthlyBudget: { single: 1500, couple: 2530, family: 4000 },
        breakdown: {
            housing: { rentOneBR: 530, rentThreeBR: 1000, buyPricePerSqM: 2900 },
            food: { groceriesMonthly: 295, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 30, taxiPerKm: 0.65, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 95, internetMbps: 85 },
            healthcare: { doctorVisit: 38, insuranceMonthly: 100 },
            entertainment: { gymMembership: 38, cinemaTicket: 7, beerBar: 2.8 }
        },
        currency: "CVE", exchangeRate: 102.0, color: "#22c55e", status: "affordable", rank: 110, lastUpdated: "2026-03-01"
    },

    "Libya": {
        overallIndex: 34.8,
        rank: 142,
        monthlyBudget: { single: 1050, couple: 1750, family: 2850 },
        breakdown: {
            housing: { rentOneBR: 350, rentThreeBR: 650, buyPricePerSqM: 2000 },
            food: { groceriesMonthly: 245, mealInexpensive: 4, mealMidRange: 16, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 10, taxiPerKm: 0.35, gasolinePerLiter: 0.15 },
            utilities: { basicMonthly: 75, internetMbps: 60 },
            healthcare: { doctorVisit: 25, insuranceMonthly: 70 },
            entertainment: { gymMembership: 30, cinemaTicket: 5, beerBar: 0 }
        },
        currency: "LYD", exchangeRate: 4.8, color: "#10b981", status: "very-affordable", rank: 142, lastUpdated: "2026-03-01"
    },

    // Small European States & Special Territories
    "Monaco": {
        overallIndex: 95.8,
        rank: 2,
        monthlyBudget: { single: 5800, couple: 9500, family: 13800 },
        breakdown: {
            housing: { rentOneBR: 3500, rentThreeBR: 6500, buyPricePerSqM: 55000 },
            food: { groceriesMonthly: 750, mealInexpensive: 30, mealMidRange: 100, mcdonaldsMeal: 15 },
            transport: { monthlyPass: 0, taxiPerKm: 2.80, gasolinePerLiter: 1.85 },
            utilities: { basicMonthly: 180, internetMbps: 280 },
            healthcare: { doctorVisit: 100, insuranceMonthly: 250 },
            entertainment: { gymMembership: 150, cinemaTicket: 18, beerBar: 12 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#dc2626", status: "very-expensive", rank: 2, lastUpdated: "2026-03-01"
    },

    "Andorra": {
        overallIndex: 62.5,
        rank: 58,
        monthlyBudget: { single: 2650, couple: 4450, family: 6700 },
        breakdown: {
            housing: { rentOneBR: 950, rentThreeBR: 1750, buyPricePerSqM: 5500 },
            food: { groceriesMonthly: 420, mealInexpensive: 12, mealMidRange: 38, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 40, taxiPerKm: 1.50, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 110, internetMbps: 200 },
            healthcare: { doctorVisit: 60, insuranceMonthly: 140 },
            entertainment: { gymMembership: 50, cinemaTicket: 10, beerBar: 4.5 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 58, lastUpdated: "2026-03-01"
    },

    "Liechtenstein": {
        overallIndex: 92.5,
        rank: 5,
        monthlyBudget: { single: 5200, couple: 8600, family: 12400 },
        breakdown: {
            housing: { rentOneBR: 2200, rentThreeBR: 4000, buyPricePerSqM: 18000 },
            food: { groceriesMonthly: 680, mealInexpensive: 25, mealMidRange: 80, mcdonaldsMeal: 13 },
            transport: { monthlyPass: 70, taxiPerKm: 2.50, gasolinePerLiter: 1.75 },
            utilities: { basicMonthly: 190, internetMbps: 250 },
            healthcare: { doctorVisit: 90, insuranceMonthly: 220 },
            entertainment: { gymMembership: 100, cinemaTicket: 16, beerBar: 8 }
        },
        currency: "CHF", exchangeRate: 0.88, color: "#dc2626", status: "very-expensive", rank: 5, lastUpdated: "2026-03-01"
    },

    "San Marino": {
        overallIndex: 65.5,
        rank: 50,
        monthlyBudget: { single: 2850, couple: 4750, family: 7100 },
        breakdown: {
            housing: { rentOneBR: 1050, rentThreeBR: 1900, buyPricePerSqM: 6200 },
            food: { groceriesMonthly: 440, mealInexpensive: 14, mealMidRange: 45, mcdonaldsMeal: 9.5 },
            transport: { monthlyPass: 50, taxiPerKm: 1.60, gasolinePerLiter: 1.70 },
            utilities: { basicMonthly: 125, internetMbps: 210 },
            healthcare: { doctorVisit: 65, insuranceMonthly: 150 },
            entertainment: { gymMembership: 55, cinemaTicket: 11, beerBar: 5 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#fbbf24", status: "moderate", rank: 50, lastUpdated: "2026-03-01"
    },

    "Macau": {
        overallIndex: 75.8,
        rank: 32,
        monthlyBudget: { single: 3900, couple: 6500, family: 9500 },
        breakdown: {
            housing: { rentOneBR: 1800, rentThreeBR: 3300, buyPricePerSqM: 16000 },
            food: { groceriesMonthly: 550, mealInexpensive: 9, mealMidRange: 40, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 45, taxiPerKm: 1.00, gasolinePerLiter: 2.00 },
            utilities: { basicMonthly: 120, internetMbps: 260 },
            healthcare: { doctorVisit: 75, insuranceMonthly: 170 },
            entertainment: { gymMembership: 95, cinemaTicket: 13, beerBar: 7 }
        },
        currency: "MOP", exchangeRate: 8.0, color: "#f97316", status: "expensive", rank: 32, lastUpdated: "2026-03-01"
    },

    // Pacific Islands
    "Samoa": {
        overallIndex: 46.2,
        rank: 103,
        monthlyBudget: { single: 1680, couple: 2820, family: 4350 },
        breakdown: {
            housing: { rentOneBR: 580, rentThreeBR: 1100, buyPricePerSqM: 3000 },
            food: { groceriesMonthly: 305, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 0, taxiPerKm: 0.80, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 105, internetMbps: 55 },
            healthcare: { doctorVisit: 38, insuranceMonthly: 105 },
            entertainment: { gymMembership: 38, cinemaTicket: 7, beerBar: 3 }
        },
        currency: "WST", exchangeRate: 2.7, color: "#22c55e", status: "affordable", rank: 103, lastUpdated: "2026-03-01"
    },

    "Tonga": {
        overallIndex: 48.8,
        rank: 90,
        monthlyBudget: { single: 1850, couple: 3100, family: 4750 },
        breakdown: {
            housing: { rentOneBR: 650, rentThreeBR: 1200, buyPricePerSqM: 3200 },
            food: { groceriesMonthly: 330, mealInexpensive: 7, mealMidRange: 25, mcdonaldsMeal: 7.5 },
            transport: { monthlyPass: 0, taxiPerKm: 0.85, gasolinePerLiter: 1.70 },
            utilities: { basicMonthly: 110, internetMbps: 50 },
            healthcare: { doctorVisit: 42, insuranceMonthly: 110 },
            entertainment: { gymMembership: 40, cinemaTicket: 8, beerBar: 3.5 }
        },
        currency: "TOP", exchangeRate: 2.35, color: "#22c55e", status: "affordable", rank: 90, lastUpdated: "2026-03-01"
    },

    "Vanuatu": {
        overallIndex: 50.5,
        rank: 87,
        monthlyBudget: { single: 1950, couple: 3300, family: 5000 },
        breakdown: {
            housing: { rentOneBR: 700, rentThreeBR: 1300, buyPricePerSqM: 3500 },
            food: { groceriesMonthly: 345, mealInexpensive: 8, mealMidRange: 28, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 0, taxiPerKm: 0.90, gasolinePerLiter: 1.75 },
            utilities: { basicMonthly: 115, internetMbps: 45 },
            healthcare: { doctorVisit: 45, insuranceMonthly: 115 },
            entertainment: { gymMembership: 42, cinemaTicket: 8.5, beerBar: 4 }
        },
        currency: "VUV", exchangeRate: 118.0, color: "#fbbf24", status: "moderate", rank: 87, lastUpdated: "2026-03-01"
    },

    "Solomon Islands": {
        overallIndex: 52.8,
        rank: 79,
        monthlyBudget: { single: 2100, couple: 3550, family: 5350 },
        breakdown: {
            housing: { rentOneBR: 750, rentThreeBR: 1400, buyPricePerSqM: 3800 },
            food: { groceriesMonthly: 360, mealInexpensive: 8, mealMidRange: 30, mcdonaldsMeal: 8.5 },
            transport: { monthlyPass: 0, taxiPerKm: 1.00, gasolinePerLiter: 1.80 },
            utilities: { basicMonthly: 120, internetMbps: 40 },
            healthcare: { doctorVisit: 48, insuranceMonthly: 120 },
            entertainment: { gymMembership: 45, cinemaTicket: 9, beerBar: 4 }
        },
        currency: "SBD", exchangeRate: 8.5, color: "#fbbf24", status: "moderate", rank: 79, lastUpdated: "2026-03-01"
    },

    // Caribbean - Additional
    "Puerto Rico": {
        overallIndex: 68.5,
        rank: 45,
        monthlyBudget: { single: 3300, couple: 5500, family: 8100 },
        breakdown: {
            housing: { rentOneBR: 1400, rentThreeBR: 2600, buyPricePerSqM: 5800 },
            food: { groceriesMonthly: 490, mealInexpensive: 12, mealMidRange: 45, mcdonaldsMeal: 9 },
            transport: { monthlyPass: 45, taxiPerKm: 1.20, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 165, internetMbps: 170 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 180 },
            entertainment: { gymMembership: 70, cinemaTicket: 12, beerBar: 5 }
        },
        currency: "USD", exchangeRate: 1.0, color: "#fbbf24", status: "moderate", rank: 45, lastUpdated: "2026-03-01"
    },

    "Barbados": {
        overallIndex: 71.5,
        rank: 40,
        monthlyBudget: { single: 3600, couple: 6000, family: 8800 },
        breakdown: {
            housing: { rentOneBR: 1550, rentThreeBR: 2850, buyPricePerSqM: 7200 },
            food: { groceriesMonthly: 510, mealInexpensive: 14, mealMidRange: 50, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 0, taxiPerKm: 1.30, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 145, internetMbps: 140 },
            healthcare: { doctorVisit: 75, insuranceMonthly: 170 },
            entertainment: { gymMembership: 75, cinemaTicket: 12, beerBar: 5 }
        },
        currency: "BBD", exchangeRate: 2.0, color: "#f97316", status: "expensive", rank: 40, lastUpdated: "2026-03-01"
    },

    "Trinidad and Tobago": {
        overallIndex: 49.5,
        rank: 89,
        monthlyBudget: { single: 1900, couple: 3200, family: 4900 },
        breakdown: {
            housing: { rentOneBR: 670, rentThreeBR: 1250, buyPricePerSqM: 3300 },
            food: { groceriesMonthly: 335, mealInexpensive: 7, mealMidRange: 26, mcdonaldsMeal: 8 },
            transport: { monthlyPass: 0, taxiPerKm: 0.75, gasolinePerLiter: 0.70 },
            utilities: { basicMonthly: 110, internetMbps: 120 },
            healthcare: { doctorVisit: 42, insuranceMonthly: 110 },
            entertainment: { gymMembership: 42, cinemaTicket: 8, beerBar: 3.5 }
        },
        currency: "TTD", exchangeRate: 6.8, color: "#22c55e", status: "affordable", rank: 89, lastUpdated: "2026-03-01"
    },

    "Bahamas": {
        overallIndex: 74.8,
        rank: 34,
        monthlyBudget: { single: 3850, couple: 6400, family: 9400 },
        breakdown: {
            housing: { rentOneBR: 1700, rentThreeBR: 3100, buyPricePerSqM: 8500 },
            food: { groceriesMonthly: 540, mealInexpensive: 15, mealMidRange: 55, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 0, taxiPerKm: 1.40, gasolinePerLiter: 1.40 },
            utilities: { basicMonthly: 160, internetMbps: 150 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 190 },
            entertainment: { gymMembership: 85, cinemaTicket: 13, beerBar: 6 }
        },
        currency: "BSD", exchangeRate: 1.0, color: "#f97316", status: "expensive", rank: 34, lastUpdated: "2026-03-01"
    },

    // Complete African Coverage - Missing Countries
    "Gambia": {
        overallIndex: 34.5,
        rank: 144,
        monthlyBudget: { single: 1000, couple: 1680, family: 2700 },
        breakdown: {
            housing: { rentOneBR: 330, rentThreeBR: 620, buyPricePerSqM: 1900 },
            food: { groceriesMonthly: 235, mealInexpensive: 3.5, mealMidRange: 14, mcdonaldsMeal: 5.5 },
            transport: { monthlyPass: 20, taxiPerKm: 0.42, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 70, internetMbps: 52 },
            healthcare: { doctorVisit: 26, insuranceMonthly: 68 },
            entertainment: { gymMembership: 28, cinemaTicket: 5, beerBar: 2 }
        },
        currency: "GMD", exchangeRate: 66.0, color: "#10b981", status: "very-affordable", rank: 144, lastUpdated: "2026-03-01"
    },

    "Sao Tome and Principe": {
        overallIndex: 41.8,
        rank: 118,
        monthlyBudget: { single: 1400, couple: 2350, family: 3750 },
        breakdown: {
            housing: { rentOneBR: 480, rentThreeBR: 900, buyPricePerSqM: 2500 },
            food: { groceriesMonthly: 280, mealInexpensive: 5, mealMidRange: 19, mcdonaldsMeal: 6.5 },
            transport: { monthlyPass: 25, taxiPerKm: 0.55, gasolinePerLiter: 1.45 },
            utilities: { basicMonthly: 85, internetMbps: 48 },
            healthcare: { doctorVisit: 32, insuranceMonthly: 85 },
            entertainment: { gymMembership: 32, cinemaTicket: 6, beerBar: 2.5 }
        },
        currency: "STN", exchangeRate: 22.5, color: "#22c55e", status: "affordable", rank: 118, lastUpdated: "2026-03-01"
    },

    // More Asian Countries - Complete
    "Kyrgyzstan": {
        overallIndex: 28.8,
        rank: 158,
        monthlyBudget: { single: 780, couple: 1300, family: 2100 },
        breakdown: {
            housing: { rentOneBR: 260, rentThreeBR: 500, buyPricePerSqM: 1700 },
            food: { groceriesMonthly: 190, mealInexpensive: 3, mealMidRange: 12, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 12, taxiPerKm: 0.25, gasolinePerLiter: 0.95 },
            utilities: { basicMonthly: 70, internetMbps: 95 },
            healthcare: { doctorVisit: 22, insuranceMonthly: 60 },
            entertainment: { gymMembership: 25, cinemaTicket: 4, beerBar: 1.8 }
        },
        currency: "KGS", exchangeRate: 87.0, color: "#10b981", status: "very-affordable", rank: 158, lastUpdated: "2026-03-01"
    },

    "Tajikistan": {
        overallIndex: 25.5,
        rank: 165,
        monthlyBudget: { single: 670, couple: 1100, family: 1800 },
        breakdown: {
            housing: { rentOneBR: 210, rentThreeBR: 420, buyPricePerSqM: 1400 },
            food: { groceriesMonthly: 165, mealInexpensive: 2.5, mealMidRange: 10, mcdonaldsMeal: 4 },
            transport: { monthlyPass: 10, taxiPerKm: 0.22, gasolinePerLiter: 0.85 },
            utilities: { basicMonthly: 60, internetMbps: 75 },
            healthcare: { doctorVisit: 18, insuranceMonthly: 48 },
            entertainment: { gymMembership: 20, cinemaTicket: 3.5, beerBar: 1.5 }
        },
        currency: "TJS", exchangeRate: 10.8, color: "#10b981", status: "very-affordable", rank: 165, lastUpdated: "2026-03-01"
    },

    "Turkmenistan": {
        overallIndex: 29.2,
        rank: 157,
        monthlyBudget: { single: 800, couple: 1330, family: 2150 },
        breakdown: {
            housing: { rentOneBR: 270, rentThreeBR: 520, buyPricePerSqM: 1800 },
            food: { groceriesMonthly: 195, mealInexpensive: 3, mealMidRange: 12, mcdonaldsMeal: 4.5 },
            transport: { monthlyPass: 5, taxiPerKm: 0.20, gasolinePerLiter: 0.40 },
            utilities: { basicMonthly: 75, internetMbps: 65 },
            healthcare: { doctorVisit: 20, insuranceMonthly: 55 },
            entertainment: { gymMembership: 25, cinemaTicket: 4, beerBar: 1.5 }
        },
        currency: "TMT", exchangeRate: 3.5, color: "#10b981", status: "very-affordable", rank: 157, lastUpdated: "2026-03-01"
    },

    "Palestine": {
        overallIndex: 43.5,
        rank: 112,
        monthlyBudget: { single: 1470, couple: 2480, family: 3950 },
        breakdown: {
            housing: { rentOneBR: 510, rentThreeBR: 970, buyPricePerSqM: 2700 },
            food: { groceriesMonthly: 295, mealInexpensive: 6, mealMidRange: 22, mcdonaldsMeal: 7 },
            transport: { monthlyPass: 30, taxiPerKm: 0.65, gasolinePerLiter: 1.55 },
            utilities: { basicMonthly: 95, internetMbps: 90 },
            healthcare: { doctorVisit: 38, insuranceMonthly: 95 },
            entertainment: { gymMembership: 38, cinemaTicket: 7, beerBar: 0 }
        },
        currency: "ILS", exchangeRate: 3.6, color: "#22c55e", status: "affordable", rank: 112, lastUpdated: "2026-03-01"
    },

    // More Oceania
    "New Caledonia": {
        overallIndex: 78.5,
        rank: 25,
        monthlyBudget: { single: 4100, couple: 6850, family: 10000 },
        breakdown: {
            housing: { rentOneBR: 1850, rentThreeBR: 3400, buyPricePerSqM: 9200 },
            food: { groceriesMonthly: 570, mealInexpensive: 16, mealMidRange: 55, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 55, taxiPerKm: 1.50, gasolinePerLiter: 1.85 },
            utilities: { basicMonthly: 150, internetMbps: 125 },
            healthcare: { doctorVisit: 75, insuranceMonthly: 180 },
            entertainment: { gymMembership: 80, cinemaTicket: 12, beerBar: 6 }
        },
        currency: "XPF", exchangeRate: 110.0, color: "#f97316", status: "expensive", rank: 25, lastUpdated: "2026-03-01"
    },

    "French Polynesia": {
        overallIndex: 82.5,
        rank: 19,
        monthlyBudget: { single: 4400, couple: 7350, family: 10700 },
        breakdown: {
            housing: { rentOneBR: 2050, rentThreeBR: 3700, buyPricePerSqM: 10500 },
            food: { groceriesMonthly: 610, mealInexpensive: 18, mealMidRange: 60, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 50, taxiPerKm: 1.60, gasolinePerLiter: 1.95 },
            utilities: { basicMonthly: 160, internetMbps: 115 },
            healthcare: { doctorVisit: 80, insuranceMonthly: 190 },
            entertainment: { gymMembership: 85, cinemaTicket: 13, beerBar: 7 }
        },
        currency: "XPF", exchangeRate: 110.0, color: "#dc2626", status: "very-expensive", rank: 19, lastUpdated: "2026-03-01"
    },

    "Guam": {
        overallIndex: 71.8,
        rank: 39,
        monthlyBudget: { single: 3620, couple: 6050, family: 8900 },
        breakdown: {
            housing: { rentOneBR: 1550, rentThreeBR: 2900, buyPricePerSqM: 7800 },
            food: { groceriesMonthly: 515, mealInexpensive: 13, mealMidRange: 48, mcdonaldsMeal: 10 },
            transport: { monthlyPass: 45, taxiPerKm: 1.25, gasolinePerLiter: 1.20 },
            utilities: { basicMonthly: 155, internetMbps: 165 },
            healthcare: { doctorVisit: 75, insuranceMonthly: 175 },
            entertainment: { gymMembership: 75, cinemaTicket: 12, beerBar: 5.5 }
        },
        currency: "USD", exchangeRate: 1.0, color: "#f97316", status: "expensive", rank: 39, lastUpdated: "2026-03-01"
    },

    "Kosovo": {
        overallIndex: 37.8,
        rank: 133,
        monthlyBudget: { single: 1250, couple: 2100, family: 3400 },
        breakdown: {
            housing: { rentOneBR: 410, rentThreeBR: 770, buyPricePerSqM: 2350 },
            food: { groceriesMonthly: 265, mealInexpensive: 5, mealMidRange: 18, mcdonaldsMeal: 6 },
            transport: { monthlyPass: 20, taxiPerKm: 0.50, gasolinePerLiter: 1.50 },
            utilities: { basicMonthly: 95, internetMbps: 115 },
            healthcare: { doctorVisit: 30, insuranceMonthly: 75 },
            entertainment: { gymMembership: 30, cinemaTicket: 6, beerBar: 2 }
        },
        currency: "EUR", exchangeRate: 0.92, color: "#22c55e", status: "affordable", rank: 133, lastUpdated: "2026-03-01"
    },

    // Caribbean - Final additions
    "Aruba": {
        overallIndex: 76.5,
        rank: 31,
        monthlyBudget: { single: 3950, couple: 6600, family: 9650 },
        breakdown: {
            housing: { rentOneBR: 1750, rentThreeBR: 3200, buyPricePerSqM: 8800 },
            food: { groceriesMonthly: 555, mealInexpensive: 15, mealMidRange: 55, mcdonaldsMeal: 11 },
            transport: { monthlyPass: 0, taxiPerKm: 1.35, gasolinePerLiter: 1.10 },
            utilities: { basicMonthly: 165, internetMbps: 145 },
            healthcare: { doctorVisit: 78, insuranceMonthly: 185 },
            entertainment: { gymMembership: 80, cinemaTicket: 13, beerBar: 5.5 }
        },
        currency: "AWG", exchangeRate: 1.8, color: "#f97316", status: "expensive", rank: 31, lastUpdated: "2026-03-01"
    },

    "Cayman Islands": {
        overallIndex: 89.5,
        rank: 7,
        monthlyBudget: { single: 4950, couple: 8250, family: 11900 },
        breakdown: {
            housing: { rentOneBR: 2900, rentThreeBR: 5200, buyPricePerSqM: 25000 },
            food: { groceriesMonthly: 620, mealInexpensive: 18, mealMidRange: 65, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 0, taxiPerKm: 1.60, gasolinePerLiter: 1.35 },
            utilities: { basicMonthly: 185, internetMbps: 175 },
            healthcare: { doctorVisit: 90, insuranceMonthly: 210 },
            entertainment: { gymMembership: 110, cinemaTicket: 15, beerBar: 8 }
        },
        currency: "KYD", exchangeRate: 0.83, color: "#dc2626", status: "very-expensive", rank: 7, lastUpdated: "2026-03-01"
    },

    "Bermuda": {
        overallIndex: 94.5,
        rank: 3,
        monthlyBudget: { single: 5600, couple: 9200, family: 13400 },
        breakdown: {
            housing: { rentOneBR: 3300, rentThreeBR: 6000, buyPricePerSqM: 32000 },
            food: { groceriesMonthly: 710, mealInexpensive: 22, mealMidRange: 85, mcdonaldsMeal: 14 },
            transport: { monthlyPass: 69, taxiPerKm: 2.00, gasolinePerLiter: 1.60 },
            utilities: { basicMonthly: 210, internetMbps: 200 },
            healthcare: { doctorVisit: 95, insuranceMonthly: 240 },
            entertainment: { gymMembership: 130, cinemaTicket: 17, beerBar: 10 }
        },
        currency: "BMD", exchangeRate: 1.0, color: "#dc2626", status: "very-expensive", rank: 3, lastUpdated: "2026-03-01"
    },

    "Iceland": {
        overallIndex: 86.5,
        rank: 11,
        monthlyBudget: { single: 4650, couple: 7750, family: 11300 },
        breakdown: {
            housing: { rentOneBR: 1950, rentThreeBR: 3550, buyPricePerSqM: 10500 },
            food: { groceriesMonthly: 590, mealInexpensive: 18, mealMidRange: 65, mcdonaldsMeal: 12 },
            transport: { monthlyPass: 90, taxiPerKm: 2.20, gasolinePerLiter: 2.10 },
            utilities: { basicMonthly: 130, internetMbps: 245 },
            healthcare: { doctorVisit: 70, insuranceMonthly: 160 },
            entertainment: { gymMembership: 75, cinemaTicket: 15, beerBar: 9 }
        },
        currency: "ISK", exchangeRate: 138.0, color: "#dc2626", status: "very-expensive", rank: 11, lastUpdated: "2026-03-01"
    }
};

// Cost Status Categories
const costStatus = {
    "very-affordable": { range: "0-35", color: "#10b981", icon: "💚", description: "Digital nomad paradise" },
    "affordable": { range: "35-50", color: "#22c55e", icon: "✅", description: "Good value for money" },
    "moderate": { range: "50-70", color: "#fbbf24", icon: "⚖️", description: "Developed nation standard" },
    "expensive": { range: "70-85", color: "#f97316", icon: "💰", description: "High cost of living" },
    "very-expensive": { range: "85-100", color: "#dc2626", icon: "🔥", description: "Luxury market" }
};

// Salary equivalency calculator
function calculateSalaryEquivalent(fromCountry, toCountry, salary) {
    const fromIndex = costData[fromCountry].overallIndex;
    const toIndex = costData[toCountry].overallIndex;
    return Math.round(salary * (toIndex / fromIndex));
}

// Lifestyle maintenance calculator
function calculateLifestyleCost(fromCountry, toCountry, monthlyBudget) {
    const fromIndex = costData[fromCountry].overallIndex;
    const toIndex = costData[toCountry].overallIndex;
    return Math.round(monthlyBudget * (toIndex / fromIndex));
}

// Make data available globally
if (typeof window !== 'undefined') {
    window.costData = costData;
    window.costStatus = costStatus;
    window.calculateSalaryEquivalent = calculateSalaryEquivalent;
    window.calculateLifestyleCost = calculateLifestyleCost;
}
