const axios = require('axios');
const config = require('../config/config');

const sendToN8n = async (leadData) => {
  try {
    await axios.post(config.n8nWebhookUrl, leadData);
  } catch (error) {
    console.error('Error sending to n8n:', error.message);
    throw new Error('Failed to send lead to n8n');
  }
};

module.exports = { sendToN8n };