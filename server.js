"use strict"

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request, response) {
  var path = url.parse(request.url, true).pathname;
  if(request.method === 'GET') {
    if (path === '/') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      fs.readFile(`${__dirname}/index.html`, function(error, data) {
        if (error) {
          console.log(error);
        } 
        response.end(data);
      });
    } else if (path === '/angry') {
      response.writeHead(200, {'Content-Type': 'jpg'});
      fs.readFile(`${__dirname}/assets/angry.jpg`, function(error, data) {
        if (error) {
          console.log(error);
        }
        response.end(data);
      });
    } else if (path === '/friendly') {
      response.writeHead(200, {'Content-Type': 'jpg'});
      fs.readFile(`${__dirname}/assets/friendly.jpg`, function(error, data) {
        if (error) {
          console.log(error);
        }
        response.end(data);
      });
    } else {
      response.writeHead(404);
      response.end();
    }
  } 
}).listen(8000, '127.0.0.1');

console.log('Listening');

//https://repl.it/DEmF










