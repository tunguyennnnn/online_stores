const Moment = require('moment')
const Promotion = require('../models/promotion.model')

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
  const {itemId, setId, duration} = req.body
  const now = Moment(new Date())
  const startDate = now.format('YYYY-MM-DD HH:mm:ss')
  const endDate = now.add(duration, 'days').format('YYYY-MM-DD HH:mm:ss')
  return Promotion.create({exec: res.pExec, itemId, setId, startDate, endDate})
    .then(r => {
      const promotion = r.first()
      if (promotion) {
        res.json(promotion)
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
