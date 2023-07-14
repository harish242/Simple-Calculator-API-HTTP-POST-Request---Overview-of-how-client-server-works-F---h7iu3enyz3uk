const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint for addition
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  // Check for invalid data types
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 + num2;

  // Check for overflow
  if (result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ result });
});

// POST endpoint for subtraction
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;

  // Check for invalid data types
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 - num2;

  // Check for underflow
  if (result < -1000000) {
    return res.status(400).json({ status: 'error', message: 'Underflow' });
  }

  res.json({ result });
});

// POST endpoint for multiplication
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;

  // Check for invalid data types
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 * num2;

  // Check for overflow
  if (result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ result });
});

// POST endpoint for division
// POST endpoint for division
// POST endpoint for division
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;

  // Check for invalid data types
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  // Check for division by zero
  if (num2 === 0) {
    return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
  }

  const result = num1 / num2;

  // Check for underflow or overflow
  if (result < -1000000 || result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Underflow or Overflow' });
  }

  res.json({ result });
});



const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});

module.exports = app;
