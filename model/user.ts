class User {
  senderID: string
  commands: any[]
  state: string = null

  constructor(senderID: string) {
    this.senderID = senderID

    const { NEW_COMER } = require('./user.state')
    this.state = NEW_COMER
  }
}

module.exports = User