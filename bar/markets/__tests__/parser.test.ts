/* eslint-env jest */
describe('Parser', () => {
  it('can parser price from bx', async () => {
    const from = 'OMG'
    const to = 'THB'

    const MarketAdapter = require('../MarketAdapter')
    const data = require('../__mocks__/bx.price.json')
    const json = MarketAdapter.parseBX(data)
    expect(json[`${from}_${to}`]).toMatchObject({
      price: expect.any(Number),
      change: expect.any(Number),
      volume: expect.any(Number),
      bids: {
        total: expect.any(Number),
        volume: expect.any(Number),
        highbid: expect.any(Number)
      },
      asks: {
        total: expect.any(Number),
        volume: expect.any(Number),
        highbid: expect.any(Number)
      }
    })
  })
})
