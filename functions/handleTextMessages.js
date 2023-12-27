const { Whatsapp } = require("./instantiateWhatsapp.js"),
  {welcomeMessage, technologyQuestions} = require("./lib.js")

const handleTextMessages = async (data) => {
try {

  if (data?.message?.length > 0) {

      if (data.message?.toLowerCase().trim() === "cancel") {
        await Whatsapp.sendText({
          message: "Thank you for your time",
          recipientPhone: data.recipientPhone,
        });
      }
      else {
        let listOfSections = [
          {
            title: "How can I assist you?".toUpperCase(),
            rows: technologyQuestions
              ?.map((question, index) => {
                return {
                  id: `${index}`,
                  title: question.question.substring(0, 24),
                  description: " ",
                };
              })
              .slice(0, 10),
          },
        ];
        await Whatsapp.sendRadioButtons({
          recipientPhone: data.recipientPhone,
          headerText: "Hello🤗,",
          bodyText: welcomeMessage,
          footerText: `Type 'cancel' to quit.\n\n${data?.name}`,
          buttonText: "Select an Option",
          listOfSections,
        });
      }
  }
} catch(error) {
  console.log(error)
}
}

module.exports = {handleTextMessages}