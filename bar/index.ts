require('../lib/pre')
import { getJSON } from '../lib/fetcher'
import Parser from './markets/parser'

class Bar {
  private static API = `https://bx.in.th/api/`

  static getPrice = async (from: string, to: string) => {
    const method = 'price'

    // Upper case
    from = from.trim().toUpperCase()
    to = to.trim().toUpperCase()

    // TODO check exist for supported symbols

    const json = await getJSON(`${Bar.API}`)
    const result = Parser.parseBX(json)
    console.log('🤖 : ', result)

    return result.price
  }
}

export default Bar