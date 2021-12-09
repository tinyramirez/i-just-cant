// test/CantToken.test.js
const { ethers, upgrades } = require('hardhat');
const { assert } = require('chai');

before ('get factories', async function () {
    this.CantTokenV1 = await ethers.getContractFactory('CantToken');
});

it('deploys', async function () {
    const CantToken = await ethers.getContractFactory('CantToken');
    console.log('Deploying CantToken...');
    const cantToken = await upgrades.deployProxy(CantToken, { kind: 'uups' });
    await cantToken.deployed();
    console.log('CantToken deployed to:', cantToken.address);
});
