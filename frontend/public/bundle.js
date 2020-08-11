var contractABI = [];
var contractAddress = '0x4eFE96264Da23fC8CF22d4cbDa5F883A661403aD';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log(simpleSmartContract);

web3.eth.getAccounts()
    .then(console.log);
