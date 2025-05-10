import './styles/styles.css'
import './scripts/form-handler'

import { weather } from './scripts/weather-details'
import { getWeatherDetails } from './scripts/weather-details'
import { displayCurrentWeatherSummary } from './scripts/current-weather-summary'
import { displayAnimatedIcon } from './scripts/animated-icons'
import { displayCurrentWeatherDetails } from './scripts/current-weather-details'
import { displayTodayForecast } from './scripts/today-weather'



getWeatherDetails('new delhi').then(() => {
      displayCurrentWeatherSummary(weather)
      displayAnimatedIcon(weather.currentConditions.icon)
  displayCurrentWeatherDetails(weather)
  displayTodayForecast(weather)
    })