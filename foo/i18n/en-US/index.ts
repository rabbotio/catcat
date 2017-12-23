const _localNum = (price, locale) => Number(price).toLocaleString(locale)

module.exports = (params) => ({
  getPrice: `1 ${params.from} = ${_localNum(params.price, params.locale)} ${params.to}`,
  getPortfolio: `✨ You've ${params.amount} ${params.symbolId} by ${_localNum(params.invest, params.locale)} THB (profit ${_localNum(params.profit, params.locale)} THB)`
})