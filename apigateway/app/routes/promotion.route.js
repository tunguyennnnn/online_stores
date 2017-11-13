const express = require('express')
const router = express.Router()
const promotionCtrl = require('../controllers/promotion.controller')

router.route('/')
  .get(promotionCtrl.get)
  .post(promotionCtrl.create)

module.exports = router
