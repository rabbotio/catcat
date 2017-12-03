/* eslint-env jest */
describe('Foo', () => {
  // TODO : mock user locale
  it('can reply price with i18n', async () => {
    const Bar = require('../../bar')
    Bar.getPrice = jest.fn().mockImplementationOnce(async () => 999)

    const Foo = require('../index')
    const Responder = require('../__mocks__/responder')
    const responder = new Responder()
    const foo = new Foo(responder)

    const result = await foo.reply('2238896416126713', 'OMG')

    expect(result).toMatchObject({
      recipient: { id: expect.any(String) },
      message: { text: '1 OMG = 999 THB' }
    })
  })
})
