// Get DOM elements
const city = document.querySelector('#city')


/* Function to validate form */
export function validateForm(event) {
  // console.log('validate form')
  event.preventDefault()

  let isValid = true

  const errorMessageContainer = document.querySelector('#invalid-city')
  errorMessageContainer.textContent = ''

  if (city.validity.valueMissing) {
    // console.log('value missing')
    errorMessageContainer.textContent = 'Please enter a city name'
    isValid = false;
  } else {
    errorMessageContainer.textContent = ''
  }

  return { isValid, city }
}


