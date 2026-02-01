import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/style.css';
import { renderCurrentTempValues, renderWeeklyTemp } from './modules/dom';

async function getTemp(location, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&include=days%2Ccurrent%2Calerts&key=7TJFYQFH929XUG52Y9GHDZF92&contentType=json`,
    );
    if (!response.ok) {
      throw new Error("Couldn't find the location");
    }
    const weather = await response.json();
    const { currentConditions, days } = weather;

    renderCurrentTempValues(currentConditions, unit);
    renderWeeklyTemp(days);
  } catch (error) {
    console.error(error);
  }
}
//initial load
getTemp('London', 'metric');

const form = document.querySelector('#form');
const location = document.querySelector('#location');
const unit = document.querySelector('#unit');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const unitMappedValue = unit.value.toLowerCase() === 'celsius' ? 'metric' : 'us';
  getTemp(location.value, unitMappedValue);
});
