// socket.js
import io from 'socket.io-client';
const socket = io('http://localhost:4000'); // Or your socket server URL

export default socket;
