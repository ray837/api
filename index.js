const express = require('express');
const app = express();

// In-memory data store to keep track of the state of each transaction
const transactions = {};

// Route to handle the POST request
app.post('/transactions/:id', (req, res) => {
  const transactionId = req.params.id; // Get the transaction ID from the URL parameter

  // Check if the transaction ID is valid
  if (isValidTransactionId(transactionId)) {
    // Store the state of the transaction in the in-memory data store
    transactions[transactionId] = { status: 'pending' };

    // Send a response to indicate that the transaction has been received
    res.status(200).send('Transaction received successfully.');
  } else {
    // Return an error response if the transaction ID is invalid
    res.status(400).send('Invalid transaction ID.');
  }
});

// Route to handle the confirmation request from app B
app.post('/transactions/:id/confirm', (req, res) => {
  const transactionId = req.params.id; // Get the transaction ID from the URL parameter

  // Check if the transaction ID is valid
  if (isValidTransactionId(transactionId)) {
    // Update the state of the transaction in the in-memory data store
    transactions[transactionId].status = 'success';

    // Send a response to indicate that the confirmation has been received
    res.status(200).send('Confirmation received successfully.');
  } else {
    // Return an error response if the transaction ID is invalid
    res.status(400).send('Invalid transaction ID.');
  }
});

// Function to check if the transaction ID is valid
function isValidTransactionId(transactionId) {
  // Perform validation logic here (e.g. check if the transaction ID is in the correct format)
  // Return true if the transaction ID is valid, false otherwise
  return true;
}

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});