/**
 * Satellite Constellation Tracking
 * Shows major satellite networks (Starlink, OneWeb, etc.)
 */

class SatellitesData {
    constructor() {
        this.satellites = [];
        this.constellations = {
            starlink: { name: 'Starlink', count: 0, altitude: 550, color: '#00D9FF' },
            oneweb: { name: 'OneWeb', count: 0, altitude: 1200, color: '#FFD700' },
            gps: { name: 'GPS', count: 0, altitude: 20200, color: '#00FF00' }
        };
    }

    /**
     * Generate satellite positions for constellation visualization
     * Creates a realistic distribution at orbital altitudes
     */
    generateConstellationView() {
        const satellites = [];

        // Starlink constellation (LEO - 550km)
        // ~5000 satellites in reality, we'll show a representative sample
        const starlinkCount = 100;
        for (let i = 0; i < starlinkCount; i++) {
            // Multiple orbital planes
            const plane = Math.floor(i / 20);
            const satsPerPlane = 20;
            const phaseOffset = (plane * 360 / 5) % 360;

            satellites.push({
                id: `starlink-${i}`,
                name: `Starlink ${i + 1}`,
                constellation: 'starlink',
                lat: (i * 18) % 180 - 90,  // Distributed across latitudes
                lng: ((i * 360 / satsPerPlane) + phaseOffset) % 360 - 180,
                altitude: 550 + (Math.random() * 50 - 25),  // 525-575km
                type: 'communications'
            });
        }

        // OneWeb constellation (LEO - 1200km)
        const onewebCount = 30;
        for (let i = 0; i < onewebCount; i++) {
            satellites.push({
                id: `oneweb-${i}`,
                name: `OneWeb ${i + 1}`,
                constellation: 'oneweb',
                lat: (i * 15 + 30) % 180 - 90,
                lng: (i * 360 / onewebCount) % 360 - 180,
                altitude: 1200 + (Math.random() * 50 - 25),
                type: 'communications'
            });
        }

        // GPS constellation (MEO - 20,200km)
        const gpsCount = 24;
        for (let i = 0; i < gpsCount; i++) {
            const orbit = Math.floor(i / 4);  // 6 orbital planes
            const slot = i % 4;

            satellites.push({
                id: `gps-${i}`,
                name: `GPS ${i + 1}`,
                constellation: 'gps',
                lat: Math.sin(orbit * Math.PI / 3) * 55,  // Inclined orbits
                lng: (orbit * 60 + slot * 90) % 360 - 180,
                altitude: 20200,
                type: 'navigation'
            });
        }

        this.satellites = satellites;
        this.constellations.starlink.count = starlinkCount;
        this.constellations.oneweb.count = onewebCount;
        this.constellations.gps.count = gpsCount;

        console.log(`[SATELLITES] Generated ${satellites.length} satellite positions`);
        return satellites;
    }

    /**
     * Update satellite positions (simulated orbital movement)
     */
    updatePositions() {
        this.satellites.forEach(sat => {
            // Simulate orbital movement
            // LEO satellites orbit ~90 minutes, so move faster
            const orbitalPeriod = this.getOrbitalPeriod(sat.altitude);
            const degreesPerSecond = 360 / (orbitalPeriod * 60);

            // Move longitude (eastward for prograde orbits)
            sat.lng = (sat.lng + degreesPerSecond * 5) % 360; // Update every 5 seconds
            if (sat.lng > 180) sat.lng -= 360;
        });

        return this.satellites;
    }

    /**
     * Calculate orbital period (simplified)
     */
    getOrbitalPeriod(altitudeKm) {
        const earthRadius = 6371; // km
        const mu = 398600; // Earth's gravitational parameter (km³/s²)
        const radius = earthRadius + altitudeKm;
        const period = 2 * Math.PI * Math.sqrt(Math.pow(radius, 3) / mu);
        return period / 60; // Convert to minutes
    }

    /**
     * Get satellite color by constellation
     */
    static getSatelliteColor(satellite) {
        const constellation = satellite.constellation || 'unknown';
        const colors = {
            starlink: '#00D9FF',  // Cyan
            oneweb: '#FFD700',    // Gold
            gps: '#00FF00',       // Green
            unknown: '#FFFFFF'    // White
        };
        return colors[constellation] || colors.unknown;
    }

    /**
     * Get satellite size by altitude
     */
    static getSatelliteSize(satellite) {
        const altitude = satellite.altitude || 550;
        if (altitude > 10000) return 0.4;  // MEO/GEO
        if (altitude > 2000) return 0.3;   // High LEO
        return 0.2;                        // Low LEO
    }

    /**
     * Get statistics
     */
    getStats() {
        return {
            total: this.satellites.length,
            starlink: this.constellations.starlink.count,
            oneweb: this.constellations.oneweb.count,
            gps: this.constellations.gps.count
        };
    }
}

// Create global instance
const satellitesData = new SatellitesData();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SatellitesData;
}
