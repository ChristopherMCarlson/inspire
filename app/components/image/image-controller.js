//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

const iS = new ImageService

function randomNum() {
  return Math.floor(Math.random() * 600);
}

function drawImg(img) {
  let ranNum = randomNum()
  document.getElementById('background').style.backgroundImage = `url(${img[ranNum].largeImageURL})`
  document.getElementById('attribution').innerHTML = `
  <p>Photo supplied by <a href="https://pixabay.com/">Pixabay</a></p>
   `
}

export default class ImageController {
  constructor() {
    iS.getImage(drawImg)
  }
  refresh() {
    iS.getImage(drawImg)
  }
}

