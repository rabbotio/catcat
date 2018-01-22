const _localNum = (value, locale) => Number(value).toLocaleString(locale)

module.exports = (params) => ({
  getPrice: `1 ${params.from} = ${_localNum(params.price, params.locale)} ${params.to}`,
  getPortfolio: `✨ You've ${params.amount} ${params.symbolId} by ${_localNum(params.invest, params.locale)} ${params.currency} (profit ${_localNum(params.profit, params.locale)} ${params.currency})`,
  // TODO : 
  getPortfolios: `💵 PORTFOLIO - ${new Date().toDateString()}\n
\n
${params.portfolios && params.portfolios.map(port => `${port.symbolId} ${port.price}/${port.last} = ${port.profit} (profit ${_localNum(port.profit, params.locale)} ${params.currency})`).join('\n')}
\n
Profit ${params.totalProfitPercent}% (profit ${_localNum(params.totalProfit, params.locale)} ${params.currency})`
})