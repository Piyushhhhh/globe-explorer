// Living Planet Features - ENHANCED WITH PARTICLES
// Animated particle migration routes and soundscape

let livingGlobe = null;
let migrationArcs = [];
let migrationParticles = [];
let audioContext = null;
let currentSound = null;
let soundEnabled = true;
let hoveredArcId = null;
let animationFrame = null;

// Migration routes with detailed information
const migrations = [
    {
        from: { lat: 38, lng: -97, location: 'United States & Canada' },
        to: { lat: 19, lng: -99, location: 'Michoacán, Mexico' },
        name: 'Monarch Butterflies',
        color: '#FF8C00',
        emoji: '🦋',
        distance: '4,800 km (3,000 miles)',
        duration: '2 months',
        timing: 'September - November (Southward)',
        return: 'March - April (Northward)',
        population: '~100 million butterflies',
        speed: '80 km/day (50 miles/day)',
        particleCount: 4,
        particleSpeed: 0.003,
        facts: [
            'Makes one of the longest insect migrations',
            'No single butterfly completes the entire round trip',
            'Takes 3-4 generations to complete the cycle',
            'Can travel up to 4,000 km (2,500 miles)',
            'Navigates using the sun and Earth\'s magnetic field'
        ],
        threats: 'Habitat loss, climate change, pesticides',
        conservation: 'Endangered'
    },
    {
        from: { lat: 71, lng: -156, location: 'Arctic Circle' },
        to: { lat: -54, lng: -68, location: 'Antarctica' },
        name: 'Arctic Terns',
        color: '#87CEEB',
        emoji: '🦅',
        distance: '40,000 km (25,000 miles)',
        duration: '3 months each way',
        timing: 'August - November (Southward)',
        return: 'April - June (Northward)',
        population: '~2 million birds',
        speed: '400 km/day (250 miles/day)',
        particleCount: 5,
        particleSpeed: 0.002,
        facts: [
            'Longest migration of any animal on Earth',
            'Sees two summers per year - more daylight than any creature',
            'Can live up to 30 years, traveling 2.4 million km in lifetime',
            'Flies in a zig-zag pattern to catch winds',
            'Experiences 24-hour daylight at both poles'
        ],
        threats: 'Climate change affecting food sources',
        conservation: 'Least Concern'
    },
    {
        from: { lat: 61, lng: -150, location: 'Alaska, USA' },
        to: { lat: 21, lng: -157, location: 'Hawaii, USA' },
        name: 'Humpback Whales',
        color: '#4682B4',
        emoji: '🐋',
        distance: '4,800 km (3,000 miles)',
        duration: '6-8 weeks',
        timing: 'November - January (To Hawaii)',
        return: 'March - May (To Alaska)',
        population: '~10,000 in North Pacific',
        speed: '5-15 km/h (3-9 mph)',
        particleCount: 3,
        particleSpeed: 0.0025,
        facts: [
            'Travel to warm waters to give birth and mate',
            'Don\'t eat during winter breeding season in Hawaii',
            'Males sing complex songs lasting 10-20 minutes',
            'Can hold breath for up to 45 minutes',
            'Newborn calves are 4-5 meters long'
        ],
        threats: 'Ship strikes, entanglement, ocean noise',
        conservation: 'Least Concern (recovered from near extinction)'
    },
    {
        from: { lat: -2, lng: 34, location: 'Serengeti, Tanzania' },
        to: { lat: -1, lng: 35, location: 'Masai Mara, Kenya' },
        name: 'Wildebeest Migration',
        color: '#8B4513',
        emoji: '🦌',
        distance: '800 km (500 miles) circular',
        duration: 'Year-round cycle',
        timing: 'July - October (To Masai Mara)',
        return: 'November - March (To Serengeti)',
        population: '~1.5 million wildebeest',
        speed: '30-40 km/day (20-25 miles/day)',
        particleCount: 6,
        particleSpeed: 0.004,
        facts: [
            'Called "The Greatest Show on Earth"',
            'Circular migration following seasonal rains',
            'Over 500,000 calves born in February-March',
            '250,000+ wildebeest die during river crossings',
            'Accompanied by 200,000 zebras and 300,000 gazelles'
        ],
        threats: 'Habitat fragmentation, poaching, disease',
        conservation: 'Least Concern (but declining)'
    },
    {
        from: { lat: 70, lng: -164, location: 'Bering Sea, Arctic' },
        to: { lat: 24, lng: -110, location: 'Baja California, Mexico' },
        name: 'Gray Whales',
        color: '#708090',
        emoji: '🐳',
        distance: '16,000-22,000 km (10,000-14,000 miles) round trip',
        duration: '2-3 months each way',
        timing: 'October - February (Southward)',
        return: 'February - July (Northward)',
        population: '~27,000 in Eastern Pacific',
        speed: '8 km/h (5 mph)',
        particleCount: 3,
        particleSpeed: 0.0015,
        facts: [
            'Longest mammal migration (by distance)',
            'Travel to warm lagoons to give birth',
            'Mothers and calves are often friendly to whale watchers',
            'Can live 50-70 years',
            'Nearly went extinct due to whaling (recovered since 1940s)'
        ],
        threats: 'Climate change, ship strikes, pollution',
        conservation: 'Least Concern'
    },
    {
        from: { lat: 68, lng: -133, location: 'Arctic Canada' },
        to: { lat: 64, lng: -140, location: 'Alaska, USA' },
        name: 'Caribou Herds',
        color: '#A0522D',
        emoji: '🦌',
        distance: '3,000-5,000 km (1,900-3,100 miles)',
        duration: '8 months round trip',
        timing: 'April - June (To calving grounds)',
        return: 'August - October (To winter range)',
        population: '~200,000 (Porcupine herd)',
        speed: '20-30 km/day (12-19 miles/day)',
        particleCount: 5,
        particleSpeed: 0.0035,
        facts: [
            'Longest land migration in North America',
            'Calves are born during migration',
            'Can swim across rivers and even ocean straits',
            'Herds of up to 200,000 animals',
            'Indigenous peoples have followed caribou for millennia'
        ],
        threats: 'Oil drilling, climate change, habitat loss',
        conservation: 'Vulnerable (declining)'
    },
    // MARINE MIGRATIONS
    {
        from: { lat: -8, lng: 115, location: 'Indonesia (Coral Triangle)' },
        to: { lat: 37, lng: -122, location: 'California, USA' },
        name: 'Leatherback Sea Turtles',
        color: '#20B2AA',
        emoji: '🐢',
        distance: '10,000-20,000 km (6,200-12,400 miles)',
        duration: '6-8 months',
        timing: 'Year-round (peak May-August)',
        return: 'Return to nesting beaches',
        population: '~30,000 nesting females',
        speed: '3-5 km/h (2-3 mph)',
        particleCount: 4,
        particleSpeed: 0.0015,
        facts: [
            'Longest migration of any sea turtle species',
            'Dive up to 1,200 meters deep',
            'Can weigh up to 900 kg (2,000 lbs)',
            'Existed for 100+ million years (survived dinosaurs)',
            'Navigate using Earth\'s magnetic field'
        ],
        threats: 'Plastic pollution, fishing nets, beach development, climate change',
        conservation: 'Critically Endangered'
    },
    {
        from: { lat: 35, lng: 140, location: 'Japan Coast' },
        to: { lat: 25, lng: -112, location: 'Baja California, Mexico' },
        name: 'Loggerhead Sea Turtles',
        color: '#FF6347',
        emoji: '🐢',
        distance: '11,500 km (7,100 miles)',
        duration: '8-10 months',
        timing: 'March - August',
        return: 'Return after 15-20 years',
        population: '~50,000 nesting females',
        speed: '2-4 km/h (1-2.5 mph)',
        particleCount: 4,
        particleSpeed: 0.002,
        facts: [
            'Travel across entire Pacific Ocean',
            'Return to exact beach where they hatched',
            'Strong jaws can crush shellfish',
            'Can hold breath for up to 7 hours when resting',
            'Take 20-30 years to reach maturity'
        ],
        threats: 'Bycatch in fisheries, beach erosion, light pollution',
        conservation: 'Vulnerable'
    },
    {
        from: { lat: 37, lng: -123, location: 'California Coast' },
        to: { lat: 22, lng: -158, location: 'Shark Café (Mid-Pacific)' },
        name: 'Great White Sharks',
        color: '#708090',
        emoji: '🦈',
        distance: '4,000-5,000 km (2,500-3,100 miles)',
        duration: '4-6 months',
        timing: 'December - March',
        return: 'April - November (back to coast)',
        population: '~300 in Eastern Pacific',
        speed: '3-5 km/h (2-3 mph cruising)',
        particleCount: 3,
        particleSpeed: 0.0025,
        facts: [
            'Migrate to mysterious "Shark Café" in mid-Pacific',
            'Purpose of gathering still unknown to scientists',
            'Can detect one drop of blood in 100 liters of water',
            'Have been around for 400+ million years',
            'Can swim at bursts of 56 km/h (35 mph)'
        ],
        threats: 'Fishing bycatch, finning, habitat loss, persecution',
        conservation: 'Vulnerable'
    },
    {
        from: { lat: 61, lng: -150, location: 'Alaska Rivers' },
        to: { lat: 52, lng: -178, location: 'North Pacific Ocean' },
        name: 'Pacific Salmon',
        color: '#FF4500',
        emoji: '🐟',
        distance: '3,000-5,000 km (1,900-3,100 miles)',
        duration: '2-4 years at sea',
        timing: 'Spring (to ocean)',
        return: 'Summer-Fall (to rivers to spawn)',
        population: 'Hundreds of millions',
        speed: '3-5 km/h (2-3 mph)',
        particleCount: 6,
        particleSpeed: 0.003,
        facts: [
            'Return to exact river where they were born',
            'Navigate using sense of smell and magnetic field',
            'Die after spawning (only breed once)',
            'Body changes color from silver to red during return',
            'Keystone species - feeds bears, eagles, forests'
        ],
        threats: 'Dams, overfishing, habitat destruction, climate change',
        conservation: 'Varies by species (some threatened)'
    }
];

// Biome soundscapes
const biomes = {
    'Brazil': 'rainforest',
    'Indonesia': 'rainforest',
    'Democratic Republic of the Congo': 'rainforest',
    'Peru': 'rainforest',
    'Colombia': 'rainforest',

    'Kenya': 'savanna',
    'Tanzania': 'savanna',
    'South Africa': 'savanna',

    'Canada': 'forest',
    'Russia': 'forest',
    'United States of America': 'forest',

    'Australia': 'desert',
    'Saudi Arabia': 'desert',
    'Egypt': 'desert',

    'Greenland': 'arctic',
    'Iceland': 'arctic'
};

const soundFrequencies = {
    'rainforest': { freq: 200, name: 'Dense jungle chorus' },
    'savanna': { freq: 150, name: 'Open grassland winds' },
    'forest': { freq: 180, name: 'Gentle forest sounds' },
    'desert': { freq: 100, name: 'Sparse desert winds' },
    'arctic': { freq: 80, name: 'Icy wilderness' }
};

// Initialize audio context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

// Play biome sound
function playSound(biomeType) {
    if (!soundEnabled || !biomeType) return;

    const ctx = initAudio();
    const sound = soundFrequencies[biomeType];
    if (!sound) return;

    // Stop current sound
    stopSound();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(sound.freq, ctx.currentTime);
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 2);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start(ctx.currentTime);

    currentSound = { oscillator, gainNode };

    // Show indicator
    const indicator = document.getElementById('soundscapeIndicator');
    if (indicator) {
        indicator.textContent = sound.name;
        indicator.classList.add('active');
    }
}

// Stop sound
function stopSound() {
    if (currentSound) {
        try {
            currentSound.oscillator.stop();
        } catch(e) {}
        currentSound = null;
    }

    const indicator = document.getElementById('soundscapeIndicator');
    if (indicator) {
        indicator.classList.remove('active');
    }
}

// Toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
    if (!soundEnabled) {
        stopSound();
    }
    return soundEnabled;
}

// Handle country hover
function handleHover(country) {
    if (!country) {
        stopSound();
        return;
    }

    const countryName = country.properties?.ADMIN || country.properties?.NAME;
    const biomeType = biomes[countryName];

    if (biomeType) {
        playSound(biomeType);
    }
}

// Show migration details in info panel
function showMigrationDetails(migration) {
    const panel = document.getElementById('infoPanel');
    if (!panel) return;

    panel.classList.remove('hidden');
    panel.classList.add('migration-info-panel');

    const factsHTML = migration.facts.map(fact =>
        `<div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 6px; font-size: 13px; line-height: 1.5;">• ${fact}</div>`
    ).join('');

    const html = `
        <button class="close-panel" id="closePanel">✕</button>
        <div class="info-header">
            <div class="country-flag" style="font-size: 64px;">${migration.emoji}</div>
            <h2 class="country-name">${migration.name}</h2>
            <div class="country-rank">Epic Migration Route</div>
        </div>
        <div class="info-content">
            <div class="metric-card" style="background: rgba(255,140,0,0.1);">
                <div class="metric-icon">📍</div>
                <div class="metric-details">
                    <div class="metric-label">Route</div>
                    <div class="metric-value" style="font-size: 14px;">${migration.from.location} → ${migration.to.location}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">📏</div>
                <div class="metric-details">
                    <div class="metric-label">Distance</div>
                    <div class="metric-value" style="font-size: 18px;">${migration.distance}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">⏱️</div>
                <div class="metric-details">
                    <div class="metric-label">Duration</div>
                    <div class="metric-value" style="font-size: 18px;">${migration.duration}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">📅</div>
                <div class="metric-details">
                    <div class="metric-label">Timing (Outbound)</div>
                    <div class="metric-value" style="font-size: 14px;">${migration.timing}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">🔄</div>
                <div class="metric-details">
                    <div class="metric-label">Return Journey</div>
                    <div class="metric-value" style="font-size: 14px;">${migration.return}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">👥</div>
                <div class="metric-details">
                    <div class="metric-label">Population</div>
                    <div class="metric-value" style="font-size: 16px;">${migration.population}</div>
                </div>
            </div>

            <div class="metric-card">
                <div class="metric-icon">⚡</div>
                <div class="metric-details">
                    <div class="metric-label">Speed</div>
                    <div class="metric-value" style="font-size: 16px;">${migration.speed}</div>
                </div>
            </div>

            <div style="margin-top: 20px;">
                <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: white;">✨ Amazing Facts</h3>
                ${factsHTML}
            </div>

            <div class="threat-card threat-${migration.conservation.includes('Endangered') ? 'critical' : migration.conservation.includes('Vulnerable') ? 'high' : 'low'}" style="margin-top: 16px;">
                <div class="threat-header">
                    <span class="threat-icon">⚠️</span>
                    <span class="threat-label">Threats</span>
                </div>
                <div style="font-size: 13px; margin-top: 6px; line-height: 1.5;">${migration.threats}</div>
            </div>

            <div style="margin-top: 12px; padding: 12px; background: rgba(46,204,113,0.1); border-radius: 10px; border: 1px solid rgba(46,204,113,0.3);">
                <div style="font-size: 11px; text-transform: uppercase; opacity: 0.7; margin-bottom: 4px;">Conservation Status</div>
                <div style="font-size: 16px; font-weight: 700; color: #2ecc71;">${migration.conservation}</div>
            </div>
        </div>
    `;

    panel.innerHTML = html;

    // Re-attach close button
    document.getElementById('closePanel').addEventListener('click', () => {
        panel.classList.add('hidden');
        panel.classList.remove('migration-info-panel');
    });
}

// Linear interpolation between two points
function lerp(start, end, t) {
    return start + (end - start) * t;
}

// Calculate position along arc
function getArcPoint(startLat, startLng, endLat, endLng, progress) {
    const lat = lerp(startLat, endLat, progress);
    const lng = lerp(startLng, endLng, progress);
    const altitude = Math.sin(progress * Math.PI) * 0.3; // Arc height
    return { lat, lng, altitude };
}

// Create particles for all migrations
function createParticles() {
    const particles = [];

    migrations.forEach((migration, migrationId) => {
        for (let i = 0; i < migration.particleCount; i++) {
            particles.push({
                migrationId,
                migration,
                progress: i / migration.particleCount, // Stagger particles
                speed: migration.particleSpeed,
                color: migration.color,
                size: 6
            });
        }
    });

    return particles;
}

// Update particle positions
function updateParticles() {
    migrationParticles.forEach(particle => {
        particle.progress += particle.speed;
        if (particle.progress > 1) {
            particle.progress = 0; // Loop back to start
        }

        const pos = getArcPoint(
            particle.migration.from.lat,
            particle.migration.from.lng,
            particle.migration.to.lat,
            particle.migration.to.lng,
            particle.progress
        );

        particle.lat = pos.lat;
        particle.lng = pos.lng;
        particle.altitude = pos.altitude;
    });

    // Update globe with new positions
    if (livingGlobe) {
        livingGlobe.customLayerData(migrationParticles);
    }
}

// Animation loop
function animateParticles() {
    updateParticles();
    animationFrame = requestAnimationFrame(animateParticles);
}

// Initialize migration routes on globe
function initMigrations(globeInstance) {
    livingGlobe = globeInstance;

    // Add arc paths for migrations with full data
    const arcs = migrations.map((m, index) => ({
        ...m,
        startLat: m.from.lat,
        startLng: m.from.lng,
        endLat: m.to.lat,
        endLng: m.to.lng,
        id: index
    }));

    livingGlobe
        .arcsData(arcs)
        .arcColor(d => d.id === hoveredArcId ? d.color : d.color)
        .arcAltitude(0.3)
        .arcStroke(d => d.id === hoveredArcId ? 3.0 : 1.5)
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(3000)
        .onArcHover(arc => {
            hoveredArcId = arc ? arc.id : null;
            document.body.style.cursor = arc ? 'pointer' : 'default';

            // Update arc styling on hover
            if (livingGlobe) {
                livingGlobe.arcsData(arcs);
            }
        })
        .arcLabel(d => `
            <div style="background: rgba(0,0,0,0.95); padding: 14px 18px; border-radius: 14px; color: white; border: 2px solid ${d.color}; max-width: 280px; box-shadow: 0 8px 32px rgba(0,0,0,0.6);">
                <div style="font-size: 22px; margin-bottom: 6px;">${d.emoji}</div>
                <div style="font-size: 16px; font-weight: bold; margin-bottom: 8px; color: ${d.color};">${d.name}</div>
                <div style="font-size: 13px; opacity: 0.9; margin-bottom: 6px;">📏 ${d.distance}</div>
                <div style="font-size: 13px; opacity: 0.9; margin-bottom: 10px;">⏱️ ${d.duration}</div>
                <div style="font-size: 11px; opacity: 0.75; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 8px; margin-top: 8px;">
                    💡 Click for full details, timing & facts
                </div>
            </div>
        `)
        .onArcClick(arc => {
            console.log('🦋 Migration route clicked:', arc.name);

            // Zoom to route
            const midLat = (arc.from.lat + arc.to.lat) / 2;
            const midLng = (arc.from.lng + arc.to.lng) / 2;

            livingGlobe.pointOfView({
                lat: midLat,
                lng: midLng,
                altitude: 1.2
            }, 1500);

            // Show details after zoom
            setTimeout(() => {
                showMigrationDetails(arc);
            }, 800);
        });

    // Create and render particles
    migrationParticles = createParticles();

    livingGlobe
        .customLayerData(migrationParticles)
        .customThreeObject(d => {
            // Create glowing sphere for each particle
            const geometry = new THREE.SphereGeometry(d.size * 0.1, 8, 8);
            const material = new THREE.MeshBasicMaterial({
                color: d.color,
                transparent: true,
                opacity: 0.8
            });
            const mesh = new THREE.Mesh(geometry, material);

            // Add glow effect
            const glowGeometry = new THREE.SphereGeometry(d.size * 0.15, 8, 8);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: d.color,
                transparent: true,
                opacity: 0.3
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            mesh.add(glow);

            return mesh;
        })
        .customThreeObjectUpdate((obj, d) => {
            Object.assign(obj.position, livingGlobe.getCoords(d.lat, d.lng, d.altitude));
        });

    // Start animation
    animateParticles();

    console.log(`✅ Added ${arcs.length} migration routes with ${migrationParticles.length} animated particles`);
}

// Initialize living planet
function initialize(globeInstance) {
    console.log('🌍 Initializing Living Planet...');

    // Clean up previous animation if exists
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }

    initMigrations(globeInstance);

    console.log('✅ Living Planet initialized with animated particles');
}

// Cleanup function
function cleanup() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
    stopSound();
}

// Export functions
window.initializeLivingPlanet = initialize;
window.handleLivingPlanetHover = handleHover;
window.showMigrationDetails = showMigrationDetails;
window.toggleBiodiversitySound = toggleSound;
window.stopBiodiversitySound = stopSound;
window.cleanupLivingPlanet = cleanup;

console.log('🌿 Living Planet system loaded (enhanced with particle animation)');
