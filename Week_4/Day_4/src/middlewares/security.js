const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

module.exports = (app) => {

  // secure HTTP headers
  app.use(helmet());

  // CORS 
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

  // prevent NoSQL injection
  app.use(mongoSanitize());

  // prevent XSS attacks
  app.use(xss());

  // payload size limit
  app.use(require("express").json({ limit: "10kb" }));
};
