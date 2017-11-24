const Moment = require('moment')
const Promotion = require('../models/promotion.model')
const Ad = require('../models/ad.model')
const Transaction = require('../models/transaction')
const UserCtrl = require('./users.controller')

function get (req, res, next) {
  // return ({exec: res.pExec})
  //   .then(promotions => {
  //     res.json(promotions)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     res.json(500)
  //   })
  res.status(200).send()
}

function create (req, res, next) {
  const {itemId, promotionId, cardDetail} = req.body
  const {userId} = res.decoded
  console.log(res.decoded)
  const now = Moment()
  Promotion.getPromotionSet({exec: res.pExec, setId: promotionId})
    .then(set => {
      const {price, duration} = set
      const startDate = now.format('YYYY-MM-DD HH:mm:ss')
      const endDate = now.add(duration, 'days').format('YYYY-MM-DD HH:mm:ss')
      Promotion.create({exec: res.pExec, itemId, setId: promotionId, startDate, endDate})
        .then((r) => {
          const {insertId} = r
          Transaction.create({exec: res.pExec, userId, transaction_id: insertId, type: 'promotions', amount: price, cardDetail})
            .then(() => {
              UserCtrl.show(req, res, next)
            })
        })
        .catch(err => {
          console.log(err)
          res.json(500)
        })
    })
}

module.exports = {get, create}
