let cityName = 'boston'
let lastCityWeatherData = {}

export function setCityName(name) {
  cityName = name
}

export function getCityName() {
  return cityName
}

export function setLastCityWeatherData(weatherData) {
  lastCityWeatherData = weatherData
}

export function getLastCityWeatherData() {
  return lastCityWeatherData
}