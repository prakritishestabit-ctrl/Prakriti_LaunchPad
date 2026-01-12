const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  res.json({
    message: "Response from backend",
    hostname: os.hostname()
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
