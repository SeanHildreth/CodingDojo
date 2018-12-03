var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response) => {
    console.log('Client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf-8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf-8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/newCar.html', 'utf-8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/css/style.css") {
        fs.readFile('css/style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/images/1.jpg") {
        fs.readFile('images/1.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/2.jpg") {
        fs.readFile('images/2.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/3.jpg") {
        fs.readFile('images/3.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/4.jpg") {
        fs.readFile('images/4.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/5.jpg") {
        fs.readFile('images/5.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/6.jpg") {
        fs.readFile('images/6.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/c1.jpg") {
        fs.readFile('images/c1.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/c2.jpg") {
        fs.readFile('images/c2.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/c3.jpeg") {
        fs.readFile('images/c3.jpeg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/c4.jpg") {
        fs.readFile('images/c4.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else {
        response.end("URL requested is not available.");
    }
});

server.listen(7077, () => {
    console.log("Running on localhost at port 7077.");
});