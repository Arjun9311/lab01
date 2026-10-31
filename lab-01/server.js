// Import Express framework
const express = require('express');

// Initialize Express application
const app = express();

// Define port: use PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Route 1: Home route (GET /)
// req: HTTP request object, res: HTTP response object
app.get('/', (req, res) => {
  // Send welcome text with status 200 (OK)
  res.status(200).send('Welcome to Lab 1: Node.js and Express server');
});

// Route 2: About route (GET /about)
// Returns personal details as JSON with status 200
app.get('/about', (req, res) => {
  res.status(200).json({
    name: '[YOUR NAME]',
    section: '[YOUR SECTION]'
  });
});

// Route 3: Time route (GET /time)
// Returns current date and time as plain text using toString() with status 200
app.get('/time', (req, res) => {
  res.status(200).send(new Date().toString());
});

// Catch-all 404 handler placed AFTER all routes
// Any request that did not match the routes above will reach this middleware
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// Basic error-handling middleware (takes 4 parameters: err, req, res, next)
// Express identifies this as an error handler because it accepts 4 parameters
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

// Start the Express server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
