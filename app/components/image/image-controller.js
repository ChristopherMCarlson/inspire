//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

const iS = new ImageService

function drawImg(img) {
  document.getElementById('background').style.backgroundImage = `url(${img.urls.full})`
  document.getElementById('attribution').innerHTML = `
  <p>Photo by <a href="${img.links.html}" target="_blank">${img.user.name}</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a>
  `
}

export default class ImageController {
  constructor() {
    iS.getImage(drawImg)
  }

}

