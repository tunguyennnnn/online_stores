const express = require('express')
const bodyParser = require('body-parser')
const expressWinston = require('express-winston')
const helmet = require('helmet')
const winstonInstance = require('./config/winston')
const config = require('./config/auth')
const routes = require('./app/routes/index.route')
const expressValidator = require('express-validator')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
app.use(helmet())
expressWinston.requestWhitelist.push('body')
expressWinston.responseWhitelist.push('body')

app.use(expressWinston.logger({
  winstonInstance,
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  colorStatus: true
}))
app.set('superSecret', config.auth)

app.use('/api', routes)

app.listen(4000, () => {
  console.log(`Server starts at port ${4000}`)
})
