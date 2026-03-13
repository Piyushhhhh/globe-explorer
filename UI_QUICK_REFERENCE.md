# 🎨 UI Quick Reference Guide

A quick reference for using the Globe Explorer design system.

---

## 🎯 Design Tokens at a Glance

### Colors
```css
/* Primary (Blue) */
--color-primary-500: #3b82f6   /* Main brand color */

/* Success (Green) */
--color-success-500: #10b981   /* Live status */

/* Warning (Orange) */
--color-warning-500: #f59e0b   /* Coming soon */

/* Neutrals */
--color-neutral-900: #0f172a   /* Background */
--color-neutral-50: #f8fafc    /* Text */
```

### Typography
```css
/* Headings */
--font-size-6xl: 3.75rem  /* Hero (60px) */
--font-size-2xl: 1.5rem   /* Card titles (24px) */

/* Body */
--font-size-base: 1rem    /* Base (16px) */
--font-size-sm: 0.875rem  /* Small (14px) */
--font-size-xs: 0.75rem   /* Labels (12px) */
```

### Spacing
```css
--space-2: 0.5rem    /* 8px - tight */
--space-4: 1rem      /* 16px - standard */
--space-6: 1.5rem    /* 24px - comfortable */
--space-8: 2rem      /* 32px - spacious */
```

### Shadows
```css
--shadow-lg: ...      /* Cards (resting) */
--shadow-2xl: ...     /* Cards (hover) */
--shadow-glow: ...    /* Live elements */
```

---

## 🧱 Component Templates

### Globe Card (Live)

```html
<a href="globes/your-globe/index.html"
   class="globe-card"
   aria-label="Explore Your Globe - Live">

    <div class="globe-icon-container">
        <div class="globe-icon">🌍</div>
    </div>

    <div class="globe-card-content">
        <h2 class="globe-title">Your Globe Title</h2>
        <p class="globe-description">
            Your description here. Keep it concise,
            1-2 sentences maximum.
        </p>

        <div class="globe-card-footer">
            <span class="globe-status status-live">Live</span>
            <div class="launch-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
        </div>
    </div>
</a>
```

### Globe Card (Coming Soon)

```html
<div class="globe-card disabled"
     role="article"
     aria-label="Your Globe - Coming Soon">

    <div class="globe-icon-container">
        <div class="globe-icon">🌡️</div>
    </div>

    <div class="globe-card-content">
        <h2 class="globe-title">Your Globe Title</h2>
        <p class="globe-description">
            Your description here.
        </p>

        <div class="globe-card-footer">
            <span class="globe-status status-coming-soon">Coming Soon</span>
        </div>
    </div>
</div>
```

---

## 🎭 Animation Classes

### Entrance Animations

```css
/* Fade in from top */
animation: fadeInDown 0.8s var(--transition-base);

/* Fade in from bottom */
animation: fadeInUp 0.6s var(--transition-base);

/* Simple fade in */
animation: fadeIn 1s var(--transition-base);
```

### Stagger Effect

```css
.globe-card:nth-child(1) { animation-delay: 0.1s; }
.globe-card:nth-child(2) { animation-delay: 0.2s; }
.globe-card:nth-child(3) { animation-delay: 0.3s; }
/* Add 0.1s for each additional card */
```

---

## 🎨 Common Patterns

### Gradient Text

```css
.gradient-text {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Glassmorphism Card

```css
.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-2xl);
}
```

### Glow Effect

```css
.glow-element {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.glow-element:hover {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}
```

### Pulse Animation

```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

.pulse-element {
    animation: pulse 2s ease-in-out infinite;
}
```

---

## 📱 Responsive Utilities

### Breakpoints

```css
/* Mobile (default) */
/* No media query needed */

/* Tablet and up */
@media (min-width: 769px) {
    /* 2-column layout */
}

/* Desktop and up */
@media (min-width: 1025px) {
    /* 3-column layout */
}
```

### Fluid Typography

```css
/* Scales between 36px and 60px */
font-size: clamp(2.25rem, 5vw, 3.75rem);

/* Scales between 16px and 20px */
font-size: clamp(1rem, 2vw, 1.25rem);
```

---

## ♿ Accessibility Checklist

When adding new components:

```html
<!-- ✅ Use semantic HTML -->
<header>, <main>, <footer>, <article>, <nav>

<!-- ✅ Add ARIA labels for interactive elements -->
<a href="..." aria-label="Descriptive action">

<!-- ✅ Hide decorative elements from screen readers -->
<div class="icon" aria-hidden="true">

<!-- ✅ Ensure keyboard focus is visible -->
.element:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
}

<!-- ✅ Meet color contrast requirements -->
/* Minimum 4.5:1 for normal text */
/* Minimum 3:1 for large text (18px+) */

<!-- ✅ Support reduced motion preference -->
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🎯 Common Use Cases

### Adding a New Globe Card

1. Copy template (live or coming soon)
2. Update icon emoji
3. Update title and description
4. Update href (if live)
5. Add stagger delay: `.globe-card:nth-child(N) { animation-delay: Ns; }`
6. Test keyboard navigation
7. Verify color contrast

### Changing Brand Color

```css
:root {
    /* Change primary color */
    --color-primary-500: #your-color;
    --color-primary-600: #darker-version;

    /* Update glow to match */
    --shadow-glow: 0 0 20px rgb(your-color / 0.3);
}
```

### Adding Custom Animation

```css
@keyframes yourAnimation {
    from { /* start state */ }
    to { /* end state */ }
}

.your-element {
    animation: yourAnimation 600ms var(--transition-base);
}
```

---

## 🚀 Performance Tips

### ✅ DO

```css
/* Use transform for animations */
transform: translateY(-12px) scale(1.02);

/* Use opacity for fades */
opacity: 0;

/* Use will-change sparingly */
.hover-element:hover {
    will-change: transform;
}
```

### ❌ DON'T

```css
/* Avoid animating layout properties */
top: -12px;          /* ❌ Causes reflow */
width: 110%;         /* ❌ Causes reflow */
margin-top: -12px;   /* ❌ Causes reflow */

/* Don't overuse backdrop-filter */
/* Use only on a few key elements */
```

---

## 🔧 Quick Fixes

### Card Not Animating
- Check animation-delay is set correctly
- Verify animation class is applied
- Check browser supports animation

### Colors Look Wrong
- Verify CSS custom property is defined
- Check for typos in variable names
- Use browser dev tools to inspect computed values

### Hover Effect Not Working
- Check element has cursor: pointer
- Verify transition property is set
- Ensure :hover is targeting correct element

### Text Hard to Read
- Check color contrast with browser tools
- Verify against WCAG standards (4.5:1 minimum)
- Test with different zoom levels

---

## 📚 Reference Links

- **Design System**: `DESIGN_SYSTEM.md`
- **Redesign Summary**: `REDESIGN_SUMMARY.md`
- **Main Documentation**: `README.md`
- **Development Guide**: `DEVELOPMENT.md`

---

## 🎨 Design Token Reference

### Complete Token List

```css
:root {
    /* Colors */
    --color-primary-100: #dbeafe;
    --color-primary-500: #3b82f6;
    --color-primary-900: #1e3a8a;
    --color-success-500: #10b981;
    --color-warning-500: #f59e0b;
    --color-neutral-900: #0f172a;

    /* Typography */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-2xl: 1.5rem;
    --font-size-6xl: 3.75rem;

    /* Spacing */
    --space-2: 0.5rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;

    /* Shadows */
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --shadow-glow: 0 0 20px rgb(59 130 246 / 0.3);

    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    /* Border Radius */
    --radius-md: 0.5rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
}
```

---

## 🎉 Quick Start

1. **Read** `DESIGN_SYSTEM.md` for comprehensive guide
2. **Copy** component templates from this file
3. **Customize** with design tokens
4. **Test** accessibility and responsiveness
5. **Document** any new patterns

---

**Version**: 1.0.0
**Last Updated**: 2026-03-13
**For Questions**: See `DESIGN_SYSTEM.md`
