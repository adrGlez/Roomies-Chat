const http = require("http");
const server = http.createServer();
const PORT = process.env.PORT

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

server.listen(PORT);

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.broadcast.emit("chat_message", {
    user: "INFO",
    message: "New roomie connected",
  });

  socket.on("chat_message", (data) => {
    io.emit("chat_message", data);
  });
});
