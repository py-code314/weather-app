/* Function to get weather data from Visual Crossing API */
export async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=us&key=GHZ3R8UWAW7YNA34WQBZC2HLA&contentType=json`
  )
  const data = await response.json()
  return data
}
