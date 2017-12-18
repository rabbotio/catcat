/* eslint-env jest */
const data = require('../__mocks__/bx.price.json')

describe('MarketAdapter', () => {
  it('can parser price from bx', async () => {
    const from = 'OMG'
    const to = 'THB'

    const { parseBX } = require('../MarketAdapter')
    const json = parseBX(data)
    expect(json[`${from}_${to}`]).toMatchObject({
      price: expect.any(Number),
      change: expect.any(Number),
      volume: expect.any(Number),
      bid_total: expect.any(Number),
      bid_volume: expect.any(Number),
      bid_highest: expect.any(Number),
      ask_total: expect.any(Number),
      ask_volume: expect.any(Number),
      ask_highest: expect.any(Number)
    })
  })
})
