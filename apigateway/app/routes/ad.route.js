const express = require('express')
const router = express.Router()
const adCtrl = require('../controllers/ads.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .all(authCheck)
  .get(adCtrl.index)
  .post(adCtrl.create)

router.route('/rates/')
  .all(authCheck)

module.exports = router
