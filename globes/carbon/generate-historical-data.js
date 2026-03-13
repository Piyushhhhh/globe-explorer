#!/usr/bin/env node
/**
 * Generate historical emission data files for Carbon Globe
 * Uses current 2023 data to extrapolate historical trends
 */

const fs = require('fs');
const path = require('path');

// Load current 2023 data by reading and evaluating data.js
let carbonData;
try {
    const dataFileContent = fs.readFileSync('./data.js', 'utf8');
    // Execute the JavaScript to get carbonData
    eval(dataFileContent);
    if (typeof carbonData === 'undefined') {
        throw new Error('carbonData not defined in data.js');
    }
} catch (error) {
    console.error('❌ Error loading data.js:', error.message);
    process.exit(1);
}

// Top 20 countries to prioritize
const TOP_20 = [
    'China', 'United States of America', 'India', 'Russia', 'Japan',
    'Germany', 'Iran', 'South Korea', 'Saudi Arabia', 'Indonesia',
    'Canada', 'Brazil', 'Mexico', 'Australia', 'United Kingdom',
    'Turkey', 'France', 'Italy', 'Poland', 'Spain'
];

/**
 * Generate historical data (1993-2023) based on current 2023 values
 */
function generateHistoricalData(countryName, currentData) {
    const { total, perCapita, rank } = currentData;
    const historical = [];

    for (let year = 1993; year <= 2023; year++) {
        // Progress through years (0.0 = 1993, 1.0 = 2023)
        const progress = (year - 1993) / 30;

        // Determine growth pattern based on per capita emissions
        let growthFactor;
        if (perCapita > 10) {
            // High emitters (developed countries): fast early growth, then plateau/decline
            growthFactor = progress < 0.7
                ? 0.7 + (progress * 0.35)
                : 1.0 - (progress - 0.7) * 0.1;
        } else if (perCapita > 5) {
            // Medium emitters (developing): steady growth
            growthFactor = 0.5 + (progress * 0.6);
        } else {
            // Low emitters: slow steady growth
            growthFactor = 0.6 + (progress * 0.5);
        }

        // Add some variation (±5%)
        const variation = 0.95 + Math.random() * 0.1;

        // Calculate historical values
        const historicalTotal = Math.round(total * growthFactor * variation * 10) / 10;
        const historicalPerCapita = Math.round(perCapita * growthFactor * variation * 100) / 100;
        const historicalRank = Math.max(1, rank + Math.floor(Math.random() * 11) - 5);

        historical.push({
            year,
            total: historicalTotal,
            perCapita: historicalPerCapita,
            rank: historicalRank
        });
    }

    return historical;
}

/**
 * Save historical data to JSON file
 */
function saveHistoricalFile(countryName, data) {
    // Clean filename
    const safeFilename = countryName.replace(/\//g, '-').replace(/\\/g, '-');
    const filepath = path.join('data', 'historical', `${safeFilename}.json`);

    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    return filepath;
}

/**
 * Main function
 */
function main() {
    console.log('🌍 Carbon Globe - Historical Data Generator (JavaScript)');
    console.log('='.repeat(70));

    // Create output directory
    console.log('\n📁 Creating output directory...');
    const historicalDir = path.join('data', 'historical');
    if (!fs.existsSync(historicalDir)) {
        fs.mkdirSync(historicalDir, { recursive: true });
    }
    console.log('✅ Created data/historical/');

    // Generate historical data for all countries
    const countries = Object.keys(carbonData);
    console.log(`\n🔨 Generating historical data for ${countries.length} countries...`);
    console.log('(This may take a minute...)\n');

    let generated = 0;
    let failed = 0;

    // Set random seed for reproducibility
    Math.seedrandom = function(seed) {
        let x = Math.sin(seed++) * 10000;
        return () => {
            x = Math.sin(x) * 10000;
            return x - Math.floor(x);
        };
    };
    const random = Math.seedrandom(42);
    Math.random = random;

    countries.forEach(countryName => {
        try {
            const countryData = carbonData[countryName];

            if (!countryData || !countryData.total || !countryData.perCapita) {
                console.log(`  ⚠️  ${countryName.padEnd(40)} → Missing data`);
                failed++;
                return;
            }

            const historical = generateHistoricalData(countryName, countryData);
            const filepath = saveHistoricalFile(countryName, historical);

            generated++;

            // Show progress for top 20
            if (TOP_20.includes(countryName)) {
                console.log(`  ✅ ${countryName.padEnd(40)} → ${filepath}`);
            }
        } catch (error) {
            console.log(`  ❌ ${countryName.padEnd(40)} → Error: ${error.message}`);
            failed++;
        }
    });

    // Summary
    console.log('\n' + '='.repeat(70));
    console.log('📊 Generation Summary:');
    console.log(`   ✅ Generated: ${generated} countries`);
    console.log(`   ❌ Failed: ${failed} countries`);
    console.log(`   📁 Output: data/historical/`);

    // Calculate total size
    const files = fs.readdirSync(historicalDir);
    const totalSize = files.reduce((sum, file) => {
        const filePath = path.join(historicalDir, file);
        return sum + fs.statSync(filePath).size;
    }, 0);

    console.log(`   💾 Total size: ${(totalSize / 1024 / 1024).toFixed(1)} MB`);

    console.log('\n✨ Historical data generation complete!');
    console.log('\n🚀 Next steps:');
    console.log('   1. Open index.html in browser');
    console.log('   2. Double-click any country to enter time-travel mode');
    console.log('   3. Drag the year scrubber to see historical data');
}

// Run main function
main();
