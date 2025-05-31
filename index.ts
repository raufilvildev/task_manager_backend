// Server creation and configuration
import http from 'node:http';
import app from './src/app';
import dotenv from 'dotenv';

// Config .env
dotenv.config();

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on('listening', () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  console.error(error);
});
