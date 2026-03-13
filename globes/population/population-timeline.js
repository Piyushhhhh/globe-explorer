// Population Timeline Controller
class PopulationTimeline {
    constructor(globeInstance) {
        this.globe = globeInstance;
        this.currentYear = 2026;
        this.minYear = 1950;
        this.maxYear = 2050;
        this.isPlaying = false;
        this.playSpeed = 1; // 1 = slow, 2 = medium, 3 = fast
        this.playInterval = null;

        this.init();
    }

    init() {
        this.createTimelineUI();
        this.attachEventListeners();
        this.updateVisualization(this.currentYear);

        // Initialize slider progress on load
        setTimeout(() => {
            const slider = document.getElementById('timelineSlider');
            if (slider) {
                const progress = ((this.currentYear - this.minYear) / (this.maxYear - this.minYear)) * 100;
                slider.style.setProperty('--slider-progress', `${progress}%`);
            }
        }, 100);
    }

    createTimelineUI() {
        const container = document.createElement('div');
        container.className = 'timeline-container';
        container.innerHTML = `
            <div class="timeline-header">
                <div class="timeline-year" id="timelineYear">2026</div>
                <div class="timeline-info">
                    <div class="timeline-population">
                        <span class="label">Global Population: </span>
                        <span id="timelinePopulation">8.2B</span>
                    </div>
                    <div class="timeline-event" id="timelineEvent">Current year - 8.2 billion</div>
                </div>
                <div class="timeline-controls">
                    <button class="timeline-btn timeline-btn-small" id="timelineStepBack" title="Previous Year (←)">⏮</button>
                    <button class="timeline-btn" id="timelinePlay" title="Play/Pause (Space)">▶</button>
                    <button class="timeline-btn timeline-btn-small" id="timelineStepForward" title="Next Year (→)">⏭</button>
                </div>
            </div>

            <div class="timeline-slider-wrapper">
                <input
                    type="range"
                    class="timeline-slider"
                    id="timelineSlider"
                    min="1950"
                    max="2050"
                    value="2026"
                    step="1"
                />
                <div class="timeline-milestone" style="left: 73%;" title="India overtakes China as most populous">
                    🏆 2023
                </div>
                <div class="timeline-tooltip" id="timelineTooltip"></div>
            </div>

            <div class="timeline-labels">
                <span class="timeline-label">1950</span>
                <span class="timeline-label">1970</span>
                <span class="timeline-label">1990</span>
                <span class="timeline-label">2010</span>
                <span class="timeline-label">2020</span>
                <span class="timeline-label timeline-now" id="timelineNow">2026<br>NOW</span>
                <span class="timeline-label">2040</span>
                <span class="timeline-label">2050</span>
            </div>

            <div class="timeline-bottom-controls">
                <div class="timeline-speed">
                    <span class="timeline-speed-label">Speed:</span>
                    <button class="timeline-speed-btn active" data-speed="1">Slow</button>
                    <button class="timeline-speed-btn" data-speed="2">Medium</button>
                    <button class="timeline-speed-btn" data-speed="3">Fast</button>
                </div>
                <div class="timeline-presets">
                    <span class="timeline-speed-label">Jump to:</span>
                    <button class="timeline-preset-btn" data-year="1950">📜 1950</button>
                    <button class="timeline-preset-btn" data-year="2000">🎯 2000</button>
                    <button class="timeline-preset-btn" data-year="2023">🏆 2023</button>
                    <button class="timeline-preset-btn" data-year="2050">🔮 2050</button>
                </div>
            </div>
        `;

        document.body.appendChild(container);
    }

    attachEventListeners() {
        // Slider
        const slider = document.getElementById('timelineSlider');
        const tooltip = document.getElementById('timelineTooltip');

        slider.addEventListener('input', (e) => {
            const year = parseInt(e.target.value);
            this.setYear(year);
        });

        // Update slider progress visual
        slider.addEventListener('input', (e) => {
            const progress = ((e.target.value - this.minYear) / (this.maxYear - this.minYear)) * 100;
            e.target.style.setProperty('--slider-progress', `${progress}%`);
        });

        // Show tooltip on hover
        slider.addEventListener('mousemove', (e) => {
            const rect = slider.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const year = Math.round(this.minYear + percent * (this.maxYear - this.minYear));

            tooltip.textContent = year;
            tooltip.style.left = `${e.clientX - rect.left}px`;
            tooltip.style.display = 'block';
        });

        slider.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        // Play/Pause button
        const playBtn = document.getElementById('timelinePlay');
        playBtn.addEventListener('click', () => {
            this.togglePlay();
        });

        // Speed buttons
        const speedBtns = document.querySelectorAll('.timeline-speed-btn');
        speedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const speed = parseInt(btn.dataset.speed);
                this.setSpeed(speed);

                // Update active state
                speedBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // NOW button - jump to current year
        const nowBtn = document.getElementById('timelineNow');
        if (nowBtn) {
            nowBtn.addEventListener('click', () => {
                this.setYear(2026);
            });
        }

        // Step forward/back buttons
        const stepBackBtn = document.getElementById('timelineStepBack');
        const stepForwardBtn = document.getElementById('timelineStepForward');

        if (stepBackBtn) {
            stepBackBtn.addEventListener('click', () => {
                this.stepYear(-1);
            });
        }

        if (stepForwardBtn) {
            stepForwardBtn.addEventListener('click', () => {
                this.stepYear(1);
            });
        }

        // Preset year buttons
        const presetBtns = document.querySelectorAll('.timeline-preset-btn');
        presetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const year = parseInt(btn.dataset.year);
                this.setYear(year);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ignore if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            switch(e.key) {
                case ' ':
                case 'Spacebar': // older browsers
                    e.preventDefault();
                    this.togglePlay();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.stepYear(-1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.stepYear(1);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.stepYear(-10);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.stepYear(10);
                    break;
                case 'Home':
                    e.preventDefault();
                    this.setYear(this.minYear);
                    break;
                case 'End':
                    e.preventDefault();
                    this.setYear(this.maxYear);
                    break;
            }
        });
    }

    setYear(year) {
        // Clamp year to valid range
        year = Math.max(this.minYear, Math.min(this.maxYear, year));

        this.currentYear = year;
        this.updateUI();
        this.updateVisualization(year);

        // If a country is selected, update its info panel in real-time
        if (this.globe.selectedCountry) {
            this.updateSelectedCountryInfo();
        }
    }

    stepYear(delta) {
        const newYear = this.currentYear + delta;
        this.setYear(newYear);
    }

    updateUI() {
        const yearEl = document.getElementById('timelineYear');
        const populationEl = document.getElementById('timelinePopulation');
        const eventEl = document.getElementById('timelineEvent');
        const slider = document.getElementById('timelineSlider');

        // Add pulse animation
        yearEl.classList.add('changing');
        setTimeout(() => yearEl.classList.remove('changing'), 300);

        yearEl.textContent = this.currentYear;
        slider.value = this.currentYear;

        // Update slider progress
        const progress = ((this.currentYear - this.minYear) / (this.maxYear - this.minYear)) * 100;
        slider.style.setProperty('--slider-progress', `${progress}%`);

        // Get metadata for this year or nearest year
        const metadata = this.getYearMetadata(this.currentYear);
        if (metadata) {
            populationEl.textContent = `${metadata.globalPopulation}B`;
            eventEl.textContent = metadata.event;
        }
    }

    getYearMetadata(year) {
        // If exact year exists, return it
        if (window.yearMetadata && window.yearMetadata[year]) {
            return window.yearMetadata[year];
        }

        // Otherwise interpolate from nearest years
        const years = Object.keys(window.yearMetadata).map(Number).sort((a, b) => a - b);
        const lowerYear = years.reverse().find(y => y <= year);
        const upperYear = years.find(y => y >= year);

        if (lowerYear && upperYear && lowerYear !== upperYear) {
            const lowerData = window.yearMetadata[lowerYear];
            const upperData = window.yearMetadata[upperYear];
            const ratio = (year - lowerYear) / (upperYear - lowerYear);

            return {
                globalPopulation: (lowerData.globalPopulation + (upperData.globalPopulation - lowerData.globalPopulation) * ratio).toFixed(1),
                mostPopulous: year < 2023 ? "China" : "India",
                fastestGrowing: upperData.fastestGrowing,
                event: lowerData.event
            };
        }

        return window.yearMetadata[lowerYear || upperYear] || {
            globalPopulation: 8.2,
            mostPopulous: "India",
            fastestGrowing: "Nigeria",
            event: "Demographic data"
        };
    }

    updateVisualization(year) {
        if (!this.globe || !window.populationTimeline) return;

        // Get population data for this year (interpolated)
        const yearData = this.getPopulationForYear(year);

        // Update the globe's data
        this.globe.data = yearData;

        // Re-render polygons with new data
        if (this.globe.countriesData) {
            this.globe.globe.polygonsData(this.globe.countriesData);
        }
    }

    updateSelectedCountryInfo() {
        const countryName = this.globe.selectedCountry;
        if (!countryName || !this.globe.data[countryName]) return;

        const country = this.globe.data[countryName];

        // Update the info panel with new data
        this.globe.showCountryInfo(countryName, country);
    }

    getPopulationForYear(year) {
        const yearData = {};
        const timeline = window.populationTimeline;
        const baseData = window.populationData;

        Object.keys(baseData).forEach(country => {
            if (timeline[country]) {
                const population = this.interpolatePopulation(country, year);

                // Copy base data and update population-related fields
                yearData[country] = {
                    ...baseData[country],
                    population: population,
                    // Recalculate density (assuming area stays constant)
                    density: Math.round((population / baseData[country].population) * baseData[country].density)
                };

                // Update rank based on new population
                // (We'll do a second pass for this)
            } else {
                // Country doesn't have timeline data, use base data
                yearData[country] = {...baseData[country]};
            }
        });

        // Recalculate ranks based on population
        const sorted = Object.entries(yearData).sort((a, b) => b[1].population - a[1].population);
        sorted.forEach(([country, data], index) => {
            yearData[country].rank = index + 1;
        });

        return yearData;
    }

    interpolatePopulation(country, year) {
        const timeline = window.populationTimeline[country];
        if (!timeline) return window.populationData[country].population;

        // If exact year exists
        if (timeline[year]) {
            return timeline[year];
        }

        // Find surrounding years
        const years = Object.keys(timeline).map(Number).sort((a, b) => a - b);
        const lowerYear = years.reverse().find(y => y <= year);
        const upperYear = years.find(y => y >= year);

        if (!lowerYear || !upperYear || lowerYear === upperYear) {
            return timeline[lowerYear || upperYear] || window.populationData[country].population;
        }

        // Linear interpolation
        const lowerPop = timeline[lowerYear];
        const upperPop = timeline[upperYear];
        const ratio = (year - lowerYear) / (upperYear - lowerYear);

        return lowerPop + (upperPop - lowerPop) * ratio;
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;
        const playBtn = document.getElementById('timelinePlay');

        if (this.isPlaying) {
            playBtn.innerHTML = '⏸';
            playBtn.classList.add('playing');
            playBtn.title = 'Pause';
            this.startPlaying();
        } else {
            playBtn.innerHTML = '▶';
            playBtn.classList.remove('playing');
            playBtn.title = 'Play';
            this.stopPlaying();
        }
    }

    startPlaying() {
        // Clear any existing interval
        if (this.playInterval) {
            clearInterval(this.playInterval);
        }

        // Speed settings (years per second)
        const speeds = {
            1: 2,    // Slow: 2 years/second
            2: 5,    // Medium: 5 years/second
            3: 10    // Fast: 10 years/second
        };

        const yearsPerSecond = speeds[this.playSpeed];
        const intervalMs = 1000 / yearsPerSecond;

        this.playInterval = setInterval(() => {
            if (this.currentYear >= this.maxYear) {
                // Loop back to start
                this.setYear(this.minYear);
            } else {
                this.setYear(this.currentYear + 1);
            }
        }, intervalMs);
    }

    stopPlaying() {
        if (this.playInterval) {
            clearInterval(this.playInterval);
            this.playInterval = null;
        }
    }

    setSpeed(speed) {
        this.playSpeed = speed;

        // If currently playing, restart with new speed
        if (this.isPlaying) {
            this.stopPlaying();
            this.startPlaying();
        }
    }
}

// Initialize timeline when globe is ready
let timelineInstance;

function initializeTimeline() {
    if (window.globeInstance) {
        timelineInstance = new PopulationTimeline(window.globeInstance);
        console.log('Population Timeline initialized');
    } else {
        console.error('Globe instance not found');
    }
}

// Export for external use
if (typeof window !== 'undefined') {
    window.PopulationTimeline = PopulationTimeline;
    window.initializeTimeline = initializeTimeline;
}
