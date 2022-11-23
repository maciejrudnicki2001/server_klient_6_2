const express = require('express');
const app = express();
const request = require('request');
const port = 9000;

let counter = 0;

app.get('/', (req, res) => {
    res.send('Hello World!');
} );

app.get('/pinger', (req, res) => {
    counter++;
    request('http://localhost:3000/pinger', (error, response, body) => {
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
});

