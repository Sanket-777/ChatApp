const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// let chatHistory = [];
let numberOfPeopleInRoom = 0;

io.use((socket, next) => {
  socket.handshake.headers.origin = "*";
  next();
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} just connected `);
  numberOfPeopleInRoom++;
  io.emit(`newuser`, `${socket.id.substring(0, 4)} has joined the chatroom.`);
  io.emit(`people`, numberOfPeopleInRoom);
  // io.emit("chatHistory", chatHistory);

  socket.on("message", (data) => {
    console.log(data);
    let name = socket.id.substring(0, 4);
    // chatHistory.push(`${socket.id.substring(0, 4)}: ${data}`);
    io.emit(`message`, `${socket.id.substring(0, 4)}: ${data}`);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
    numberOfPeopleInRoom--;
    io.emit(`userleft`, `${socket.id.substring(0, 4)} has left the chatroom.`);
    io.emit(`people`, numberOfPeopleInRoom);
  });
});

const port = process.env.PORT || 4000;
httpServer.listen(port, () => {
  console.log(`listening on port :${port}`);
});
