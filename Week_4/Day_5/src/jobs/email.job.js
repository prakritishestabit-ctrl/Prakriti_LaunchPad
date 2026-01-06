const { Queue } = require("bullmq");
const redis = require("../utils/redis");

const emailQueue = new Queue("email-queue", {
  connection: redis,
});

async function addEmailJob(data) {
  await emailQueue.add(
    "send-email",
    data,
    {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 2000,
      },
    }
  );
}

module.exports = addEmailJob;
