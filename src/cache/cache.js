const LRU = require('lru-cache');
const { lruCacheOptions } = require('../config');

const options = {
	...lruCacheOptions,
	length: function (n, key) { return n * 2 + key.length; },
	dispose: function (key, n) { n.close(); },
};

const cache = new LRU(options);

module.exports = { cache };
