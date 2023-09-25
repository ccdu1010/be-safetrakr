const { sendSMS } = require("../utils/sms");

exports.sendSms = (request, response, next) => {
  const smsRequest = request.body;
  sendSMS(smsRequest.to, smsRequest.body, smsRequest.from)
    .then((message) => {
      response
        .status(200)
        .send({ message: `message sent successfully. sid: ${message.sid}` });
    })
    .catch(next);
};
