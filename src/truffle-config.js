const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    mumbai:{
      provider: () => new HDWalletProvider("0x3140363955175B1a2633f3d9DF60C0Aa61c918Bc", "HTTP://127.0.0.1:7545"),
      network_id: 5777,
    }
    // matic: {
    //   provider: () => new HDWalletProvider("54425394a8e76245f8c344c0b404c93a66a2cf3c10e1b66f11068b2f4ffb4f3d", `https://rpc-mumbai.maticvigil.com`),
    //   network_id: 80001,
    // },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
        version: "0.8.13",
    }
  }
}