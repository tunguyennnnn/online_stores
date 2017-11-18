function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

function createAd ({exec, title, description, price, postDate, completed, address, phoneNumber, adType, forSaleBy, category, subCategory}) {
  return exec(['INSERT INTO ads(title, description, price, postData, completed, address, phoneNumber, adType, forSaleBy, category, subCategory)',
    `VALUES('${title}', '${description}', '${price}', '${postDate}', '${completed}', '${address}', '${adType}', '${forSaleBy}', '${category}', '${subCategory}');`].join(' '))
}


function getAds ({exec, userId, isAdmin}) {
  const where = isAdmin ? '' : `WHERE user_id = '${userId}'`
  return exec(`SELECT * FROM ads ${where}`)
}
module.exports = {getAllAds, createAd, getAds}
