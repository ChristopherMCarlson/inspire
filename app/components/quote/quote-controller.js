import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(res) {
	let quote = res[0].content.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").split(' ');
	if (quote.length >= 9) {
		let newQuote = quote.slice(0, 9).join(' ')
		document.getElementById('quote').innerHTML = `
	<p>${newQuote}...</p>
	<p class="author">-${res[0].title}</p>
	`} else {
		let newQuote = quote.join(' ')
		document.getElementById('quote').innerHTML = `
		<p>${newQuote}</p>
		<p class="author">-${res[0].title}</p>
		`}
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}
