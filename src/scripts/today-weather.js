// Import functions
import {
  createContainer,
  createHeading,
  createImage,
  createParagraph
} from './dom-utils'
import { format } from 'date-fns'

// Import images
import tempIcon from '../assets/images/animated/icon-thermometer-glass.svg'
import feelsLikeIcon from '../assets/images/animated/icon-thermometer.svg'
import minTempIcon from '../assets/images/animated/icon-thermometer-colder.svg'
import maxTempIcon from '../assets/images/animated/icon-thermometer-warmer.svg'
import humidityIcon from '../assets/images/animated/icon-humidity.svg'
import uvIndexIcon from '../assets/images/animated/icon-uv-index.svg'
import sunriseIcon from '../assets/images/animated/icon-sunrise.svg'
import sunsetIcon from '../assets/images/animated/icon-sunset.svg'

// Import DOM elements
const todayForecast = document.querySelector('#today-forecast')

export function displayTodayForecast(weather) {
  todayForecast.textContent = ''

  const todayTemp = Math.round(weather.currentConditions.temp)
  const todayFeelsLike = Math.round(weather.currentConditions.feelslike)
  const todayMinTemp = Math.round(weather.daysForecast[0].tempmin)
  const todayMaxTemp = Math.round(weather.daysForecast[0].tempmax)
  const todayHumidity = Math.round(weather.currentConditions.humidity)
  const sunriseDatetime = `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunrise}`
  const todaySunrise = format(new Date(`${sunriseDatetime}`), 'h:mm a')
  const sunsetDatetime = `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunset}`
  const todaySunset = format(new Date(`${sunsetDatetime}`), 'h:mm a')

  // Create heading
  createHeading(todayForecast, 'h2', '', 'forecast__heading', "Today's Weather")

  // Create paragraph
  createParagraph(
    todayForecast,
    'forecast__summary',
    `${weather.currentConditions.conditions}`
  )

  // Create ul
  const detailsList = createContainer(todayForecast, 'ul', '', 'forecast__list')

  /* Create container for temperature */
  const temperature = createContainer(
    detailsList,
    'li',
    '',
    'forecast__list-item'
  )

  // Create para
  createParagraph(temperature, 'forecast__entry', 'Temperature')

  // Create container
  const tempInfo = createContainer(
    temperature,
    'div',
    '',
    'forecast__container'
  )

  // Create paragraph
  createParagraph(tempInfo, 'forecast__value', `${todayTemp}°`)

  // Create image
  createImage(tempInfo, 'forecast__image', tempIcon, '', 35, 35)

  /* Create container for feels like temperature */
  const feelsLike = createContainer(
    detailsList,
    'li',
    '',
    'forecast__list-item'
  )

  // Create para
  createParagraph(feelsLike, 'forecast__entry', 'Feels Like')

  // Create container
  const feelsLikeInfo = createContainer(
    feelsLike,
    'div',
    '',
    'forecast__container'
  )

  // Create paragraph
  createParagraph(feelsLikeInfo, 'forecast__value', `${todayFeelsLike}°`)

  // Create image
  createImage(feelsLikeInfo, 'forecast__image', feelsLikeIcon, '', 35, 35)

  /* Create container for min temperature */
  const minTemp = createContainer(detailsList, 'li', '', 'forecast__list-item')

  // Create para
  createParagraph(minTemp, 'forecast__entry', 'Min Temp')

  // Create container
  const minTempInfo = createContainer(minTemp, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(minTempInfo, 'forecast__value', `${todayMinTemp}°`)

  // Create image
  createImage(minTempInfo, 'forecast__image', minTempIcon, '', 35, 35)

  /* Create container for max temperature */
  const maxTemp = createContainer(detailsList, 'li', '', 'forecast__list-item')

  // Create para
  createParagraph(maxTemp, 'forecast__entry', 'Max Temp')

  // Create container
  const maxTempInfo = createContainer(maxTemp, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(maxTempInfo, 'forecast__value', `${todayMaxTemp}°`)

  // Create image
  createImage(maxTempInfo, 'forecast__image', maxTempIcon, '', 35, 35)

  // Create container for humidity
  const humidity = createContainer(detailsList, 'li', '', 'forecast__list-item')

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
  createImage(humidityInfo, 'forecast__image', humidityIcon, '', 35, 35)

  /* Create container for uv index */
  const uvIndex = createContainer(detailsList, 'li', '', 'forecast__list-item')

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
  createImage(uvIndexInfo, 'forecast__image', uvIndexIcon, '', 35, 35)

  /* Create container for sunrise */
  const sunrise = createContainer(detailsList, 'li', '', 'forecast__list-item')

  // Create para
  createParagraph(sunrise, 'forecast__entry', 'Sunrise')

  // Create container
  const sunriseInfo = createContainer(sunrise, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(sunriseInfo, 'forecast__value', `${todaySunrise}`)

  // Create image
  createImage(sunriseInfo, 'forecast__image', sunriseIcon, '', 35, 35)

  /* Create container for sunset */
  const sunset = createContainer(detailsList, 'li', '', 'forecast__list-item')

  // Create para
  createParagraph(sunset, 'forecast__entry', 'Sunset')

  // Create container
  const sunsetInfo = createContainer(sunset, 'div', '', 'forecast__container')

  // Create paragraph
  createParagraph(sunsetInfo, 'forecast__value', `${todaySunset}`)

  // Create image
  createImage(sunsetInfo, 'forecast__image', sunsetIcon, '', 35, 35)
}
