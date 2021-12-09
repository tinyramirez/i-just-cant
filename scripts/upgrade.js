// scripts/upgrade.js
const { ethers } = require("hardhat");

async function main () {
  const newImplName = 'CantTokenV2';
  const NewImpl = await ethers.getContractFactory(newImplName);
  console.log(`Upgrading to ${newImplName}...`);
  await upgrades.upgradeProxy('0x548bAED2D9a47D94e323D6EaaC17Ecf8E2994907', NewImpl);
  console.log(`CantToken upgraded to:`, newImplName);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });