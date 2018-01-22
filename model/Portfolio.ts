interface IPortfolio {
  symbolId: string,
  amount: number,
  price: number
}

interface IPortfolioSummary {
  symbolId: string,
  amount: number,
  invest: number,
  price: number,
  last: number,
  profit: number
}

class Portfolio {
  symbolId: string
  amount: number
  price: number

  constructor(symbolId: string,
    amount: number,
    price: number) {
    this.symbolId = symbolId
    this.amount = amount
    this.price = price
  }
}