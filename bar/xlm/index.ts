class XLMService {

  FIREBASE_URI = null

  constructor({ FIREBASE_URI }) {
    this.FIREBASE_URI = FIREBASE_URI
  }

  createAccount = async () => {
    console.log('createAccount')

    const Keypair = require("stellar-base").Keypair;
    const newAccount = Keypair.random();

    return {
      public: newAccount.publicKey(),
      private: newAccount.secret()
    }
  }

  linkWithFacebookMessenger = async (publicKey, fbmId) => {
    console.log('linkWithFacebookMessenger:', publicKey, fbmId)
    const fetcher = require('@rabbotio/fetcher')
    const result = await fetcher.postJSON(`${this.FIREBASE_URI}/link`, { provider: 'fbm', id: fbmId, publicKey })
    return {
      publicKey,
      fbmId,
    }
  }

  createAndLinkWithFacebookMessenger = async (fbmId) => {
    console.log('createAndLinkWithFacebookMessenger:', fbmId)
    const account = await this.createAccount()
    const linkedAccount = await this.linkWithFacebookMessenger(account.public, fbmId)
    return linkedAccount
  }
}

module.exports = XLMService