// Get DOM elements
const city = document.querySelector('#city')

/* Function to validate form */
export function validateForm() {
  let isValid = true

  const errorMessageContainer = document.querySelector('#invalid-city')
  errorMessageContainer.textContent = ''

  if (city.validity.valueMissing) {
    errorMessageContainer.textContent = 'Please enter a city name'
    isValid = false
  } else {
    errorMessageContainer.textContent = ''
  }

  return { isValid }
}
