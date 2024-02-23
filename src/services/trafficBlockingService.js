// src/services/trafficBlockingService.js

const fetch = require('node-fetch');

async function blockAbnormalTraffic(jsonData) {
    try {
        const threshold = jsonData.threshold;

        if (typeof threshold !== 'number') {
            throw new Error('Threshold must be a number.');
        }

        if (threshold > 1000) {
            console.log(`Blocking traffic exceeding threshold: ${threshold}`);
                 }

        console.log('Received JSON data:', jsonData);
    } catch (error) {
        console.error('Error blocking abnormal traffic:', error);
        throw error;
    }
}

module.exports = {
    blockAbnormalTraffic
};
