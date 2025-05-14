import './styles/styles.css'
import './scripts/form-handler'

import { fetchAndDisplayWeather } from './scripts/form-handler'



window.addEventListener('load', async () => {
  await fetchAndDisplayWeather()
})
