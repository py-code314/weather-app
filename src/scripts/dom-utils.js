/* Creates a p element */
export const createParagraph = (parent, className, text) => {
  const paragraph = document.createElement('p')
  paragraph.className = className
  paragraph.textContent = text
  parent.appendChild(paragraph)
  return paragraph
}

/* Creates an image element */
export const createImage = (parent, className, src, alt, width, height) => {
  const image = document.createElement('img')
  image.className = className
  image.src = src
  image.alt = alt
  image.width = width
  image.height = height
  parent.appendChild(image)
  return image
}

/* Creates a <time> element and appends it to the given parent element */
export const createTime = (parent, className, text, dateTime) => {
  const time = document.createElement('time');
  time.className = className;
  time.textContent = text;
  time.dateTime = dateTime;
  parent.appendChild(time);
  return time;
};

/* Creates a container element */
export const createContainer = (parent, name, id, className) => {
  const element = document.createElement(name);
  element.id = id;
  element.className = className;
  parent.appendChild(element);
  return element;
};