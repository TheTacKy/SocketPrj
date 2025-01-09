const express = require('express'); //creates an express server
const app = express(); //instance of express library
const http = require("http");//creates an http server
const {Server} = require('socket.io');
const cors = require('cors');
app.use(cors());  

const server = http.createServer(app); //creates an http server

//creaete new instance of the server class
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
}); //variable used to use socket.io

server.listen(3001, () => {
    console.log("server is running on port 3001");
});