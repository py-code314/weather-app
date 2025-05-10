// Import data and functions
import { weather } from './weather-details'
import { validateForm } from './form-validation'
import { getWeatherDetails } from './weather-details'
import { displayCurrentWeatherSummary } from './current-weather-summary'
import { displayAnimatedIcon } from './animated-icons'
import { displayCurrentWeatherDetails } from './current-weather-details'
import { displayTodayForecast } from './today-weather'


// Get DOM elements
const form = document.querySelector('#form')

/* Event listener for form submit */
form.addEventListener('submit', (event) => {
  const { isValid, city } = validateForm(event)

  if (isValid) {
    const cityName = city.value
    getWeatherDetails(cityName).then(() => {
      displayCurrentWeatherSummary(weather)
      displayAnimatedIcon(weather.currentConditions.icon)
      displayCurrentWeatherDetails(weather)
      displayTodayForecast(weather)
    })
  } else {
    return
  }
})
