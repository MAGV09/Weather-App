// weatherIconMap.js
const iconMapping = {
  // Clear conditions
  'clear-day': 'clear-day.svg',
  'clear-night': 'clear-night.svg',

  // Partly cloudy
  'partly-cloudy-day': 'partly-cloudy-day.svg',
  'partly-cloudy-night': 'partly-cloudy-night.svg',

  // Cloudy
  cloudy: 'cloudy.svg',
  'overcast-day': 'overcast-day.svg',
  'overcast-night': 'overcast-night.svg',
  overcast: 'overcast-day.svg',

  // Rain
  rain: 'rain.svg',
  drizzle: 'drizzle.svg',
  'showers-day': 'partly-cloudy-day-rain.svg',
  'showers-night': 'partly-cloudy-night-rain.svg',

  // Snow
  snow: 'snow.svg',
  'snow-showers-day': 'partly-cloudy-day-snow.svg',
  'snow-showers-night': 'partly-cloudy-night-snow.svg',

  // Mixed precipitation
  sleet: 'sleet.svg',
  hail: 'hail.svg',

  // Thunderstorms
  thunderstorm: 'thunderstorms-day.svg',
  'thunder-rain': 'thunderstorms-day-rain.svg',
  'thunder-showers-day': 'thunderstorms-day.svg',
  'thunder-showers-night': 'thunderstorms-night.svg',

  // Atmospheric conditions
  fog: 'fog.svg',
  'fog-day': 'fog-day.svg',
  'fog-night': 'fog-night.svg',
  mist: 'mist.svg',
  smoke: 'smoke.svg',
  haze: 'haze.svg',
  'haze-day': 'haze-day.svg',
  'haze-night': 'haze-night.svg',
  dust: 'dust-day.svg',
  'dust-day': 'dust-day.svg',
  'dust-night': 'dust-night.svg',

  // Wind
  wind: 'wind.svg',
  tornado: 'tornado.svg',
};

function getWeatherIcon(visualCrossingIcon) {
  return iconMapping[visualCrossingIcon] || "Couldn't find an icon for this condition";
}

export { getWeatherIcon, iconMapping };
