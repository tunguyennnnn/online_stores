const Moment = require('moment')
const _ = require('lodash')

function isUpToDate (endDate) {
  return Moment(endDate) >= Moment()
}

function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

function createAd ({exec, userId, title, description, price, imageUrl, phone, category, subCategory, province, city, store, timeSlot, type, adType}) {
  return exec(['INSERT INTO ads(user_id, title, description, price, imageUrl, phone, category, subCategory, province, city, store, timeSlot, type, adType)',
    `VALUES(${userId}, '${title}', '${description}', '${price}', '${imageUrl}', '${phone}', '${category}', '${subCategory}', '${province}', '${city}', '${store}', '${timeSlot}', '${type}', '${adType}');`].join(' '))
          .then(() => getUserAds({exec, userId}))
}

//
// function getUserAds ({exec, userId, isAdmin}) {
//   if (!isAdmin) {
//     return exec(['SELECT a.user_id, a.id, a.title, a.price, a.description, a.imageUrl, a.type, a.phone, a.category, a.subCategory, p.startDate, p.endDate, a.deletedAt, a.province, a.city, a.adType, a.store, a.timeSlot',
//                  `FROM (SELECT * FROM ads WHERE ads.user_id = ${userId}) as a`,
//                  `LEFT OUTER JOIN promotions as p ON p.ad_id = a.id`].join(' '))
//           .then(ads => {
//             return ads.map(ad => {
//               const {startDate, endDate} = ad
//               const available = endDate ? isUpToDate(endDate) : false
//               return _.assign({}, ad, {available}, {promotion: {startDate, endDate}})
//             })
//           })
//   } else {
//     return exec('SELECT * FROM ads')
//   }
// }
async function getUserAds ({exec, userId, isAdmin}) {
  try {
    if (!isAdmin) {
      const ads = await exec(['SELECT a.user_id, a.id, a.title, a.price, a.description, a.imageUrl, a.type, a.phone, a.category, a.subCategory, p.startDate, p.endDate, a.deletedAt, a.province, a.city, a.adType, a.store, a.timeSlot',
        `FROM (SELECT * FROM ads WHERE ads.user_id = ${userId}) as a`,
        `LEFT OUTER JOIN promotions as p ON p.ad_id = a.id`].join(' '))
      return Promise.all(ads.map(ad => {
        const {startDate, endDate} = ad
        const available = endDate ? isUpToDate(endDate) : false
        return _.assign({}, ad, {available}, {promotion: {startDate, endDate}})
      }))
    } else {
      return exec('SELECT * FROM ads')
    }
  } catch (error) {
    console.log(error)
  }
}

function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin
              ? `JOIN users as u ON u.id = ${userId} LEFT JOIN rates as r  ON r.ad_id = a.id  GROUP BY a.id`
              : userId
              ? `LEFT JOIN users as u ON u.id = '${userId}' LEFT JOIN rates as r on r.ad_id = a.id where a.deletedAt is null GROUP BY a.id` : 'LEFT JOIN users as u ON a.user_id = u.id LEFT JOIN rates as r on r.ad_id = a.id where a.deletedAt is null GROUP BY a.id'
  return exec(`SELECT DISTINCT a.*, u.firstName, u.lastName, u.email, u.userType, ROUND(AVG(CASE WHEN r.score IS NULL THEN 0 ELSE r.score END)) as score FROM ads as a ${where}`)
}

function destroy ({exec, adId, userId, isAdmin}) {
  return exec(`UPDATE ads SET deletedAt = CURRENT_TIMESTAMP() WHERE id = ${adId}`)
}

function update ({exec, userId, id, title, description, price, imageUrl, phone, category, subCategory, province, city, store, timeSlot, type, adType}) {
  console.log(store, timeSlot)
  return exec(`UPDATE ads SET title = '${title}', description = '${description}', phone='${phone}', imageUrl='${imageUrl}', price=${price}, category='${category}', subCategory='${subCategory}', city='${city}', province='${province}', store='${store}', timeSlot='${timeSlot}' WHERE id=${id}`)
    .then(() => getUserAds({exec, userId}))
}

module.exports = {getAllAds, createAd, getAds, getUserAds, destroy, update}
