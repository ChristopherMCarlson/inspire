const pixKey = '9888263-5e82026c4efaed628c83b0467';
const url2 = 'https://pixabay.com/api/?key=' + pixKey + '&q=sunset&order=popular&per_page=200&image_type=photo&page='
const apiUrl = url2;
function randomNum() {
	return Math.floor(Math.random() * 3) + 1;
}

let imgResults = []

const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {

	getImage(callWhenDone) {
		if (imgResults.length > 0) {
			callWhenDone(imgResults)
			return
		}
		imgApi('' + 1).then(res => {
			imgResults.push(...res.data.hits)
			console.log(imgResults)
		})
		imgApi('' + 2).then(res => {
			imgResults.push(...res.data.hits)
			console.log(imgResults)
		})
		imgApi('' + 3).then(res => {
			imgResults.push(...res.data.hits)
			console.log(imgResults)
			callWhenDone(imgResults)
		})
	}
}
