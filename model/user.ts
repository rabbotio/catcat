class User {
  senderId: string
  commands: any[]
  symbols: IPortfolio[]
  state: string = null
  repliedAt: string // Date

  constructor(senderId: string) {
    this.senderId = senderId

    const { NEW_COMER } = require('./user.state')
    this.state = NEW_COMER
  }
}

module.exports = User