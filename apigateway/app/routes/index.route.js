const express = require('express')
const router = express.Router()
const userRouter = require('./user.route')

router.post('/health-check', (req, res) => {
  console.log(req.body)
  res.send('OK')
})

router.use('/users', userRouter)

module.exports = router
