/* eslint-env jest */
describe('Bar', () => {
  it('can get price', async () => {
    const Bar = require('../')

    const from = 'OMG'
    const to = 'THB'

    const result = await Bar.getPrice(from, to)
    expect(result).toEqual(expect.any(Number))
  })

  it('can get coin list', async () => {
    const Bar = require('../')
    const result = await Bar.validateSymbol('omg')
    console.log(result)
    expect(result).toBe('OMG')
  })
})
