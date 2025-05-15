// Import functions
import { validateForm } from './form-validation'
import { filterWeatherData } from './weather-details'
import { displayCurrentWeatherSummary } from './current-weather-summary'
import { displayAnimatedIcon } from './animated-icons'
import { displayCurrentWeatherDetails } from './current-weather-details'
import { displayTodayForecast } from './today-weather'
import { displayWeeklyForecast } from './week-forecast'
import { updateBackground } from './background'
import { displaySpinner, hideSpinner } from './animated-icons'

// Get DOM elements
const form = document.querySelector('#form')
const city = document.querySelector('#city')

/* Event listener for form submit */
form.addEventListener('submit', async (event) => {
  event.preventDefault()

  // Check form validity
  const { isValid } = validateForm(event)
  // Get city name
  const cityName = city.value

  if (!isValid) return

  // Get weather data and display
  await fetchAndDisplayWeather(cityName)
  // Reset form
  city.value = ''
})

/* Fetches weather data and displays it in the UI */
export async function fetchAndDisplayWeather(cityName) {
  displaySpinner()

  try {
    const weatherData = await filterWeatherData(cityName)
    displayCurrentWeatherSummary(weatherData)
    displayAnimatedIcon(weatherData.currentConditions.icon)
    displayCurrentWeatherDetails(weatherData)
    displayTodayForecast(weatherData)
    displayWeeklyForecast(weatherData)
    updateBackground(weatherData)
  } catch (error) {
    alert('Failed to fetch weather details. Please try again')
    console.error('Error fetching weather details: ', error)
  } finally {
    hideSpinner()
  }
}
