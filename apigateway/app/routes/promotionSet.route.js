const express = require('express')
const router = express.Router()
const promotionSetCtrl = require('../controllers/promotionSet.controller')

router.route('/')
  .post(promotionSetCtrl.create)

module.exports = router
