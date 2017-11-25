const Moment = require('moment')
const _ = require('lodash')

function isUpToDate (endDate) {
  return Moment(endDate) >= Moment()
}

function login ({exec, email, password}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}' AND u.password = '${password}';`)
}

function create ({exec, email, password, firstName, lastName, province, city, isAdmin = false, userType}) {
  return exec(['INSERT INTO users(email, password, firstName, lastName, province, city, isAdmin, userType)',
    `VALUES('${email}', '${password}', '${firstName}', '${lastName}', '${province}', '${city}', ${isAdmin ? 1 : 0}, '${userType}');`].join(' '))
          .then(() => getUser({exec, email}))
          .then(users => users.first())
}

function getUser ({exec, email}) {
  return exec(`SELECT * FROM (SELECT * FROM users where users.email = '${email}') AS u LEFT OUTER JOIN plans as p ON u.id = p.user_id`)
    .then(users => {
      const user = users.first()
      const {startDate, lastDate} = user
      const available = lastDate ? isUpToDate(lastDate) : false
      return _.assign({}, user, {available, plan: {startDate, lastDate}})
    })
}

module.exports = {login, create, getUser}
