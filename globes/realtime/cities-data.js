/**
 * Major Cities Data + Weather
 * Shows major world cities with local time and weather
 */

class CitiesData {
    constructor() {
        // Major cities worldwide with better global coverage
        this.cities = [
            // Asia
            { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, tz: 'Asia/Tokyo' },
            { name: 'Delhi', country: 'India', lat: 28.6139, lng: 77.2090, tz: 'Asia/Kolkata' },
            { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737, tz: 'Asia/Shanghai' },
            { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, tz: 'Asia/Kolkata' },
            { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, tz: 'Asia/Shanghai' },
            { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018, tz: 'Asia/Bangkok' },
            { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456, tz: 'Asia/Jakarta' },
            { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.9780, tz: 'Asia/Seoul' },
            { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, tz: 'Asia/Singapore' },
            { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, tz: 'Asia/Dubai' },
            { name: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694, tz: 'Asia/Hong_Kong' },

            // Africa
            { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, tz: 'Africa/Cairo' },
            { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792, tz: 'Africa/Lagos' },
            { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lng: 28.0473, tz: 'Africa/Johannesburg' },
            { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219, tz: 'Africa/Nairobi' },
            { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898, tz: 'Africa/Casablanca' },
            { name: 'Addis Ababa', country: 'Ethiopia', lat: 9.0320, lng: 38.7469, tz: 'Africa/Addis_Ababa' },

            // Europe
            { name: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173, tz: 'Europe/Moscow' },
            { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, tz: 'Europe/Paris' },
            { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, tz: 'Europe/London' },
            { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, tz: 'Europe/Istanbul' },
            { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, tz: 'Europe/Berlin' },

            // Americas
            { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, tz: 'America/New_York' },
            { name: 'Los Angeles', country: 'USA', lat: 34.0522, lng: -118.2437, tz: 'America/Los_Angeles' },
            { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333, tz: 'America/Sao_Paulo' },
            { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332, tz: 'America/Mexico_City' },
            { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, tz: 'America/Toronto' },
            { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816, tz: 'America/Argentina/Buenos_Aires' },
            { name: 'Bogotá', country: 'Colombia', lat: 4.7110, lng: -74.0721, tz: 'America/Bogota' },
            { name: 'Lima', country: 'Peru', lat: -12.0464, lng: -77.0428, tz: 'America/Lima' },

            // Oceania
            { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, tz: 'Australia/Sydney' },
            { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631, tz: 'Australia/Melbourne' },
            { name: 'Auckland', country: 'New Zealand', lat: -36.8485, lng: 174.7633, tz: 'Pacific/Auckland' }
        ];

        this.weatherCache = new Map();
        this.lastWeatherUpdate = null;
    }

    /**
     * Get all cities with current local time
     */
    getCitiesWithTime() {
        return this.cities.map(city => ({
            ...city,
            localTime: this.getLocalTime(city.tz),
            isDaytime: this.isDaytime(city.lat, city.lng)
        }));
    }

    /**
     * Get local time for timezone
     */
    getLocalTime(timezone) {
        try {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            return formatter.format(now);
        } catch (error) {
            return '--:--';
        }
    }

    /**
     * Check if location is in daylight
     */
    isDaytime(lat, lng) {
        if (typeof SunCalculator === 'undefined') return true;
        return SunCalculator.isInDaylight(lat, lng, new Date());
    }

    /**
     * Fetch weather for a city (using Open-Meteo API - no API key needed!)
     */
    async fetchWeather(city) {
        try {
            // Check cache (15 minute expiry to reduce API calls)
            const cached = this.weatherCache.get(city.name);
            if (cached && Date.now() - cached.timestamp < 900000) {
                return cached.data;
            }

            // Open-Meteo API (free, no API key)
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current=temperature_2m,weathercode&timezone=auto`;

            // Add timeout to prevent hanging
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);

            // Handle rate limiting gracefully
            if (response.status === 429) {
                console.warn(`[WEATHER] Rate limited for ${city.name}, using cached or skipping`);
                return null;
            }

            if (!response.ok) throw new Error(`Weather API error: ${response.status}`);

            const data = await response.json();

            const weatherCode = data.current?.weathercode ?? 0;
            const temperature = data.current?.temperature_2m ?? 0;

            const weather = {
                temp: Math.round(temperature),
                code: weatherCode,
                emoji: this.getWeatherDescription(weatherCode),
                description: this.getWeatherDescriptionFull(weatherCode)
            };

            console.log(`[WEATHER] ${city.name}: ${weather.emoji} ${weather.temp}°C (code: ${weatherCode})`);

            // Cache it
            this.weatherCache.set(city.name, {
                data: weather,
                timestamp: Date.now()
            });

            return weather;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.warn(`[WEATHER] Timeout for ${city.name} - skipping`);
            } else {
                console.error(`[WEATHER] Failed for ${city.name}:`, error.message);
            }
            return null;
        }
    }

    /**
     * Convert WMO weather code to description
     */
    getWeatherDescription(code) {
        if (code === undefined || code === null) {
            return '🌍';
        }

        const codes = {
            0: '☀️',
            1: '🌤️',
            2: '⛅',
            3: '☁️',
            45: '🌫️',
            48: '🌫️',
            51: '🌦️',
            53: '🌦️',
            55: '🌦️',
            61: '🌧️',
            63: '🌧️',
            65: '🌧️',
            71: '🌨️',
            73: '🌨️',
            75: '🌨️',
            77: '❄️',
            80: '🌦️',
            81: '🌧️',
            82: '⛈️',
            85: '🌨️',
            86: '🌨️',
            95: '⛈️',
            96: '⛈️',
            99: '⛈️'
        };

        const emoji = codes[code];
        return emoji !== undefined ? emoji : '🌍';
    }

    /**
     * Get full weather description with text
     */
    getWeatherDescriptionFull(code) {
        const codes = {
            0: 'Clear',
            1: 'Mostly Clear',
            2: 'Partly Cloudy',
            3: 'Overcast',
            45: 'Foggy',
            48: 'Foggy',
            51: 'Light Drizzle',
            53: 'Drizzle',
            55: 'Heavy Drizzle',
            61: 'Light Rain',
            63: 'Rain',
            65: 'Heavy Rain',
            71: 'Light Snow',
            73: 'Snow',
            75: 'Heavy Snow',
            77: 'Snow Grains',
            80: 'Rain Showers',
            81: 'Rain Showers',
            82: 'Heavy Rain',
            85: 'Snow Showers',
            86: 'Heavy Snow',
            95: 'Thunderstorm',
            96: 'Thunderstorm',
            99: 'Heavy Thunderstorm'
        };
        return codes[code] || 'Unknown';
    }

    /**
     * Batch fetch weather for multiple cities
     */
    async fetchBatchWeather(cities = this.cities, limit = 10) {
        const batch = cities.slice(0, limit);
        const results = await Promise.all(
            batch.map(city => this.fetchWeather(city))
        );
        return results;
    }
}

// Create global instance
const citiesData = new CitiesData();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CitiesData;
}
