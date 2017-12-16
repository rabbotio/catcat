class UserModel {
  private _kvStorage: KVStorage = null

  constructor(kvStorage) {
    this._kvStorage = kvStorage

    // seed
    this.upsert('2238896416126713')
  }

  async upsert(id) {
    const user = new User(id)
    await this._kvStorage.setItem(id, user)
  }

  async find(id) {
    return this._kvStorage.getItem(id)
  }

  async getCommands(id) {
    return this.find(id)['commands']
  }

  async pushCommand(commands: any[], command: Command) {
    console.log('pushCommand:', command)
    // Limit to last 3 commands
    if (commands.length >= 2) commands.unshift()
    return commands.push(command)
  }
}

module.exports = UserModel