// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: false})
const handler = routes.getRequestHandler(app)

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(port, host, function() {
  	console.log("Server started.......");
	});
});