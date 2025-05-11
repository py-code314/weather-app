// Import animated icons
// import clearDayIcon from '../assets/images/animated/icon-clear-day.svg'
// import clearNightIcon from '../assets/images/animated/icon-clear-night.svg'
// import cloudyIcon from '../assets/images/animated/icon-cloudy.svg'
// import fogIcon from '../assets/images/animated/icon-fog.svg'
// import partlyCloudyDayIcon from '../assets/images/animated/icon-partly-cloudy-day.svg'
// import partlyCloudyNightIcon from '../assets/images/animated/icon-partly-cloudy-night.svg'
// import rainIcon from '../assets/images/animated/icon-rain.svg'
// import showersDayIcon from '../assets/images/animated/icon-showers-day.svg'
// import showersNightIcon from '../assets/images/animated/icon-showers-night.svg'
// import snowShowersDayIcon from '../assets/images/animated/icon-snow-showers-day.svg'
// import snowShowersNightIcon from '../assets/images/animated/icon-snow-showers-night.svg'
// import snowIcon from '../assets/images/animated/icon-snow.svg'
// import thunderRainIcon from '../assets/images/animated/icon-thunder-rain.svg'
// import thunderShowersDayIcon from '../assets/images/animated/icon-thunder-showers-day.svg'
// import thunderShowersNightIcon from '../assets/images/animated/icon-thunder-showers-night.svg'
// import windIcon from '../assets/images/animated/icon-wind.svg'
// import notAvailableIcon from '../assets/images/animated/icon-not-available.svg'

// Import DOM elements
const imageContainer = document.querySelector('#image-container')

// Initialize object
// export const animatedIcons = {
//   'snow': snowIcon,
//   'snow-showers-day': snowShowersDayIcon,
//   'snow-showers-night': snowShowersNightIcon,
//   'thunder-rain': thunderRainIcon,
//   'thunder-showers-day': thunderShowersDayIcon,
//   'thunder-showers-night': thunderShowersNightIcon,
//   'rain': rainIcon,
//   'showers-day': showersDayIcon,
//   'showers-night': showersNightIcon,
//   'fog': fogIcon,
//   'wind': windIcon,
//   'cloudy': cloudyIcon,
//   'partly-cloudy-day': partlyCloudyDayIcon,
//   'partly-cloudy-night': partlyCloudyNightIcon,
//   'clear-day': clearDayIcon,
//   'clear-night': clearNightIcon
// }

// export function displayAnimatedIcon(iconId) {
//   imageContainer.textContent = ''
//   const animation = document.createElement('img')
//   animation.className = 'today__image'
//   animation.alt = `${iconId}`
//   animation.width = 500
//   animation.height = 500
//   switch (iconId) {
//     case 'snow':
//       animation.src = snowIcon
//       break
//     case 'snow-showers-day':
//       animation.src = snowShowersDayIcon
//       break
//     case 'snow-showers-night':
//       animation.src = snowShowersNightIcon
//       break
//     case 'thunder-rain':
//       animation.src = thunderRainIcon
//       break
//     case 'thunder-showers-day':
//       animation.src = thunderShowersDayIcon
//       break
//     case 'thunder-showers-night':
//       animation.src = thunderShowersNightIcon
//       break
//     case 'rain':
//       animation.src = rainIcon
//       break
//     case 'showers-day':
//       animation.src = showersDayIcon
//       break
//     case 'showers-night':
//       animation.src = showersNightIcon
//       break
//     case 'fog':
//       animation.src = fogIcon
//       break
//     case 'wind':
//       animation.src = windIcon
//       break
//     case 'cloudy':
//       animation.src = cloudyIcon
//       break
//     case 'partly-cloudy-day':
//       animation.src = partlyCloudyDayIcon
//       break
//     case 'partly-cloudy-night':
//       animation.src = partlyCloudyNightIcon
//       break
//     case 'clear-day':
//       animation.src = clearDayIcon
//       break
//     case 'clear-night':
//       animation.src = clearNightIcon
//       break
//     default:
//       animation.src = notAvailableIcon
//   }
//   imageContainer.appendChild(animation)
// }

// const imageUrl = await getWeatherIcon(iconId)

/* Dynamic import of images */
export async function displayAnimatedIcon(iconId) {
  // Get image url
  const imageUrl = await getWeatherIcon(iconId)
 
  // Create image element
  imageContainer.textContent = ''
  const animation = document.createElement('img')
  animation.className = 'today__image'
  animation.src = imageUrl
  animation.alt = `${iconId}`
  animation.width = 500
  animation.height = 500

  imageContainer.appendChild(animation)
}

export async function getWeatherIcon(condition) {
  console.log('condition')
  // Get file based on condition
  const iconFile = `icon-${condition}.svg`

  try {
    // Dynamically import the icon
    const iconModule = await import(
      `../assets/images/animated/${iconFile}`
    )
    console.log(iconModule.default)
    return iconModule.default
  } catch (error) {
    console.error('File not found', iconFile, error)
    return
  }
}
