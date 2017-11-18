function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

function createAd ({exec, userId, title, description, price, postDate, completed, address, phone, adType, forSaleBy, category, subCategory}) {
  return exec(['INSERT INTO ads(user_id, title, description, price, postData, completed, address, phoneNumber, adType, forSaleBy, category, subCategory)',
               `VALUES(${userId}, '${title}', '${description}', '${price}', '${postDate}', '${completed}', '${address}', '${phone}', '${adType}', '${forSaleBy}', '${category}', '${subCategory}');`].join(' '))
          .then(() => getUserAds({exec, userId}))
}

function getUserAds ({exec, userId}) {
  return exec(`SELECT * FROM ads as a WHERE a.user_id = ${userId}`)
}


function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin ? '' : `WHERE user_id = '${userId}'`
  return exec(`SELECT * FROM ads ${where}`)
}
module.exports = {getAllAds, createAd, getAds}
