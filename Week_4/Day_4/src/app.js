const express = require("express");
const app = express();

// Global security middleware
const security = require("./middlewares/security");
security(app);

// Routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/products", require("./routes/product.routes"));

module.exports = app;
