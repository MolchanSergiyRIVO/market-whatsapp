const { getMessageFromCache } = require('../cache');
const { getClientsByMessageId } = require('../api/messages');
const TextMessage = require('viber-bot').Message.Text;
const { mainMenu } = require('../button-handlers');
const { cache, dict } = require('../databses');
// todo: change status before sended message
function notifications(bot) {
	cache.on('message', async (channel, data) => {
		if (channel === 'notification') {
			const { type, message } = JSON.parse(data);
			if (type === 'push') {
				const notificationMessage = await getMessageFromCache(message.message_id);
				const { clients } = await getClientsByMessageId(message.message_id);
				const menu = await mainMenu();
				for (const client of clients) {
					if (client.viber_id) {
						dict.get(client.viber_id, (err, res) => {
							if (err) throw err;
							bot.sendMessage(JSON.parse(res), [
								new TextMessage(notificationMessage.message),
								menu
							]);
						});
					}
				}
			}
		}
	});
}

module.exports = { notifications };
