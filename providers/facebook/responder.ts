// ================================
class Responder {
  facebookURL = `https://graph.facebook.com/v2.6/me/messages`
  accessToken = null

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async sendTextMessage(recipientId, messageText) {
    const messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: messageText
      }
    };

    return this.callSendAPI(this.accessToken, messageData);
  }

  async callSendAPI(accessToken, messageData) {
    const { postJSON } = require('../../lib/fetcher')
    return postJSON(`${this.facebookURL}?access_token=${accessToken}`, messageData)
      .then(json => {
        const recipientId = json.recipient_id;
        const messageId = json.message_id;

        if (messageId) {
          console.log("Successfully sent message with id %s to recipient %s",
            messageId, recipientId);
        } else {
          console.log("Successfully called Send API for recipient %s",
            recipientId);
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}

module.exports = Responder