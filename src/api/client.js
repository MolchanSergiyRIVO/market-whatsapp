const axios = require('axios');
const { api } = require('../config');

async function newClient(data) {
	await axios({ method: api.client.post.method, url: api.client.post.url, data });
}

async function getClientBy(telegramId) {
	const url = `${api.client.get.url}?viberId=${encodeURIComponent(telegramId)}`;
	const { data } = await axios({ method: api.client.get.method, url });
	return data.client;
}

async function setContactForClient(data) {
	await axios({ method: api.client.put.method, url: api.client.put.url, data });
}


module.exports = { newClient, setContactForClient, getClientBy };
