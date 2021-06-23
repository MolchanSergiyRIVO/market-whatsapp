// if (!process.env.VIBER_TOKEN) {
// 	console.error('Viber bot token is undefined');
// 	process.exit(1);
// }
//
// const viber = {
// 	token: process.env.VIBER_TOKEN
// };

const redisOpts = {
	redis_host: process.env.REDIS_HOST || '127.0.0.1',
	redis_port: Number(process.env.REDIS_PORT) || 6380
};

const lruCacheOptions = {
	max: 100,
	maxAge: 1000 * 60 * 60 // in ms
};

const api = {
	categories: {
		get: {
			method: 'GET',
			url: 'http://127.0.0.1:8080/categories'
		}
	},
	products: {
		get: {
			method: 'GET',
			url: 'http://127.0.0.1:8080/products'
		}
	},
	busket: {
		get: {
			method: 'GET',
			url: 'http://127.0.0.1:8080/busket'
		},
		post: {
			method: 'POST',
			url: 'http://127.0.0.1:8080/busket'
		},
		remove: {
			method: 'DELETE',
			url: 'http://127.0.0.1:8080/busket'
		}
	},
	client: {
		get: {
			method: 'GET',
			url: 'http://127.0.0.1:8080/client'
		},
		post: {
			method: 'POST',
			url: 'http://127.0.0.1:8080/client'
		},
		put: {
			method: 'PUT',
			url: 'http://127.0.0.1:8080/client'
		}
	},
	orders: {
		get: {
			method: 'GET',
			url: 'http://127.0.0.1:8080/orders-by'
		},
		post: {
			method: 'POST',
			url: 'http://127.0.0.1:8080/orders'
		}
	},
	messages: {
		get: {
			method: 'GET',
			url: 'http://127.0.0.1:8080/message'
		},
		clients: {
			get: {
				method: 'GET',
				url: 'http://127.0.0.1:8080/clients-message'
			},
		}
	}
};

module.exports = { api, lruCacheOptions, redisOpts };
