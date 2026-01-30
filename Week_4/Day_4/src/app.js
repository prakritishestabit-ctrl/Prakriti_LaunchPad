const express = require("express");
const app = express();


const security = require("./middlewares/security");
security(app);


app.use("/api/users", require("./routes/user.routes"));
app.use("/api/products", require("./routes/product.routes"));

module.exports = app;
