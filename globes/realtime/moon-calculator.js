/**
 * Moon Position & Phase Calculator
 * Calculates accurate moon position, phase, and orbital data
 */

class MoonCalculator {
    /**
     * Get moon position in Earth coordinates
     * @param {Date} date - Current date/time
     * @returns {Object} Moon position with lat, lng, distance, phase
     */
    static getMoonPosition(date = new Date()) {
        const d = this.toDays(date);

        // Moon's mean longitude
        const L = this.normalize(218.316 + 13.176396 * d);

        // Moon's mean anomaly
        const M = this.normalize(134.963 + 13.064993 * d);

        // Moon's mean distance
        const F = this.normalize(93.272 + 13.229350 * d);

        // Moon's longitude
        const lDeg = L + 6.289 * Math.sin(this.toRadians(M));
        const l = this.toRadians(lDeg);

        // Moon's latitude
        const b = this.toRadians(5.128 * Math.sin(this.toRadians(F)));

        // Distance from Earth (km)
        const distance = 385001 - 20905 * Math.cos(this.toRadians(M));

        // Convert to Earth coordinates
        const lat = this.toDegrees(Math.asin(Math.sin(b)));
        const lng = this.normalize(this.toDegrees(l) - 180);

        // Calculate phase
        const phase = this.getMoonPhase(date);

        return {
            lat,
            lng,
            distance,
            phase: phase.phase,
            phaseValue: phase.value,
            illumination: phase.illumination,
            age: phase.age
        };
    }

    /**
     * Calculate moon phase
     * @param {Date} date
     * @returns {Object} Phase information
     */
    static getMoonPhase(date = new Date()) {
        const d = this.toDays(date);

        // Moon's mean longitude
        const L = this.normalize(218.316 + 13.176396 * d);

        // Sun's mean longitude
        const LS = this.normalize(280.459 + 0.98564736 * d);

        // Phase angle
        const phaseAngle = this.normalize(L - LS);

        // Phase value (0 = new moon, 0.5 = full moon, 1 = new moon)
        const phaseValue = (1 - Math.cos(this.toRadians(phaseAngle))) / 2;

        // Illumination percentage
        const illumination = phaseValue * 100;

        // Moon age in days (0-29.53)
        const age = (phaseAngle / 360) * 29.530588;

        // Phase name
        let phaseName;
        if (phaseValue < 0.05) phaseName = 'New Moon';
        else if (phaseValue < 0.20) phaseName = 'Waxing Crescent';
        else if (phaseValue < 0.30) phaseName = 'First Quarter';
        else if (phaseValue < 0.45) phaseName = 'Waxing Gibbous';
        else if (phaseValue < 0.55) phaseName = 'Full Moon';
        else if (phaseValue < 0.70) phaseName = 'Waning Gibbous';
        else if (phaseValue < 0.80) phaseName = 'Last Quarter';
        else phaseName = 'Waning Crescent';

        return {
            phase: phaseName,
            value: phaseValue,
            illumination: illumination,
            age: age
        };
    }

    /**
     * Get moon phase emoji
     */
    static getPhaseEmoji(phaseValue) {
        if (phaseValue < 0.05) return '🌑'; // New Moon
        if (phaseValue < 0.20) return '🌒'; // Waxing Crescent
        if (phaseValue < 0.30) return '🌓'; // First Quarter
        if (phaseValue < 0.45) return '🌔'; // Waxing Gibbous
        if (phaseValue < 0.55) return '🌕'; // Full Moon
        if (phaseValue < 0.70) return '🌖'; // Waning Gibbous
        if (phaseValue < 0.80) return '🌗'; // Last Quarter
        return '🌘'; // Waning Crescent
    }

    /**
     * Calculate next full moon date
     */
    static getNextFullMoon(date = new Date()) {
        let testDate = new Date(date);
        let minDiff = Infinity;
        let closestDate = testDate;

        // Search next 30 days
        for (let i = 0; i < 30; i++) {
            testDate = new Date(date.getTime() + i * 24 * 60 * 60 * 1000);
            const phase = this.getMoonPhase(testDate);
            const diff = Math.abs(phase.value - 0.5);

            if (diff < minDiff && phase.value > 0.45 && phase.value < 0.55) {
                minDiff = diff;
                closestDate = testDate;
            }
        }

        return closestDate;
    }

    /**
     * Calculate next new moon date
     */
    static getNextNewMoon(date = new Date()) {
        let testDate = new Date(date);
        let minPhase = Infinity;
        let closestDate = testDate;

        // Search next 30 days
        for (let i = 1; i < 30; i++) {
            testDate = new Date(date.getTime() + i * 24 * 60 * 60 * 1000);
            const phase = this.getMoonPhase(testDate);

            if (phase.value < minPhase && phase.value < 0.1) {
                minPhase = phase.value;
                closestDate = testDate;
            }
        }

        return closestDate;
    }

    /**
     * Helper: Convert date to days since J2000
     */
    static toDays(date) {
        const J2000 = new Date('2000-01-01T12:00:00Z');
        return (date - J2000) / (24 * 60 * 60 * 1000);
    }

    /**
     * Helper: Normalize angle to 0-360
     */
    static normalize(angle) {
        angle = angle % 360;
        return angle < 0 ? angle + 360 : angle;
    }

    /**
     * Helper: Convert degrees to radians
     */
    static toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    /**
     * Helper: Convert radians to degrees
     */
    static toDegrees(radians) {
        return radians * 180 / Math.PI;
    }

    /**
     * Get human-readable distance
     */
    static formatDistance(km) {
        return Math.round(km).toLocaleString() + ' km';
    }

    /**
     * Get moon info summary
     */
    static getMoonInfo(date = new Date()) {
        const pos = this.getMoonPosition(date);
        const nextFull = this.getNextFullMoon(date);
        const nextNew = this.getNextNewMoon(date);

        // Calculate orbital velocity (approximate)
        const orbitalVelocity = Math.round((2 * Math.PI * pos.distance) / (27.32 * 24)); // km/h

        // Determine if waxing or waning
        const isWaxing = pos.phaseValue < 0.5;

        // Check if supermoon or micromoon
        const avgDistance = 384400;
        const distanceDiff = ((avgDistance - pos.distance) / avgDistance) * 100;
        let moonType = 'Normal';
        if (distanceDiff > 5) moonType = 'Supermoon';
        else if (distanceDiff < -5) moonType = 'Micromoon';

        // Apparent size compared to average
        const apparentSize = (avgDistance / pos.distance) * 100;

        return {
            position: pos,
            emoji: this.getPhaseEmoji(pos.phaseValue),
            nextFullMoon: nextFull,
            nextNewMoon: nextNew,
            daysToFullMoon: Math.round((nextFull - date) / (24 * 60 * 60 * 1000)),
            daysToNewMoon: Math.round((nextNew - date) / (24 * 60 * 60 * 1000)),
            orbitalVelocity: orbitalVelocity,
            isWaxing: isWaxing,
            moonType: moonType,
            apparentSize: apparentSize.toFixed(1)
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MoonCalculator;
}
