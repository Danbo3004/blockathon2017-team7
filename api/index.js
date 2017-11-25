const express = require("express");
const bodyParser = require("body-parser")
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')

// const configs = require('./config')

const app = express();
const PORT = process.env.PORT || 9999;

const web3 = new Web3(new Web3.providers.HttpProvider('http://www.blockathon.asia:8545/'));
// const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/'));

const bookingContractAbi = '[ { "constant": false, "inputs": [ { "name": "roomId", "type": "bytes32" }, { "name": "rate", "type": "uint256" }, { "name": "comment", "type": "bytes32" } ], "name": "addNewReview", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newBooking", "type": "bytes32" } ], "name": "addNewBooking", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getBookingInfoByKey", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "bookingList", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "reviews", "outputs": [ { "name": "roomId", "type": "bytes32" }, { "name": "rate", "type": "uint256" }, { "name": "comment", "type": "bytes32" } ], "payable": false, "type": "function" } ]';
const bookingContractAddr = '0x9dcdcfa8D682e2E9d142dcd5614092e72604F0C5';

const transferContractAbi = '';
const transferContractAddr = '';

const userAcc = "0xF026bef6694D16c4F8dF3E5279Ab8801E8B2B4dd";
const userAccPk = "52f13c2fe2f99e53588eed126380d2e84d02ef867b0b0fce2df40a9de2a534b7";
// acc btc
const btcAcc = "0x5ad558987acfdba1f3e0f7aa4790fe264353b451";

const refereeAcc = "0xAbC7Ce327EEac6D5CF989cE8b21213Db91d56bc9";

const bookingListContract = web3.eth.contract(JSON.parse(bookingContractAbi)).at(bookingContractAddr);
// const transferContract = web3.eth.contract(transferContractAbi).at(transferContractAddr);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var transferMoneyByRawTx = function (toAddr) {
    web3.eth.getAccounts((error, accounts) => {
        console.log(accounts)
        web3.eth.getTransactionCount(userAcc, (error, txCount) => {
            let privKey = new Buffer(userAccPk, 'hex')
            let rawTransactionObj = {
                nonce: web3.toHex(txCount), to: toAddr,
                value: web3.toHex(web3.toWei(0.01, 'ether')), gasPrice: web3.toHex(21000),
                gasLimit: web3.toHex(300000),
            }
            let tx = new Tx(rawTransactionObj);
            tx.sign(privKey);
            let serializeTx = '0x' + tx.serialize().toString('hex');
            web3.eth.sendRawTransaction(serializeTx, (error, txHash) => {
                console.log(txHash)
            })
        })
    })
}

app.get('/addNewBooking', (req, res) => {
    console.log('addNewBooking');
    // send $ to referee
    transferMoneyByRawTx(refereeAcc);
    // call to addNewBooking
    bookingListContract.addNewBooking('BookingInfo', { from: btcAcc, gas: 500000 }, (error, info) => {
        console.log('Info: ', info)
    });

    res.send('addNewBooking');
});

app.post('/addReview', (req, res) => {
    console.log('addReview');
    // call to addReview
    bookingListContract.addNewReview(req.body.roomId, req.body.rate, req.body.comment, { from: userAcc, gas: 500000 }, (error, info) => {
        console.log('Info: ', info);
    });

    res.send('addReview');
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
