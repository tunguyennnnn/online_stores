const mysql = require('mysql')
const {db} = require('./index')
const Promise = require('bluebird')
const fs = require('fs')

function setUpDb () {
  const queries = fs.readFileSync('./config/init.sql').toString()
  .replace(/(\r\n|\n|\r)/gm," ") // remove newlines
    .replace(/\s+/g, ' ') // excess white space
    .split(";") // split into all statements
    .map(Function.prototype.call, String.prototype.trim)
    .filter(function(el) {return el.length != 0});
  const connect = mysql.createConnection(db)
  queries.forEach(q => connect.query(q))
}

function connect (req, res, next) {
  res.db = mysql.createConnection(db)
  res.db.connect()
  res.pExec = Promise.promisify(res.db.query)
  next()
}

module.exports = {connect, setUpDb}
