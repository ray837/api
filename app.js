'use strict';

// [START gae_node_request_example]
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(cors({
    origin: '*'
  }));
  
 
 
const transactions = {};

 
app.post('/transactions/:id', (req, res) => {
    const transactionId = req.params.id;

    if (true) {

        transactions[transactionId] = { status: "success"};


        res.status(200).send('Transaction received successfully.');
    } else {

        res.status(400).send('Invalid transaction ID.');
    }
});


app.get('/transactions/:id', (req, res) => {
    const transactionId = req.params.id;


    if (transactions[transactionId]) {
  
        if (transactions[transactionId].status == 'success') {

            res.status(200).send(transactions[transactionId].status);
        } else {

            res.status(400).send('Invalid transaction ID.');
        }

    } else {
        res.status(200).send("pending");
    }
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
