// For webtask bundle
require('./i18n/en-US')

class Foo {
  _responder: Responder = null
  _UserModel = null

  constructor(responder: Responder) {
    this._responder = responder
    this._UserModel = require('../model/user.model')

    // Rules

  }

  get responder() {
    return this._responder
  }

  async route(senderID: string, userState: string, messageText: string) {
    switch (userState) {
      // case NEW_COMER:
      //  return this._responder.sendTextMessage(senderID, 'Greeting!')
      default:
        // TODO : separated by command

        const Bar = require('../bar')
        const validSymbol = await Bar.validateSymbol(messageText)

        if (!validSymbol) return false

        const from = validSymbol
        const to = 'THB'

        const price = await Bar.getPrice(from, to)
        const { getPrice } = require(`./i18n/en-US`)({
          from, to, price
        })

        return this._responder.sendTextMessage(senderID, getPrice)
    }
  }

  async reply(senderID: string, messageText: string) {
    console.log(`🤖 reply [${senderID}] : ${messageText}`)

    // Section by current senderID state
    const { NEW_COMER, WATCH_PRICE } = require('../model/user.state')
    const user = this._UserModel.find(senderID)

    return this.route(senderID, user.state, messageText)
  }
}

module.exports = Foo