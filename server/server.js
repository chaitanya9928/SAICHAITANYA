const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, "../dist");

const ip = '127.0.0.1';
const port = 2000;

const server = app.listen(port, ip, () => {
    console.log('server running'+ip+":"+port);
});

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})