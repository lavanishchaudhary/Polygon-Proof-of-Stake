const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // Get the contract factory
  const NFT = await hre.ethers.getContractFactory("lavanish_eth");

  // Deploy the contract
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT contract deployed to:", nft.address);

  fs.writeFileSync('metadata/contractAddress.js', `
    export const nftAddress = "${nft.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
