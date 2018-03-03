/* eslint-env jest */
const BaseResponder = require('../../providers/facebook/responder')

class MockResponder extends BaseResponder {
  sendTextMessage(recipientId, messageText, callback) {
    const data = {
      recipient: {
        id: recipientId
      },
      message: {
        text: messageText
      }
    }

    callback(null, data)
  }
}

module.exports = MockResponder