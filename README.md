#  Weather App

A modern, responsive weather application built with vanilla JavaScript, featuring dynamic weather icons and beautiful gradient backgrounds. Get real-time weather information for any city or country worldwide.


##  Features

- 🌍 **Global Weather Data** - Search for weather information by city or country
- 🌡️ **Real-time Temperature** - Get current temperature and weather conditions
- 🎨 **Dynamic Weather Icons** - Beautiful SVG icons from Meteocons that change based on weather conditions
- 🎭 **Gradient Background** - Eye-catching linear gradient design
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast & Optimized** - Built with Webpack for optimal performance

## Demo

[Live Demo]: https://magv09.github.io/Weather-App/



##  Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Visit [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
   - Sign up for a free account
   - Copy your API key


4. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:8080`

##  Build

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

##  Usage

1. Enter a city name or country in the search bar
2. View current temperature and weather conditions
3. See the dynamic weather icon that matches current conditions


##  Weather Icon Mapping

The app uses Meteocons SVG icons with intelligent mapping from Visual Crossing weather conditions:

- Clear Day/Night
- Partly Cloudy Day/Night
- Cloudy/Overcast
- Rain/Drizzle
- Snow
- Thunderstorms
- Fog/Mist
- Wind
- And more...



##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- [Visual Crossing](https://www.visualcrossing.com/) for the weather API
- [Meteocons](https://bas.dev/work/meteocons) by Bas Milius for beautiful weather icons
- Inspiration from modern weather app designs

