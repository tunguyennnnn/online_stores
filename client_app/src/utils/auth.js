const axios = require('axios')
class Auth {
  constructor () {
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }



  setSession (authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('apiToken', authResult.apiToken)
    localStorage.setItem('expiresAt', expiresAt)
  }

  isAuthenticated () {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

}

const auth = new Auth()
export default auth
