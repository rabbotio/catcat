class User {
  _state = null
  get state() {
    return this._state
  }

  _locale = 'en-US'
  get locale() {
    return this._locale
  }

  constructor() {
    const { NEW_COMER } = require('./user.state')
    this._state = NEW_COMER
  }
}

module.exports = User