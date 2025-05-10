// Import functions
import { createParagraph } from './dom-utils'

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

  let feelsLike = weather.currentConditions.feelslike
  feelsLike = Math.round(feelsLike)

  // Create greeting
  createParagraph(todaySummary, 'today__greeting', 'Good Morning')

  // Create para for weather conditions
  createParagraph(
    todaySummary,
    'today__conditions',
    `${weather.currentConditions.conditions}, ${humid} conditions with feels like temperature ${feelsLike}°  and ${weather.currentConditions.windspeed} wind speed`
  )
}
