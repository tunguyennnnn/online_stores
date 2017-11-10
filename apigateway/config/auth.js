const jwt = require('jsonwebtoken')
const settings = require('./index')
const _ = require('lodash')
// const authCheck = jwt({
//   secret: settings.auth.superSecret,
//   getToken (req) {
//     console.log(req.headers)
//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//       return req.headers.authorization.split(' ')[1]
//     } else {
//       console.log('token:', req.query.token)
//       return req.query.token
//     }
//     return null
//   }
// })

const authCheck = function (req, res, next) {
  console.log(req.headers.authorization)
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(req.headers.authorization.split(' ')[1], settings.auth.superSecret, function (err, decoded) {
      if (!err) {
        res.decoded = decoded
        next()
      } else {
        console.log(err)
        res.status(404).send()
      }
    })
  } else {
    res.status(404).send()
  }
}

module.exports = authCheck
