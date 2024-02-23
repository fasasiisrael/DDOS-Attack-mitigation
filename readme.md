# DDoS Protection API

## Introduction

This is a simple API for DDoS protection on virtual machines. It allows you to block abnormal traffic by providing JSON data containing traffic thresholds.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)
- npm (Node Package Manager): Installed automatically with Node.js

## Getting Started

1. **Clone the Repository**: Clone this repository to your local machine or virtual machine:



2. **Navigate to Project Directory**: Open a terminal or command prompt and navigate to the directory where you cloned the repository.


3. **Install Dependencies**: Install the project dependencies using npm:


4. **Start the Server**: Start the API server by running the following command:


This will start the server on port 3000 by default.

## Testing the API

You can test the API using tools like cURL or Postman, or by making HTTP requests from your application code. Here's how to test it using cURL:

1. **Send a POST Request**: Use cURL to send a POST request with JSON data containing the traffic threshold to block:

curl -X POST http://localhost:3000/api/block-abnormal-traffic -H "Content-Type: application/json" -d '{"threshold": 1500}'



Replace `http://localhost:3000` with the appropriate URL if your server is running on a different host or port.

2. **Verify Response**: You should receive a response indicating whether the abnormal traffic was blocked successfully.

## Customization

You can customize the DDoS protection logic and configuration by modifying the code in `src/controllers/ddosController.js` and `src/services/trafficBlockingService.js`.

