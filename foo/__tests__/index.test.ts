/* eslint-env jest */
describe('Foo', () => {
  const __localeList = { 'en-US': require('../i18n/en-US') }

  // Bar
  const Bar = require('../../bar')

  // Foo
  const Foo = require('../index')
  const Responder = require('../__mocks__/responder')
  const responder = new Responder()
  const KVStorage = require('../../model/KVStorage')
  const foo = new Foo(new KVStorage(), responder)

  // Sender
  const senderId = '2238896416126713'

  it('not repeat last command if n/a', async () => {
    let result = await foo.reply(senderId, '.')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: {
        text: `What?`
      }
    })
  })

  // TODO : mock user locale
  it('can reply default locale price for `$symbol`', async () => {
    // OMG -> Default
    let price = 999
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${price} THB` }
    })
  })

  it('can reply default locale price for `$ symbol`', async () => {
    // OMG -> Default
    let price = 999
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$ OMG')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${price} THB` }
    })
  })

  it('can reply `$OMG JPY` as `1 OMG price in JPY`', async () => {
    // OMG -> JPY
    let price = 999
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG JPY')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${price} JPY` }
    })
  })

  it('can reply `$OMG JPY` as `1 OMG price in JPY` with currency comma', async () => {
    // JPY with currency comma
    let price = 9999
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG JPY')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${Number(price).toLocaleString('JPY')} JPY` }
    })
  })

  it('can repeat last command', async () => {
    // JPY with currency comma
    let price = 9999
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG USD')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${Number(price).toLocaleString('USD')} USD` }
    })

    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    result = await foo.reply(senderId, '.')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${Number(price).toLocaleString('USD')} USD` }
    })
  })

  it('can add portfolio', async () => {
    // Mock current price
    let currentPrice = 500
    Bar.getPrice = jest.fn()
      .mockImplementationOnce(async () => currentPrice)
      .mockImplementationOnce(async () => currentPrice)

    const invest = 100 * 1
    const price = invest / 1
    const profit = currentPrice - price
    const amount = 1
    const symbolId = 'OMG'

    // Try with 1 omg at 100 thb
    let result = await foo.reply(senderId, `^+1 ${symbolId} 100 thb`)

    const locale = 'en-US'
    const { getPortfolio } = __localeList[locale]({
      symbolId, amount, profit, locale
    })

    expect(result).toMatchObject({
      recipient: { id: senderId },
      message: {
        text: getPortfolio
      }
    })
  })
})  
