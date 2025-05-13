// Import functions
import { createParagraph } from './dom-utils'
import { currentUnit, fahrenheitToCelsius, milesToKilometers } from './temp-conversion'


// Get elements from DOM
const todaySummary = document.querySelector('#today-summary')

export function displayCurrentWeatherSummary(weather) {
  todaySummary.textContent = ''

  let humid = ''
  const humidity = weather.currentConditions.humidity
  if (humidity >= 0 && humidity <= 25) {
    humid = 'very dry'
  } else if (humidity >= 26 && humidity <= 40) {
    humid = 'comfortable'
  } else if (humidity >= 41 && humidity <= 60) {
    humid = 'humid'
  } else {
    humid = 'very humid'
  }

  let feelsLike = ''
  if (currentUnit === 'us') {
    feelsLike = `${Math.round(weather.currentConditions.feelslike)}°F`
  } else {
    const temp = fahrenheitToCelsius(weather.currentConditions.feelslike)
    feelsLike = `${Math.round(temp)}°C`
  }

  let windSpeed = ''
  if (currentUnit === 'us') {
    windSpeed = `${Math.round(weather.currentConditions.windspeed)} mph`
  } else {
    const speed = milesToKilometers(weather.currentConditions.windspeed)
    windSpeed = `${Math.round(speed)} kmph`
  }

  // Create greeting
  createParagraph(todaySummary, 'today__greeting', 'Good Morning')

  // Create para for weather conditions
  createParagraph(
    todaySummary,
    'today__conditions',
    `${weather.currentConditions.conditions}, ${humid} conditions with feels like temperature ${feelsLike} and   wind speed at ${windSpeed}`
  )
}
