const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
const {superSecret} = require('../../config').auth

function login (req, res, next) {
  const {email, password} = req.body
  const apiToken = jwt.sign({email, password}, superSecret, {expiresIn: 60 * 60 * 24})
  res.json({apiToken, expiresIn: 60 * 60 * 24, userId: '1'})
}

module.exports = {login}
