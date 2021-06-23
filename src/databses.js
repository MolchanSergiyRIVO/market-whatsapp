const redis = require('redis');
const { redisOpts } = require('./config');

const { redis_port, redis_host } = redisOpts;
const redisOptions = {
	host: redis_host,
	port: redis_port
};
const cache = redis.createClient(redisOptions);
const dict = redis.createClient(redisOptions);
cache.on('error', function (error) {
	console.error(error);
	process.exit(1);
});

cache.subscribe('notification');

module.exports = { cache, dict };
