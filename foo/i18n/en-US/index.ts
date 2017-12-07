export default (params) => ({
  getPrice: `1 ${params.from} = ${Number(params.price).toLocaleString(params.locale)} ${params.to}`
})