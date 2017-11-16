const Plan = require('../models/plan.model')

function create (req, res, next) {
  const {name, duration, price} = req.body
  Plan.createSet({exec: res.pExec, name, price, duration})
    .then(r => {
      const plan = r.first()
      if (plan) {
        const {id} = plan
        res.json({id, name, price, duration})
      } else {
        res.status(404).send()
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
  res.status(200).send()
}

module.exports = {create}
