const ReportModel = require('../models/report.model')

function genReport (req, res, next) {
  const {pExec, decoded} = res
  const {reportNumber} = req.params
  ReportModel[`report${reportNumber}`](pExec)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).send()
    })
}

module.exports = {genReport}
