import axios from "axios";

const geocode = (latitude, longitude) => {
	return axios.create({
		baseURL: `https://geocode.xyz/${latitude},${longitude}`,
		params: {
			geoit: 'json'
		}
	})
}
export default geocode;