const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const http = require('http')

const app = express()

// Middleware
app.use(logger('dev'))
// parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Default catch-all route
app.get('*', (req, res) => res.status(200).send({message: 'Welcome to the beginning of nothingness'}))

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port)
const server = http.createServer(app)
server.listen(port)

module.exports = app