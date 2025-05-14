// Import functions
import { fetchWeatherData } from './weather-data'
import { setLastCityWeatherData } from './state'

export async function filterWeatherData(location = 'boston') {
  const weatherData = await fetchWeatherData(location)
  const { currentConditions, days, description, resolvedAddress } = weatherData
  const place = resolvedAddress

  const filteredWeatherData = {
    weekConditions: description,
    location: place,
    currentConditions: {
      conditions: currentConditions.conditions,
      datetime: currentConditions.datetime,
      feelslike: currentConditions.feelslike,
      humidity: currentConditions.humidity,
      icon: currentConditions.icon,
      snow: currentConditions.snow,
      sunrise: currentConditions.sunrise,
      sunset: currentConditions.sunset,
      temp: currentConditions.temp,
      uvindex: currentConditions.uvindex,
      windspeed: currentConditions.windspeed,
    },
    daysForecast: days.map((day) => {
      return {
        conditions: day.conditions,
        datetime: day.datetime,
        description: day.description,
        feelslike: day.feelslike,
        humidity: day.humidity,
        icon: day.icon,
        snow: day.snow,
        sunrise: day.sunrise,
        sunset: day.sunset,
        temp: day.temp,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        uvindex: day.uvindex,
        windspeed: day.windspeed,
      }
    }),
  }
  console.log(filteredWeatherData)
  setLastCityWeatherData(filteredWeatherData)
  return filteredWeatherData
}
