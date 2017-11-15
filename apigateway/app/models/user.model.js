const uuid = require('uuid/v1')

function login ({exec, email, password}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}' AND u.password = '${password}'`)
}

function create ({exec, id, email, password, firstName, lastName, province, city, isAdmin = false}) {
  return exec(['INSERT INTO users(id, email, password, firstName, lastName, province, city, isAdmin)',
               `VALUES('${uuid()}', '${email}', '${password}', '${firstName}', '${lastName}', '${province}', '${city}', ${isAdmin ? 1 : 0});`].join(' '))
}

module.exports = {login, create}
