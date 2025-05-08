// Import functions
import { getWeatherData } from './weather-data'

// Initialize weather object
export const weather = {}

/* Function to process and filter weather data */
export async function getWeatherDetails(location) {
  const weatherData = await getWeatherData(location)
  console.log(weatherData)
  const { currentConditions, days, description, resolvedAddress } = weatherData
  const city = resolvedAddress.split(',')[0]

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
    windspeed
  } = currentConditions
  

  // Add location
  weather['location'] = city

  // Add current conditions
  weather['currentDay'] = {
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
    windspeed
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
}

