const express = require('express'); //creates an express server
const app = express(); //instance of express library
const http = require("http");//creates an http server
const {server} = require('socket.io');

const server = http.createServer(app); //creates an http server

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
}); //variable used to use socket.io
