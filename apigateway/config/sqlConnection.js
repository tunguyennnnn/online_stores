const mysql = require('mysql')
const {db} = require('./index')
const Promise = require('bluebird')

function connect (req, res, next) {
  res.db = mysql.createConnection(db)
  res.db.connect()
  res.pExec = Promise.promisify(res.db.query)
  next()
}

module.exports = connect
