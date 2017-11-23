const Moment = require('moment')
const _ = require('lodash')

function isUpToDate (endDate) {
  return Moment(endDate) >= Moment()
}

function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

function createAd ({exec, userId, title, description, price, imageUrl, phone, category, subCategory, province, city}) {
  return exec(['INSERT INTO ads(user_id, title, description, price, imageUrl, phone, category, subCategory, province, city)',
    `VALUES(${userId}, '${title}', '${description}', '${price}', '${imageUrl}', '${phone}', '${category}', '${subCategory}', '${province}', '${city}');`].join(' '))
          .then(() => getUserAds({exec, userId}))
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

function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin
              ? `JOIN users as u ON u.id = ${userId}`
              : userId
              ? `JOIN users as u ON u.id = '${userId}'` : 'JOIN users as u on u.id = a.user_id'

  return exec(`SELECT a.*, u.firstName, u.lastName, u.email FROM ads as a ${where}`)
}

module.exports = {getAllAds, createAd, getAds, getUserAds}
