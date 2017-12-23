// for webtask
const __localeList = { 'en-US': require('./i18n/en-US') }

class Foo {
  private _kvStorage: KVStorage = null
  private _responder: Responder = null
  private _userModel: UserModel = null

  constructor(kvStorage: IKVStorage, responder: Responder) {
    this._kvStorage = kvStorage
    this._responder = responder
    const UserModel = require('../model/user.model')
    this._userModel = new UserModel(kvStorage)
  }

  get storage() {
    return this._kvStorage
  }

  get userModel() {
    return this._userModel
  }

  get responder() {
    return this._responder
  }

  async run(user: User, command: Command, locale: string = 'en-US') {
    // No command
    const method = command ? command.method : { method: null }
    let errorMessageText

    switch (method) {
      case 'addPortfolio':
        const currency = (command.params[3] || 'THB').toUpperCase()
        const portfolioSummary: IPortfolioSummary = await this._userModel.addPortfolio(user.senderId, command.params[0], command.params[1], command.params[2], currency)
        const { symbolId, amount, invest, profit } = portfolioSummary

        const { getPortfolio } = __localeList[locale]({
          symbolId, amount, invest, profit, locale, currency
        })

        return getPortfolio

      case 'getPrice':
        const from = command.params[0]
        const to = command.params[1] || 'THB'
        const Bar = require('../bar')
        const price = await Bar.getPrice(from, to).catch(err => {
          console.error(err)
          errorMessageText = err.messageText
        })

        // Handle error
        if (!price) {
          return errorMessageText || `Sorry! Can't get ${from} price`
        }

        const { getPrice } = __localeList[locale]({
          from, to, price, locale
        })

        await this._userModel.addCommand(user.senderId, command)

        return getPrice

      default:
        // Not a command 
        return 'What?'
    }
  }

  route(userState: string, messageText: string): Command {
    // const { NEW_COMER, WATCH_PRICE } = require('../model/user.state')
    switch (userState) {
      // case NEW_COMER:
      //  return this._responder.sendTextMessage(senderId, 'Greeting!')
      default:
        const { toCommand } = require('./parser')
        return toCommand(messageText)
    }
  }

  async reply(senderId: string, messageText: string) {
    // Section by current senderId state
    const user = await this._userModel.find(senderId)
    let command = this.route(user.state, messageText)

    // Repeat?
    if (command.method === 'repeat') command = (user.commands && user.commands[0]) || command

    // Run command
    const answer = await this.run(user, command)

    // Reply
    console.log(`🤖 reply [${senderId}] : ${answer}`)
    return this._responder.sendTextMessage(senderId, answer)
  }
}

module.exports = Foo