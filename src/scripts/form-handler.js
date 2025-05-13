// Import data and functions

import { validateForm } from './form-validation'
import { getWeatherDetails } from './weather-details'
import { displayCurrentWeatherSummary } from './current-weather-summary'
import { displayAnimatedIcon } from './animated-icons'
import { displayCurrentWeatherDetails } from './current-weather-details'
import { displayTodayForecast } from './today-weather'
import { displayWeekForecast } from './week-forecast'
import { changeBackground } from './background'
import { displaySpinner, hideSpinner } from './animated-icons'
import { setCityName } from './state'

// Get DOM elements
const form = document.querySelector('#form')
const city = document.querySelector('#city')

/* Event listener for form submit */
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { isValid } = validateForm(event)
  const cityName = city.value

  if (!isValid) return

  setCityName(cityName)
  await getWeather(cityName)
  city.value = ''
})

export async function getWeather(cityName) {
  displaySpinner()

  try {
    const weather = await getWeatherDetails(cityName)
    displayCurrentWeatherSummary(weather)
    displayAnimatedIcon(weather.currentConditions.icon)
    displayCurrentWeatherDetails(weather)
    displayTodayForecast(weather)
    displayWeekForecast(weather)
    changeBackground(weather)
  } catch (error) {
    alert('Failed to fetch weather details. Please try again')
    console.error('Error fetching weather details: ', error)
  } finally {
    hideSpinner()
  }
}
