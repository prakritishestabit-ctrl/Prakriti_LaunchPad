const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is working over HTTPS via NGINX");
});

app.get("/api", (req, res) => {
  res.json({ message: "API response from backend" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
