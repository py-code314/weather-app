// Import functions
import { createImage } from "./dom-utils"

// Import DOM elements
const imageContainer = document.querySelector('#image-container')
const animation = document.querySelector('#animate')

// Import images
import spinnerIcon from '../assets/images/animated/icon-blocks.svg'

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
  animation.width = 550
  animation.height = 550

  imageContainer.appendChild(animation)
}

export async function getWeatherIcon(condition) {
  // Get file based on condition
  const iconFile = `icon-${condition}.svg`

  try {
    // Dynamically import the icon
    const iconModule = await import(`../assets/images/animated/${iconFile}`)
    return iconModule.default
  } catch (error) {
    console.error('File not found', iconFile, error)
    // Load default icon if requested icon is not found
    const fallbackModule = await import(`../assets/images/animated/icon-not-available.svg`)
    return fallbackModule.default
  }
}

export function displaySpinner() {
  createImage(animation, 'animation__image', spinnerIcon, '', 42, 42)
}
