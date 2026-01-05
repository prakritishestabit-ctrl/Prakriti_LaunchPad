const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/day3_assignment");

app.use(productRoutes);
app.use(errorMiddleware);

app.listen(3000, () => console.log("Server running on port 3000"));
