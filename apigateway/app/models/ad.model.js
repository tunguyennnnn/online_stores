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


function getUserAds ({exec, userId, isAdmin}) {
  if (!isAdmin) {
    return exec(['SELECT a.user_id, a.id, a.title, a.price, a.description, a.imageUrl, a.type, a.category, a.subCategory, p.startDate, p.endDate',
                 `FROM (SELECT * FROM ads WHERE ads.user_id = ${userId} AND ads.deletedAt is NULL) as a`,
                 `LEFT OUTER JOIN promotions as p ON p.ad_id = a.id`].join(' '))
          .then(ads => {
            return ads.map(ad => {
              const {startDate, endDate} = ad
              const available = endDate ? isUpToDate(endDate) : false
              return _.assign({}, ad, {available}, {promotion: {startDate, endDate}})
            })
          })
  } else {
    return exec('SELECT * FROM ads where ads.deletedAt is NULL')
  }
}

function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin
              ? `JOIN users as u ON u.id = ${userId} LEFT JOIN rates as r  ON r.ad_id = a.id  GROUP BY a.id`
              : userId
              ? `LEFT JOIN users as u ON u.id = '${userId}' LEFT JOIN rates as r on r.ad_id = a.id where a.deletedAt is null GROUP BY a.id` : 'LEFT JOIN users as u ON a.user_id = u.id LEFT JOIN rates as r on r.ad_id = a.id where a.deletedAt is null GROUP BY a.id'
  return exec(`SELECT DISTINCT a.*, u.firstName, u.lastName, u.email, ROUND(AVG(CASE WHEN r.score IS NULL THEN 0 ELSE r.score END)) as score FROM ads as a ${where}`)
}

function destroy ({exec, adId, userId, isAdmin}) {
  return exec(`UPDATE ads SET deletedAt = CURRENT_TIMESTAMP() WHERE id = ${adId} AND user_id = ${userId}`)
}

module.exports = {getAllAds, createAd, getAds, getUserAds, destroy}
