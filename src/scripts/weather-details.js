// Import functions
import { getWeatherData } from './weather-data'
import { setLastCityWeatherData } from './state'

/* Function to process and filter weather data */
export async function getWeatherDetails(location='boston') {
  const weatherData = await getWeatherData(location)
  console.log(weatherData)
  const { currentConditions, days, description, resolvedAddress } = weatherData
  const place = resolvedAddress

  const weather = {}

  // Add description and location
  weather['weekDescription'] = description
  weather['location'] = place

  const {
    conditions,
    datetime,
    feelslike,
    humidity,
    icon,
    snow,
    sunrise,
    sunset,
    temp,
    uvindex,
    windspeed,
  } = currentConditions

  // Add current conditions
  weather['currentConditions'] = {
    conditions,
    datetime,
    feelslike,
    humidity,
    icon,
    snow,
    sunrise,
    sunset,
    temp,
    uvindex,
    windspeed,
  }

  // Add days
  const dailyWeatherList = []
  days.forEach((day) => {
    const {
      conditions,
      datetime,
      description,
      feelslike,
      humidity,
      icon,
      snow,
      sunrise,
      sunset,
      temp,
      tempmax,
      tempmin,
      uvindex,
      windspeed,
    } = day

    const dailyWeather = {
      conditions,
      datetime,
      description,
      feelslike,
      humidity,
      icon,
      snow,
      sunrise,
      sunset,
      temp,
      tempmax,
      tempmin,
      uvindex,
      windspeed,
    }

    dailyWeatherList.push(dailyWeather)
  })

  weather['daysForecast'] = dailyWeatherList

  console.log(weather)

  setLastCityWeatherData(weather)
  return weather
}


