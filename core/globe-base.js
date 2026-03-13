// ========================================
// GLOBE BASE CLASS
// Shared functionality for all globe types
// ========================================

class GlobeBase {
    constructor(containerId, options = {}) {
        this.containerId = containerId;
        this.globe = null;
        this.selectedCountry = null;
        this.hoveredPolygon = null;
        this.countriesData = null;

        // Default options
        this.options = {
            globeImageUrl: 'https://unpkg.com/three-globe/example/img/earth-dark.jpg',
            bumpImageUrl: 'https://unpkg.com/three-globe/example/img/earth-topology.png',
            backgroundImageUrl: 'https://unpkg.com/three-globe/example/img/night-sky.png',
            showAtmosphere: true,
            atmosphereColor: 'lightskyblue',
            atmosphereAltitude: 0.15,
            initialLat: 20,
            initialLng: 0,
            initialAltitude: 2.5,
            ...options
        };
    }

    /**
     * Initialize the globe
     */
    async init() {
        const container = document.getElementById(this.containerId);

        if (!container) {
            throw new Error(`Globe container #${this.containerId} not found`);
        }

        if (typeof Globe === 'undefined') {
            throw new Error('Globe.gl library not loaded');
        }

        console.log('Creating globe instance...');

        // Initialize Globe
        this.globe = Globe()
            (container)
            .globeImageUrl(this.options.globeImageUrl)
            .bumpImageUrl(this.options.bumpImageUrl)
            .backgroundImageUrl(this.options.backgroundImageUrl)
            .showAtmosphere(this.options.showAtmosphere)
            .atmosphereColor(this.options.atmosphereColor)
            .atmosphereAltitude(this.options.atmosphereAltitude)
            .width(window.innerWidth)
            .height(window.innerHeight);

        // Camera initial position
        this.globe.pointOfView({
            lat: this.options.initialLat,
            lng: this.options.initialLng,
            altitude: this.options.initialAltitude
        });

        // Controls
        this.globe.controls().autoRotate = false;
        this.globe.controls().enableZoom = true;
        this.globe.controls().minDistance = 101;
        this.globe.controls().maxDistance = 500;

        // Load countries GeoJSON
        await this.loadCountries();

        // Setup event listeners
        this.setupEventListeners();

        console.log('Globe setup complete');
    }

    /**
     * Load countries GeoJSON data
     */
    async loadCountries() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson');
            const countries = await response.json();

            this.countriesData = countries.features.filter(d => d.properties.ISO_A2 !== 'AQ');
            window.countriesData = this.countriesData; // For backwards compatibility

            this.setupPolygons();

            console.log('Countries loaded:', this.countriesData.length);
        } catch (error) {
            console.error('Error loading countries:', error);
            throw error;
        }
    }

    /**
     * Setup polygon rendering - Override this in subclasses
     */
    setupPolygons() {
        this.globe
            .polygonsData(this.countriesData)
            .polygonCapColor(() => 'rgba(100, 100, 100, 0.1)')
            .polygonSideColor(() => 'rgba(100, 100, 100, 0.15)')
            .polygonStrokeColor(() => '#999')
            .polygonsTransitionDuration(300)
            .polygonAltitude(0.002)
            .onPolygonHover((polygon) => {
                this.hoveredPolygon = polygon;
                window.hoveredPolygon = polygon;
                document.body.style.cursor = polygon ? 'pointer' : 'default';
            })
            .onPolygonClick((polygon) => {
                this.handlePolygonClick(polygon);
            });
    }

    /**
     * Handle polygon click - Override this in subclasses
     */
    handlePolygonClick(polygon) {
        const countryName = polygon.properties.ADMIN;
        console.log('Country clicked:', countryName);
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Window resize
        window.addEventListener('resize', () => {
            if (this.globe) {
                this.globe
                    .width(window.innerWidth)
                    .height(window.innerHeight);
            }
        });

        // Track mouse position
        window.addEventListener('mousemove', (e) => {
            window.lastMouseX = e.clientX;
            window.lastMouseY = e.clientY;
        });
    }

    /**
     * Reset camera view
     */
    resetView() {
        if (this.globe) {
            this.globe.pointOfView({
                lat: this.options.initialLat,
                lng: this.options.initialLng,
                altitude: this.options.initialAltitude
            }, 1000);

            this.selectedCountry = null;
            this.hoveredPolygon = null;
        }
    }

    /**
     * Toggle auto-rotate
     */
    toggleAutoRotate() {
        if (this.globe) {
            this.globe.controls().autoRotate = !this.globe.controls().autoRotate;
            return this.globe.controls().autoRotate;
        }
        return false;
    }

    /**
     * Get country center coordinates
     */
    getCountryCenter(country) {
        if (country.geometry.type === 'Polygon') {
            const coords = country.geometry.coordinates[0];
            const center = coords.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0]);
            return [center[0] / coords.length, center[1] / coords.length];
        } else if (country.geometry.type === 'MultiPolygon') {
            const firstPolygon = country.geometry.coordinates[0][0];
            const center = firstPolygon.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0]);
            return [center[0] / firstPolygon.length, center[1] / firstPolygon.length];
        }
        return [0, 0];
    }

    /**
     * Zoom to country
     */
    zoomToCountry(coords, altitude = 0.8, duration = 1500) {
        if (this.globe && coords && coords.length === 2) {
            this.globe.pointOfView({
                lat: coords[1],
                lng: coords[0],
                altitude: altitude
            }, duration);
        }
    }

    /**
     * Get the globe instance
     */
    getGlobe() {
        return this.globe;
    }
}

// Make available globally
if (typeof window !== 'undefined') {
    window.GlobeBase = GlobeBase;
}
