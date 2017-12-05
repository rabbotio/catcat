class UserModel {
  // TODO : read from storage
  private static senderId = '2238896416126713'
  private static _users = { [UserModel.senderId]: new (require('./user'))(UserModel.senderId) }

  static upsert(id) {
    const User = require('./user')
    this._users[id] = new User(id)
  }

  static find(id) {
    return this._users[id]
  }
}

module.exports = UserModel