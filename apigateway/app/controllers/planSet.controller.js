const Plan = require('../models/plan.model')

function create (req, res, next) {
  const {name, duration, price} = req.body
  Plan.createSet({exec: res.pExec, name, price, duration})
    .then(plans => {
      res.json(plans)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
  res.status(200).send()
}

module.exports = {create}
