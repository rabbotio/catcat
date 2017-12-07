/* eslint-env jest */
import BaseResponder from '../../facebook/responder'

class MockResponder extends BaseResponder {
  async callSendAPI(accessToken, messageData) {
    return messageData
  }
}

export default MockResponder