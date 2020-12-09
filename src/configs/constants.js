export const url = {
	baseUrl: process.env.BASEURL || 'https://cfas-api-dev.starlux-airlines.com/'
};

export const api = {
	ver: process.env.APIVER || 'api/v1/'
};

const constants = { url, api };

export { constants as default };
