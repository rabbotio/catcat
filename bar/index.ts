class Bar {
  private static API = `https://min-api.cryptocompare.com/data`
  private static coins = []

  static getPrice = async (from: string, to: string) => {
    const method = 'price'

    // Upper case
    from = from.trim().toUpperCase()
    to = to.trim().toUpperCase()

    // TODO check exist for support symbols

    const { getJSON } = require('../lib/fetcher')
    const json = await getJSON(`${Bar.API}/${method}`, {
      fsym: from,
      tsyms: to,
    }).catch(console.error)

    return json[to]
  }

  static validateSymbol = async (symbol: string) => {
    const { getJSON } = require('../lib/fetcher')
    const json = await getJSON(`${Bar.API}/all/coinlist`)
    Bar.coins = Object.keys(json.Data)

    symbol = symbol.toUpperCase().trim()

    return Bar.coins.includes(symbol) ? symbol : null
  }
}

module.exports = Bar