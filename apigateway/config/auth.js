const jwt = require('express-jwt')
const settings = require('./index')

const authCheck = jwt({
  secret: settings.auth.superSecret,
  getToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else {
      console.log('token:', req.query.token)
      return req.query.tokenn
    }
    return null
  }
})

module.exports = authCheck
