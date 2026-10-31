// Import Node.js built-in HTTP module (no external dependencies needed)
const http = require('http');

// Port number on which the plain server will listen
const PORT = 3000;

// Create the HTTP server
// req (IncomingMessage): Represents the incoming HTTP request from the client (contains URL, method, headers)
// res (ServerResponse): Represents the outgoing HTTP response sent back to the client (used to set status, headers, and body)
const server = http.createServer((req, res) => {
  // Set response HTTP status code to 200 (OK) and header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send "Hello" as the response body and end the response
  res.end('Hello');
});

// Start the server and listen on port 3000
server.listen(PORT, () => {
  console.log(`Plain server running on port ${PORT}`);
});
