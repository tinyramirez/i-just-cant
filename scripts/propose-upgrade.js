// scripts/propose-upgrade.js
const { defender } = require("hardhat");

async function main() {
  const proxyAddress = '0x548bAED2D9a47D94e323D6EaaC17Ecf8E2994907';

  const CantTokenV2 = await ethers.getContractFactory("CantTokenV2");
  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, CantTokenV2, { title: 'Rollback to V2' });
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })