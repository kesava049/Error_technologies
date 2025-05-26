const express = require('express');
const { validateLead } = require('../middleware/validate');
const n8nService = require('../servicesn8n/n8nService');

const router = express.Router();

router.post('/', validateLead, async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    await n8nService.sendToN8n({ name, email, company, message });
    res.status(201).json({ message: 'Lead submitted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;