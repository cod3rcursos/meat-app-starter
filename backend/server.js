// const express = require('express');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const path = require('path');
// const configPath = path.join(__dirname, '../dist');

// const app = express();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// server.use(app.static(configPath));

server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Use default router
server.use(router)
server.listen(process.env.PORT || 3001, () => {
  console.log('JSON Server is running')
})