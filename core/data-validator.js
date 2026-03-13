// ========================================
// CARBON GLOBE - DATA VALIDATOR
// ========================================
// Validates carbonData integrity on app initialization

/**
 * Validate all carbon data entries
 * @returns {object} { valid: boolean, errors: Array, warnings: Array }
 */
function validateCarbonData() {
    const errors = [];
    const warnings = [];
    const invalidCountries = [];

    // Check if carbonData exists
    if (typeof window.carbonData === 'undefined') {
        errors.push('carbonData not found on window object');
        return { valid: false, errors, warnings, invalidCountries: [] };
    }

    const carbonData = window.carbonData;

    if (!carbonData || typeof carbonData !== 'object') {
        errors.push('carbonData is null or invalid type');
        return { valid: false, errors, warnings, invalidCountries: [] };
    }

    Object.entries(carbonData).forEach(([country, data]) => {
        const countryErrors = [];

        // Check required fields
        if (!data) {
            countryErrors.push('Data object is null/undefined');
            invalidCountries.push(country);
            return;
        }

        // Validate total emissions
        if (data.total === undefined || data.total === null) {
            countryErrors.push('Missing total emissions');
        } else if (typeof data.total !== 'number') {
            countryErrors.push(`Invalid total type: ${typeof data.total}`);
        } else if (isNaN(data.total)) {
            countryErrors.push('Total is NaN');
        } else if (!isFinite(data.total)) {
            countryErrors.push('Total is Infinity');
        } else if (data.total < 0) {
            warnings.push(`${country}: Negative total emissions (${data.total})`);
        }

        // Validate per capita emissions
        if (data.perCapita === undefined || data.perCapita === null) {
            countryErrors.push('Missing perCapita emissions');
        } else if (typeof data.perCapita !== 'number') {
            countryErrors.push(`Invalid perCapita type: ${typeof data.perCapita}`);
        } else if (isNaN(data.perCapita)) {
            countryErrors.push('perCapita is NaN');
        } else if (!isFinite(data.perCapita)) {
            countryErrors.push('perCapita is Infinity');
        } else if (data.perCapita < 0) {
            warnings.push(`${country}: Negative perCapita (${data.perCapita})`);
        }

        // Validate rank
        if (data.rank === undefined || data.rank === null) {
            warnings.push(`${country}: Missing rank`);
        } else if (typeof data.rank !== 'number' || data.rank < 1) {
            warnings.push(`${country}: Invalid rank (${data.rank})`);
        }

        // Validate population (optional but should be reasonable)
        if (data.population !== undefined) {
            if (typeof data.population !== 'number') {
                warnings.push(`${country}: Invalid population type`);
            } else if (data.population < 0) {
                warnings.push(`${country}: Negative population`);
            }
        }

        // Validate sector data (optional but should sum to ~100)
        if (data.sector) {
            const sectorSum = Object.values(data.sector).reduce((sum, val) => sum + val, 0);
            if (Math.abs(sectorSum - 100) > 5) {
                warnings.push(`${country}: Sector percentages don't sum to 100 (${sectorSum})`);
            }

            Object.entries(data.sector).forEach(([sector, value]) => {
                if (typeof value !== 'number' || value < 0 || value > 100) {
                    warnings.push(`${country}: Invalid sector value for ${sector} (${value})`);
                }
            });
        }

        // If country has errors, mark as invalid
        if (countryErrors.length > 0) {
            errors.push(`${country}: ${countryErrors.join(', ')}`);
            invalidCountries.push(country);
        }
    });

    // Remove invalid countries from dataset if fail-fast enabled
    if (CONFIG.FAIL_FAST_ON_INVALID_DATA && invalidCountries.length > 0) {
        invalidCountries.forEach(country => {
            console.error(`[VALIDATION] Removing invalid country: ${country}`);
            delete window.carbonData[country];
        });
    }

    const valid = errors.length === 0;

    return {
        valid,
        errors,
        warnings,
        invalidCountries,
        totalCountries: Object.keys(window.carbonData).length,
        validCountries: Object.keys(window.carbonData).length - invalidCountries.length
    };
}

/**
 * Validate country coordinates
 */
function validateCountryCoordinates() {
    const errors = [];
    const warnings = [];

    if (typeof window.countryCoordinates === 'undefined') {
        errors.push('countryCoordinates not found on window object');
        return { valid: false, errors, warnings };
    }

    const countryCoordinates = window.countryCoordinates;

    if (!countryCoordinates || typeof countryCoordinates !== 'object') {
        errors.push('countryCoordinates is null or invalid type');
        return { valid: false, errors, warnings };
    }

    Object.entries(countryCoordinates).forEach(([country, coords]) => {
        if (!coords) {
            warnings.push(`${country}: Missing coordinates`);
            return;
        }

        // Validate latitude
        if (coords.lat === undefined || typeof coords.lat !== 'number') {
            errors.push(`${country}: Invalid latitude`);
        } else if (coords.lat < -90 || coords.lat > 90) {
            errors.push(`${country}: Latitude out of range (${coords.lat})`);
        }

        // Validate longitude
        if (coords.lon === undefined || typeof coords.lon !== 'number') {
            errors.push(`${country}: Invalid longitude`);
        } else if (coords.lon < -180 || coords.lon > 180) {
            errors.push(`${country}: Longitude out of range (${coords.lon})`);
        }
    });

    return {
        valid: errors.length === 0,
        errors,
        warnings
    };
}

/**
 * Display validation results
 */
function displayValidationResults(results) {
    console.group('[VALIDATION] Carbon Data Validation');

    if (results.valid) {
        console.log(`✅ All ${results.validCountries} countries validated successfully`);
    } else {
        console.error(`❌ Validation failed: ${results.errors.length} errors`);
        results.errors.forEach(error => console.error('  •', error));
    }

    if (results.warnings.length > 0) {
        console.warn(`⚠️  ${results.warnings.length} warnings:`);
        results.warnings.forEach(warning => console.warn('  •', warning));
    }

    if (results.invalidCountries && results.invalidCountries.length > 0) {
        console.warn(`🗑️  Removed ${results.invalidCountries.length} invalid countries`);
    }

    console.groupEnd();

    // Show warning banner if there are issues
    if (!results.valid || results.invalidCountries.length > 0) {
        showWarningBanner(
            `Data quality issues detected. ${results.invalidCountries.length} countries removed.`
        );
    }
}

/**
 * Show warning banner at top of page
 */
function showWarningBanner(message) {
    const banner = document.createElement('div');
    banner.className = 'warning-banner';
    banner.innerHTML = `
        <div class="warning-icon">⚠️</div>
        <div class="warning-text">${message}</div>
        <button class="warning-close" onclick="this.parentElement.remove()">✕</button>
    `;

    document.body.appendChild(banner);

    // Add styles if not already present
    if (!document.getElementById('warningBannerStyles')) {
        const style = document.createElement('style');
        style.id = 'warningBannerStyles';
        style.textContent = `
            .warning-banner {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: rgba(245, 158, 11, 0.95);
                backdrop-filter: blur(10px);
                color: white;
                padding: 12px 20px;
                display: flex;
                align-items: center;
                gap: 12px;
                z-index: 10000;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            .warning-icon {
                font-size: 20px;
            }
            .warning-text {
                flex: 1;
                font-size: 14px;
                font-weight: 500;
            }
            .warning-close {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .warning-close:hover {
                background: rgba(255, 255, 255, 0.3);
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Run all validations
 */
function runAllValidations() {
    console.log('[VALIDATION] Running data validation...');

    const dataResults = validateCarbonData();
    const coordResults = validateCountryCoordinates();

    displayValidationResults(dataResults);

    if (coordResults.errors.length > 0) {
        console.error('[VALIDATION] Coordinate errors:', coordResults.errors);
    }

    if (coordResults.warnings.length > 0) {
        console.warn('[VALIDATION] Coordinate warnings:', coordResults.warnings);
    }

    return {
        dataValid: dataResults.valid,
        coordsValid: coordResults.valid,
        allValid: dataResults.valid && coordResults.valid
    };
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateCarbonData,
        validateCountryCoordinates,
        runAllValidations
    };
}
