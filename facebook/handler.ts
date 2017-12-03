const receivedMessage = async (event, foo) => {
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

    return foo.responder.sendTextMessage(senderID, "Quick reply tapped");
  }

  if (messageText) {
    //return foo.responder.sendTextMessage(senderID, messageText);
    console.log('foo.reply:', foo.reply)
    await foo.reply(senderID, messageText)
    return
  } else if (messageAttachments) {
    foo.responder.sendTextMessage(senderID, "Message with attachment received");
  } else {
    // hm?
  }
}

module.exports = { receivedMessage }