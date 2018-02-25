/* eslint-env jest */

const DEV_FIREBASE_URI = 'http://localhost:5000/catcatchatbot/us-central1'
const PROD_FIREBASE_URI = 'https://us-central1-catcatchatbot.cloudfunctions.net'
const FIREBASE_URI = process.env.NODE_ENV === 'development' ? DEV_FIREBASE_URI : PROD_FIREBASE_URI

describe('XLMService', () => {
  it('can link publicKey with Facebook Messenger Id', async () => {
    const XLMService = require('../')
    const _XLKService = new XLMService({ FIREBASE_URI })

    const fbmId = 123456

    const result = await _XLKService.createAndLinkWithFacebook(fbmId)
    expect(result).toMatchSnapshot()
  })
})
