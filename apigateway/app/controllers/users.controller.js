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

function getAds (req, res, next) {
  const {decoded} = res
  console.log(res)
  const {userId} = decoded
  User.getAllMyAds({exec: res.pExec, userId})
  .then(r => {
    if (r) {
      console.log(r)
      res.json({info: r})
    } else res.status(404).send()
  })
  .catch(err => {
    console.log(err)
    res.status(500).send()
  })
}


function createAd (req, res, next) {
  const {decoded} = res
  console.log(res)
  const {title, imageUrl, description, price, category} = req.body
  console.log(title)
  // const {title, imageUrl, description, price, category} = data
  // console.log()
  User.createAd({exec: res.pExec, title, imageUrl, description, price, category})
  .then(r => {
    if (r) {
      console.log(`successfully created an ad for ${userId}`)
      res.status(200).send()
    } else res.status(400).send()
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
  const promises = [User.getUser({exec, email}), Ad.getUserAds({exec, isAdmin, userId}), Promotion.getSet({exec, isAdmin}), Plan.getSet({exec, isAdmin})]
  Promise.all(promises)
    .then(data => {
      console.log(data)
      const [user, items, promotions, plans] = data
      res.json({userId, email, available: user.available, plan: user.plan, isAdmin, items, promotions, plans})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {createUser, show, getAds, createAd}
