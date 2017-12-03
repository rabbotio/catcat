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

  async reply(senderID: string, messageText: string) {
    console.log(`reply [${senderID}] : ${messageText}`)

    // Section by current senderID state
    const { NEW_COMER, WATCH_PRICE } = require('../model/user.state')
    const user = this._UserModel.find(senderID)

    switch (user.state) {
      // case NEW_COMER:
      //  return this._responder.sendTextMessage(senderID, 'Greeting!')
      default:
        console.log(user.state)
        const from = 'OMG'
        const to = 'THB'
        const Bar = require('../bar')
        const price = await Bar.getPrice(from, to)
        const { getPrice } = require(`./i18n/en-US`)({
          from, to, price
        })

        console.log(3)
        console.log(getPrice)

        return this._responder.sendTextMessage(senderID, getPrice)
    }
  }
}

module.exports = Foo