const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const mnuemonic = "twelve double task shoe aisle monitor butter draft absent rifle spirit fade";
const provider = new HDWalletProvider(
    mnuemonic, 
    "https://rinkeby.infura.io/LMoJv4xHBN8meKeKCQNd"
);
const web3 = new Web3(provider);

const deploy = async function() {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};

deploy();