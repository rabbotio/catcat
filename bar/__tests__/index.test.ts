/* eslint-env jest */
import Bar from '../'

describe('Bar', () => {
  it('can get price', async () => {
    const from = 'OMG'
    const to = 'THB'

    const json = await Bar.getPrice(from, to)
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
