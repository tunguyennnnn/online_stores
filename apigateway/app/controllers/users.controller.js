const settings = require('../../config/')
const {superSecret} = settings.auth
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Ad = require('../models/ad.model')
const Promotion = require('../models/promotion.model')
const Plan = require('../models/plan.model')
const Promise = require('bluebird')
const Transaction = require('../models/transaction')

function createUser (req, res, next) {
  console.log(superSecret)
  const {email, password, firstName, lastName, isAdmin, province, city} = req.body
  User.create({exec: res.pExec, email, password, firstName, lastName, province, city, isAdmin})
    .then(user => {
      const userId = user.insertId
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
  const promises = [User.getUser({exec, email}), Ad.getUserAds({exec, isAdmin, userId}), Promotion.getSet({exec, isAdmin}), Plan.getSet({exec, isAdmin}), Transaction.getAll({exec})]
  Promise.all(promises)
    .then(data => {
      console.log(data)
      const [user, items, promotions, plans, transactions] = data
      res.json({userId, email, available: user.available, plan: user.plan, isAdmin, items, promotions, plans, transactions})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {createUser, show}
