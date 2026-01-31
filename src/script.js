import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/style.css';

async function getTemp(location, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&include=days%2Ccurrent%2Calerts&key=7TJFYQFH929XUG52Y9GHDZF92&contentType=json`,
    );
    const weather = await response.json();
    console.log(weather);
  } catch (error) {
    console.log(error);
  }
}
getTemp('ismailia', 'metric');

//current
/*
 temp
 feels like
 wind
 humdidity
 condition
 time
 day
 icon
 */

//week
/*
 min/max temp
 icon
 day
 */
