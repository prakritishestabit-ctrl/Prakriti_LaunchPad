const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from my Docker container!');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Server is running on Port', PORT);
});