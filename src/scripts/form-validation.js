// Get DOM elements
const city = document.querySelector('#city')

/* Validate the form before submitting */
export function validateForm() {
  let isValid = true

  const errorContainer = document.querySelector('#invalid-city')
  errorContainer.textContent = ''

  // Check for empty city name
  if (city.validity.valueMissing) {
    errorContainer.textContent = 'Please enter a city name'
    isValid = false
  }

  return { isValid }
}
