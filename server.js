/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

//create a server object
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (error, content) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(content); // Sends a response back to the client
      res.end(); // Ends the response
    });
  } else if (req.url === '/style.css') {
    fs.readFile(
      path.join(__dirname, 'public', 'style.css'),
      (error, content) => {
        if (error) throw error;
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(content); // Sends a response back to the client
        res.end(); // Ends the response
      },
    );
  } else if (req.url === '/index.js') {
    fs.readFile(path.join(__dirname, 'index.js'), (error, content) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(content); // Sends a response back to the client
      res.end(); // Ends the response
    });
  }
});

const port = 3001;
server.listen(port, () => {
  console.log('Server running');
}); // The server starts to listen on port 3000
