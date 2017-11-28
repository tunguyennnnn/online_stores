const Ad = require('../models/ad.model')
const _ = require('lodash')
const UserCtrl = require('./users.controller')

function index (req, res, next) {
  const {pExec, decoded} = res
  Ad.getAds({exec: pExec})
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

function create (req, res, next) {
  const {decoded, pExec} = res
  const {userId} = decoded
  console.log(req.body.id)
  if (req.body.id) {
    Ad.update(_.assign({}, {userId, exec: pExec}, req.body))
      .then(items => {
        res.json(items)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  } else {
    Ad.createAd(_.assign({}, {userId, exec: pExec}, req.body))
      .then(items => {
        res.json(items)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  }
}

function update (req, res, next) {
  res.status(200)
}

function destroy (req, res, next) {
  const {adId} = req.params
  const {decoded, pExec} = res
  const {userId, isAdmin} = decoded
  console.log(adId, decoded)
  Ad.destroy({exec: pExec, userId, adId, isAdmin})
    .then(() => {
      UserCtrl.show(req, res, next)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {index, create, update, destroy}
