const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/items.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .all(authCheck)
  .get(itemCtrl.get)

router.route('/rates/')
  .all(authCheck)

module.exports = router
