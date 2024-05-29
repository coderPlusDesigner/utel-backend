require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse the incoming requests with JSON payloads
app.use(bodyParser.json());

// Endpoint to receive the phone number via POST request
app.post('/send-phone', async (req, res) => {
  const phoneNumber = req.body.phone;
  if (!phoneNumber) {
    return res.status(400).send('Phone number is required');
  }

  try {
    // Replace 'your_telegram_chat_id' with your actual chat ID
    const chatId = 'your_telegram_chat_id';
    const message = `Received phone number: ${phoneNumber}`;
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    // await axios.post(telegramUrl, {
    //   chat_id: chatId,
    //   text: message
    // });

    res.send('Phone number sent to Telegram bot successfully');
  } catch (error) {
    console.error('Failed to send message to Telegram bot:', error);
    res.status(500).send('Failed to send phone number');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
