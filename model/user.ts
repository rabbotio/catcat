class User {
  _state = null
  get state(): string {
    return this._state
  }

  _locale = 'en-US'
  get locale(): string {
    return this._locale
  }

  _senderID = null
  get senderID(): string {
    return this._senderID
  }

  _commands = []
  get commands(): string[] {
    return this._commands
  }

  get lastCommand(): Command {
    if (this._commands.length <= 0) return null
    return this._commands[this._commands.length - 1]
  }

  pushCommand(command: Command) {
    // Limit to last 3 commands
    if (this._commands.length >= 2) this._commands.unshift()
    return this._commands.push(command)
  }

  constructor(senderID) {
    const { NEW_COMER } = require('./user.state')
    this._state = NEW_COMER
    this._senderID = senderID
  }
}

module.exports = User