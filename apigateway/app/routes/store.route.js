const express = require('express')
const router = express.Router()
const storeCtrl = require('../controllers/store.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .all(authCheck)
  .get(storeCtrl.getStores)

module.exports = router
