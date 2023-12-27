const router = require("express").Router(),
  { Whatsapp } = require("./instantiateWhatsapp.js"),
  {handleRadioButtonClicks} = require("./handleRadioButtonClicks.js"),
  {handleTextMessages} = require("./handleTextMessages.js"),
  {name} = require("./lib.js")

const messages = async (req, res) => {
  try {
    let data = Whatsapp.parseMessage(req.body);

    if (data?.isMessage) {
      let incomingMessage = data.message;
      let message = incomingMessage?.text?.body;
      let recipientPhone = incomingMessage?.from?.phone; // extract the phone number of sender
      let recipientName = incomingMessage?.from?.name;
      let typeOfMsg = incomingMessage?.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
      let message_id = incomingMessage?.message_id; // extract the message id

      let messageInfo = {
        recipientName,
        name: name,
        recipientPhone,
        message,
        incomingMessage,
        typeOfMsg,
        messageId: message_id
      };

      // Check if the type of message is text, radio button click or simple button
      if (typeOfMsg === "text_message") {
        const response = await handleTextMessages(messageInfo);
        replyMessageId = response;
      } else if (typeOfMsg === "radio_button_message") {
        const response = await handleRadioButtonClicks(messageInfo);
      }

      Whatsapp.markMessageAsRead({ message_id });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error?.message);
  }
};

module.exports = { messages };
