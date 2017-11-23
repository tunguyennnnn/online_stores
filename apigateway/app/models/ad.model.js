function createAd ({exec, userId, title, description, price, imageUrl, phone, category, subCategory, province, city}) {
  return exec(['INSERT INTO ads(user_id, title, description, price, imageUrl, phone, category, subCategory, province, city)',
    `VALUES(${userId}, '${title}', '${description}', '${price}', '${imageUrl}', '${phone}', '${category}', '${subCategory}', '${province}', '${city}');`].join(' '))
          .then(() => getUserAds({exec, userId}))
}

function getUserAds ({exec, userId}) {
  return exec(`SELECT * FROM ads as a WHERE a.user_id = ${userId}`)
}

function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin ?
                `JOIN users as u ON u.id = ${userId}` : userId ?
                `JOIN users as u ON u.id = '${userId}'` : 'JOIN users as u on u.id = a.user_id'

  return exec(`SELECT a.*, u.firstName, u.lastName, u.email FROM ads as a ${where}`)
}

module.exports = {createAd, getAds}
