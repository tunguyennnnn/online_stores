function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

function createAd ({exec, userId, title, description, price, imageUrl, address, phone, category, subCategory, type}) {
  return exec(['INSERT INTO ads(user_id, title, description, price, imageUrl, address, phone, type, category, subCategory)',
               `VALUES(${userId}, '${title}', '${description}', '${price}', '${imageUrl}', '${address}', '${phone}', '${type}', '${category}', '${subCategory}');`].join(' '))
          .then(() => getUserAds({exec, userId}))
}

function getUserAds ({exec, userId}) {
  return exec(`SELECT * FROM ads as a WHERE a.user_id = ${userId}`)
}


function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin ? ' WHERE a.user_id = u.id' : userId ? ` WHERE user_id = '${userId}'` : ' WHERE a.user_id = u.id'
  return exec(`SELECT * FROM ads as a, users as u ${where}`)
}
module.exports = {getAllAds, createAd, getAds}
