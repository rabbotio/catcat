module.exports = (params) => ({
  getPrice: `1 ${params.from} = ${Number(params.price).toLocaleString(params.locale)} ${params.to}`,
  getPortfolio: `✨ You now have ${params.amount} ${params.symbolId} = ${params.profit} THB`
})