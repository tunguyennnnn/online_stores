const Promise = require('bluebird')

function get (req, res, next) {
  res.status(200).send()
}

function create (req, res, next) {
  res.status(200).send()
}

module.exports = {get, create}
