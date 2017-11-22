const settings = require('../../config/')
const {superSecret} = settings.auth
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Ad = require('../models/ad.model')
const Promotion = require('../models/promotion.model')
const Plan = require('../models/plan.model')
const Promise = require('bluebird')

function createUser (req, res, next) {
  const {email, password, firstName, lastName, isAdmin, province, city} = req.body
  console.log('reachhhhhhhhhhh')
  User.create({exec: res.pExec, email, password, firstName, lastName, province, city, isAdmin})
    .then(user => {
      const userId = user.id
      const apiToken = jwt.sign({userId, email, password, isAdmin}, superSecret, {expiresIn: 60 * 60 * 24})
      res.json({userId, firstName, lastName, email, apiToken})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

function show (req, res, next) {
  const {decoded} = res
  const exec = res.pExec
  const {userId, isAdmin, email} = decoded
  const promises = [Ad.getAds({exec, isAdmin, userId}), Promotion.getSet({exec, isAdmin}), Plan.getSet({exec, isAdmin})]
  Promise.all(promises)
    .then(data => {
      console.log(data)
      const [items, promotions, plans] = data
      res.json({userId, email, isAdmin, items, promotions, plans})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {createUser, show}
