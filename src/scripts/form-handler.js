// Import functions
import { validateForm } from './form-validation'
import { getWeatherDetails } from './weather-details'

// Get DOM elements
const form = document.querySelector('#form')

/* Event listener for form submit */
form.addEventListener('submit', (event) => {
  const { isValid, city } = validateForm(event)

  if (isValid) {
    const cityName = city.value
    console.log(cityName)
    getWeatherDetails(cityName)
  } else {
    return
  }
})
