/* eslint-env jest */
const BaseResponder = require('../../facebook/responder')

class MockResponder extends BaseResponder {
  async callSendAPI(accessToken, messageData) {
    return messageData
  }
}

module.exports = MockResponder