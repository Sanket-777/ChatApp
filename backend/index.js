import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 4000;
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

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

  socket.on("message", (data) => {
    console.log(data);
    io.emit(`message`, `${socket.id.substring(0, 4)}: ${data}`);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
    numberOfPeopleInRoom--;
    io.emit(`userleft`, `${socket.id.substring(0, 4)} has left the chatroom.`);
    io.emit(`people`, numberOfPeopleInRoom);
  });
});

httpServer.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
