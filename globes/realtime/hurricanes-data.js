/**
 * Hurricane & Storm Tracking
 * Fetches active tropical storms from NOAA and other sources
 */

class HurricanesData {
    constructor() {
        this.storms = [];
        this.lastUpdate = null;

        // NOAA National Hurricane Center - Active Tropical Cyclones
        // Using a more reliable endpoint
        this.apiUrl = 'https://www.nhc.noaa.gov/CurrentStorms.json';
    }

    /**
     * Fetch active storms
     */
    async fetchStorms() {
        try {
            console.log('[HURRICANES] Fetching active storms from NOAA...');

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch(this.apiUrl, {
                signal: controller.signal,
                mode: 'cors'
            });
            clearTimeout(timeoutId);

            if (!response.ok) throw new Error(`NOAA API error: ${response.status}`);

            const data = await response.json();
            this.storms = this.parseNOAA(data);
            this.lastUpdate = new Date();

            console.log(`[HURRICANES] ✓ Fetched ${this.storms.length} active storms`);
            return this.storms;
        } catch (error) {
            // NOAA API has CORS restrictions - can't fetch from browser
            if (error.message.includes('CORS') || error.name === 'TypeError') {
                console.warn('[HURRICANES] ⚠️ NOAA API blocked by CORS - feature unavailable in browser');
            } else {
                console.warn('[HURRICANES] Failed to fetch:', error.message);
            }

            // Return empty array - will show "0 storms" in UI
            return [];
        }
    }

    /**
     * Parse NOAA JSON data
     */
    parseNOAA(data) {
        const storms = [];

        if (!data.activeStorms || data.activeStorms.length === 0) {
            return storms;
        }

        data.activeStorms.forEach(storm => {
            if (storm.latestDetails && storm.latestDetails.latitude && storm.latestDetails.longitude) {
                storms.push({
                    id: storm.id,
                    name: storm.name,
                    lat: parseFloat(storm.latestDetails.latitude),
                    lng: parseFloat(storm.latestDetails.longitude),
                    classification: storm.classification || 'Unknown',
                    intensity: storm.intensity || 'Unknown',
                    pressure: storm.latestDetails.pressure,
                    windSpeed: storm.latestDetails.windSpeed,
                    movement: storm.latestDetails.movement,
                    lastUpdate: storm.lastUpdate,
                    link: `https://www.nhc.noaa.gov/storm.php?storm=${storm.id}`
                });
            }
        });

        return storms;
    }

    /**
     * Get storm category color
     */
    static getStormColor(storm) {
        const classification = (storm.classification || '').toLowerCase();
        const windSpeed = storm.windSpeed || 0;

        // Hurricane categories by wind speed (mph)
        if (windSpeed >= 157) return '#8B0000'; // Category 5 - Dark Red
        if (windSpeed >= 130) return '#FF0000'; // Category 4 - Red
        if (windSpeed >= 111) return '#FF6600'; // Category 3 - Orange-Red
        if (windSpeed >= 96) return '#FFA500';  // Category 2 - Orange
        if (windSpeed >= 74) return '#FFD700';  // Category 1 - Gold

        if (classification.includes('tropical storm')) return '#FFFF00'; // Yellow
        if (classification.includes('depression')) return '#90EE90';    // Light green

        return '#87CEEB'; // Light blue - unknown/disturbance
    }

    /**
     * Get storm size
     */
    static getStormSize(storm) {
        const windSpeed = storm.windSpeed || 0;

        if (windSpeed >= 130) return 3.0;  // Major hurricane
        if (windSpeed >= 96) return 2.5;   // Hurricane
        if (windSpeed >= 74) return 2.0;   // Minimal hurricane
        if (windSpeed >= 39) return 1.5;   // Tropical storm
        return 1.0;                         // Depression
    }

    /**
     * Get storm category label
     */
    static getStormCategory(storm) {
        const windSpeed = storm.windSpeed || 0;

        if (windSpeed >= 157) return 'Category 5';
        if (windSpeed >= 130) return 'Category 4';
        if (windSpeed >= 111) return 'Category 3';
        if (windSpeed >= 96) return 'Category 2';
        if (windSpeed >= 74) return 'Category 1';
        if (windSpeed >= 39) return 'Tropical Storm';
        if (windSpeed >= 0) return 'Tropical Depression';

        return storm.classification || 'Disturbance';
    }
}

// Create global instance
const hurricanesData = new HurricanesData();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HurricanesData;
}
