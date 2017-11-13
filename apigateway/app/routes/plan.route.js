const express = require('express')
const router = express.Router()
const planCtrl = require('../controllers/plan.controller')

router.route('/')
  .get(planCtrl.get)
  .post(planCtrl.create)

module.exports = router
