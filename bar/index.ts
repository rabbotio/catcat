class Bar {
  private static API = `https://bx.in.th/api/`

  static getPrice = async (from: string, to: string) => {
    const method = 'price'

    // Upper case
    from = from.trim().toUpperCase()
    to = to.trim().toUpperCase()

    // TODO check exist for supported symbols
    const { getJSON } = require('../lib/fetcher')
    const { parseBX } = require('./markets/MarketAdapter')
    const json = await getJSON(`${Bar.API}`)
    const result = parseBX(json)
    return result[`${from}_${to}`].price
  }
}

module.exports = Bar