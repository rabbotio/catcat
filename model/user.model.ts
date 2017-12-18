class UserModel {
  private _kvStorage: KVStorage = null

  constructor(kvStorage) {
    if (!kvStorage) throw new Error('Required kvStorage')
    this._kvStorage = kvStorage

    // seed
    this.upsert('2238896416126713')
  }

  async upsert(id) {
    const User = require('./user')
    const user = new User(id)

    await this._kvStorage.setItem(id, user)
  }

  async find(id) {
    return this._kvStorage.getItem(id)
  }

  async getCommands(id) {
    return this.find(id)['commands']
  }

  async addCommand(id: string, command: Command) {
    const user = await this.find(id)
    user.commands = user.commands || []

    // Limit to last 3 commands
    if (user.commands.length >= 2) user.commands.pop()
    user.commands.unshift(command)

    // Save
    return this._kvStorage.setItem(id, user)
  }
}

module.exports = UserModel