const Ad = require('../models/ad.model')
const _ = require('lodash')

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
  Ad.createAd(_.assign({}, {userId, exec: pExec}, req.body))
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

function update (req, res, next) {
  res.status(200)
}

module.exports = {index, create, update}
