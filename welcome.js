const express = require('express');
const server = express();
const PORT = 8080;

server.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
server.get("/", function (require, response) {
    response.send("Welcome to the THUNDERDOME!");
});