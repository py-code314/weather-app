import './styles/styles.css'
import './scripts/form-handler'

import { getWeather } from './scripts/form-handler'



window.addEventListener('load', async () => {
  await getWeather()
})
