const { postJSON } = require('../../lib/fetcher')

const receivedMessage = (event) => {
  const senderID = event.sender.id;
  const recipientID = event.recipient.id;
  const timeOfMessage = event.timestamp;
  const message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  const isEcho = message.is_echo;
  const messageId = message.mid;
  const appId = message.app_id;
  const metadata = message.metadata;

  // You may get a text or attachment but not both
  const messageText = message.text;
  const messageAttachments = message.attachments;
  const quickReply = message.quick_reply;

  if (isEcho) {
    // Just logging message echoes to console
    console.log("Received echo for message %s and app %d with metadata %s",
      messageId, appId, metadata);
    return;
  } else if (quickReply) {
    const quickReplyPayload = quickReply.payload;
    console.log("Quick reply for message %s with payload %s",
      messageId, quickReplyPayload);

    sendTextMessage(senderID, "Quick reply tapped");
    return;
  }

  if (messageText) {
    try {
      sendTextMessage(senderID, messageText)
    } catch (err) {
      sendTextMessage(senderID, 'error')
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  } else {
    // hm?
  }
}

// ================================

const sendTextMessage = (recipientId, messageText) => {
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}

// ================================

const callSendAPI = (messageData) => {
  console.log('callSendAPI')
  postJSON('https://graph.facebook.com/v2.6/me/messages?access_token=EAAEdyNPlj5gBAOuZBIXYFmdjrpgvHpK0A0KPIogAMZCuiosmtd1nN7tZA75mMUQftZBEydswqpVNWD6V4MYxZCgTpeSzeBV6FXrvrbhJJ48MVFDrQnesywJLh91kLSydaFj8n3zIb44A23KZCy137le3HZBGXjhYNNrJ3RlqATePAZDZD', messageData)
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

module.exports = { receivedMessage }