// src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const ddosController = require('./controllers/ddosController');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', ddosController);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
