import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const httpServer = createServer();

const io = new Server(httpServer);
io.use(
  cors({
    origin: "https://randomchat-zeta.vercel.app/",
  })
);
io.on("connection", (socket) => {
  console.log(`User ${socket.id} just connected `);

  io.emit(`newuser`, `${socket.id.substring(0, 4)} has joined the chatroom.`);

  socket.on("message", (data) => {
    console.log(data);

    io.emit(`message`, `${socket.id.substring(0, 4)}: ${data}`); //sending the message
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
  });
});

httpServer.listen(4000, () => {
  console.log(`Listening on Port 4000`);
});
