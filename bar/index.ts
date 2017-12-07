require('../lib/pre')
import { getJSON } from '../lib/fetcher'
class Bar {
  private static API = `https://min-api.cryptocompare.com/data`

  static getPrice = async (from: string, to: string) => {
    const method = 'price'

    // Upper case
    from = from.trim().toUpperCase()
    to = to.trim().toUpperCase()

    // TODO check exist for support symbols

    const json = await getJSON(`${Bar.API}/${method}`, {
      fsym: from,
      tsyms: to,
    }).catch(console.error)

    return json[to]
  }
}

export default Bar