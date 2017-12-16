// for webtask
const __localeList = { 'en-US': require('./i18n/en-US').default }

// Pre
require('../lib/pre')

import KVStorage from '../model/KVStorage'
import UserModel from '../model/user.model'
import User from '../model/user'
import Responder from '../facebook/responder'
import Bar from '../bar'

import { toCommand } from './parser'

class Foo {
  private _kvStorage: KVStorage = null
  private _responder: Responder = null
  private _userModel: UserModel = null

  constructor(kvStorage: KVStorage, responder: Responder) {
    this._kvStorage = kvStorage
    this._responder = responder
    this._userModel = new UserModel(kvStorage)
  }

  get storage() {
    return this._kvStorage
  }

  get responder() {
    return this._responder
  }

  async run(user: User, command: Command, locale: string = 'en-US') {
    // No command
    const method = command ? command.method : { method: null }
    let errorMessageText

    switch (method) {
      case 'getPrice':
        const from = command.params[0]
        const to = command.params[1] || 'THB'
        const price = await Bar.getPrice(from, to).catch(err => errorMessageText = err.messageText)

        // Handle error
        if (!price) {
          return errorMessageText || `Sorry! Can't get ${from} price`
        }

        const { getPrice } = __localeList[locale]({
          from, to, price, locale
        })

        this._userModel.pushCommand(user.commands, command)

        return getPrice

      default:
        // Not a command 
        return 'Hmm?'
    }
  }

  route(userState: string, messageText: string): Command {
    // const { NEW_COMER, WATCH_PRICE } = require('../model/user.state')
    switch (userState) {
      // case NEW_COMER:
      //  return this._responder.sendTextMessage(senderID, 'Greeting!')
      default:
        return toCommand(messageText)
    }
  }

  async reply(senderID: string, messageText: string) {
    // Section by current senderID state
    const user = await this._userModel.find(senderID)
    let command = this.route(user.state, messageText)

    // Repeat?
    if (command.method === 'repeat') command = user.lastCommand

    // Run command 
    const answer = await this.run(user, command)

    // Reply
    console.log(`🤖 reply [${senderID}] : ${answer}`)
    return this._responder.sendTextMessage(senderID, answer)
  }
}

export default Foo