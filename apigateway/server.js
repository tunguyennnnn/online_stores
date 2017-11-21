const express = require('express')
const bodyParser = require('body-parser')
const expressWinston = require('express-winston')
const path = require('path')
const helmet = require('helmet')
const winstonInstance = require('./config/winston')
const config = require('./config/auth')
const routes = require('./app/routes/index.route')
const expressValidator = require('express-validator')
const settings = require('./config/')
const {connect, setUpDb} = require('./config/sqlConnection')
require('./config/extend-objects')
const {host, port, user, password, database} = settings.db
// const fs = require('fs')
const mysqlssh = require('mysql-ssh')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, authorization, X-Requested-With, Content-Type, Accept')
  next()
})

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
app.use(express.static(path.join(__dirname, '../client_app/dist')))
// mysqlssh.connect({
//   host: 'login.encs.concordia.ca',
//   user: '{username}',
//   password: '{password}'
// },
//   {
//     host: 'gvc353_2.encs.concordia.ca',
//     user: 'gvc353_2',
//     password: 'tujiem21',
//     database: 'gvc353_2'
//   })
//   .then(client => {
//     client.query('SELECT * FROM `users`', function (err, results, fields) {
//       if (err) throw err
//       console.log(results)
//       mysqlssh.close()
//     })
//   })
// .catch(err => {
//   console.log(err)
// })
setUpDb()

app.use(connect)
app.use('/api', routes)

app.listen(4000, () => {
  console.log(`Server starts at port ${4000}`)
})
