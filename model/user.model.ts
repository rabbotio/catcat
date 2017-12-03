class UserModel {
  // TODO : read from storage
  private static _users = { '2238896416126713': new (require('./user'))() }

  static upsert(id) {
    const User = require('./user')
    this._users[id] = new User()
  }

  static find(id) {
    return this._users[id]
  }
}

module.exports = UserModel