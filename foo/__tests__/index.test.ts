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

  // seed
  foo.userModel.upsert(senderId)

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
    let price = { last: 999 }
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${price.last} USD` }
    })
  })

  it('can reply default locale price for `$ symbol`', async () => {
    // OMG -> Default
    let price = { last: 999 }
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$ OMG')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${price.last} USD` }
    })
  })

  it('can reply `$OMG JPY` as `1 OMG price in JPY`', async () => {
    // OMG -> JPY
    let price = { last: 999 }
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG JPY')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${price.last} JPY` }
    })
  })

  it('can reply `$OMG JPY` as `1 OMG price in JPY` with currency comma', async () => {
    // JPY with currency comma
    let price = { last: 999 }
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG JPY')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${Number(price.last).toLocaleString('JPY')} JPY` }
    })
  })

  it('can repeat last command', async () => {
    // JPY with currency comma
    let price = { last: 9999 }
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    let result = await foo.reply(senderId, '$OMG USD')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${Number(price.last).toLocaleString('USD')} USD` }
    })

    Bar.getPrice = jest.fn().mockImplementationOnce(async () => price)

    result = await foo.reply(senderId, '.')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `1 OMG = ${Number(price.last).toLocaleString('USD')} USD` }
    })
  })

  it('can add portfolio', async (done) => {
    // Mock current price
    let price = { last: 500 }
    Bar.getPrice = jest.fn()
      .mockImplementationOnce(async () => price)
      .mockImplementationOnce(async () => price)
      .mockImplementationOnce(async () => price)
      .mockImplementationOnce(async () => price)
      .mockImplementationOnce(async () => price)
      .mockImplementationOnce(async () => price)

    const locale = 'en-US'
    const symbolId = 'OMG'
    const { last } = price

    let amount = 0
    let profit = 0
    let invest = 0

    const mutatePortFolio = async (bidPrice, bidAmount, currency = 'USD') => new Promise(async (resolve, reject) => {
      const result = await foo.reply(senderId, `^+${bidAmount} ${symbolId} ${bidPrice} ${currency}`)
      amount += bidAmount
      profit += (last - bidPrice) * bidAmount
      invest += bidPrice * bidAmount

      const getPortfolio = __localeList[locale]({
        symbolId, amount, invest, profit, locale, currency
      }).getPortfolio

      expect(result).toMatchObject({
        recipient: { id: senderId },
        message: {
          text: getPortfolio
        }
      })

      return resolve(true)
    })

    // Try with 1 omg at 100 USD
    await mutatePortFolio(100, 1)

    // Add another 1 omg at 100 USD
    await mutatePortFolio(100, 1)

    // Add another 2 omg at 100 USD
    await mutatePortFolio(100, 2)

    // Add another 1 omg at lower 50% from current price
    await mutatePortFolio(last / 2, 1)

    // Add another 1 omg at current price
    await mutatePortFolio(last, 1)

    // Add another 1 omg at 2x higher from current price
    await mutatePortFolio(last * 2, 1)

    // dispose
    await foo.userModel.clearPortfolios(senderId)

    done()
  })

  it('can add portfolio and return as USD', async (done) => {
    // Mock current price
    let price = { last: 20 }
    Bar.getPrice = jest.fn()
      .mockImplementationOnce(async () => price)
      .mockImplementationOnce(async () => price)

    // Constance
    const locale = 'en-US'
    const symbolId = 'OMG'

    // All lower
    let result = await foo.reply(senderId, `^+1 omg 5 usd`)

    expect(result).toMatchObject({
      recipient: { id: senderId },
      message: {
        text: __localeList[locale]({
          symbolId, amount: 1, invest: 5, profit: 15, locale, currency: 'USD'
        }).getPortfolio
      }
    })

    // All cap
    result = await foo.reply(senderId, `^+1 OMG 5 USD`)

    expect(result).toMatchObject({
      recipient: { id: senderId },
      message: {
        text: __localeList[locale]({
          symbolId, amount: 2, invest: 10, profit: 30, locale, currency: 'USD'
        }).getPortfolio
      }
    })

    // dispose
    await foo.userModel.clearPortfolios(senderId)

    done()
  })

  it('can reply wallet create', async () => {
    let result = await foo.reply(senderId, '=+ETH')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: `0x...` }
    })
  })
})  
