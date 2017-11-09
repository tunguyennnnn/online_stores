const express = require('express')
const router = express.Router()
const userRouter = require('./user.route')
const authRouter = require('./auth.route')
const itemRouter = require('./item.route')

router.post('/health-check', (req, res) => {
  console.log(req.body)
  res.send('OK')
})

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/items', itemRouter)

module.exports = router
