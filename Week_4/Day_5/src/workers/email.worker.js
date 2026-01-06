const { Worker } = require("bullmq");
const redis = require("../utils/redis");
const logger = require("../utils/logger");

new Worker(
  "email-queue",
  async (job) => {
    logger.info("Processing email job", {
      jobId: job.id,
      email: job.data.email,
      requestId: job.data.requestId,
    });

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 2000));

    logger.info("Email sent successfully", {
      jobId: job.id,
      email: job.data.email,
    });
  },
  { connection: redis }
);

console.log("Email worker started");
