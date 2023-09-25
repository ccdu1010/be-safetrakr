const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/.env.${ENV}`,
});

const express = require("express");
const cors = require("cors");
const { getApi } = require("./controllers/api.controller");
const { sendSms } = require("./controllers/sms.controller");
const { handleCustomErrors, handleServerErrors } = require("./errors/index.js");
const authMiddleware = require("./firebase/auth-middleware");

const app = express();
app.use(cors());
app.use(authMiddleware);
app.use(express.json());

app.get("/api", getApi);
app.post("/api/sms", sendSms);

app.use(handleCustomErrors);
app.use(handleServerErrors);

module.exports = app;
