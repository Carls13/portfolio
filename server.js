// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: false})
const handler = routes.getRequestHandler(app)

const port = process.env.PORT || 3000
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(server_port, server_host)
})