const Plan = require('../models/plan.model')

function create (req, res, next) {
  const {name, duration, price} = req.body
  console.log(name, duration, price)
  Plan.createSet({exec: res.pExec, name, price, duration})
    .then(plans => {
      res.json(plans)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {create}
