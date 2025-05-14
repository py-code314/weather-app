// Import functions
import { createImage } from './dom-utils'

// Import DOM elements
const imageContainer = document.querySelector('#image-container')
const animation = document.querySelector('#animate')

// Import images
import spinnerIcon from '../assets/images/animated/icon-blocks.svg'

/* Displays animated icon for a given weather condition */
export async function displayAnimatedIcon(iconId) {
  // Get icon url
  const iconUrl = await getWeatherIcon(iconId)

  // Create icon element
  imageContainer.textContent = ''
  const icon = createImage(
    imageContainer,
    'today__image',
    iconUrl,
    `${iconId}`,
    550,
    550
  )

  imageContainer.appendChild(icon)
}

/* Retrieves an animated icon dynamically for a given weather condition */
export async function getWeatherIcon(condition) {
  // Get file based on condition
  const iconFileName = `icon-${condition}.svg`

  try {
    // Dynamically import the icon
    const iconModule = await import(`../assets/images/animated/${iconFileName}`)
    // Return icon url
    return iconModule.default
  } catch (error) {
    console.error('File not found', iconFileName, error)
    // Load default icon if requested icon is not found
    const fallbackModule = await import(
      `../assets/images/animated/icon-not-available.svg`
    )
    return fallbackModule.default
  }
}

export function displaySpinner() {
  createImage(animation, 'animation__image', spinnerIcon, '', 42, 42)
}

export function hideSpinner() {
  animation.textContent = ''
}
