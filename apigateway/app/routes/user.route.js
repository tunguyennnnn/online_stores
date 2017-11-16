const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users.controller')
const adCtrl = require('../controllers/ads.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .post(userCtrl.createUser)

router.route('/:userId')
  .all(authCheck)
  .get(userCtrl.getAds)


router.route('/:userId/items')
  // .get(adCtrl.getItems)
  .post(userCtrl.createAd)

module.exports = router
