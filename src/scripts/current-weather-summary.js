// Import functions
import { createParagraph } from './dom-utils'
import { fahrenheitToCelsius, milesToKilometers } from './temp-conversion'
import { getCurrentUnit } from './state'

// Get elements from DOM
const todaySummary = document.querySelector('#today-summary')

export function displayCurrentWeatherSummary(weatherData) {
  todaySummary.textContent = ''

  // Destructure weather data
  const {
    currentConditions: { conditions, humidity, feelslike, windspeed },
  } = weatherData

  // Get current unit
  const currentUnit = getCurrentUnit()

  // Humidity description
  const humidityDescription =
    humidity <= 25
      ? 'very dry'
      : humidity <= 40
        ? 'comfortable'
        : humidity <= 60
          ? 'humid'
          : 'very humid'

  // Convert feels like temperature
  const feelsLikeTemperature =
    currentUnit === 'us'
      ? `${Math.round(feelslike)}°F`
      : `${Math.round(fahrenheitToCelsius(feelslike))}°C`

  // Convert wind speed
  const windSpeed =
    currentUnit === 'us'
      ? `${Math.round(windspeed)} mph`
      : `${Math.round(milesToKilometers(windspeed))} kmph`

  // Display greeting
  createParagraph(todaySummary, 'today__greeting', 'Hi there!')

  // Display summary of current conditions
  createParagraph(
    todaySummary,
    'today__conditions',
    `${conditions}, ${humidityDescription} conditions with feels like temperature ${feelsLikeTemperature} and wind speed at ${windSpeed}`
  )
}
