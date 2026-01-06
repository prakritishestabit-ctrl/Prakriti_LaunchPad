module.exports = {
  apps: [
    {
      name: "api-server",
      script: "src/server.js",
      instances: 1,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "email-worker",
      script: "src/workers/email.worker.js",
    },
  ],
};
