import axios from 'axios';

const apiKey = 'f319a0850077d702d1481c14';
export default axios.create({
	baseURL: `https://v6.exchangerate-api.com/v6/${apiKey}/latest`
});