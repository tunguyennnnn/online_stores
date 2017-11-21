const Moment  = require('moment')
const _ = require('lodash')

function isUpToDate (endDate) {
  return Moment(endDate) >= Moment()
}

function login ({exec, email, password}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}' AND u.password = '${password}';`)
}

function create ({exec, email, password, firstName, lastName, province, city, isAdmin = false}) {
  return exec(['INSERT INTO users(email, password, firstName, lastName, province, city, isAdmin)',
               `VALUES('${email}', '${password}', '${firstName}', '${lastName}', '${province}', '${city}', ${isAdmin ? 1 : 0});`].join(' '))
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

function getAllMyAds ({exec, userId}) {
  console.log(userId)
  return exec(`SELECT * FROM ads WHERE ads.user_id = ${userId};`)
}

function createAd ({exec, title, imageUrl, description, price, category}) {
  // we need title, description, price, postData, completed, address, phoneNumber, adType, forSaleBy, category, subCategory
  // we currently have  title, imageUrl, description, price, category
  return exec(['INSERT INTO ads( title, imageUrl, description, price, category)',
    `VALUES('${title}', '${imageUrl}', '${description}', '${price}', '${category}');`].join(' '))
}

module.exports = {login, create, getAllMyAds, createAd, getUser}
