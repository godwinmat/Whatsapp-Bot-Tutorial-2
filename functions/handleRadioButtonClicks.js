const { Whatsapp } = require("./instantiateWhatsapp.js"),
  {technologyQuestions} = require("./lib.js")

const handleRadioButtonClicks = async (data) => {
  try {
    let button_id = Number(data?.incomingMessage.list_reply.id);
    let message = data?.incomingMessage.list_reply.title;

    Whatsapp.sendText({
            message: `*#${message}*\n\n${technologyQuestions[button_id].answer}\n\nRead more at ${technologyQuestions[button_id].link}\n\n*Type 'cancel' to quit.*\n\n*${data?.name}*`,
            recipientPhone: data.recipientPhone,
          });
  } catch (error) {
    console.log(error)
  }

}

module.exports = {handleRadioButtonClicks}