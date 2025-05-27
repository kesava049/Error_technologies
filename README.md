# Error_technologies Assignment

# Lead Generation System with Email Notifications and n8n Workflow Automation 

# Overview

This project is a robust Lead Generation System designed to efficiently collect and process lead information, integrating a modern frontend, a Node.js backend, and n8n workflow automation. The system captures lead details (name, email, company, message) through a responsive form, validates inputs using Zod, processes submissions via a Node.js (Express) API, and automates notifications with n8n. Built for scalability and extensibility, this solution meets Error Technologies' needs for streamlined lead management.

# Key Features





 Frontend: A responsive React (Vite) form with Tailwind CSS, Zod for validation, React Hooks, and Axios for API calls.



 Backend: A Node.js (Express) API with CORS support to handle form submissions and forward data to n8n.



 n8n Workflow: Automates email notifications via SendGrid and optionally stores lead data in Google Sheets.



 Deployment: Frontend on Netlify, backend on Render, n8n workflow on n8n Cloud.



Documentation: Clear setup instructions and extensibility guidelines.


# System Components

# 1. Frontend





Technologies: React (Vite), Tailwind CSS, Zod, React Hooks, Axios.



# Functionality:





A clean, responsive form collecting name (required), email (required), company (optional), and message (optional).



Client-side validation using Zod ensures:





Name and email are non-empty.



Email follows a valid format (via Zod's email schema).



Form submissions are sent to the backend using Axios.



Built with React Hooks for state management and Tailwind CSS for styling.



Location: /frontend directory.


# 2. Backend





Technologies: Node.js (v20), Express, CORS.



# Functionality:





Exposes a /api/leads endpoint to accept POST requests with lead data.



Validates incoming data (ensures name and email are present and email is valid).



Forwards valid data to the n8n workflow via an HTTP POST request.



Uses CORS to allow cross-origin requests from the frontend.



Location: /backend directory.

# 3. n8n Workflow





Technology: n8n (cloud-hosted or local).



# Functionality:





Trigger: Webhook triggered by the backend's HTTP POST request.



Email Notification: Sends lead details to the sales team using SendGrid.



Optional Storage: Stores lead data in Google Sheets for record-keeping.



Location: n8n workflow JSON file in /n8n-workflow directory or hosted on n8n Cloud.



# Setup Instructions

# Prerequisites





Node.js (v20 or higher)



npm (v8 or higher)



n8n (local or n8n Cloud account)



SendGrid Account (for email notifications)



Google Cloud Account (optional, for Google Sheets integration)

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/kesava049/paytm.git
   cd paytm
   ```

2. **Install backend dependencies**:

   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:

   ```sh
   cd ../frontend
   npm install
   ```







