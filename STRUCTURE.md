# 📁 Directory Structure

```
carbon-globe/
├── 📄 index.html                    # Main globe selector page
├── 📄 README.md                     # Project documentation
├── 📄 DEVELOPMENT.md                # Guide for creating new globes
├── 📄 RESTRUCTURE_SUMMARY.md        # Restructure summary
│
├── 📁 core/                         # Shared core functionality
│   ├── globe-base.js               # Base class for all globes ⭐
│   ├── config.js                   # Global configuration
│   ├── ui-helpers.js               # UI utilities (toasts, tooltips)
│   ├── animation-engine.js         # Animation system
│   ├── state-machine.js            # State management
│   ├── gesture-handler.js          # Touch/mouse gesture handlers
│   ├── data-loader.js              # Data loading utilities
│   └── data-validator.js           # Data validation
│
├── 📁 globes/                       # Individual globe implementations
│   │
│   └── 📁 carbon/                  # ✅ Carbon Globe (Live)
│       ├── index.html              # Carbon globe entry point
│       ├── carbon-globe.js         # Main implementation
│       ├── carbon-data.js          # Emissions data
│       ├── carbon-styles.css       # Carbon-specific styles
│       ├── app-enhancements.js     # Additional features
│       ├── data-loader-helper.js   # Data loading helper
│       └── generate-historical-data.js
│
│   [Future globes will go here:]
│   ├── 📁 temperature/             # 🌡️ Temperature Globe (Coming Soon)
│   ├── 📁 population/              # 👥 Population Globe (Coming Soon)
│   ├── 📁 ocean/                   # 🌊 Ocean Health Globe (Coming Soon)
│   ├── 📁 biodiversity/            # 🦋 Biodiversity Globe (Coming Soon)
│   └── 📁 energy/                  # ⚡ Energy Globe (Coming Soon)
│
└── 📁 shared/                       # Shared resources
    ├── 📁 styles/
    │   └── common.css              # Common styles for all globes
    └── 📁 assets/
        └── (images, textures, etc.)
```

## Key Files

### 🎯 Entry Points
- **`/index.html`** - Main landing page with globe selector
- **`/globes/carbon/index.html`** - Carbon Globe visualization

### ⭐ Core Files (Reusable)
- **`core/globe-base.js`** - Base class that all globes extend
- **`core/config.js`** - Configuration settings
- **`core/ui-helpers.js`** - UI utilities and helpers
- **`core/animation-engine.js`** - Animation framework
- **`core/state-machine.js`** - State management
- **`core/gesture-handler.js`** - Input handling
- **`core/data-loader.js`** - Data loading and caching
- **`core/data-validator.js`** - Data validation

### 🌍 Carbon Globe (Example Implementation)
- **`globes/carbon/carbon-globe.js`** - Main logic
- **`globes/carbon/carbon-data.js`** - Emissions dataset
- **`globes/carbon/carbon-styles.css`** - Custom styles
- **`globes/carbon/app-enhancements.js`** - Feature enhancements

### 🎨 Shared Resources
- **`shared/styles/common.css`** - Common styles for all globes

## Quick Links

- 📖 [README.md](README.md) - Project overview
- 🛠️ [DEVELOPMENT.md](DEVELOPMENT.md) - How to create new globes
- 📋 [RESTRUCTURE_SUMMARY.md](RESTRUCTURE_SUMMARY.md) - What changed
