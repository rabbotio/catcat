const API = `https://min-api.cryptocompare.com/data`

const getPrice = async (from: string, to: string) => {
  const method = 'price'

  // Upper case
  from = from.trim().toUpperCase()
  to = to.trim().toUpperCase()

  // TODO check exist for support symbols

  const { getJSON } = require('../lib/fetcher')
  const json = await getJSON(`${API}/${method}`).catch(console.error)
  return `1 ${from} = ${json[to]} ${to}`
}


module.exports = { getPrice }