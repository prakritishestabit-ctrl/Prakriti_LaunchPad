const express = require("express");
const tracingMiddleware = require("./utils/tracing");
const logger = require("./utils/logger");
const addEmailJob = require("./jobs/email.job");

const app = express();

app.use(express.json());
app.use(tracingMiddleware);

app.post("/notify", async (req, res) => {
  const { email } = req.body;

  await addEmailJob({
    email,
    requestId: req.requestId,
  });

  logger.info("Email job queued", {
    email,
    requestId: req.requestId,
  });

  res.json({
    status: "queued",
    requestId: req.requestId,
  });
});

module.exports = app;
