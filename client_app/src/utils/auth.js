class Auth {
  constructor () {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  handleAuthentication () {
    authentication.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        history.replace('/home')
      } else if (err) {
        history.replace('/')
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    console.log(authResult)
    let expiresAt = JSON.stringify((authResult.expiresAt * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('expires_at', expiresAt)
  }

  logout () {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    history.replace('/')
  }

  isAuthenticated () {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  login ({email, password}, callback) {
    if (this.isAuthenticated()) {
      callback(true)
      return
    } else {
      axios({
        method: 'post',
        url: 'http://localhost:4000/api/auth',
        data: {email, password}
      })
      .then((res) => {
        console.log(res)
        this.setSession(res.data)
        callback(true, res.data)
      })
      .catch((err) => {
        console.log(err)
        callback(false, err)
      })
    }
  }

  logout ({email}, callback) {
    axios({
      method: 'post',
      url: 'localhost:4000/api/logout',
      data: {email}
    })
    .then(() => {
      callback(true)
    })
  }

  register ({firstName, lastName, email, password}, callback) {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/users',
      data: {firstName, lastName, email, password}
    })
    .then((res) => {
      this.setSession(res.data)
      callback(true, res.data)
    })
    .catch((err) => {
      callback(false, err)
    })
  }
}

const auth = new Auth()
export default auth
