const http = require('http');
const ngrok = require('./get-public-url');


const port = process.env.PORT || 8000;
return ngrok.getPublicUrl().then(publicUrl => {
	console.log('Set the new webhook to"', publicUrl);
	http.createServer().listen(port, () => {/* WEBHOOK */});
}).catch(error => {
	console.log('Can not connect to ngrok server. Is it running?');
	console.error(error);
});
