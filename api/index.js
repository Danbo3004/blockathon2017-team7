const express = require("express");
const bodyParser = require("body-parser")
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')

const configs = require('./config')

const app = express();
const PORT = process.env.PORT || 9999;

const web3 = new Web3(new Web3.providers.HttpProvider(configs.host));

const bookingContractAbi = '[ { "constant": false, "inputs": [ { "name": "roomId", "type": "bytes32" }, { "name": "rate", "type": "uint256" }, { "name": "comment", "type": "bytes32" } ], "name": "addNewReview", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "roomId", "type": "bytes32" } ], "name": "getCommentsByRoomId", "outputs": [ { "name": "rateArray", "type": "uint256[]" }, { "name": "commentArray", "type": "bytes32[]" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "key", "type": "bytes32" } ], "name": "getBookingInfoByKey", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newBooking", "type": "string" }, { "name": "finalPrice", "type": "uint256" }, { "name": "refereeAddr", "type": "address" } ], "name": "addNewBooking", "outputs": [ { "name": "bookingId", "type": "bytes32" } ], "payable": true, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" } ]';
const bookingContractAddr = '0x16C4CEEC682B370C0A4a29F4bEDCb90d8De62450';

const transferContractAbi = '';
const transferContractAddr = '';

const defaultAcc = "0xF026bef6694D16c4F8dF3E5279Ab8801E8B2B4dd";

const bookingListContract = web3.eth.contract(JSON.parse(bookingContractAbi)).at(bookingContractAddr);
// const transferContract = web3.eth.contract(transferContractAbi).at(transferContractAddr);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addNewBooking', (req, res) => {
    console.log('addNewBooking');
    console.log(req.body);
    // check balance

    // call to addNewBooking
    bookingListContract.getBookingInfoByKey('123456', { from: defaultAcc, gas: 500000 }, (error, info) => {
        console.log('Info: ', info)
    });

    res.send('addNewBooking');
});

app.post('/addReview', (req, res) => {
    console.log('addReview');
    console.log(req.body);
    // call to addReview
    bookingListContract.addNewReview(req.body.roomId, req.body.rate, req.body.comment, { from: defaultAcc, gas: 500000 }, (error, info) => {
        console.log('Info: ', info)
    });
});

app.post('/transferMoney', (req, res) => {
    console.log('transferMoney');
    // call to transferMoney
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
