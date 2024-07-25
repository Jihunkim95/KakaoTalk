// src/app.js

const express = require('express');
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
