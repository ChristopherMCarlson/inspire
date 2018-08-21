const pixKey = '9888263-5e82026c4efaed628c83b0467';
const url2 = 'https://pixabay.com/api/?key=' + pixKey + '&q=dom&order=popular&per_page=200&image_type=photo&page='
const apiUrl = url2;
let key = '8152c50f51ba73be712040a1f0e5d25944bbcf6c57dd975bf5542beac6ad8821'
const url3 = 'https://api.unsplash.com/photos/random/?client_id=' + key

function randomNum() {
	return Math.floor(Math.random() * 3) + 1;
}

const usApi = axios.create({
	baseURL: url3,
	timeout: 3000
})

const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {

	getImage(callWhenDone) {
		let ranNum = randomNum()
		imgApi(ranNum).then(res => {
			console.log(res.data.hits)
			callWhenDone(res.data)
		})
	}
}
