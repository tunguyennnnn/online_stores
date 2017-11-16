const Promotion = require('../models/promotion.model')

function create (req, res, next) {
  const {price, duration} = req.body
  Promotion.createSet({exec: res.pExec, price, duration})
    .then((promotions) => {
      res.json({promotions})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {create}
