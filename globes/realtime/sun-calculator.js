/**
 * Sun Position Calculator
 * Calculates the subsolar point (where the sun is directly overhead)
 * for accurate day/night visualization
 */

class SunCalculator {
    /**
     * Get current subsolar point (latitude/longitude where sun is directly overhead)
     * @returns {Object} {lat, lng} - Sun's position
     */
    static getSubsolarPoint(date = new Date()) {
        const julianDate = this.toJulianDate(date);
        const julianCentury = (julianDate - 2451545.0) / 36525.0;

        // Calculate solar longitude (ecliptic longitude)
        const solarLongitude = this.getSolarLongitude(julianCentury);

        // Calculate solar declination (latitude)
        const declination = this.getSolarDeclination(solarLongitude);

        // Calculate equation of time and solar longitude (for accurate noon)
        const equationOfTime = this.getEquationOfTime(julianCentury);

        // Get UT time in hours
        const utHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;

        // Calculate solar hour angle
        const solarHourAngle = (utHours - 12) * 15 + equationOfTime;

        // Solar longitude (where sun is overhead)
        let solarLng = -solarHourAngle;

        // Normalize to -180 to 180
        while (solarLng > 180) solarLng -= 360;
        while (solarLng < -180) solarLng += 360;

        return {
            lat: declination,
            lng: solarLng
        };
    }

    /**
     * Convert Date to Julian Date
     */
    static toJulianDate(date) {
        const time = date.getTime();
        const tzOffset = date.getTimezoneOffset();
        return (time / 86400000) - (tzOffset / 1440) + 2440587.5;
    }

    /**
     * Calculate solar longitude (position in orbit)
     */
    static getSolarLongitude(T) {
        // Mean anomaly of the Sun
        const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
        const MRad = M * Math.PI / 180;

        // Equation of center
        const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(MRad)
                + (0.019993 - 0.000101 * T) * Math.sin(2 * MRad)
                + 0.000289 * Math.sin(3 * MRad);

        // True longitude
        const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
        const trueLongitude = L0 + C;

        return trueLongitude;
    }

    /**
     * Calculate solar declination (sun's latitude)
     */
    static getSolarDeclination(longitude) {
        const obliquity = 23.439291 - 0.0130042 * (longitude / 36525);
        const lonRad = longitude * Math.PI / 180;
        const oblRad = obliquity * Math.PI / 180;

        const declination = Math.asin(Math.sin(oblRad) * Math.sin(lonRad)) * 180 / Math.PI;
        return declination;
    }

    /**
     * Calculate equation of time (correction for solar noon)
     */
    static getEquationOfTime(T) {
        const epsilon = 23.439291 - 0.0130042 * T;
        const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
        const e = 0.016708634 - 0.000042037 * T - 0.0000001267 * T * T;
        const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;

        const y = Math.tan(epsilon * Math.PI / 360) ** 2;
        const MRad = M * Math.PI / 180;
        const L0Rad = L0 * Math.PI / 180;

        const EoT = y * Math.sin(2 * L0Rad)
                  - 2 * e * Math.sin(MRad)
                  + 4 * e * y * Math.sin(MRad) * Math.cos(2 * L0Rad)
                  - 0.5 * y * y * Math.sin(4 * L0Rad)
                  - 1.25 * e * e * Math.sin(2 * MRad);

        return EoT * 4 * 180 / Math.PI; // Convert to degrees
    }

    /**
     * Check if a point is in daylight
     * @param {number} lat - Latitude
     * @param {number} lng - Longitude
     * @param {Date} date - Current date/time
     * @returns {boolean} true if in daylight
     */
    static isInDaylight(lat, lng, date = new Date()) {
        const sunPos = this.getSubsolarPoint(date);

        // Calculate angular distance from subsolar point
        const latRad = lat * Math.PI / 180;
        const lngRad = lng * Math.PI / 180;
        const sunLatRad = sunPos.lat * Math.PI / 180;
        const sunLngRad = sunPos.lng * Math.PI / 180;

        // Haversine formula for great circle distance
        const dLat = latRad - sunLatRad;
        const dLng = lngRad - sunLngRad;

        const a = Math.sin(dLat / 2) ** 2
                + Math.cos(latRad) * Math.cos(sunLatRad) * Math.sin(dLng / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = c * 180 / Math.PI; // Convert to degrees

        // Point is in daylight if within 90 degrees of subsolar point
        // (adding small buffer for twilight)
        return distance < 92;
    }

    /**
     * Get twilight color for a position (for gradient effect)
     * @returns {number} 0 (night) to 1 (day)
     */
    static getTwilightFactor(lat, lng, date = new Date()) {
        const sunPos = this.getSubsolarPoint(date);

        const latRad = lat * Math.PI / 180;
        const lngRad = lng * Math.PI / 180;
        const sunLatRad = sunPos.lat * Math.PI / 180;
        const sunLngRad = sunPos.lng * Math.PI / 180;

        const dLat = latRad - sunLatRad;
        const dLng = lngRad - sunLngRad;

        const a = Math.sin(dLat / 2) ** 2
                + Math.cos(latRad) * Math.cos(sunLatRad) * Math.sin(dLng / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = c * 180 / Math.PI;

        // Smooth transition from 88° to 95°
        if (distance < 88) return 1; // Full day
        if (distance > 95) return 0; // Full night

        // Twilight gradient
        return (95 - distance) / 7;
    }

    /**
     * Calculate sunrise/sunset times for a location
     * @param {number} lat - Latitude
     * @param {number} lng - Longitude
     * @param {Date} date - Date
     * @returns {Object} {sunrise, sunset} - Date objects
     */
    static getSunriseSunset(lat, lng, date = new Date()) {
        const julianDate = this.toJulianDate(date);
        const julianCentury = (julianDate - 2451545.0) / 36525.0;

        const declination = this.getSolarDeclination(this.getSolarLongitude(julianCentury));
        const decRad = declination * Math.PI / 180;
        const latRad = lat * Math.PI / 180;

        // Hour angle at sunrise/sunset
        const cosHA = -Math.tan(latRad) * Math.tan(decRad);

        // No sunrise/sunset near poles in summer/winter
        if (Math.abs(cosHA) > 1) {
            return {
                sunrise: null,
                sunset: null,
                polarDay: cosHA < -1,
                polarNight: cosHA > 1
            };
        }

        const hourAngle = Math.acos(cosHA) * 180 / Math.PI;

        const sunrise = new Date(date);
        sunrise.setUTCHours(12 - hourAngle / 15, 0, 0, 0);

        const sunset = new Date(date);
        sunset.setUTCHours(12 + hourAngle / 15, 0, 0, 0);

        return { sunrise, sunset };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SunCalculator;
}
