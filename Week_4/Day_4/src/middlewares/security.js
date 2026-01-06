const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

module.exports = (app) => {

  // Secure HTTP headers
  app.use(helmet());

  // CORS configuration
  app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

  // Rate limiting
  app.use(
    "/api",
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: "Too many requests. Try later."
    })
  );

  // Prevent NoSQL injection
  app.use(mongoSanitize());

  // Prevent XSS attacks
  app.use(xss());

  // Payload size limit
  app.use(require("express").json({ limit: "10kb" }));
};
