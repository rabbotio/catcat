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
    console.log('reply')
    // Section by current senderID state
    const { NEW_COMER } = require('../model/user.state')
    console.log(NEW_COMER)
    const user = this._UserModel.find(senderID)
    console.log(JSON.stringify(user))

    switch (user.state) {
      case NEW_COMER:
        console.log('Greeting')

        return this._responder.sendTextMessage(senderID, 'Greeting!')
      default:
        console.log('getPrice')

        const { getPrice } = require('../bar')
        const price = await getPrice('OMG', 'THB')
        return this._responder.sendTextMessage(senderID, price)
    }
  }
}

module.exports = Foo