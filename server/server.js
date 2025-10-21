const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`📌 ~ socket: server`, socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:server', socket.id);
  });
});

// app.get('/', (req, res) => {
//   res.send('Socket.IO server running');
// });

server.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
