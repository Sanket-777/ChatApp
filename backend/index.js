import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "https://randomchat-zeta.vercel.app",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
  },
});

io.engine.on("headers", (headers, req) => {
  headers["Access-Control-Allow-Origin"] = "https://randomchat-zeta.vercel.app";
  headers["Access-Control-Allow-Headers"] =
    "origin, x-requested-with, content-type";
  headers["Access-Control-Allow-Methodsn"] = "PUT, GET, POST, DELETE, OPTIONS";
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
  });
});

httpServer.listen(4000, () => {
  console.log(`Listening on Port 4000`);
});
