// scripts/deploy.js
async function main () {
    const CantToken = await ethers.getContractFactory('CantToken');
    console.log('Deploying CantToken...');
    const cantToken = await upgrades.deployProxy(CantToken, { kind: 'uups' });
    await cantToken.deployed();
    console.log('CantToken deployed to:', cantToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });