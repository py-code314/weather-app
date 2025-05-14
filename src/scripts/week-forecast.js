// Import data and functions
import {
  createHeading,
  createParagraph,
  createContainer,
  createImage,
} from './dom-utils'
import { fahrenheitToCelsius } from './temp-conversion'
import { getWeatherIcon } from './animated-icons'
import { getCurrentUnit } from './state'
import { format, parseISO } from 'date-fns'

// Import DOM elements
const weekForecast = document.querySelector('#week-forecast')

/* Displays the 7-day forecast summary */
export async function displayWeeklyForecast(weatherData) {
  const currentUnit = getCurrentUnit()

  // Get next 7 days from days array
  const next7Days = weatherData.daysForecast.slice(1)

  // Sort array by date
  const sortedDays = [...next7Days].sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  )

  // Display heading
  createHeading(weekForecast, 'h2', 'forecast__heading', '7-Day Forecast')

  // Display forecast summary for a week
  createParagraph(
    weekForecast,
    'forecast__summary',
    `${weatherData.weekConditions}`
  )

  // Container for weekly forecast
  const weekList = createContainer(weekForecast, 'ul', '', 'forecast__list')

  // Loop through days and display 7 days forecast
  for (const day of sortedDays) {
    // Retrieve and format values
    const localDate = parseISO(day.datetime)
    const weekDay = format(localDate, 'EEE')

    const minTemp =
      currentUnit === 'us'
        ? `${Math.round(day.tempmin)}°`
        : `${Math.round(fahrenheitToCelsius(day.tempmin))}°`

    const maxTemp =
      currentUnit === 'us'
        ? `${Math.round(day.tempmax)}°`
        : `${Math.round(fahrenheitToCelsius(day.tempmax))}°`

    // Get image url
    const imageUrl = await getWeatherIcon(day.icon)

    // Create container for each day
    const dayContainer = createContainer(weekList, 'li', '', 'forecast__item')

    // Display day
    createParagraph(dayContainer, 'forecast__day', `${weekDay}`)

    // Create container for min and max temperatures
    const tempsContainer = createContainer(
      dayContainer,
      'li',
      '',
      'forecast__temps'
    )

    // Display min and max temperatures
    createParagraph(tempsContainer, 'forecast__min', `${minTemp}`)
    createContainer(tempsContainer, 'div', '', 'forecast__bar')
    createParagraph(tempsContainer, 'forecast__max', `${maxTemp}`)

    // Add weather icon
    createImage(dayContainer, 'forecast__image', imageUrl, '', 35, 35)
  }
}
