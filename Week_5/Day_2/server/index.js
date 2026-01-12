const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const app = express();

app.use(cors({
  origin: "http://localhost:3001"
}));

mongoose.connect("mongodb://mongo_db:27017/day2db")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/api", (req, res) => {
  res.json({ message: "Server is connected to client!" });
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
