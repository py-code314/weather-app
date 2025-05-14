// Initialize state
let currentUnit = 'us'
let lastCityWeatherData = {}

/* Sets the unit of measurement for the weather application */
export function setCurrentUnit(unit) {
  currentUnit = unit
}

/* Returns the current unit of measurement */
export function getCurrentUnit() {
  return currentUnit
}

/* Updates the last city weather data with the provided weather data */
export function setLastCityWeatherData(weatherData) {
  lastCityWeatherData = weatherData
}

/* Returns the last city weather data */
export function getLastCityWeatherData() {
  return lastCityWeatherData
}
