class Wallet {
  userId: string
  symbolId: string
  publicKey: string

  static async add(fbmId: string, symbolId: string) {
    symbolId = symbolId.toUpperCase()

    const { createAccountAndWallet } = require('../../bar/eth')
    switch (symbolId) {
      case 'ETH': return createAccountAndWallet(fbmId)
    }
  }
}

module.exports = Wallet