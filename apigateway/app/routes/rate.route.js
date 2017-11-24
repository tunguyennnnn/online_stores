const express = require('express')
const router = express.Router()
const rateCtrl = require('../controllers/rate.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .all(authCheck)
  .post(rateCtrl.createRating)

module.exports = router
