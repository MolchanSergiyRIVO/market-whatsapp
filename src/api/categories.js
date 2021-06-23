const axios = require('axios');
const { api } = require('../config');

async function getCategories(page) {
	let url = api.categories.get.url;
	if (page) url += `?page=${page}`;
	const { data } = await axios({ method: api.categories.get.method, url });
	return data;
}

module.exports = { getCategories };
