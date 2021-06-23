const axios = require('axios');
const { api } = require('../config');

async function getBusket(opts) {
	let url = api.busket.get.url ; //todo: add auth
	url += `?viberId=${encodeURIComponent(opts.viberId)}`; // todo: add encode for all parameters
	if (opts.productId) url += `&productId=${opts.productId}`;

	const { data } = await axios({ method: api.busket.get.method, url: url });
	return data;
}

async function addToBusket(data) {
	await axios({ method: api.busket.post.method, url: api.busket.post.url, data });
}

async function removeFromBusket(data) {
	await axios({ method: api.busket.remove.method, url: api.busket.remove.url, data });
}

module.exports = { getBusket, addToBusket, removeFromBusket };
