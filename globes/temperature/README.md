# 🌡️ Temperature Globe

An interactive 3D globe visualization exploring global temperature changes, climate patterns, and warming trends across 183 countries.

![Temperature Globe](preview.png)

## Features

### Temperature Data
- **Temperature Anomalies** - Changes relative to 1951-1980 baseline
- **Current Average Temperatures** - 2023 estimates for each country
- **Warming Trends** - Year-over-year temperature increase rates
- **Seasonal Patterns** - Winter, Spring, Summer, and Autumn temperatures

### Visualization
- **Color-Coded Countries** - Visual indicators by warming level:
  - 🔴 Red (≥2.0°C) - High warming regions (Arctic, Northern countries)
  - 🟠 Orange (1.5-2.0°C) - Moderate warming regions
  - 🟢 Green (<1.5°C) - Lower warming regions
- **Interactive Globe** - Click any country to view detailed temperature data
- **Smooth Transitions** - Country highlighting and camera movements
- **Responsive Design** - Works on desktop, tablet, and mobile

### Data Display
Each country shows:
- Current average temperature
- Temperature change (anomaly)
- Baseline temperature (1951-1980)
- Warming trend per year
- Warming level classification
- Seasonal temperature breakdown
- Climate impact assessment

## Data Sources

All temperature data sourced from:
- **NOAA** (National Oceanic and Atmospheric Administration)
- **NASA GISS** (Goddard Institute for Space Studies)
- **Berkeley Earth** - Independent climate data analysis
- **Climate.gov** - NOAA's climate portal

Temperature anomalies are calculated relative to the 1951-1980 baseline period, following standard climate science methodology.

## Countries Covered

183 countries with detailed temperature data including:
- All major economies (G20 countries)
- Arctic and high-warming regions
- Tropical and equatorial nations
- Small island nations
- European countries
- Asian-Pacific nations
- Americas (North, Central, South)
- African nations

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (required for ES modules)

### Running Locally

1. Navigate to project directory:
```bash
cd globe-explorer
```

2. Start a local web server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

3. Open your browser:
```
http://localhost:8000/globes/temperature/
```

## Usage

### Basic Controls
- **Rotate Globe** - Click and drag
- **Zoom** - Mouse wheel or pinch gesture
- **Auto Rotate** - Click "Auto Rotate" button
- **Reset View** - Return to default camera position

### Exploring Countries
1. Click on any country to view details
2. Information panel slides in from right
3. View temperature data, trends, and seasonal patterns
4. Close panel with × button or ESC key

### Keyboard Shortcuts
- `ESC` - Close information panel
- Tab navigation for accessibility

## Project Structure

```
temperature/
├── index.html              # Main HTML page
├── temperature-globe.js    # Globe implementation
├── temperature-data.js     # Temperature dataset
├── temperature-styles.css  # Styling
└── README.md              # This file
```

## Technical Details

### Temperature Data Format

Each country entry contains:
```javascript
{
    avgTemp: 11.2,           // Current average temperature (°C)
    anomaly: 1.7,            // Temperature change from baseline (°C)
    baseline: 9.5,           // 1951-1980 baseline temperature (°C)
    trend: "+0.04°C/yr",     // Annual warming rate
    rank: 8,                 // Warming rank (1 = highest)
    seasonal: {              // Seasonal temperatures
        winter: 0,
        spring: 10,
        summer: 22,
        autumn: 12
    },
    color: "#f39c12"         // Visualization color
}
```

### Color Coding Logic

Countries are color-coded based on temperature anomaly:
- **High Warming (Red)**: anomaly ≥ 2.0°C
- **Moderate Warming (Orange)**: 1.5°C ≤ anomaly < 2.0°C
- **Lower Warming (Green)**: anomaly < 1.5°C

### Performance
- 60 FPS smooth rendering
- Efficient polygon rendering for 195+ countries
- Optimized hover and click interactions
- Responsive to window resizing

## Understanding the Data

### Temperature Anomaly
The temperature anomaly represents the difference between current temperatures and the 1951-1980 baseline average. For example, a +1.5°C anomaly means the country is 1.5°C warmer than its historical average.

### Why 1951-1980 Baseline?
This period is widely used in climate science as it represents:
- Pre-industrial revolution baseline
- Comprehensive global temperature data availability
- Standard reference period for climate research

### Warming Trends
- Arctic regions show highest warming (2.0-3.0°C)
- Northern hemisphere warming faster than southern
- Ocean-influenced regions show lower warming rates
- Continental interiors warming more rapidly

## Key Insights

### Highest Warming Regions
1. **Arctic Circle** - Russia, Canada, Greenland (+2.5-3.0°C)
2. **Northern Europe** - Finland, Sweden, Norway (+2.0-2.3°C)
3. **Central Asia** - Kazakhstan, Mongolia (+1.9-2.0°C)

### Regional Patterns
- **Polar Amplification**: Arctic warming 2x faster than global average
- **Ocean Moderation**: Coastal regions warming slower
- **Continental Effect**: Interior regions warming faster
- **Altitude Effect**: Higher elevations showing accelerated warming

## Accessibility

- ♿ **Keyboard Navigation** - Full keyboard support
- 🎯 **Focus Indicators** - Clear visual focus states
- 📱 **Touch Optimized** - Mobile-friendly interactions
- 🎨 **Color Contrast** - WCAG AA compliant
- ⚡ **Reduced Motion** - Respects user preferences

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

## Future Enhancements

- [ ] Historical time-series animation (1880-2023)
- [ ] Temperature projection scenarios (2030-2100)
- [ ] Regional climate zone visualization
- [ ] Extreme weather event tracking
- [ ] Sea ice extent and glacier data
- [ ] Real-time temperature data integration
- [ ] Comparison mode between countries
- [ ] Export data and reports

## Contributing

Areas for improvement:
- Additional country coverage
- More granular regional data
- Historical temperature datasets
- Climate impact correlations
- Data visualization enhancements

## Credits

- **Globe.gl** - 3D globe rendering library
- **Three.js** - WebGL 3D graphics
- **NOAA** - Temperature data
- **NASA GISS** - Climate research data
- **Berkeley Earth** - Independent climate analysis

## License

MIT License - Feel free to use for educational and research purposes

---

**Note**: Temperature data represents 2023 estimates. Climate data is complex and values may vary by source. For authoritative climate information, consult official sources like NOAA, NASA, or your national meteorological service.

Built with ❤️ for climate awareness and education.
