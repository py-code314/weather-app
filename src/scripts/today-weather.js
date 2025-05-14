// Import functions
import {
  createContainer,
  createHeading,
  createImage,
  createParagraph,
} from './dom-utils'
import { fahrenheitToCelsius } from './temp-conversion'
import { getWeatherIcon } from './animated-icons'
import { format } from 'date-fns'
import { getCurrentUnit } from './state'

// Import images dynamically
const minTempIconUrl = await getWeatherIcon('thermometer-colder')
const maxTempIconUrl = await getWeatherIcon('thermometer-warmer')
const humidityIconUrl = await getWeatherIcon('humidity')
const uvIndexIconUrl = await getWeatherIcon('uv-index')
const sunriseIconUrl = await getWeatherIcon('sunrise')
const sunsetIconUrl = await getWeatherIcon('sunset')

// Import DOM elements
const todayForecast = document.querySelector('#today-forecast')

/* Displays today's weather forecast */
export function displayTodayForecast(weatherData) {
  todayForecast.textContent = ''
  // Destructure weather data
  const {
    currentConditions: { humidity, uvindex, sunrise, sunset },
    daysForecast: [{ tempmin, tempmax, description, datetime }],
  } = weatherData

  // Get and format weather data
  const todayMinTemp = formatTemperature(tempmin)
  const todayMaxTemp = formatTemperature(tempmax)
  const todayHumidity = `${Math.round(humidity)}%`
  const todaySunrise = format(new Date(`${datetime}T${sunrise}`), 'h:mm a')
  const todaySunset = format(new Date(`${datetime}T${sunset}`), 'h:mm a')

  // Display heading and summary
  createHeading(todayForecast, 'h2', 'forecast__heading', "Today's Weather")
  createParagraph(todayForecast, 'forecast__summary', description)

  // Display weather details for today
  const todayDetails = createContainer(
    todayForecast,
    'ul',
    '',
    'forecast__list'
  )

  createWeatherDetail(todayDetails, 'Min Temp', todayMinTemp, minTempIconUrl)
  createWeatherDetail(todayDetails, 'Max Temp', todayMaxTemp, maxTempIconUrl)
  createWeatherDetail(todayDetails, 'Humidity', todayHumidity, humidityIconUrl)
  createWeatherDetail(todayDetails, 'UV Index', uvindex, uvIndexIconUrl)
  createWeatherDetail(todayDetails, 'Sunrise', todaySunrise, sunriseIconUrl)
  createWeatherDetail(todayDetails, 'Sunset', todaySunset, sunsetIconUrl)
}

/* Formats a given temperature into either fahrenheit or celsius based on the current unit */
function formatTemperature(temp) {
  const currentUnit = getCurrentUnit()
  if (currentUnit === 'us') {
    return `${Math.round(temp)}°F`
  } else {
    return `${Math.round(fahrenheitToCelsius(temp))}°C`
  }
}

/* Creates a list item for a weather detail, containing a label, value, and icon */
const createWeatherDetail = (parent, label, value, iconUrl) => {
  // Container for each weather detail
  const weatherDetail = createContainer(parent, 'li', '', 'forecast__item')

  // Display weather detail label
  createParagraph(weatherDetail, 'forecast__entry', label)

  // Container for weather detail value and icon
  const weatherInfo = createContainer(
    weatherDetail,
    'div',
    '',
    'forecast__container'
  )
  createParagraph(weatherInfo, 'forecast__value', value)
  createImage(weatherInfo, 'forecast__image', iconUrl, '', 40, 40)
}
