// Import functions

import { displayCurrentWeatherSummary } from './current-weather-summary'
import { getLastCityWeatherData } from './state'
import { displayCurrentWeatherDetails } from './current-weather-details'
import { displayTodayForecast } from './today-weather'
import { displayWeekForecast } from './week-forecast'

// Get DOM elements
const toggle = document.querySelector('#unit-toggle')

export let currentUnit = 'us'

toggle.addEventListener('change', () => {
  const weatherData = getLastCityWeatherData()

  if (toggle.checked) {
    currentUnit = 'metric'

    displayCurrentWeatherSummary(weatherData)
    displayCurrentWeatherDetails(weatherData)
    displayTodayForecast(weatherData)
    displayWeekForecast(weatherData)
  } else {
    currentUnit = 'us'
    displayCurrentWeatherSummary(weatherData)
    displayCurrentWeatherDetails(weatherData)
    displayTodayForecast(weatherData)
    displayWeekForecast(weatherData)
  }
})

export function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

export function milesToKilometers(miles) {
  return miles * 1.609
}
