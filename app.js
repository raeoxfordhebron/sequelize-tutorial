const express = require('express')
const logger = require('morgan')
const routes = require('./routes')
const bodyParser = require('body-parser')
require('dotenv').config()

const http = require('http')

const app = express()

// Middleware
app.use(logger('dev'))
// parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Models
const models = require('./models')

// Synce Database
models.sequelize.sync().then(function(){
    console.log("Database connected")
}).catch(function(err) {
    console.log(err, "Something went wrong")
})

// Default catch-all route
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({message: 'Welcome to the beginning of nothingness'}))

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port)
const server = http.createServer(app)
server.listen(port)

module.exports = app