/* eslint-env jest */
describe('Bar', () => {
  it('can get price', async () => {
    const Bar = require('../')

    const from = 'OMG'
    const to = 'THB'

    const price = await Bar.getPrice(from, to)
    expect(price).toEqual(expect.any(Number))
  })
})
