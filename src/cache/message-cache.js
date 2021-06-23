const { cache } = require('./cache');
const { getMessage } = require('../api/messages');

async function getMessageFromCache(id) {
	let message;
	message = cache.get(id);
	if (!message) {
		message = await getMessage(id);
		cache.set(id, message);
	}
	return message;
}

module.exports = { getMessageFromCache };
