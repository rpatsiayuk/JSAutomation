class User {
  constructor (email, domain, password) {
    this.email = email
    this.domain = domain
    this.password = password
  }

  get email () {
    return this.email
  }

  get domain () {
    return this.domain
  }

  get password () {
    return this.password
  }
}

module.exports = User
