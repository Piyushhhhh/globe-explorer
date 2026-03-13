# 🌍 Globe Explorer

A collection of interactive 3D globe visualizations exploring different global datasets. Built with Three.js and Globe.gl for smooth, responsive 3D visualization.

![Globe Explorer Preview](preview.png)

## Available Globes

### 🌍 Carbon Globe (Live)
Explore global carbon emissions, per capita data, and trends across 40+ countries.

**Features:**
- Real emissions data from Global Carbon Project & Our World in Data
- Country details with total CO₂, per capita, rankings, and trends
- Emissions breakdown by sector (Energy, Transport, Industry, Other)
- Color-coded visual indicators based on emission levels
- Interactive comparison and time-travel modes

### 🌡️ Temperature Globe (Coming Soon)
Visualize global temperature changes and climate patterns over time.

### 👥 Population Globe (Coming Soon)
Explore population density, growth rates, and demographic data worldwide.

### 🌊 Ocean Health Globe (Coming Soon)
Track ocean temperature, acidity, plastic pollution, and marine biodiversity.

### 🦋 Biodiversity Globe (Coming Soon)
Discover species richness, endangered species, and ecosystem health.

### ⚡ Energy Globe (Coming Soon)
Compare renewable vs fossil fuel usage and the transition to clean energy.

## Tech Stack

- **Three.js** - 3D graphics and globe rendering
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with gradients and animations
- **HTML5 Canvas** - High-performance rendering

## Data Sources

All carbon emission data is sourced from:
- **Global Carbon Project** (GCP) - Annual CO₂ emission updates
- **Our World in Data** - Historical emission datasets
- **Climate Watch** - Greenhouse gas emission data
- **EPA** - Emission factors and methodologies

Data represents 2023 estimates with year-over-year trends.

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Start a local web server (required for ES modules):

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

4. Visit `http://localhost:8000` to see the globe selector
5. Click on any globe to explore it

## Usage

1. **Explore the Globe**: Drag to rotate, scroll to zoom
2. **Select a Country**: Click on any country marker to view details
3. **Auto Rotate**: Click "Auto Rotate" to enable continuous rotation
4. **Reset View**: Return to the default camera position

## Project Structure

```
globe-explorer/
├── index.html                    # Globe selector landing page
├── README.md                     # This file
│
├── core/                         # Shared globe functionality
│   ├── globe-base.js            # Base globe class (extensible)
│   ├── config.js                # Global configuration
│   ├── ui-helpers.js            # Shared UI utilities
│   ├── animation-engine.js      # Animation system
│   ├── state-machine.js         # State management
│   ├── gesture-handler.js       # Touch/mouse gestures
│   ├── data-loader.js           # Data loading utilities
│   └── data-validator.js        # Data validation
│
├── globes/                       # Individual globe implementations
│   ├── carbon/                  # Carbon emissions globe
│   │   ├── index.html
│   │   ├── carbon-globe.js      # Carbon-specific logic
│   │   ├── carbon-data.js       # Emissions data
│   │   ├── carbon-styles.css    # Carbon-specific styles
│   │   └── ...helper files
│   │
│   ├── temperature/             # Temperature globe (coming soon)
│   ├── population/              # Population globe (coming soon)
│   ├── ocean/                   # Ocean health globe (coming soon)
│   ├── biodiversity/            # Biodiversity globe (coming soon)
│   └── energy/                  # Energy globe (coming soon)
│
└── shared/                       # Shared resources
    ├── styles/
    │   └── common.css           # Common styling for all globes
    └── assets/
        └── ...                  # Shared images, textures
```

## Data Structure

Each country in `data.js` contains:

```javascript
{
    total: 11472,           // Total emissions in million tons
    perCapita: 8.0,         // Tons per person per year
    rank: 1,                // Global ranking
    population: 1425,       // Population in millions
    trend: "+2.5%",         // Year-over-year change
    sector: {               // Emissions by sector
        energy: 75,
        transport: 10,
        industry: 12,
        other: 3
    },
    color: "#e74c3c"        // Marker color
}
```

## Architecture

### Modular Design

The project uses a modular architecture where:
- **Core**: Shared functionality (GlobeBase class, utilities, state management)
- **Globes**: Individual globe implementations extending GlobeBase
- **Shared**: Common styles and assets

### Creating a New Globe

1. **Create a new directory** in `globes/`:
```bash
mkdir globes/your-globe-name
```

2. **Extend GlobeBase** in your main JS file:
```javascript
class YourGlobe extends GlobeBase {
    constructor() {
        super('globe', {
            // Custom options
        });
    }

    setupPolygons() {
        // Custom polygon rendering with your data
        super.setupPolygons();
        // Add your custom logic
    }

    handlePolygonClick(polygon) {
        // Custom click handling
    }
}
```

3. **Create index.html** that includes:
   - Core scripts: `../../core/...`
   - Your data file
   - Your globe implementation
   - Your styles

4. **Add to the main selector** in root `index.html`

### Customization

- **Globe visuals**: Override `setupPolygons()` in your globe class
- **Data visualization**: Create your own data format and rendering logic
- **Styling**: Use `shared/styles/common.css` + your custom styles
- **Interactions**: Override `handlePolygonClick()` and other methods

## Performance

- Optimized for 60 FPS on modern devices
- Efficient marker rendering (< 50 markers)
- Minimal dependencies (only Three.js)
- Responsive design for mobile and desktop

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Touch-friendly

## Future Enhancements

- [ ] Time-series animation showing historical trends
- [ ] Real-time data fetching from Carbon APIs
- [ ] Comparison mode (compare two countries)
- [ ] Export country reports as PDF
- [ ] Search functionality to find countries quickly
- [ ] AR mode for mobile devices
- [ ] Data visualization charts and graphs
- [ ] Social sharing features

## Contributing

Contributions are welcome! Areas for improvement:
- More countries and regions
- Updated emission data
- Additional data visualizations
- Performance optimizations
- Accessibility improvements

## License

MIT License - Feel free to use for any purpose

## Credits

- **Three.js** - 3D graphics library
- **Global Carbon Project** - Emission data
- **Our World in Data** - Historical datasets
- Built with ❤️ for climate awareness

## Contact

For questions, suggestions, or data corrections, please open an issue or submit a pull request.

---

**Note**: Carbon emission data is complex and estimates vary by source. This visualization uses publicly available data for educational purposes. For precise emissions reporting, consult official sources like UNFCCC or national environmental agencies.
