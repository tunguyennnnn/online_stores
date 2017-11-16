const uuid = require('uuid/v1')

function login ({exec, email, password}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}' AND u.password = '${password}';`)
}

function create ({exec, id, email, password, firstName, lastName, province, city, isAdmin = false}) {
  return exec(['INSERT INTO users(id, email, password, firstName, lastName, province, city, isAdmin)',
               `VALUES('${uuid()}', '${email}', '${password}', '${firstName}', '${lastName}', '${province}', '${city}', ${isAdmin ? 1 : 0});`].join(' '))
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

module.exports = {login, create, getAllMyAds, createAd}
