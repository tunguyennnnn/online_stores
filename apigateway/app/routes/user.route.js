const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users.controller')
const itemCtrl = require('../controllers/items.controller')
const authCheck = require('../../config/auth')

router.route('/')
  .post(userCtrl.createUser)

router.route('/:userId')
  .all(authCheck)
  .get(userCtrl.show)

router.route('/:userId/items')
  .get(itemCtrl.getUserItems)
  .post(itemCtrl.create)

module.exports = router
