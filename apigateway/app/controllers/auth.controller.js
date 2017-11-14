const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
const {superSecret} = require('../../config').auth
const User = require('../models/user.model')

function login (req, res, next) {
  const {email, password} = req.body
  console.log(email, password)
  // const apiToken = jwt.sign({email, password}, superSecret, {expiresIn: 60 * 60 * 24})
  // res.json({apiToken, expiresIn: 60 * 60 * 24, userId: '1'})
  User.login({exec: res.pExec, email, password})
    .then(r => {
      const user = r.first()
      if (user) {
        const {id, province, city, isAdmin} = user
        const apiToken = jwt.sign({userId: id, email, password, isAdmin}, superSecret, {expiresIn: 60 * 60 * 24})
        res.json({userId: id, email, province, city, isAdmin, apiToken})
      }
      else res.status(404).send()
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {login}
