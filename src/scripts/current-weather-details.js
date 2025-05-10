// Import functions
import { createContainer, createParagraph, createTime } from './dom-utils'
import { format } from 'date-fns'

// Import DOM elements
const currentConditions = document.querySelector('#current-conditions')

export function displayCurrentWeatherDetails(weather) {
  currentConditions.textContent = ''

  let temp = weather.currentConditions.temp
  temp = Math.round(temp)
  const location = weather.location.split(',')
  const city = location[0]
  const country = location.slice(1).join().trim()
  const datetimeString = `${weather.daysForecast[0].datetime}T${weather.currentConditions.datetime}`
  const date = format(new Date(`${datetimeString}`), "h:mm a eeee, d MMMM ''yy")

  // Display temperature
  createParagraph(currentConditions, 'today__degrees', `${temp}°`)

  // Create container
  const locationContainer = createContainer(
    currentConditions,
    'div',
    '',
    'today__location'
  )

  // Create paras for location
  createParagraph(locationContainer, 'today__city', `${city}`)
  createParagraph(locationContainer, 'today__country', `${country}`)

  // Create time element
  createTime(
    locationContainer,
    'today__datetime',
    `${date}`,
    `${datetimeString}`
  )
}
