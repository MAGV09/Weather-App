import { day, time } from '../util/date';
import { getWeatherIcon } from '../util/weatherIconMap';
const currentTempEl = document.querySelector('#current-temp-el');
const currentUnitEl = document.querySelector('#current-unit');
const currentFeelsLikeEl = document.querySelector('#current-feelsLike-el');

const conditionEl = document.querySelector('#condition-el');
const currentTimeEl = document.querySelector('#current-time');
const windValueEl = document.querySelector('#windValue-el');
const humidityValueEl = document.querySelector('#humidityValue-el');
const iconEl = document.querySelector('#icon-el');
const weeklyTempEL = document.querySelector('#weekly-temp-el');

async function renderCurrentTempValues(
  { temp, feelslike, humidity, windspeed, conditions, icon },
  unit,
) {
  currentTimeEl.textContent = `${day} ${time}`;
  currentTempEl.textContent = Math.trunc(temp);
  currentUnitEl.textContent = unit === 'metric' ? '°C' : '°F';
  currentFeelsLikeEl.textContent = `feelslike ${Math.trunc(feelslike)}`;
  conditionEl.textContent = conditions;
  iconEl.textContent = '';
  const iconName = getWeatherIcon(icon);
  const mappedIcon = await import(`../icons/${iconName}`);
  iconEl.innerHTML = mappedIcon.default;
  humidityValueEl.textContent = humidity + '%';
  windValueEl.textContent = windspeed;
}

function createWeeklyTempCard() {
  const weeklyContainer = document.createElement('div');
  weeklyContainer.classList.add('weekly');
  weeklyTempEL.appendChild(weeklyContainer);

  const day = document.createElement('p');
  weeklyContainer.appendChild(day);

  const icon = document.createElement('div');
  icon.classList.add('icon');
  weeklyContainer.appendChild(icon);

  const minMaxContainer = document.createElement('div');
  minMaxContainer.classList.add('min-max');
  weeklyContainer.appendChild(minMaxContainer);

  const max = document.createElement('p');
  minMaxContainer.appendChild(max);

  const min = document.createElement('p');
  minMaxContainer.appendChild(min);

  return { day, icon, max, min };
}

function renderWeeklyTemp(days) {
  weeklyTempEL.textContent = '';
  days.forEach(async (day, i) => {
    if (!(i <= 6)) {
      return;
    }
    const { tempmax, tempmin, datetime, icon } = day;
    const date = new Date(`${datetime}T12:00:00`).toLocaleDateString('en-US', {
      weekday: 'short',
    });

    const tempCard = createWeeklyTempCard();
    tempCard.day.textContent = date;
    tempCard.max.textContent = Math.trunc(tempmax) + '°';
    tempCard.min.textContent = Math.trunc(tempmin) + '°';
    const iconName = getWeatherIcon(icon);
    const mappedIcon = await import(`../icons/${iconName}`);
    tempCard.icon.innerHTML = mappedIcon.default;
  });
}

export { renderCurrentTempValues, renderWeeklyTemp };
