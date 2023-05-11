// const LctPrice = artifacts.require("LctPrice");

// module.exports = async function (deployer, network, accounts) {
//   console.log("Deploying");

//   // Deploy LTCExchange
//   await deployer.deploy(LctPrice);
//   await LctPrice.deployed();
//   console.log("Deployment Completed");
// };

// migrations/2_deploy_box.js
const LctPrice = artifacts.require("LctPrice");

const { deployProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async function (deployer) {
  await deployProxy(LctPrice, ["0xB06a05c7f92578Ef927860604EdAc89fD68dfEC9"], {
    deployer,
    initializer: "storeConstructor",
  });
};
