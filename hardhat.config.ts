import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();
let key= ""
const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.1',
  },
  networks: {
    // for mainnet
    'op-mainnet': {
      url: 'https://optimism.llamarpc.com',
      accounts: [key],
      gasPrice: "auto",
    },
    // for testnet
    
  },
  etherscan: {
    apiKey: "W1MIKTFQBJRDVKKG8AP3Z7D3G878WDBC4V",
  },
  defaultNetwork: 'op-mainnet',
};

export default config;