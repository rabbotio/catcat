const postHook = (req, res) => {
  // Responder
  const { ACCESS_TOKEN } = req.webtaskContext.secrets
  const Responder = require('./responder')
  const responder = new Responder(ACCESS_TOKEN)

  // Handler
  const { receivedMessage } = require('./handler')
  const data = req.body;

  // Make sure this is a page subscription
  if (data.object == 'page') {
    // Iterate over each entry
    // There may be multiple if batched
    data.entry.forEach(function (pageEntry) {
      const pageID = pageEntry.id;
      const timeOfEvent = pageEntry.time;

      // Iterate over each messaging event
      pageEntry.messaging.forEach(function (messagingEvent) {
        if (messagingEvent.optin) {
          console.log(messagingEvent);
        } else if (messagingEvent.message) {
          receivedMessage(messagingEvent, responder);
        } else if (messagingEvent.delivery) {
          console.log(messagingEvent);
        } else if (messagingEvent.postback) {
          console.log(messagingEvent);
        } else if (messagingEvent.read) {
          console.log(messagingEvent);
        } else if (messagingEvent.account_linking) {
          console.log(messagingEvent);
        } else {
          console.log("Webhook received unknown messagingEvent: ", messagingEvent);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know you've 
    // successfully received the callback. Otherwise, the request will time out.
    res.sendStatus(200);
  }
}

const getHook = (req, res) => {
  // Secrets
  const { VERIFY_TOKEN } = req.webtaskContext.secrets

  // Parse params from the webhook verification request
  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  // Check if a token and mode were sent
  if (mode && token) {

    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED')
      res.status(200).send(challenge)

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403)
    }
  } else {
    res.send('Required : mode, token, challenge')
  }
}

module.exports = { postHook, getHook }