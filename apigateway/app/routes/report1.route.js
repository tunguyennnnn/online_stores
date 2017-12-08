const express = require('express')
const router = express.Router()
const reportCtrl = require('../controllers/report.controller')

router.route('/:reportNumber')
  .get(reportCtrl.genReport)

module.exports = router
