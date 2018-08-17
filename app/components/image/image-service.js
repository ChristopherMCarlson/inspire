const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);
let key = '8152c50f51ba73be712040a1f0e5d25944bbcf6c57dd975bf5542beac6ad8821'
const url3 = 'https://api.unsplash.com/photos/random/?client_id=' + key

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
		usApi().then(res => {
			callWhenDone(res.data)
		})
	}
}
