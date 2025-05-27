import React, { useState } from 'react';
import axios from 'axios';
import './LeadForm.css'; // Add this line
import { renderURL } from '../renderURL';

function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name || !form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      return setError('Please enter a valid name and email.');
    }
    try {
      await axios.post(renderURL, form);  // the renderURL is from deployed backend URL...
      setSuccess('Lead submitted successfully!');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setError('Failed to submit lead. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default LeadForm;    