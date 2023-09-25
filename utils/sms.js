const config = require("../config");
const client = require("twilio")(config.accountSid, config.authToken);

exports.sendSMS = (toPhoneNumber, messageBody, fromPhoneNumber) => {
  return client.messages
    .create({
      body: messageBody,
      from: fromPhoneNumber ?? config.phoneNumber,
      to: toPhoneNumber,
    })
    .then((message) => {
      console.log(message);
      return message;
    })
    .catch((err) => {
      console.log(err);
    });
};
