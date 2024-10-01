const express = require('express');
const config = require('../config/config');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
