// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { validateInput } = require('./InputValidation/zod');
const app = express();
process.env.PORT = 4000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message1: "Hey I'm Kesavula Reddy",
    message2: "This is my backend server running from Render"
  });
});

app.post('/api/lead', async (req, res) => {
  const { name, email, company, message } = req.body;

    // Input Validation Using Zod Library
   const response = validateInput({ name, email, company, message });
   if (!response.success) {
    return res.status(400).json({ error: response.error.message });
   }

  try {
    await axios.post(process.env.N8N_WEBHOOK_URL, {
      name, email, company, message
    });
    res.status(200).json({ message: 'Lead sent to automation' });
  } catch {
    res.status(500).json({ error: 'Failed to forward lead' });
  }
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));