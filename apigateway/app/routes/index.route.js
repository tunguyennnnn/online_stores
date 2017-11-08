const express = require('express')
const router = express.Router()

router.post('/health-check', (req, res) => {
  console.log(req.body)
  res.send('OK')
})

module.exports = router
