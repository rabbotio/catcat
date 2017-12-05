// for webtask
const __localeList = { 'en-US': require('./i18n/en-US') }

class Foo {
  _responder: Responder = null
  _UserModel = null

  constructor(responder: Responder) {
    this._responder = responder
    this._UserModel = require('../model/user.model')
  }

  get responder() {
    return this._responder
  }

  storeCommand(user: User, command: Command): void {
    // Keep command for repeat later
    user.pushCommand(command)
  }

  async run(user: User, command: Command, locale: string = 'en-US') {
    const Bar = require('../bar')

    // No command
    const method = command ? command.method : { method: null }

    switch (method) {

      case 'getPrice':
        const from = command.params[0]
        const to = command.params[1] || 'THB'
        const price = await Bar.getPrice(from, to)

        const { getPrice } = __localeList[locale]({
          from, to, price, locale
        })

        this.storeCommand(user, command)

        return getPrice

      default:
        // Not a command 
        return 'Hmm?'
    }
  }

  route(userState: string, messageText: string): Command {
    // const { NEW_COMER, WATCH_PRICE } = require('../model/user.state')
    switch (userState) {
      // case NEW_COMER:
      //  return this._responder.sendTextMessage(senderID, 'Greeting!')
      default:
        const { toCommand } = require('./parser')

        return toCommand(messageText)
    }
  }

  async reply(senderID: string, messageText: string) {
    // Section by current senderID state
    const user = this._UserModel.find(senderID)
    let command = this.route(user.state, messageText)

    // Repeat?
    if (command.method === 'repeat') command = user.lastCommand

    // Run command 
    const answer = await this.run(user, command)

    // Reply
    console.log(`🤖 reply [${senderID}] : ${answer}`)
    return this._responder.sendTextMessage(senderID, answer)
  }
}

module.exports = Foo