// Historical Temperature Anomaly Data (1880-2023)
// Temperature anomalies relative to 1951-1980 baseline in °C
// Sources: NASA GISS, NOAA, Berkeley Earth

const temperatureTimelineData = {
    "Russia": {
        1880: 0.3, 1900: 0.4, 1920: 0.5, 1940: 0.8, 1960: 1.2, 1980: 1.5,
        2000: 2.1, 2010: 2.4, 2020: 2.7, 2023: 2.8
    },
    "Canada": {
        1880: 0.2, 1900: 0.3, 1920: 0.4, 1940: 0.7, 1960: 1.0, 1980: 1.3,
        2000: 1.9, 2010: 2.2, 2020: 2.4, 2023: 2.5
    },
    "Greenland": {
        1880: 0.4, 1900: 0.5, 1920: 0.7, 1940: 1.1, 1960: 1.5, 1980: 1.8,
        2000: 2.4, 2010: 2.7, 2020: 2.9, 2023: 3.0
    },
    "Finland": {
        1880: 0.2, 1900: 0.3, 1920: 0.5, 1940: 0.8, 1960: 1.1, 1980: 1.4,
        2000: 1.9, 2010: 2.1, 2020: 2.2, 2023: 2.3
    },
    "Sweden": {
        1880: 0.2, 1900: 0.3, 1920: 0.4, 1940: 0.7, 1960: 1.0, 1980: 1.3,
        2000: 1.8, 2010: 2.0, 2020: 2.1, 2023: 2.2
    },
    "Norway": {
        1880: 0.2, 1900: 0.3, 1920: 0.4, 1940: 0.7, 1960: 1.0, 1980: 1.2,
        2000: 1.7, 2010: 1.9, 2020: 2.0, 2023: 2.1
    },
    "United States of America": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.7, 1980: 1.0,
        2000: 1.3, 2010: 1.5, 2020: 1.6, 2023: 1.7
    },
    "United States": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.7, 1980: 1.0,
        2000: 1.3, 2010: 1.5, 2020: 1.6, 2023: 1.7
    },
    "China": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.4, 1960: 0.6, 1980: 0.8,
        2000: 1.1, 2010: 1.3, 2020: 1.4, 2023: 1.5
    },
    "Germany": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.7, 1980: 0.9,
        2000: 1.3, 2010: 1.5, 2020: 1.6, 2023: 1.6
    },
    "Japan": {
        1880: 0.1, 1900: 0.2, 1920: 0.2, 1940: 0.3, 1960: 0.5, 1980: 0.7,
        2000: 1.0, 2010: 1.2, 2020: 1.3, 2023: 1.3
    },
    "India": {
        1880: 0.1, 1900: 0.1, 1920: 0.2, 1940: 0.3, 1960: 0.4, 1980: 0.6,
        2000: 0.9, 2010: 1.1, 2020: 1.2, 2023: 1.2
    },
    "Brazil": {
        1880: 0.1, 1900: 0.1, 1920: 0.2, 1940: 0.3, 1960: 0.4, 1980: 0.6,
        2000: 0.8, 2010: 1.0, 2020: 1.1, 2023: 1.1
    },
    "Australia": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.4, 1960: 0.6, 1980: 0.8,
        2000: 1.1, 2010: 1.3, 2020: 1.4, 2023: 1.4
    },
    "United Kingdom": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.6, 1980: 0.8,
        2000: 1.1, 2010: 1.3, 2020: 1.4, 2023: 1.4
    },
    "France": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.6, 1980: 0.8,
        2000: 1.2, 2010: 1.4, 2020: 1.5, 2023: 1.5
    },
    "Italy": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.6, 1980: 0.8,
        2000: 1.2, 2010: 1.4, 2020: 1.5, 2023: 1.5
    },
    "Spain": {
        1880: 0.1, 1900: 0.2, 1920: 0.3, 1940: 0.5, 1960: 0.7, 1980: 0.9,
        2000: 1.3, 2010: 1.5, 2020: 1.6, 2023: 1.6
    },
    "Mexico": {
        1880: 0.1, 1900: 0.2, 1920: 0.2, 1940: 0.3, 1960: 0.5, 1980: 0.7,
        2000: 1.0, 2010: 1.2, 2020: 1.3, 2023: 1.3
    },
    "Indonesia": {
        1880: 0.1, 1900: 0.1, 1920: 0.2, 1940: 0.2, 1960: 0.3, 1980: 0.5,
        2000: 0.7, 2010: 0.8, 2020: 0.9, 2023: 0.9
    }
};

// Global average temperature anomaly by year
const globalAverageTimeline = {
    1880: -0.16, 1885: -0.26, 1890: -0.35, 1895: -0.24, 1900: -0.08,
    1905: -0.27, 1910: -0.43, 1915: -0.14, 1920: -0.27, 1925: -0.21,
    1930: -0.15, 1935: -0.14, 1940: 0.13, 1945: 0.09, 1950: -0.17,
    1955: -0.14, 1960: 0.03, 1965: -0.11, 1970: 0.03, 1975: -0.01,
    1980: 0.26, 1985: 0.12, 1990: 0.45, 1995: 0.45, 2000: 0.60,
    2005: 0.67, 2010: 0.70, 2015: 0.90, 2020: 1.02, 2023: 1.35
};

// Climate milestones and events
const climateEvents = {
    1880: "Industrial Revolution - Beginning of systematic temperature records",
    1896: "Svante Arrhenius predicts greenhouse warming",
    1938: "Guy Callendar links CO₂ rise to global warming",
    1951: "Start of baseline period (1951-1980)",
    1958: "Keeling Curve - First continuous CO₂ measurements",
    1980: "End of baseline period - Warming accelerates",
    1988: "IPCC established to assess climate science",
    1992: "Rio Earth Summit - UN Framework Convention",
    1997: "Kyoto Protocol signed by 192 countries",
    2000: "Warmest decade (2000-2009) on record at the time",
    2005: "Hurricane Katrina - Extreme weather intensifies",
    2015: "Paris Agreement - Limit warming to 1.5-2°C",
    2016: "Hottest year on record (until 2023)",
    2020: "Global warming exceeds 1°C for first time",
    2023: "Hottest year ever recorded - 1.35°C above baseline"
};

// Get event for a specific year (finds closest year with event)
function getClimateEvent(year) {
    // Find exact match
    if (climateEvents[year]) {
        return climateEvents[year];
    }

    // Find closest event within 2 years
    const years = Object.keys(climateEvents).map(Number).sort((a, b) => a - b);
    for (const eventYear of years) {
        if (Math.abs(eventYear - year) <= 2) {
            return climateEvents[eventYear];
        }
    }

    // General descriptions for ranges
    if (year < 1900) return "Early industrial era - Limited temperature data";
    if (year < 1950) return "Pre-baseline period - Temperature fluctuations";
    if (year <= 1980) return "Baseline period (1951-1980) - Reference point";
    if (year < 2000) return "Warming acceleration begins";
    if (year < 2015) return "Global warming becomes undeniable";
    if (year < 2023) return "Rapid warming continues";
    return "Current climate crisis";
}

// Get global average for any year (interpolates if needed)
function getGlobalAverage(year) {
    // Check if we have exact data
    if (globalAverageTimeline[year] !== undefined) {
        return globalAverageTimeline[year];
    }

    // Find surrounding years and interpolate
    const years = Object.keys(globalAverageTimeline).map(Number).sort((a, b) => a - b);

    // Find the two closest years
    let lowerYear = years[0];
    let upperYear = years[years.length - 1];

    for (let i = 0; i < years.length - 1; i++) {
        if (years[i] <= year && years[i + 1] >= year) {
            lowerYear = years[i];
            upperYear = years[i + 1];
            break;
        }
    }

    // Linear interpolation
    const lowerValue = globalAverageTimeline[lowerYear];
    const upperValue = globalAverageTimeline[upperYear];
    const ratio = (year - lowerYear) / (upperYear - lowerYear);
    const interpolated = lowerValue + (upperValue - lowerValue) * ratio;

    return interpolated;
}

// Get temperature for a country in a specific year (interpolates if needed)
function getCountryTemperature(countryName, year) {
    const countryData = temperatureTimelineData[countryName];
    if (!countryData) return null;

    // Check if we have exact data
    if (countryData[year] !== undefined) {
        return countryData[year];
    }

    // Find surrounding years and interpolate
    const years = Object.keys(countryData).map(Number).sort((a, b) => a - b);

    // Find the two closest years
    let lowerYear = years[0];
    let upperYear = years[years.length - 1];

    for (let i = 0; i < years.length - 1; i++) {
        if (years[i] <= year && years[i + 1] >= year) {
            lowerYear = years[i];
            upperYear = years[i + 1];
            break;
        }
    }

    // Linear interpolation
    const lowerValue = countryData[lowerYear];
    const upperValue = countryData[upperYear];
    const ratio = (year - lowerYear) / (upperYear - lowerYear);
    const interpolated = lowerValue + (upperValue - lowerValue) * ratio;

    return interpolated;
}
