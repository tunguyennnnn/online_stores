const express = require('express')
const router = express.Router()
const planCtrl = require('../controllers/planSet.controller')

router.route('/')
  .post(planCtrl.create)

module.exports = router
