  "use strict";

  const token = process.env.WHATSAPP_TOKEN;

  // Imports dependencies and set up http server
  const request = require("request"),
    express = require("express"),
    body_parser = require("body-parser"),
    axios = require("axios").default,
    app = express().use(body_parser.json()), // creates express http server
    { messages } = require("./functions/index.js");

  // Accepts POST requests at /webhook endpoint
  app.post("/webhook", messages);

  // Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
  app.get("/webhook", (req, res) => {
    /*
     * UPDATE YOUR VERIFY TOKEN
     *This will be the Verify Token value when you set up webhook
    */
    const verify_token = process.env.VERIFY_TOKEN;

    // Parse params from the webhook verification request
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Check if a token and mode were sent
    if (mode && token) {
      // Check the mode and token sent are correct
      if (mode === "subscribe" && token === verify_token) {
        // Respond with 200 OK and challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
      }
    }
  });

  app.listen(process.env.PORT || 1338, () => console.log("webhook is listening"));
