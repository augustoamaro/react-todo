const port = 3003;

const express = require('express');
const server = express();
const allowCors = require('./cors')

server.use(allowCors);

server.use('*', (req, res, next) => {
    const request = `[${req.method}] - ${req.hostname}${req.path} ${req.ip}`;

    console.log(request);
    next();
});
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server