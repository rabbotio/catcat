/* eslint-env jest */
describe('Bar', () => {
  it('can get last price', async () => {
    const Bar = require('../')

    const exchange = 'bx'
    const from = 'OMG'
    const to = 'THB'

    const price = await Bar.getPrice(exchange, from, to)
    expect(price.last).toEqual(expect.any(Number))
  })
})
