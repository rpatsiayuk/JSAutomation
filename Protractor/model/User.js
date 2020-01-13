const _ = require('lodash');

class User {
  constructor (data) {
    _.assign(this, _.pick(data, ['email', 'domain', 'password']));
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
