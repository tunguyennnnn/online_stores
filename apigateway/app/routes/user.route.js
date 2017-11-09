const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users.controller')

router.route('/')
  .post(userCtrl.createUser)

module.exports = router
