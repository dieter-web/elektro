#!/usr/bin/env node
import app from '../server.mjs';
import http from 'http';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  const env = process.env.NODE_ENV || 'development';
  console.log('------------------------------------------------------');
  console.log(`Listening on ${bind}`);
  console.log(`Server started in ${env} mode at ${new Date().toLocaleString()}`)
  console.log('Server is running on http://localhost:' + addr.port);
  console.log(process.versions.v8);
  console.log(process.versions);
  console.log('Press Ctrl+C to stop the server');
  console.log('------------------------------------------------------');
  
}