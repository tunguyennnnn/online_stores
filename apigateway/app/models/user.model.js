function login ({exec, email, password}) {
  return exec(`SELECT * FROM users AS u WHERE u.email = '${email}' AND u.password = '${password}'`,
    (err, result) => {
    console.log(result)
  })
}


module.exports = {login}
