// Import functions
import { displayCurrentWeatherSummary } from './current-weather-summary'
import { getLastCityWeatherData } from './state'
import { displayCurrentWeatherDetails } from './current-weather-details'
import { displayTodayForecast } from './today-weather'
import { displayWeeklyForecast } from './week-forecast'
import { setCurrentUnit } from './state'
// import { set } from 'date-fns'

// Get DOM elements
const toggle = document.querySelector('#unit-toggle')

/* Event listener for unit toggle */
toggle.addEventListener('change', () => {
  // Set the current unit
  setCurrentUnit(toggle.checked ? 'metric' : 'us')

  const weatherData = getLastCityWeatherData()

  displayCurrentWeatherSummary(weatherData)
  displayCurrentWeatherDetails(weatherData)
  displayTodayForecast(weatherData)
  displayWeeklyForecast(weatherData)
})

/* Converts fahrenheit to celsius */
export function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

/* Converts miles to kilometers */
export function milesToKilometers(miles) {
  return miles * 1.609
}
