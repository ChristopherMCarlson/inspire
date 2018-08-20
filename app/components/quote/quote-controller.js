import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(res) {
	document.getElementById('quote').innerHTML = `
	${res[0].content}
	<p class="author">-${res[0].title}</p>
	`
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}
