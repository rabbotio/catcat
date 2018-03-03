const FBMessenger = require('fb-messenger')

class Responder extends (FBMessenger as { new(accessToken: string): any; }) {
  constructor(accessToken: string) {
    super(accessToken)

    const util = require('util')

    this.sendMessage = util.promisify(this.sendMessage)
    this.sendTextMessage = util.promisify(this.sendTextMessage)
    this.setPersistentMenu = util.promisify(this.setPersistentMenu)

    // TODO : move to somewhere else?
    const menuItems = [
      {
        "title": "Pay Bill",
        "type": "postback",
        "payload": "PAYBILL_PAYLOAD"
      },
      {
        "type": "web_url",
        "title": "Latest News",
        "url": "https://www.messenger.com/",
        "webview_height_ratio": "full"
      }
    ]

    this.setPersistentMenu('314223362412440', menuItems).catch(console.log)
  }
}

module.exports = Responder