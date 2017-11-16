const Moment = require('moment')
const Plan = require('../models/plan.model')

function get (req, res, next) {
  res.status(200).send()
}

function create (req, res, next) {
  const {userId, planId, duration} = req.body
  const now = Moment(new Date())
  const startDate = now.format('YYYY-MM-DD HH:mm:ss')
  const endDate = now.add(duration, 'days').format('YYYY-MM-DD HH:mm:ss')
  return Plan.create({exec: res.pExec, userId, planId, startDate, endDate})
    .then(r => {
      const plan = r.first()
      if (plan) {
        res.json(plan)
      } else {
        res.status(404).send()
      }
    })
    .catch(err => {
      console.log(err)
      res.json(500)
    })
}

module.exports = {get, create}
