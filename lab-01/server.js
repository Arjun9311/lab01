const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Lab 1: Node.js and Express server');
});

app.get('/about', (req, res) => {
  res.status(200).json({
    name: '[YOUR NAME]',
    section: '[YOUR SECTION]'
  });
});

app.get('/time', (req, res) => {
  res.status(200).send(new Date().toString());
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
