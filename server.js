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

app.listen(process.env.PORT || 8080)
console.log(`Running on http://${HOST}:${PORT}`);