const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/addNewBooking', (req, res) => {
    console.log('addNewBooking');
    res.send('addNewBooking');
});

app.post('/addReview', (req, res) => {
    console.log('addReview');
});

app.post('/transferMoney', (req, res) => {
    console.log('transferMoney');
});

app.get('/roomList', (req, res) => {
    console.log('roomList');
});

app.get('/login', (req, res) => {
    console.log('login');
});

const PORT = process.env.PORT || 9999;
app.listen(PORT);

console.log('todo list RESTful API server started on: ' + PORT);

