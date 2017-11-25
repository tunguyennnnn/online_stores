const Moment = require('moment')
const Plan = require('../models/plan.model')
const Transaction = require('../models/transaction')
const Promise = require('bluebird')
const UserCtrl = require('./users.controller')
function get (req, res, next) {
  res.status(200).send()
}

function create (req, res, next) {
  const {userId} = res.decoded
  const {planId, cardDetail} = req.body
  console.log(planId, userId)
  Plan.getPlanSet({exec: res.pExec, setId: planId})
    .then(planSet => {
      const {price, duration} = planSet
      const now = Moment()
      const startDate = now.format('YYYY-MM-DD HH:mm:ss')
      const endDate = now.add(duration, 'days').format('YYYY-MM-DD HH:mm:ss')
      Plan.create({exec: res.pExec, userId, planId, startDate, endDate})
        .then(r => {
          const {insertId} = r
          Transaction.create({exec: res.pExec, userId, transaction_id: insertId, type: 'plans', amount: price, cardDetail})
            .then(() => {
              UserCtrl.show(req, res, next)
            })
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })

}

module.exports = {get, create}
