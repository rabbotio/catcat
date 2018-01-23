const createAccount = async (fbmId) => {
  // TODO : create account via infura
  // web3.eth.accounts.create()
  // TODO : save to graphcool

  console.log('createAccount:', fbmId)

  return {
    address: '0x...',
    privateKey: '0x...'
  }
}

const createWallet = async (fbmId, address, privateKey) => {
  // TODO : create wallet via infura
  // web3.eth.accounts.wallet.create()
  // TODO : save to graphcool

  console.log('createWallet:', fbmId, address, privateKey)

  return ['0x...'][0]
}

const addWallet = async (address) => {
  // TODO : create wallet via infura
  // web3.eth.accounts.wallet.add('0x...')
  // TODO : save to graphcool

  console.log('addWallet:', address)

  return {
    index: 0,
    address: '0x...',
    privateKey: '0x...'
  }
}

const createAccountAndWallet = async fbmId => {
  const account = await createAccount(fbmId)
  const wallet = await createWallet(fbmId, account.address, account.privateKey)
  const accountWithWallet = await addWallet(wallet)

  return accountWithWallet
}

module.exports = { createAccountAndWallet }