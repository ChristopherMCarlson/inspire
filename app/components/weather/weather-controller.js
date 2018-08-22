import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

let weathIcoDictionary = {
	'01d': 'wi-day-sunny',
	'02d': 'wi-day-cloudy',
	'03d': 'wi-cloud',
	'04d': 'wi-cloudy',
	'09d': 'wi-rain',
	'10d': 'wi-day-rain',
	'11d': 'wi-thunderstorm',
	'13d': 'wi-snow',
	'50d': 'wi-day-haze',
	'01n': 'wi-night-clear',
	'02n': 'wi-night-cloudy',
	'03n': 'wi-cloud',
	'04n': 'wi-cloudy',
	'09n': 'wi-rain',
	'10n': 'wi-night-rain',
	'11n': 'wi-thunderstorm',
	'13n': 'wi-snow',
	'50n': 'wi-night-haze',
}

function drawWeather(res) {
	let weatherIco = weathIcoDictionary[res.data.weather[0].icon]
	console.log(res)
	let tempF = (res.data.main.temp * 9 / 5) - 459.67
	document.getElementById('weather').innerHTML = `
	
	<div class="d-flex flex-row">
	<i class="wi ${weatherIco} weather-icon"></i>
	<div class="d-flex flex-column justify-content-center">
	<p class="align-middle" style="margin:0">${Math.round(tempF)} &#176</p>
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
