// Import functions
import {
  createContainer,
  createHeading,
  createImage,
  createParagraph,
} from './dom-utils'
import { currentUnit, fahrenheitToCelsius } from './temp-conversion'
import { getWeatherIcon } from './animated-icons'
import { format } from 'date-fns'

// Import images dynamically
const minTempIconUrl = await getWeatherIcon('thermometer-colder')
const maxTempIconUrl = await getWeatherIcon('thermometer-warmer')
const humidityIconUrl = await getWeatherIcon('humidity')
const uvIndexIconUrl = await getWeatherIcon('uv-index')
const sunriseIconUrl = await getWeatherIcon('sunrise')
const sunsetIconUrl = await getWeatherIcon('sunset')

// Import DOM elements
const todayForecast = document.querySelector('#today-forecast')

export function displayTodayForecast(weather) {
  todayForecast.textContent = ''

  let todayMinTemp = ''
  if (currentUnit === 'us') {
    todayMinTemp = `${Math.round(weather.daysForecast[0].tempmin)}°F`
  } else {
    const temp = fahrenheitToCelsius(weather.daysForecast[0].tempmin)
    todayMinTemp = `${Math.round(temp)}°C`
  }

  let todayMaxTemp = ''
  if (currentUnit === 'us') {
    todayMaxTemp = `${Math.round(weather.daysForecast[0].tempmax)}°F`
  } else {
    const temp = fahrenheitToCelsius(weather.daysForecast[0].tempmax)
    todayMaxTemp = `${Math.round(temp)}°C`
  }
  const todayHumidity = Math.round(weather.currentConditions.humidity)
  const sunriseDatetime = `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunrise}`
  const todaySunrise = format(new Date(`${sunriseDatetime}`), 'h:mm a')
  const sunsetDatetime = `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunset}`
  const todaySunset = format(new Date(`${sunsetDatetime}`), 'h:mm a')

  // Create heading
  createHeading(todayForecast, 'h2', 'forecast__heading', "Today's Weather")

  // Create paragraph
  createParagraph(
    todayForecast,
    'forecast__summary',
    `${weather.daysForecast[0].description}`
  )

  // Create ul
  const detailsList = createContainer(todayForecast, 'ul', '', 'forecast__list')

  /* Create container for min temperature */
  const minTemp = createContainer(detailsList, 'li', '', 'forecast__item')

  // Create para
  createParagraph(minTemp, 'forecast__entry', 'Min Temp')

  // Create container
  const minTempInfo = createContainer(minTemp, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(minTempInfo, 'forecast__value', `${todayMinTemp}`)

  // Create image
  createImage(minTempInfo, 'forecast__image', minTempIconUrl, '', 40, 40)

  /* Create container for max temperature */
  const maxTemp = createContainer(detailsList, 'li', '', 'forecast__item')

  // Create para
  createParagraph(maxTemp, 'forecast__entry', 'Max Temp')

  // Create container
  const maxTempInfo = createContainer(maxTemp, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(maxTempInfo, 'forecast__value', `${todayMaxTemp}`)

  // Create image
  createImage(maxTempInfo, 'forecast__image', maxTempIconUrl, '', 40, 40)

  // Create container for humidity
  const humidity = createContainer(detailsList, 'li', '', 'forecast__item')

  // Create para
  createParagraph(humidity, 'forecast__entry', 'Humidity')

  // Create container
  const humidityInfo = createContainer(
    humidity,
    'div',
    '',
    'forecast__container'
  )

  // Create paragraph
  createParagraph(humidityInfo, 'forecast__value', `${todayHumidity}%`)

  // Create image
  createImage(humidityInfo, 'forecast__image', humidityIconUrl, '', 40, 40)

  /* Create container for uv index */
  const uvIndex = createContainer(detailsList, 'li', '', 'forecast__item')

  // Create para
  createParagraph(uvIndex, 'forecast__entry', 'UV Index')

  // Create container
  const uvIndexInfo = createContainer(uvIndex, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(
    uvIndexInfo,
    'forecast__value',
    `${weather.currentConditions.uvindex}`
  )

  // Create image
  createImage(uvIndexInfo, 'forecast__image', uvIndexIconUrl, '', 40, 40)

  /* Create container for sunrise */
  const sunrise = createContainer(detailsList, 'li', '', 'forecast__item')

  // Create para
  createParagraph(sunrise, 'forecast__entry', 'Sunrise')

  // Create container
  const sunriseInfo = createContainer(sunrise, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(sunriseInfo, 'forecast__value', `${todaySunrise}`)

  // Create image
  createImage(sunriseInfo, 'forecast__image', sunriseIconUrl, '', 40, 40)

  /* Create container for sunset */
  const sunset = createContainer(detailsList, 'li', '', 'forecast__item')

  // Create para
  createParagraph(sunset, 'forecast__entry', 'Sunset')

  // Create container
  const sunsetInfo = createContainer(sunset, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(sunsetInfo, 'forecast__value', `${todaySunset}`)

  // Create image
  createImage(sunsetInfo, 'forecast__image', sunsetIconUrl, '', 40, 40)
}
