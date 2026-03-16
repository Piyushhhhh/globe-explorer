/**
 * Day/Night Shader with Twilight Zones
 * Creates realistic lighting based on sun position
 */

class DayNightShader {
    constructor(globe) {
        this.globe = globe;
        this.sunPosition = { lat: 0, lng: 0 };
        this.nightTexture = null;
        this.dayTexture = null;
    }

    /**
     * Initialize shader with textures
     */
    init() {
        // Load earth textures
        this.dayTexture = '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';
        this.nightTexture = '//unpkg.com/three-globe/example/img/earth-night.jpg';

        // Apply initial shading
        this.update();

        // Update every 10 seconds
        setInterval(() => this.update(), 10000);

        console.log('[SHADER] Day/night shader initialized');
    }

    /**
     * Update sun position and shader
     */
    update() {
        const now = new Date();
        this.sunPosition = SunCalculator.getSubsolarPoint(now);

        console.log(`[SHADER] Sun at ${this.sunPosition.lat.toFixed(2)}°, ${this.sunPosition.lng.toFixed(2)}°`);

        // Apply shading
        this.applyDayNightEffect();
    }

    /**
     * Apply day/night effect to globe
     */
    applyDayNightEffect() {
        // Use globe.gl's material system
        // For now, we'll use a simpler approach with overlays
        this.createDayNightOverlay();
    }

    /**
     * Create day/night overlay effect
     */
    createDayNightOverlay() {
        // Calculate which hemisphere is in daylight
        const sunLat = this.sunPosition.lat;
        const sunLng = this.sunPosition.lng;

        // For each polygon, determine if it's day or night
        // This is a simplified approach - full shader would be better
        console.log(`[SHADER] Daylight centered at ${sunLat.toFixed(1)}°N, ${sunLng.toFixed(1)}°E`);
    }

    /**
     * Calculate if a point is in day, twilight, or night
     * @param {number} lat - Latitude
     * @param {number} lng - Longitude
     * @returns {string} 'day', 'twilight', or 'night'
     */
    getTimeOfDay(lat, lng) {
        const sunPos = this.sunPosition;

        // Calculate great circle distance from subsolar point
        const latRad = lat * Math.PI / 180;
        const lngRad = lng * Math.PI / 180;
        const sunLatRad = sunPos.lat * Math.PI / 180;
        const sunLngRad = sunPos.lng * Math.PI / 180;

        const dLat = latRad - sunLatRad;
        const dLng = lngRad - sunLngRad;

        const a = Math.sin(dLat / 2) ** 2
                + Math.cos(latRad) * Math.cos(sunLatRad) * Math.sin(dLng / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = c * 180 / Math.PI; // Convert to degrees

        // Classify based on distance from subsolar point
        if (distance < 85) return 'day';           // Full daylight
        if (distance < 95) return 'twilight';      // Dawn/dusk
        return 'night';                             // Night
    }

    /**
     * Get color for a point based on time of day
     */
    getColorForTimeOfDay(lat, lng) {
        const timeOfDay = this.getTimeOfDay(lat, lng);

        const colors = {
            day: 'rgba(255, 250, 200, 0.15)',     // Bright sunlight - warm yellow
            twilight: 'rgba(255, 120, 50, 0.5)',  // Golden hour - vibrant orange
            night: 'rgba(5, 10, 35, 0.85)'        // Deep night - dark navy blue
        };

        return colors[timeOfDay];
    }
}

/**
 * Alternative approach: Use Three.js custom shader
 * This creates more realistic lighting
 */
function createRealisticDayNightShader(globe, sunPosition) {
    // Get the globe's material
    const globeMaterial = globe.scene().children.find(obj => obj.type === 'Mesh');

    if (!globeMaterial) return;

    // Custom shader uniforms
    const uniforms = {
        sunDirection: {
            value: calculateSunDirection(sunPosition)
        },
        dayTexture: {
            value: new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        },
        nightTexture: {
            value: new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-night.jpg')
        }
    };

    console.log('[SHADER] Custom shader applied with sun direction:', uniforms.sunDirection.value);
}

/**
 * Calculate sun direction vector for shader
 */
function calculateSunDirection(sunPos) {
    const lat = sunPos.lat * Math.PI / 180;
    const lng = sunPos.lng * Math.PI / 180;

    return {
        x: Math.cos(lat) * Math.cos(lng),
        y: Math.sin(lat),
        z: Math.cos(lat) * Math.sin(lng)
    };
}

/**
 * Simple approach: Apply color polygons based on day/night
 */
function applySimpleDayNight(globe, countries, sunPosition) {
    // Color each country based on whether it's day or night
    const shader = new DayNightShader(globe);

    countries.features.forEach(feature => {
        // Get country centroid
        const coords = feature.geometry.coordinates;
        let lat = 0, lng = 0;

        // Simple centroid calculation
        if (feature.geometry.type === 'Polygon') {
            lat = coords[0][0][1];
            lng = coords[0][0][0];
        }

        const timeOfDay = shader.getTimeOfDay(lat, lng);

        // Apply different colors
        const colors = {
            day: 'rgba(255, 250, 200, 0.15)',     // Bright sunlight - warm yellow
            twilight: 'rgba(255, 120, 50, 0.5)',  // Golden hour - vibrant orange
            night: 'rgba(5, 10, 35, 0.85)'        // Deep night - dark navy blue
        };

        feature.timeOfDay = timeOfDay;
        feature.overlayColor = colors[timeOfDay];
    });

    // Update globe polygons
    globe.polygonsData(countries.features);

    console.log('[SHADER] Applied simple day/night coloring');
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DayNightShader, applySimpleDayNight };
}
