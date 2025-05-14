/* Fetches the weather data for a given location */
export async function fetchWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=us&key=GHZ3R8UWAW7YNA34WQBZC2HLA&contentType=json`

  const response = await fetch(url)
  const weatherData = await response.json()

  return weatherData
}
