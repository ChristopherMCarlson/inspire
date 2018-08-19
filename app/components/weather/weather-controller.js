import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(res) {
	let weatherIco = "http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png"
	console.log(res)
	let tempF = (res.data.main.temp * 9 / 5) - 459.67
	document.getElementById('weather').innerHTML = `
	<div class="weather col-sm-1">
	<div class="row justify-content-center">
	<img src="${weatherIco}" class="image-fluid weather" />
	<p class="align-middle">${Math.round(tempF)} &#176</p>
	</div>
	<div class="row justify-content-center">
	<p>Boise</p>
	</div>
	</div>
	`
}


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			drawWeather(weather);
			//What can you do with this weather object?
		})
	}
}
