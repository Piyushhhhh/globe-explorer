// ========================================
// CARBON GLOBE - ANIMATION ENGINE
// ========================================
// Reusable animation system with throttling and cancellation

// Active animations registry
const activeAnimations = new Set();
const animationQueue = [];

// Animation ID counter
let animationIdCounter = 0;

/**
 * Count-up animation for numeric values
 * @param {HTMLElement} element - Target element to animate
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Optional suffix (e.g., ' tons', ' Mt')
 * @returns {object} Animation controller with cancel() method
 */
function countUp(element, start, end, duration = 1000, suffix = '') {
    // Validation
    if (!element) {
        console.warn('countUp: element is null');
        return { cancel: () => {} };
    }

    if (isNaN(start) || isNaN(end)) {
        console.warn('countUp: invalid numbers', start, end);
        element.textContent = (end || 0) + suffix;
        return { cancel: () => {} };
    }

    // Check concurrent animation limit
    if (activeAnimations.size >= CONFIG.MAX_CONCURRENT_ANIMATIONS) {
        // Queue this animation
        return queueAnimation(() => countUp(element, start, end, duration, suffix));
    }

    const animId = ++animationIdCounter;
    activeAnimations.add(animId);

    let startTime = null;
    let cancelled = false;
    let rafId = null;

    function animate(timestamp) {
        if (cancelled) {
            activeAnimations.delete(animId);
            processQueue();
            return;
        }

        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function (ease-out cubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * eased;

        // Format number with proper decimals
        const formatted = formatNumber(current, end);
        element.textContent = formatted + suffix;

        if (progress < 1) {
            rafId = requestAnimationFrame(animate);
        } else {
            activeAnimations.delete(animId);
            processQueue();
        }
    }

    rafId = requestAnimationFrame(animate);

    // Return controller
    return {
        cancel: () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
            activeAnimations.delete(animId);
            processQueue();
        }
    };
}

/**
 * Smooth transition with custom callback
 * @param {function} callback - Function called with progress (0-1)
 * @param {number} duration - Animation duration in ms
 * @returns {object} Animation controller
 */
function smoothTransition(callback, duration = 500) {
    let startTime = null;
    let cancelled = false;
    let rafId = null;

    function animate(timestamp) {
        if (cancelled) return;

        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Ease-in-out
        const eased = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        callback(eased);

        if (progress < 1) {
            rafId = requestAnimationFrame(animate);
        }
    }

    rafId = requestAnimationFrame(animate);

    return {
        cancel: () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
        }
    };
}

/**
 * Pulse animation for country polygons
 * @param {object} polygon - Globe.gl polygon object
 * @param {number} intensity - Pulse intensity (0-1)
 * @returns {object} Animation controller
 */
function pulseCountry(polygon, intensity = 0.5) {
    if (!CONFIG.ENABLE_AMBIENT_PULSES) {
        return { cancel: () => {} };
    }

    const baseAltitude = 0.002;
    const pulseHeight = 0.01 * intensity;
    let cancelled = false;
    let rafId = null;

    function animate(timestamp) {
        if (cancelled) return;

        const phase = (timestamp % 2000) / 2000; // 2s cycle
        const altitude = baseAltitude + pulseHeight * Math.sin(phase * Math.PI * 2);

        // Update polygon altitude (if Globe.gl supports)
        if (polygon && globe) {
            try {
                globe.polygonAltitude(() => altitude);
            } catch (e) {
                // Globe.gl might not support dynamic altitude
                cancelled = true;
                return;
            }
        }

        rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    return {
        cancel: () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
        }
    };
}

/**
 * Celebration sparkles for countries with declining emissions
 * @param {object} position - {x, y} screen coordinates
 */
function celebrationSparkles(position) {
    if (!CONFIG.ENABLE_CELEBRATION_EFFECTS) return;

    const container = document.getElementById('globe');
    const sparkleCount = 20;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = position.x + 'px';
        sparkle.style.top = position.y + 'px';

        // Random velocity
        const angle = (Math.PI * 2 * i) / sparkleCount;
        const velocity = 2 + Math.random() * 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        container.appendChild(sparkle);

        // Animate sparkle
        let posX = position.x;
        let posY = position.y;
        let opacity = 1;
        let frame = 0;

        function animateSparkle() {
            if (frame++ > 60) { // 1 second at 60fps
                sparkle.remove();
                return;
            }

            posX += vx;
            posY += vy - frame * 0.1; // Gravity
            opacity -= 0.016;

            sparkle.style.transform = `translate(${posX - position.x}px, ${posY - position.y}px)`;
            sparkle.style.opacity = opacity;

            requestAnimationFrame(animateSparkle);
        }

        requestAnimationFrame(animateSparkle);
    }
}

/**
 * Throttled rendering for time-travel (every N frames)
 * @param {function} callback - Render function
 * @param {number} fps - Target FPS (30 = every 2 frames at 60fps)
 * @returns {function} Throttled function
 */
function throttleRender(callback, fps = CONFIG.ANIMATION_THROTTLE_FPS) {
    const interval = 1000 / fps;
    let lastTime = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            callback.apply(this, args);
        }
    };
}

/**
 * Queue animation when limit reached
 */
function queueAnimation(animationFn) {
    animationQueue.push(animationFn);
    return {
        cancel: () => {
            const index = animationQueue.indexOf(animationFn);
            if (index > -1) animationQueue.splice(index, 1);
        }
    };
}

/**
 * Process queued animations
 */
function processQueue() {
    if (animationQueue.length > 0 &&
        activeAnimations.size < CONFIG.MAX_CONCURRENT_ANIMATIONS) {
        const nextAnim = animationQueue.shift();
        nextAnim();
    }
}

/**
 * Cancel all active animations
 */
function cancelAllAnimations() {
    activeAnimations.clear();
    animationQueue.length = 0;
}

/**
 * Format number with appropriate decimals
 */
function formatNumber(value, targetValue) {
    if (targetValue > 100) {
        return Math.round(value).toLocaleString();
    } else if (targetValue > 10) {
        return value.toFixed(1);
    } else {
        return value.toFixed(2);
    }
}

/**
 * Pause/resume animations when tab is backgrounded
 */
let animationsPaused = false;
document.addEventListener('visibilitychange', () => {
    animationsPaused = document.hidden;
    if (CONFIG.ENABLE_DEBUG_LOGGING) {
        console.log('[ANIMATION]', animationsPaused ? 'Paused' : 'Resumed');
    }
});

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        countUp,
        smoothTransition,
        pulseCountry,
        celebrationSparkles,
        throttleRender,
        cancelAllAnimations
    };
}
