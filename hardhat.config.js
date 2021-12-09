require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require('@openzeppelin/hardhat-defender');
require("@nomiclabs/hardhat-etherscan");

const privateKey = process.env.PRIVATE_KEY;
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defender: {
    apiKey: process.env.DEFENDER_TEAM_API_KEY,
    apiSecret: process.env.DEFENDER_TEAM_API_SECRET_KEY
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [ privateKey ]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanApiKey
  },
  solidity: {
    version: '0.8.2',
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

