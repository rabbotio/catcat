class UserModel {
  private _kvStorage: KVStorage = null

  constructor(kvStorage) {
    if (!kvStorage) throw new Error('Required kvStorage')
    this._kvStorage = kvStorage

    // seed
    this.upsert('2238896416126713')
  }

  async upsert(id) {
    const User = require('./user')
    const user = new User(id)

    await this._kvStorage.setItem(id, user)
  }

  async find(id) {
    return this._kvStorage.getItem(id)
  }

  async getCommands(id) {
    return this.find(id)['commands']
  }

  async addCommand(id: string, command: Command) {
    const user = await this.find(id)
    user.commands = user.commands || []

    // Limit to last 3 commands
    if (user.commands.length >= 2) user.commands.pop()
    user.commands.unshift(command)

    // Save
    return this._kvStorage.setItem(id, user)
  }

  // `^+100 omg 123 thb`   // To `100 OMG`at `123 THB` to port and show summary.
  async addPortfolio(id: string, amount: number, symbolId: string, price: number, baseSymbolId: string = 'thb') {
    const user = await this.find(id)
    user.portfolios = user.portfolios || []
    user.portfolios.push({
      symbolId,
      amount: Number(amount),
      price: Number(price),
    })

    return this.getPortfolio(id, symbolId, baseSymbolId)
  }

  // Should get symbol, amount, price, currentPrice, profit
  async getPortfolio(id: string, symbolId: string, baseSymbolId: string) {
    // get price
    const Bar = require('../bar')
    const currentPrice = await Bar.getPrice(symbolId, baseSymbolId)

    // get portfolio
    const user = await this.find(id)
    const portSymbols = user.portfolios.filter(portfolio => portfolio.symbolId === symbolId) || []

    const summary: IPortfolioSummary = {
      symbolId,
      amount: 0,
      price: 0,
      currentPrice,
      invest: 0,
      profit: 0
    }

    portSymbols.forEach((portSymbol: Portfolio) => {
      summary.amount += portSymbol.amount

      const invest = portSymbol.price * portSymbol.amount
      summary.profit += (currentPrice * portSymbol.amount) - invest
      summary.invest += invest
    })

    // average
    summary.price = summary.invest / portSymbols.length

    return summary
  }
}

module.exports = UserModel