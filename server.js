'use strict';

const express = require('express');
const path = require('path');

// Constants
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

let PORT = process.env.PORT || 8080
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);