const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'SEED PHRASE',
  'INFURA API KEY'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '5000000', from: accounts[0] });

  console.log('Contract deployed to:', result.options.address);

  return process.exit(1);
};
deploy();


// Attempting to deploy from account 0x19Fd1450F65c49e485246a679FFef12F73d4918e
// Contract deployed to: 0x9584EdAF52F346DeC72CA4559a51A6Dc76f091c4