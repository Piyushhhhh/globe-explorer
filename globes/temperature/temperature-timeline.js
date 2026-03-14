// Temperature Timeline Controller
class TemperatureTimeline {
    constructor(globeInstance) {
        this.globe = globeInstance;
        this.currentYear = 2026;
        this.minYear = 1880;
        this.maxYear = 2026;
        this.isPlaying = false;
        this.playSpeed = 1; // 1 = slow (200ms), 2 = medium (100ms), 3 = fast (50ms)
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
                    <div class="timeline-temperature" id="timelineTemperature">+1.48°C</div>
                    <div class="timeline-event" id="timelineEvent">Current climate status</div>
                </div>
                <div class="timeline-controls">
                    <button class="timeline-btn" id="timelinePlay" title="Play/Pause (Space)">▶</button>
                </div>
            </div>

            <div class="timeline-slider-wrapper">
                <input
                    type="range"
                    class="timeline-slider"
                    id="timelineSlider"
                    min="1880"
                    max="2026"
                    value="2026"
                    step="1"
                />
                <div class="timeline-milestone" style="left: 48%;">Baseline</div>
                <div class="timeline-milestone" style="left: 92%;">Paris</div>
                <div class="timeline-tooltip" id="timelineTooltip"></div>
            </div>

            <div class="timeline-labels">
                <span class="timeline-label">1880</span>
                <span class="timeline-label">1920</span>
                <span class="timeline-label">1951<br><small>Baseline</small></span>
                <span class="timeline-label">1980</span>
                <span class="timeline-label">2020</span>
                <span class="timeline-label timeline-now" id="timelineNow">NOW</span>
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
            // Ignore if user is typing in an input or info panel is focused
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // Don't interfere with existing ESC handler for info panel
            if (e.key === 'Escape') {
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

        // Update UI
        document.getElementById('timelineYear').textContent = year;

        // Update slider
        const slider = document.getElementById('timelineSlider');
        if (slider) {
            slider.value = year;
            const progress = ((year - this.minYear) / (this.maxYear - this.minYear)) * 100;
            slider.style.setProperty('--slider-progress', `${progress}%`);
        }

        // Update temperature display
        const globalAvg = getGlobalAverage(year);
        const tempDisplay = document.getElementById('timelineTemperature');
        if (tempDisplay && globalAvg !== null) {
            const sign = globalAvg >= 0 ? '+' : '';
            tempDisplay.textContent = `${sign}${globalAvg.toFixed(2)}°C`;
        }

        // Update event description
        const event = getClimateEvent(year);
        const eventDisplay = document.getElementById('timelineEvent');
        if (eventDisplay && event) {
            eventDisplay.textContent = event;
        }

        // Update visualization
        this.updateVisualization(year);
    }

    stepYear(delta) {
        this.setYear(this.currentYear + delta);
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;

        const playBtn = document.getElementById('timelinePlay');
        if (playBtn) {
            playBtn.textContent = this.isPlaying ? '⏸' : '▶';
            playBtn.classList.toggle('playing', this.isPlaying);
        }

        if (this.isPlaying) {
            this.startPlayback();
        } else {
            this.stopPlayback();
        }
    }

    startPlayback() {
        // Clear any existing interval
        this.stopPlayback();

        // Calculate interval based on speed
        const intervals = { 1: 200, 2: 100, 3: 50 }; // milliseconds
        const interval = intervals[this.playSpeed] || 200;

        this.playInterval = setInterval(() => {
            if (this.currentYear >= this.maxYear) {
                // Loop back to start
                this.setYear(this.minYear);
            } else {
                this.stepYear(1);
            }
        }, interval);
    }

    stopPlayback() {
        if (this.playInterval) {
            clearInterval(this.playInterval);
            this.playInterval = null;
        }
    }

    setSpeed(speed) {
        this.playSpeed = speed;

        // If currently playing, restart with new speed
        if (this.isPlaying) {
            this.startPlayback();
        }
    }

    updateVisualization(year) {
        // Update globe colors based on temperature for the given year
        if (!window.countriesData || !this.globe) return;

        // Update polygon colors
        this.globe.polygonsData(window.countriesData)
            .polygonCapColor((d) => {
                const countryName = d.properties.ADMIN;
                const temp = getCountryTemperature(countryName, year);

                // If no data, use grey
                if (temp === null) {
                    return 'rgba(50, 50, 50, 0.05)';
                }

                // Color by temperature anomaly for this year
                const anomaly = temp;

                // Hover effect
                if (d === window.hoveredPolygon) {
                    if (anomaly >= 2.0) return 'rgba(231, 76, 60, 0.35)';
                    if (anomaly >= 1.5) return 'rgba(243, 156, 18, 0.35)';
                    return 'rgba(46, 204, 113, 0.35)';
                }

                // Selected country
                if (selectedCountry === countryName) {
                    if (anomaly >= 2.0) return 'rgba(231, 76, 60, 0.25)';
                    if (anomaly >= 1.5) return 'rgba(243, 156, 18, 0.25)';
                    return 'rgba(46, 204, 113, 0.25)';
                }

                // Default colors based on anomaly
                if (anomaly >= 2.0) return 'rgba(231, 76, 60, 0.15)';
                if (anomaly >= 1.5) return 'rgba(243, 156, 18, 0.15)';
                if (anomaly >= 1.0) return 'rgba(243, 156, 18, 0.10)';
                if (anomaly >= 0.5) return 'rgba(46, 204, 113, 0.10)';
                return 'rgba(96, 165, 250, 0.10)';
            });
    }
}

// Initialize timeline when globe is ready
let timelineInstance = null;

function initializeTemperatureTimeline() {
    if (typeof globe !== 'undefined' && globe) {
        timelineInstance = new TemperatureTimeline(globe);
        console.log('Temperature timeline initialized');
    } else {
        console.error('Globe not found - timeline cannot initialize');
    }
}

// Auto-initialize after a delay (called from index.html)
window.initializeTemperatureTimeline = initializeTemperatureTimeline;
