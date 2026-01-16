const express = require('express');
const mongoose = require('mongoose');
const logger = require('./logger');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => logger.info("Connected to MongoDB"))
  .catch(err => logger.error("MongoDB Connection Error", err));

const Shoutout = mongoose.model('Shoutout', { text: String, date: { type: Date, default: Date.now } });

// Health Check for Docker
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/shoutouts', async (req, res) => {
  const shoutouts = await Shoutout.find().sort({ date: -1 });
  res.json(shoutouts);
});

app.post('/api/shoutouts', async (req, res) => {
  const shoutout = new Shoutout({ text: req.body.text });
  await shoutout.save();
  logger.info(`Action: New Shoutout Created: ${req.body.text}`);
  res.status(201).json(shoutout);
});

app.listen(5000, () => logger.info("Backend running on port 5000"));