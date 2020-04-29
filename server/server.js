const express = require('express');

const path = require('path');
const http = require('http');
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);

let io = socketIO(server);

io.on('connection', (socket) => {
    console.log("A new user just connected");

    socket.on('disconnect', () => {
        console.log("A user was just disconnected");
    });
});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
