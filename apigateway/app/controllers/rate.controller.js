const rateAd = require('../models/rate.model')

function createRating (req, res, next) {
  const {score, adId} = req.body
  const {userId} = res.decoded
  rateAd.create({exec: res.pExec, userId, adId, score})
    .then((response) => {
      res.status(200).send()
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {createRating}
