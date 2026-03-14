# 🌍 Real-Time Globe - Live Earth Explorer

Watch Earth as it happens! This globe shows live data updating every second.

## ✨ Features

### 🌅 Day/Night Cycle
- **Accurate sun position** calculated using astronomical formulas
- **Real-time terminator line** showing day/night boundary
- **Subsolar point tracking** where sun is directly overhead
- **Updates every 10 seconds** for smooth transitions

### 🛰️ ISS Tracker
- **Live position** updated every 5 seconds
- **Current altitude** (~408 km)
- **Orbital velocity** (~27,600 km/h)
- **Click to see details** about the International Space Station

### 🔴 Earthquake Monitor
- **Recent earthquakes** from last 24 hours
- **Magnitude 2.5+** significant events only
- **Color-coded by magnitude**:
  - 🟤 Dark Red: 7.0+ (Major)
  - 🔴 Crimson: 6.0-6.9 (Strong)
  - 🟠 Orange Red: 5.0-5.9 (Moderate)
  - 🟡 Orange: 4.0-4.9 (Light)
  - 🟡 Yellow: 2.5-3.9 (Minor)
- **Click markers** to view USGS details

### ⏰ Live Time Display
- **UTC clock** updating every second
- **Time zone overlay** (future feature)
- **Day/night ratio** calculation

## 🎨 Hand-Drawn Design System

Authentic hand-drawn aesthetic with:
- **Wobbly borders** - irregular border-radius (no straight lines!)
- **Paper texture** - dot pattern background
- **Handwritten fonts** - Kalam (headings), Patrick Hand (body)
- **Hard shadows** - solid offset, no blur
- **Post-it info panel** - yellow with thumbtack decoration
- **Playful rotations** - tilted cards and elements
- **Organic shapes** - buttons and stats

## 📡 Data Sources

### ISS Position
- **API**: https://api.wheretheiss.at/v1/satellites/25544
- **Update Frequency**: Every 5 seconds
- **No API Key Required**: Free, public API
- **Data**: Latitude, longitude, altitude, velocity, visibility

### Earthquakes
- **API**: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
- **Update Frequency**: Every 1 minute
- **No API Key Required**: Free, public USGS feed
- **Data**: Magnitude, location, depth, time, URL

### Sun Position
- **Source**: Astronomical calculations (no API)
- **Method**: Julian date formulas
- **Accuracy**: ±0.01° latitude/longitude
- **Update Frequency**: Every 10 seconds

## 🔧 Technical Details

### Sun Calculator (`sun-calculator.js`)
- Julian date conversion
- Solar longitude calculation
- Solar declination (sun's latitude)
- Equation of time correction
- Subsolar point determination
- Twilight factor calculation
- Sunrise/sunset times

### Real-Time Data (`realtime-data.js`)
- ISS position fetcher
- Earthquake data parser
- Time display updater
- Callback system for updates
- Color/size mappings for earthquakes

### Globe Visualization (`realtime-globe.js`)
- Globe.gl initialization
- Day/night shader application
- ISS marker rendering
- Earthquake point cloud
- Control button handlers
- Info panel management

## 🎮 Controls

- **Reset View** - Return to default view (20°N, 0°E)
- **Auto Rotate** - Toggle globe rotation
- **City Lights** - Switch to nighttime texture

## 🚀 Future Enhancements

Potential additions:
- ✈️ **Live flight tracking** (requires OpenSky Network API)
- 🌤️ **Weather overlay** (requires OpenWeatherMap API)
- 🌡️ **Temperature heatmap** (real-time weather data)
- ⚡ **Lightning strikes** (if data available)
- 🌊 **Ocean currents** animation
- 🛰️ **More satellites** (Starlink, GPS, etc.)
- 🌐 **Internet connectivity** map
- 👥 **Population density** heatmap
- 🏙️ **Major cities** with time zones

## 📊 Performance

- **Globe.gl** - WebGL-powered 3D rendering
- **60 FPS** - smooth animations
- **Efficient updates** - only re-render when data changes
- **Lightweight** - minimal bundle size
- **No frameworks** - vanilla JavaScript

## 🌐 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ Requires WebGL support

## 📝 License

Part of Globe Explorer project. See root LICENSE file.

## 🙏 Credits

- **Globe.gl** by Vasco Asturiano
- **NASA/WhereTheISS.at** for ISS data
- **USGS** for earthquake data
- **Three.js** for WebGL rendering
- **Hand-drawn design** inspired by authentic sketches and notes

---

**Last Updated**: March 14, 2026
**Status**: ✅ Live and updating in real-time!
