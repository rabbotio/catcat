class User {
  fbmId: string
  commands: any[]
  symbols: IPortfolio[]
  state: string = null
  repliedAt: string // Date
  locale: string = 'en-US'

  constructor(fbmId: string) {
    this.fbmId = fbmId

    const { NEW_COMER } = require('./user.state')
    this.state = NEW_COMER
  }
}

module.exports = User