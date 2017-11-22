function login ({exec, email, password}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}' AND u.password = '${password}';`)
}

function create ({exec, email, password, firstName, lastName, province, city, isAdmin = false}) {
  return exec(['INSERT INTO users(email, password, firstName, lastName, province, city, isAdmin)',
    `VALUES('${email}', '${password}', '${firstName}', '${lastName}', '${province}', '${city}', ${isAdmin ? 1 : 0});`].join(' '))
          .then(() => getUser({exec, email}))
          .then(users => users.first())
}

function getUser ({exec, email}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}'`)
}

module.exports = {login, create}
