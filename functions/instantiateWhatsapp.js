const WhatsappCloudAPI = require("../whatsappcloudapi_wrapper.js");

const Whatsapp = new WhatsappCloudAPI({
  accessToken: process.env.WHATSAPP_TOKEN,
  senderPhoneNumberId: process.env.PHONE_NUMBER_ID,
  WABA_ID: process.env.WHATSAPP_BUSINESS_ID
});

module.exports = {Whatsapp}