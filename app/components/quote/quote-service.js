let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(callback) {
		quoteApi().then((res) => {
			callback(res.data)
		})
	}
}
