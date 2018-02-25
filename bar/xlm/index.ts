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

  linkWithFacebook = async (publicKey, fbmId) => {
    console.log('linkWithFacebook:', publicKey, fbmId)
    const fetcher = require('@rabbotio/fetcher')
    const result = fetcher.fetch(`${this.FIREBASE_URI}/link`, { provider: 'facebook', id: fbmId, publicKey })
    return
  }

  createAndLinkWithFacebook = async (fbmId) => {
    console.log('createAndLinkWithFacebook:', fbmId)
    const account = await this.createAccount()
    const linkedAccount = await this.linkWithFacebook(account.public, fbmId)
  }
}

module.exports = XLMService