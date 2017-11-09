const Promise = require('bluebird')
const _ = require('lodash')
const settings = require('../../config/')
const {superSecret} = settings.auth
const jwt = require('jsonwebtoken')

function createUser (req, res, next) {
  const {email, password, firstName, lastName} = req.body
  const apiToken = jwt.sign({email, password}, superSecret, {expiresIn: 60 * 60 * 24})
  res.json({apiToken, expiresIn: 60 * 60 * 24})
}

module.exports = {createUser}
