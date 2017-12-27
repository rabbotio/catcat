/* eslint-env jest */
describe('fetcher', () => {
  it('should able to get json', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://bx.in.th/api/`)

    expect(json[1]).toMatchObject({
      pairing_id: 1,
      primary_currency: expect.any(String),
      secondary_currency: expect.any(String),
      change: expect.any(Number),
      last_price: expect.any(Number),
      volume_24hours: expect.any(Number),
      orderbook:
        {
          bids: { total: expect.any(Number), volume: expect.any(Number), highbid: expect.any(Number) },
          asks: { total: expect.any(Number), volume: expect.any(Number), highbid: expect.any(Number) }
        }
    })

    done()
  })

  it('should able to get json with params', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://bx.in.th/api/tradehistory/`, {
      pairing: 1,
      date: '2017-12-12'
    })

    expect(json.data).toMatchObject(
      {
        avg: expect.any(String),
        high: expect.any(String),
        low: expect.any(String),
        volume: expect.any(String),
        open: expect.any(String),
        close: expect.any(String)
      }
    )
    done()
  })
})