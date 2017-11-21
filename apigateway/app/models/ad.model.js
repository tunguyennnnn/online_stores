const Moment  = require('moment')
const _ = require('lodash')

function isUpToDate (endDate) {
  return Moment(endDate) >= Moment()
}

function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

function createAd ({exec, userId, title, description, price, imageUrl, address, phone, category, subCategory, type}) {
  return exec(['INSERT INTO ads(user_id, title, description, price, imageUrl, address, phone, type, category, subCategory)',
               `VALUES(${userId}, '${title}', '${description}', '${price}', '${imageUrl}', '${address}', '${phone}', '${type}', '${category}', '${subCategory}');`].join(' '))
          .then(() => getUserAds({exec, userId}))
}

function getAds ({exec, userId, isAdmin}) {
  console.log(userId, isAdmin)
  const where = isAdmin ? ' WHERE a.user_id = u.id' : userId ? ` WHERE a.user_id = ${userId} AND a.user_id = u.id` : ' WHERE a.user_id = u.id'
  return exec(`SELECT u.id as user_id, u.firstName, u.lastName, u.email, a.id, a.title, a.price, a.description, a.category, a.subCategory, a.type, a.phone, a.address FROM ads as a, users as u ${where}`)
}

function getUserAds ({exec, userId}) {
  return exec(['SELECT a.user_id, a.id, a.title, a.price, a.description, a.imageUrl, a.type, a.category, a.subCategory, p.startDate, p.endDate',
               `FROM (SELECT * FROM ads WHERE ads.user_id = ${userId}) as a`,
               `LEFT OUTER JOIN promotions as p ON p.ad_id = a.id`].join(' '))
        .then(ads => {
          return ads.map(ad => {
            const {startDate, endDate} = ad
            const available = endDate ? isUpToDate(endDate) : false
            return _.assign({}, ad, {available}, {promotion: {startDate, endDate}})
          })
        })
}
module.exports = {getAllAds, createAd, getAds, getUserAds}
