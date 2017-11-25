const express = require("express");
const bodyParser = require("body-parser")
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')

const configs = require('./config')

const app = express();
const PORT = process.env.PORT || 9999;

const web3 = new Web3(new Web3.providers.HttpProvider(configs.host));

const bookingContractAbi = '';
const bookingContractAddr = '';

const transferContractAbi = '';
const transferContractAddr = '';

// const bookingListContract = web3.eth.contract(bookingContractAbi).at(bookingContractAddr);
// const transferContract = web3.eth.contract(transferContractAbi).at(transferContractAddr);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addNewBooking', (req, res) => {
    console.log(req.body);
    // check balance

    // call to addNewBooking
    res.send('addNewBooking');
});

app.post('/addReview', (req, res) => {
    console.log('addReview');
    // call to addNewReview
});

app.post('/transferMoney', (req, res) => {
    console.log('transferMoney');
});

app.get('/roomList', (req, res) => {
    console.log('roomList');
});

app.get('/login', (req, res) => {
    console.log('login');
    res.send({
        userId: '123456',
        addr: '0xF026bef6694D16c4F8dF3E5279Ab8801E8B2B4dd'
    });
});

app.listen(PORT);

console.log('blockathon2017-team7 API server started on: ' + PORT + '...');
