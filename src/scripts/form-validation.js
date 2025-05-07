// Get DOM elements
const form = document.querySelector('#form')
const city = document.querySelector('#city')
const searchButton = document.querySelector('#search')
console.log(searchButton)

function validateForm(event) {
  console.log('validate form')
  event.preventDefault()

  const errorMessageContainer = document.querySelector('#invalid-city')
  errorMessageContainer.textContent = ''

  if (city.validity.valueMissing) {
    console.log('value missing')
    errorMessageContainer.textContent = 'Please enter a city name'
  } else {
    errorMessageContainer.textContent = ''
  }
}

form.addEventListener('submit', validateForm)
