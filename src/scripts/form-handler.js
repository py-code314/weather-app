// Import data and functions
import { weather } from './weather-details'
import { validateForm } from './form-validation'
import { getWeatherDetails } from './weather-details'
import { displayCurrentWeatherSummary } from './current-weather-summary'
import { displayAnimatedIcon } from './animated-icons'
import { displayCurrentWeatherDetails } from './current-weather-details'
import { displayTodayForecast } from './today-weather'
import { displayWeekForecast } from './week-forecast'
import { displaySpinner } from './animated-icons'





// Get DOM elements
const form = document.querySelector('#form')
const animation = document.querySelector('#animate')

/* Event listener for form submit */
form.addEventListener('submit', (event) => {
  const { isValid, city } = validateForm(event)

  if (isValid) {
    displaySpinner()
    const cityName = city.value
    getWeatherDetails(cityName).then(() => {
      animation.textContent = ''
      displayCurrentWeatherSummary(weather)
      displayAnimatedIcon(weather.currentConditions.icon)
      displayCurrentWeatherDetails(weather)
      displayTodayForecast(weather)
      displayWeekForecast(weather)
    })
  } else {
    return
  }
})


