const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require("fs");
const accountPrivatekey = fs.readFileSync(".secret").toString().trim();
const infuraMainKey =
  "wss://mainnet.infura.io/ws/v3/749b4bfa06184014b40df76938f06da6";

  const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
      ethmain: {
        networkCheckTimeout: 500000,
        // from: "0x3997d3AccEBad60EbAe81B2191F81f9055b3B420",
        provider: () =>
          new HDWalletProvider(
            accountPrivatekey,
            `https://mainnet.infura.io/v3/749b4bfa06184014b40df76938f06da6`
          ),
        network_id: 1,
        confirmations: 5,
        timeoutBlocks: 200,
        skipDryRun: true,
      },
    bsctestnet: {
      networkCheckTimeout: 1500000,
      // from: "0x3997d3AccEBad60EbAe81B2191F81f9055b3B420",
      // provider: () => new HDWalletProvider(accountPrivatekey, `wss://data-seed-prebsc-1-s2.binance.org:8545`),
      provider: () =>
        new HDWalletProvider(
          accountPrivatekey,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    goerli: {
      networkCheckTimeout: 500000,
      provider: () =>
        new HDWalletProvider(
          accountPrivatekey,
          "wss://goerli.infura.io/ws/v3/a9408e5619eb436796b761bbc2e61200"
        ),
      network_id: 5, // Ropsten's id
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    bscmain: {
      from: "0xdc02A3B51d86D7a19AD24082C0c82AFFE8412913",
      networkCheckTimeout: 1000000,
      // wss://bsc-ws-node.nariox.org:443
      provider: () => new HDWalletProvider(accountPrivatekey, `https://bsc.getblock.io/463c1971-48d0-47ad-bea9-3f41d7c79ae8/mainnet/`),
      network_id: 56,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai_polygon: {
      provider: () =>
        new HDWalletProvider(
          accountPrivatekey,
          `https://polygon-mumbai.g.alchemy.com/v2/QJwTxuA9PB10v0nFniTosad3S6CYr8kM`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.3", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {
      //   // See the solidity docs for advice about optimization and evmVersion
      //   optimizer: {
      //     enabled: false,
      //     runs: 200,
      //   },
      //   evmVersion: "byzantium",
      // },
    },
  },
};
