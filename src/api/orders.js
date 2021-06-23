const axios = require('axios');
const { api } = require('../config');

async function getOrders(id) {
	const url = `${api.orders.get.url}?viberId=${encodeURIComponent(id)}`;
	const { data } = await axios({ method: api.orders.get.method, url });
	return data;
}

async function order(viberId) {
	const url = `${api.orders.post.url}`;
	try {
		const { data } = await axios({ method: api.orders.post.method, url, data: { viberId } });
		return data;
	} catch (e) {
		console.log(e);
		return e;
	}
}

module.exports = { getOrders, order };
