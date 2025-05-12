// Import functions
import { isWithinInterval } from 'date-fns'

// Import DOM elements
const body = document.body


export function changeBackground(weather) {
  // Get sunrise, sunset times and change them into milliseconds
  const sunriseDatetime = `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunrise}`
  const sunriseInMilliseconds = new Date(sunriseDatetime).getTime()
  const sunsetDatetime = `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunset}`
  const sunsetInMilliseconds = new Date(sunsetDatetime).getTime()

  // Get current time in milliseconds
  const currentTime = Date.now()

  // Check current time is between sunrise time and sunset time
  const isDay = isWithinInterval(new Date(currentTime), {
    start: new Date(sunriseInMilliseconds),
    end: new Date(sunsetInMilliseconds),
  })

  // Change background color
  if (isDay) {
    body.style.setProperty(
      '--clr-bg',
      'linear-gradient(to right, hsl(195, 86%, 64%), hsl(214, 84%, 56%))'
    )
  } else {
    console.log('false')
    body.style.setProperty(
      '--clr-bg',
      'radial-gradient( circle farthest-corner at -24.7% -47.3%,  rgba(6,130,165,1) 0%, rgba(34,48,86,1) 66.8%, rgba(15,23,42,1) 100.2%  )'
      // 'linear-gradient( 90.2deg, rgba(56,141,217,1) -0.4%  , rgba(1,47,95,1) 106.1%  )'
    )
  }
}
