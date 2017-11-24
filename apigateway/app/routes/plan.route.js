const express = require('express')
const router = express.Router()
const planCtrl = require('../controllers/plan.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .all(authCheck)
  .get(planCtrl.get)
  .post(planCtrl.create)

module.exports = router
