const express = require('express')
const router = express.Router()
const userRouter = require('./user.route')
const authRouter = require('./auth.route')
const adRouter = require('./ad.route')
const promotionRouter = require('./promotion.route')
const planRouter = require('./plan.route')
const promotionSet = require('./promotionSet.route')
const planSet = require('./planSet.route')

router.post('/health-check', (req, res) => {
  console.log(req.body)
  res.send('OK')
})

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/ads', adRouter)
router.use('/promotions', promotionRouter)
router.use('/plans', planRouter)
router.use('/promotionSet', promotionSet)
router.use('/planSet', planSet)

module.exports = router
