// Import data and functions
import {
  createHeading,
  createParagraph,
  createContainer,
  createImage,
} from './dom-utils'
import { getWeatherIcon } from './animated-icons'
import { format, parseISO } from 'date-fns'

// Import DOM elements
const weekForecast = document.querySelector('#week-forecast')

export function displayWeekForecast(weather) {
  weekForecast.textContent = ''

  // Remove first entry in days array
  const next7Days = weather.daysForecast.slice(1)

  // Create heading
  createHeading(weekForecast, 'h2', 'forecast__heading', '7-Day Forecast')

  // Create paragraph
  createParagraph(
    weekForecast,
    'forecast__summary',
    `${weather.weekDescription}`
  )

  // Create ul
  const weekList = createContainer(weekForecast, 'ul', '', 'forecast__list')

  next7Days.forEach(async (day) => {
    // Retrieve and format values
    const localDate = parseISO(day.datetime)
    const weekDay = format(new Date(`${localDate}`), 'EEE')
    const minTemp = Math.round(day.tempmin)
    const maxTemp = Math.round(day.tempmax)

    // Get image url
    const imageUrl = await getWeatherIcon(day.icon)

    /* Create container for day */
    const dayContainer = createContainer(
      weekList,
      'li',
      '',
      'forecast__list-item'
    )

    // Create para
    createParagraph(dayContainer, 'forecast__day', `${weekDay}`)

    /* Create container for min and max temperatures */
    const tempsContainer = createContainer(
      dayContainer,
      'li',
      '',
      'forecast__temps'
    )

    // Create paragraphs and separator
    createParagraph(tempsContainer, 'forecast__min', `${minTemp}°`)

    createContainer(tempsContainer, 'div', '', 'forecast__bar')

    createParagraph(tempsContainer, 'forecast__max', `${maxTemp}°`)

    // Add weather icon
    createImage(
      dayContainer,
      'forecast__image',
      imageUrl,
      '',
      35,
      35
    )
  })
}
