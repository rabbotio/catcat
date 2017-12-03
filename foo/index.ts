// For webtask bundle
require('./i18n/en-US')

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

  toCommand(messageText: string) {
    messageText = messageText.trim()

    // PRICE
    if (messageText.includes('$', 0)) {
      return {
        method: 'getPrice',
        params: messageText.substring(1, messageText.length).trim().toUpperCase().split(' ')
      }
    }

    return null
  }

  async run(senderID: string, command) {

    const Bar = require('../bar')

    switch (command.method) {
      case 'getPrice':
        const from = command.params[0]
        const to = command.params[1] || 'THB'
        const price = await Bar.getPrice(from, to)

        const { getPrice } = require(`./i18n/en-US`)({
          from, to, price
        })

        return this._responder.sendTextMessage(senderID, getPrice)
    }
  }

  route(userState: string, messageText: string) {
    // const { NEW_COMER, WATCH_PRICE } = require('../model/user.state')
    switch (userState) {
      // case NEW_COMER:
      //  return this._responder.sendTextMessage(senderID, 'Greeting!')
      default:
        return this.toCommand(messageText)
    }
  }

  async reply(senderID: string, messageText: string) {
    console.log(`🤖 reply [${senderID}] : ${messageText}`)

    // Section by current senderID state
    const user = this._UserModel.find(senderID)
    const command = this.route(user.state, messageText)

    return this.run(senderID, command)
  }
}

module.exports = Foo