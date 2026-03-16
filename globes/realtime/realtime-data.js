/**
 * Real-Time Data Fetcher
 * Fetches live data from various APIs:
 * - ISS position
 * - Earthquakes (USGS)
 * - Time updates
 */

class RealtimeData {
    constructor() {
        this.issData = null;
        this.earthquakes = [];
        this.updateCallbacks = [];

        // API endpoints
        this.apis = {
            iss: 'https://api.wheretheiss.at/v1/satellites/25544', // ISS NORAD ID
            earthquakes: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
        };

        // Update intervals
        this.intervals = {
            iss: 5000,        // 5 seconds
            earthquakes: 60000, // 1 minute
            time: 1000        // 1 second
        };
    }

    /**
     * Start all data fetching
     */
    start() {
        console.log('[REALTIME] Starting live data feeds...');

        // Initial fetches
        this.fetchISS();
        this.fetchEarthquakes();
        this.updateTime();

        // Set up intervals
        this.issInterval = setInterval(() => this.fetchISS(), this.intervals.iss);
        this.earthquakeInterval = setInterval(() => this.fetchEarthquakes(), this.intervals.earthquakes);
        this.timeInterval = setInterval(() => this.updateTime(), this.intervals.time);

        console.log('[REALTIME] All feeds started successfully');
    }

    /**
     * Stop all data fetching
     */
    stop() {
        clearInterval(this.issInterval);
        clearInterval(this.earthquakeInterval);
        clearInterval(this.timeInterval);
        console.log('[REALTIME] All feeds stopped');
    }

    /**
     * Register callback for data updates
     */
    onUpdate(callback) {
        this.updateCallbacks.push(callback);
    }

    /**
     * Trigger all update callbacks
     */
    triggerUpdate(type, data) {
        this.updateCallbacks.forEach(cb => cb(type, data));
    }

    /**
     * Fetch ISS position
     */
    async fetchISS() {
        try {
            const response = await fetch(this.apis.iss);
            if (!response.ok) throw new Error('ISS API failed');

            const data = await response.json();

            this.issData = {
                lat: data.latitude,
                lng: data.longitude,
                altitude: data.altitude,
                velocity: data.velocity,
                timestamp: data.timestamp,
                visibility: data.visibility
            };

            // Update stats
            if (document.getElementById('issAltitude')) {
                document.getElementById('issAltitude').textContent = `${Math.round(data.altitude)} km`;
            }
            if (document.getElementById('issSpeed')) {
                document.getElementById('issSpeed').textContent = `${Math.round(data.velocity)} km/h`;
            }

            this.triggerUpdate('iss', this.issData);

            console.log('[ISS] Position updated:', this.issData.lat.toFixed(2), this.issData.lng.toFixed(2));
        } catch (error) {
            console.error('[ISS] Failed to fetch position:', error);
            // Use fallback position if API fails
            if (!this.issData) {
                this.issData = {
                    lat: 0,
                    lng: 0,
                    altitude: 408,
                    velocity: 27600,
                    timestamp: Date.now(),
                    visibility: 'unknown'
                };
            }
        }
    }

    /**
     * Fetch recent earthquakes (last 24 hours)
     */
    async fetchEarthquakes() {
        try {
            const response = await fetch(this.apis.earthquakes);
            if (!response.ok) throw new Error('USGS API failed');

            const data = await response.json();

            this.earthquakes = data.features.map(feature => ({
                id: feature.id,
                magnitude: feature.properties.mag,
                place: feature.properties.place,
                time: feature.properties.time,
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0],
                depth: feature.geometry.coordinates[2],
                url: feature.properties.url
            })).filter(eq => eq.magnitude >= 2.5); // Only show significant earthquakes

            // Update count
            if (document.getElementById('earthquakeCount')) {
                document.getElementById('earthquakeCount').textContent = this.earthquakes.length;
            }

            this.triggerUpdate('earthquakes', this.earthquakes);

            console.log(`[EARTHQUAKES] Fetched ${this.earthquakes.length} events`);
        } catch (error) {
            console.error('[EARTHQUAKES] Failed to fetch data:', error);
        }
    }

    /**
     * Update time display
     */
    updateTime() {
        const now = new Date();
        const timeString = now.toUTCString().split(' ')[4]; // HH:MM:SS

        if (document.getElementById('liveTime')) {
            document.getElementById('liveTime').textContent = `${timeString} UTC`;
        }

        this.triggerUpdate('time', now);
    }

    /**
     * Get color for earthquake magnitude
     */
    static getEarthquakeColor(magnitude) {
        if (magnitude >= 7) return '#8B0000'; // Dark red - major
        if (magnitude >= 6) return '#DC143C'; // Crimson - strong
        if (magnitude >= 5) return '#FF4500'; // Orange red - moderate
        if (magnitude >= 4) return '#FF8C00'; // Dark orange - light
        return '#FFA500'; // Orange - minor
    }

    /**
     * Get size for earthquake magnitude
     */
    static getEarthquakeSize(magnitude) {
        // Increased base size and multiplier for better visibility
        return Math.max(0.3, (magnitude - 2) * 0.35);
    }

    /**
     * Format earthquake place name
     */
    static formatPlace(place) {
        // Remove "km [direction] of" prefix
        const parts = place.split(' of ');
        return parts.length > 1 ? parts[1] : place;
    }

    /**
     * Calculate day/night ratio
     */
    calculateDayNightRatio(date = new Date()) {
        // Get subsolar point
        const sunPos = SunCalculator.getSubsolarPoint(date);

        // Sample points around the globe
        let dayCount = 0;
        let totalCount = 0;

        for (let lat = -85; lat <= 85; lat += 10) {
            for (let lng = -180; lng < 180; lng += 10) {
                totalCount++;
                if (SunCalculator.isInDaylight(lat, lng, date)) {
                    dayCount++;
                }
            }
        }

        const dayPercent = Math.round((dayCount / totalCount) * 100);
        const nightPercent = 100 - dayPercent;

        // Update display
        if (document.getElementById('dayNightRatio')) {
            document.getElementById('dayNightRatio').textContent = `${dayPercent}/${nightPercent}`;
        }

        return { day: dayPercent, night: nightPercent };
    }

    /**
     * Get current data snapshot
     */
    getSnapshot() {
        return {
            iss: this.issData,
            earthquakes: this.earthquakes,
            time: new Date()
        };
    }
}

// Create global instance
const realtimeData = new RealtimeData();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RealtimeData;
}
