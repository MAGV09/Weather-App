const currentTempEl = document.querySelector('#current-temp-el');
const currentUnitEl = document.querySelector('#current-unit');
const currentFeelsLikeEl = document.querySelector('#current-feelsLike-el');

const conditionEl = document.querySelector('#condition-el');
const currentTimeEl = document.querySelector('#current-time');
const windValueEl = document.querySelector('#windValue-el');
const humidityValueEl = document.querySelector('#humidityValue-el');

const weeklyTempEL = document.querySelector('#weekly-temp-el');
function getCurrentTempValues(
  { temp, feelslike, humidity, windspeed, conditions },
  unit,
  day,
  time,
) {
  currentTimeEl.textContent = `${day} ${time}`;
  currentTempEl.textContent = temp;
  currentUnitEl.textContent = unit === 'metric' ? '°C' : '°F';
  currentFeelsLikeEl.textContent = `feelslike ${feelslike}`;
  conditionEl.textContent = conditions;

  humidityValueEl.textContent = humidity + '%';
  windValueEl.textContent = windspeed;
}

function createWeeklyTempCard() {
  const weeklyContainer = document.createElement('div');
  weeklyContainer.classList.add('weekly');
  weeklyTempEL.appendChild(weeklyContainer);

  const day = document.createElement('p');
  weeklyContainer.appendChild(day);

  const icon = document.createElement('img');
  icon.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8y2R7yJmlG8BcwZ8XeYj1YioavB-oeqKv-g&s';

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
  days.forEach((day, i) => {
    if (!(i <= 6)) {
      return;
    }
    //missing icon
    const { tempmax, tempmin, datetime } = day;
    const date = new Date(`${datetime}T12:00:00`).toLocaleDateString('en-US', {
      weekday: 'short',
    });

    const tempCard = createWeeklyTempCard();
    tempCard.day.textContent = date;
    tempCard.max.textContent = Math.trunc(tempmax) + '°';
    tempCard.min.textContent = Math.trunc(tempmin) + '°';
  });
}
export { getCurrentTempValues, renderWeeklyTemp };
