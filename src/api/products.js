const axios = require('axios');
const { api } = require('../config');

async function getProducts(params = undefined) {
	let url = api.products.get.url;
	if (params) {
		const querysParams = [];
		url += '?';
		for (const [key, value] of Object.entries(params)) querysParams.push(`${key}=${value}`);
		url += querysParams.join('&');
	}
	const { data } = await axios({ method: api.products.get.method, url });
	return data;
	// todo: handle exaption
}

module.exports = { getProducts };
