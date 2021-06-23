const axios = require('axios');
const { api } = require('../config');

async function getMessage(id) {
	const url = `${api.messages.get.url}?id=${id}`;
	const { data } = await axios({ method: api.messages.get.method, url });
	return data;
}

async function getClientsByMessageId(id) {
	const url = `${api.messages.clients.get.url}?id=${id}`;
	const { data } = await axios({ method: api.messages.clients.get.method, url });
	return data;
}

module.exports = { getMessage, getClientsByMessageId };
