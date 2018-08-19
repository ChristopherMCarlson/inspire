import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";

function saveData() {
  localStorage.saveServer
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  h = ((h + 11) % 12 + 1);
  var m = today.getMinutes();
  m = checkTime(m);
  let time = h + ":" + m
  document.getElementById('clock').innerHTML = `
  <div class="row clock text-center"><div class="col"><p>${time}</p></div></div>
  `
  var t = setTimeout(startTime, 60000);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      toDoController: new TodoController()
    }
    startTime()
  }
}

window.app = new app()  