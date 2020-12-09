import axios from 'axios';
import { url, api } from '@configs/constants';

axios.defaults.baseURL = url.baseUrl + api.ver;
axios.defaults.timeout = 10000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'en';

axios.interceptors.request.use(
	request => {
		let authToken = localStorage.getItem('token');
		if (authToken === null) {
			delete request.headers.common['Authorization'];
		} else {
			request.headers.common['Authorization'] = localStorage.getItem('token');
		}
		request.headers['Content-Type'] = 'application/json';

		return request;
	},
	err => {
		return Promise.reject(err);
	}
);

axios.interceptors.response.use(
	response => {
		return response.data;
	},
	err => {
		const error = err.response;
		return Promise.reject(error);
	}
);

export default axios;