class UserModel {
  private _kvStorage: KVStorage = null

  constructor(kvStorage) {
    if (!kvStorage) throw new Error('Required kvStorage')
    this._kvStorage = kvStorage
  }

  async upsert(id, data?) {
    const User = require('./user')
    const user = new User(id)

    // Allow only some props to upsert
    if (data) {
      data.repliedAt && (user.repliedAt = data.repliedAt)
    }

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
  async addPortfolio(id: string, amount: number, symbolId: string, price: number, currency: string = 'THB') {

    const user = await this.find(id)
    user.portfolios = user.portfolios || []
    user.portfolios.push({
      symbolId,
      amount: Number(amount),
      price: Number(price),
    })

    // Save
    await this._kvStorage.setItem(id, user)

    return this.getPortfolio(id, symbolId, currency)
  }

  // Should get symbol, amount, price, last, profit
  async getPortfolio(id: string, symbolId: string, currency: string = 'THB', exchange = 'bx') {
    // get price
    const Bar = require('../bar')
    const { last } = await Bar.getPrice(exchange, symbolId, currency)

    // get portfolio
    const user = await this.find(id)
    const portSymbols = user.portfolios.filter(portfolio => portfolio.symbolId === symbolId) || []

    const summary: IPortfolioSummary = {
      symbolId,
      amount: 0,
      price: 0,
      last,
      invest: 0,
      profit: 0
    }

    portSymbols.forEach((portSymbol: Portfolio) => {
      summary.amount += portSymbol.amount

      const invest = portSymbol.price * portSymbol.amount
      summary.profit += (last * portSymbol.amount) - invest
      summary.invest += invest
    })

    // average
    summary.price = summary.invest / portSymbols.length

    return summary
  }

  async clearPortfolios(id: string) {
    const user = await this.find(id)
    user.portfolios = []

    // Save
    await this._kvStorage.setItem(id, user)
  }
}

module.exports = UserModel