const express = require('express')
const router = express.Router()
const promotionCtrl = require('../controllers/promotion.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .all(authCheck)
  .get(promotionCtrl.get)
  .post(promotionCtrl.create)

module.exports = router
