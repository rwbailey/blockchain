const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1535319866314,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1535320104992,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1535320258100,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "33fcc2a0a97911e895b657d8ebcf7f7c",
"transactionId": "c2450400a97911e895b657d8ebcf7f7c"
},
{
"amount": 1600,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "ff1c45a0a97911e895b657d8ebcf7f7c"
},
{
"amount": 200,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "176e29c0a97a11e895b657d8ebcf7f7c"
},
{
"amount": 300,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "1a5bfae0a97a11e895b657d8ebcf7f7c"
}
],
"nonce": 10764,
"hash": "00000e6aca50bddbc2235bdcc1f9ca5253b2aaf9fdcc893e03da335eb8937113",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1535320304314,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "33fcc2a0a97911e895b657d8ebcf7f7c",
"transactionId": "1d82dd60a97a11e895b657d8ebcf7f7c"
},
{
"amount": 400,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "2e1284f0a97a11e895b657d8ebcf7f7c"
},
{
"amount": 500,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "30e61750a97a11e895b657d8ebcf7f7c"
},
{
"amount": 600,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "3336be10a97a11e895b657d8ebcf7f7c"
},
{
"amount": 700,
"sender": "rvihrbvpiqrhevbphvrivhbr",
"recipient": "qrhevbphvrivhbrrvihrbvpi",
"transactionId": "3593c0e0a97a11e895b657d8ebcf7f7c"
}
],
"nonce": 117541,
"hash": "000073dddd3522edb97bf9200bcf6788e766180d289a2d821437b7fe160f491c",
"previousBlockHash": "00000e6aca50bddbc2235bdcc1f9ca5253b2aaf9fdcc893e03da335eb8937113"
},
{
"index": 5,
"timestamp": 1535320314973,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "33fcc2a0a97911e895b657d8ebcf7f7c",
"transactionId": "390eb6d0a97a11e895b657d8ebcf7f7c"
}
],
"nonce": 15093,
"hash": "00002a787e90890268a554f7b379b2de645aa1c0b889c82a5273237cf31480b5",
"previousBlockHash": "000073dddd3522edb97bf9200bcf6788e766180d289a2d821437b7fe160f491c"
},
{
"index": 6,
"timestamp": 1535320318919,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "33fcc2a0a97911e895b657d8ebcf7f7c",
"transactionId": "3f694d10a97a11e895b657d8ebcf7f7c"
}
],
"nonce": 65835,
"hash": "00003a90e8caa06bf6243f9e9ad7b13d4e7809bd75c0117cf6f5e060f53e6921",
"previousBlockHash": "00002a787e90890268a554f7b379b2de645aa1c0b889c82a5273237cf31480b5"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "33fcc2a0a97911e895b657d8ebcf7f7c",
"transactionId": "41c31b90a97a11e895b657d8ebcf7f7c"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};


console.log('VALID:', bitcoin.chainIsValid(bc1.chain));