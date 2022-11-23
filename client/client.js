const express = require('express');
const app = express();
const request = require('request');
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
    res.send('Hello World!');
} );

app.get('/pinger', (req, res) => {
    counter++;
    request('http://localhost:9000', (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            res.send('PONG -->hitted ${counter} times<--');
        }
    });
});

app.get('/counter', (req, res) => {
    res.send('Counter: ${counter}');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    request('http://localhost:9000', (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    });
});