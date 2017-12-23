const _handleMessageText = async (foo, senderId, messageText) => {
  // TODO : identify user state here

  // Stamp user time
  await foo.userModel.upsert(senderId, { repliedAt: new Date().toISOString() })

  // 
  return foo.reply(senderId, messageText)
}

const receivedMessage = async (event, foo) => {
  const senderId = event.sender.id;
  const recipientId = event.recipient.id;
  const timeOfMessage = event.timestamp;
  const message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderId, recipientId, timeOfMessage);
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

    return foo.responder.sendTextMessage(senderId, "Quick reply tapped");
  }

  if (messageText) {
    await _handleMessageText(foo, senderId, messageText).catch(err => {
      console.error(err)
      foo.responder.sendTextMessage(senderId, err.message)
    })
    return
  } else if (messageAttachments) {
    foo.responder.sendTextMessage(senderId, "Message with attachment received");
  } else {
    // hm?
  }
}

module.exports = { receivedMessage }