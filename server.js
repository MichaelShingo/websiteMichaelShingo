const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();


    // set header content type
    res.setHeader('Content-Type', 'text/html');
    path = '.'
    switch(req.url){
        case '/index.html':
            path += '/index.html'
            res.statusCode = 200;
            break; 
        case '/biography.html':
            path += '/biography.html'
            break;
        case '/about-me.html':
            res.statusCode = 301;
            res.setHeader('Location', '/biographfy.html');
            res.end();
            break;
        case '/index.js':
            console.log('/js/index.js');
            path += '/index.js';
        default:
            res.statusCode = 404;
            path += '/404.html';
     
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.write('hello');
            res.end(); //end res so the browser doesn't hang 
        } else {
            res.statusCode = 200;
            res.end(data);
        }
    });
});



server.listen(5500, 'localhost', () => {
    console.log('listening for requests on port 5500');
});