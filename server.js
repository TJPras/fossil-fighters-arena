const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

/*
We set up a very basic express server. By default, we will serve the index.html page built by our Webpack build on the front end. Anything below dist will be served automatically, so the game JavaScript and assets will be served statically as well.
*/
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/dist/index.html");
});
app.use("/", express.static("dist"));

http.listen(5001, function () {
  console.log("Server ready, listening on port ", 5001);
});

const players = {};
const sockets = {};

/*
This is where we set all the events that our server will listen to. It will react like this:

- Is a new user connected? Notify it to the rest of the players to generate it as a new Enemy.

- Is a player disconnected? Notify the rest of the players to destroy this enemy.

For debugging purposes, we left some logs on these events.
*/
io.on("connection", function (socket) {
  console.log("New connection to the server.");
  socket.on("newPlayer", (key) => {
    console.log("New player joined with key:", key);
    players[key] = socket;
    sockets[socket.id] = key;

    socket.to(socket.id).emit("currentPlayers", Object.keys(players).length);
  });

  socket.on("disconnect", function (data) {
    key = sockets[socket.id];
    delete players[key];
    delete sockets[socket.id];
    console.log("Serve > player disconnected: ", data);
  });
});
