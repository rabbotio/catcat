/* eslint-env jest */
const BaseResponder = require('../../providers/facebook/responder')

class MockResponder extends BaseResponder {
  async callSendAPI(accessToken, messageData) {
    return messageData
  }
}

module.exports = MockResponder