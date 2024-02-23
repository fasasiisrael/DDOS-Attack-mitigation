// src/controllers/ddosController.js

const express = require('express');
const router = express.Router();
const trafficBlockingService = require('../services/trafficBlockingService');

// Endpoint to block abnormal traffic
router.post('/block-abnormal-traffic', async (req, res) => {
    try {
        const { jsonFile } = req.body;

        // Call the traffic blocking service with the provided JSON data
        await trafficBlockingService.blockAbnormalTraffic(jsonFile);

        res.status(200).json({ message: 'Abnormal traffic blocked successfully.' });
    } catch (error) {
        console.error('Error blocking abnormal traffic:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
