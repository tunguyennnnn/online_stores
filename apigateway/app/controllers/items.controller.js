const Promise = require('bluebird')

function get (req, res, next) {
  res.json({items: []})
}

function create (req, res, next) {
  res.status(202)
}

function update (req, res, next) {
  res.status(200)
}

module.exports = {get, create, update}
