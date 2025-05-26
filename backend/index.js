// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { validateInput } = require('./InputValidation/zod');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/lead', async (req, res) => {
  const { name, email, company, message } = req.body;
//   if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
//     return res.status(400).json({ error: 'Invalid name or email' });
//   }
    // Input Validation Using Zod Library
   const response = await validateInput({name, email, company, message});
   if (!response.success) {
    return res.status(400).json({ error: response.error.message });
   }

  try {
    await axios.post('https://kesavulareddy.app.n8n.cloud/webhook/lead-webhook', {
      name, email, company, message
    });
    res.status(200).json({ message: 'Lead sent to automation' });
  } catch {
    res.status(500).json({ error: 'Failed to forward lead' });
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));