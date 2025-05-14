// Import functions
import { isWithinInterval } from 'date-fns'

// Import DOM elements
const body = document.body

/* Update the background image based on the current time of day */
export function updateBackground(weather) {
  // Get sunrise, sunset times and convert them into milliseconds
  const sunrise = new Date(
    `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunrise}`
  ).getTime()
  const sunset = new Date(
    `${weather.daysForecast[0].datetime}T${weather.currentConditions.sunset}`
  ).getTime()

  // Get current time in milliseconds
  const currentTime = Date.now()

  // Determine if it is daytime based on current time
  const isDaytime = isWithinInterval(new Date(currentTime), {
    start: new Date(sunrise),
    end: new Date(sunset),
  })

  // Change background color
  body.style.setProperty(
    '--img-bg',
    isDaytime
      ? 'linear-gradient(to left, hsl(195, 86%, 64%), hsl(214, 84%, 56%))'
      : 'radial-gradient(circle farthest-corner at -24.7% -47.3%, rgba(6,130,165,1) 0%, rgba(34,48,86,1) 66.8%, rgba(15,23,42,1) 100.2%)'
  )
}
