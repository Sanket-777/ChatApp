import { createServer } from "http";
import { Server } from "socket.io";
const port = process.env.PORT || 4000;

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.use((socket, next) => {
  // Set Access-Control-Allow-Origin header for all requests
  socket.handshake.headers.origin = "*";
  next();
});
io.on("connection", (socket) => {
  console.log(`User ${socket.id} just connected `);

  io.emit(`newuser`, `${socket.id.substring(0, 4)} has joined the chatroom.`);

  socket.on("message", (data) => {
    console.log(data);

    io.emit(`message`, `${socket.id.substring(0, 4)}: ${data}`); //sending the message
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
    io.emit(`userleft`, `${socket.id.substring(0, 4)} has left the chatroom.`);
  });
});

httpServer.listen(port, () => {
  console.log(`Listening on Port 4000`);
});
