class User {
  _state = null
  constructor() {
    const { NEW_COMER } = require('./user.state')
    this._state = NEW_COMER
  }

  get state() {
    return this._state
  }
}

module.exports = User