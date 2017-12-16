class User {
  senderID: string
  private _commands: any[]
  private _state: string = null

  get state(): string {
    return this._state
  }

  get commands(): any[] {
    return this._commands
  }

  get lastCommand() {
    if (!this._commands) return null
    if (this._commands.length <= 0) return null
    return this._commands[this._commands.length - 1]
  }

  constructor(senderID: string) {
    this.senderID = senderID

    const { NEW_COMER } = require('./user.state')
    this._state = NEW_COMER
    this._commands = []
  }
}

module.exports = User