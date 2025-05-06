import { getWeatherData } from './weather-data'

// Initialize weather object
export const weather = {}


async function getWeatherDetails() {
  const weatherData = await getWeatherData('london')
  // console.log(weatherData)
  const { currentConditions, days, description, resolvedAddress } = weatherData
  // console.log(currentConditions, days, description, resolvedAddress)
  const location = resolvedAddress.split(',')[0]
  // console.log(location)

  const {
    temp,
    feelslike,
    humidity,
    windspeed,
    uvindex,
    conditions,
    sunrise,
    sunset,
  } = currentConditions
  // console.log(
  //   temp,
  //   feelslike,
  //   humidity,
  //   windspeed,
  //   uvindex,
  //   conditions,
  //   sunrise,
  //   sunset
  // )

  // Add location
  weather['location'] = location

  // Add current conditions
  weather['currentDay'] = {
    temp,
    feelslike,
    humidity,
    windspeed,
    uvindex,
    conditions,
    sunrise,
    sunset,
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

getWeatherDetails()
