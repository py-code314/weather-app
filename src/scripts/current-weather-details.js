// Import functions
import { createContainer, createParagraph, createTime } from './dom-utils'
import { fahrenheitToCelsius } from './temp-conversion'
import { format } from 'date-fns'
import { getCurrentUnit } from './state'

// Import DOM elements
const currentConditions = document.querySelector('#current-conditions')

export function displayCurrentWeatherDetails(weatherData) {
  currentConditions.textContent = ''

  // Destructure weather data
  const {
    currentConditions: { temp, datetime },
    location,
    daysForecast,
  } = weatherData

  // Get current unit
  const currentUnit = getCurrentUnit()

  // Get city and country
  const locationArray = location.split(',')
  const city = locationArray[0]
  const country = locationArray.slice(1).join().trim()

  // Get and format date
  const datetimeString = `${daysForecast[0].datetime}T${datetime}`
  const date = format(new Date(datetimeString), "eeee, d MMMM ''yy")
  console.log(date)

  // Convert temperature into celsius
  const currentTemperature =
    currentUnit === 'us'
      ? `${Math.round(temp)}°`
      : `${Math.round(fahrenheitToCelsius(temp))}°`

  // Display current temperature
  createParagraph(currentConditions, 'today__degrees', currentTemperature)

  const locationContainer = createContainer(
    currentConditions,
    'div',
    '',
    'today__location'
  )

  // Display city and country
  createParagraph(locationContainer, 'today__city', city)
  createParagraph(locationContainer, 'today__country', country)

  // Display date
  createTime(locationContainer, 'today__datetime', date, datetimeString)
}
