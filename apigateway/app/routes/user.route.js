const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users.controller')
const authCheck = require('../../config/auth')
const adCtrl = require('../controllers/ads.controller')

router.route('/')
  .post(userCtrl.createUser)

router.route('/:userId')
  .all(authCheck)
  .get(userCtrl.show)

router.route('/:userId/items')
  .all(authCheck)
  .post(adCtrl.create)

module.exports = router
