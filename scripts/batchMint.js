const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  
  const privateKey = process.env.PRIVATE_KEY;

  // Network provider
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  // Create a provider
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Address of the deployed contract
  const contractAddress = "0xb9EE4bf7592362168ef8017Cda42Fbc811e99ACA";

  const LavanishNFT = await ethers.getContractFactory("lavanish_eth", signer);
  const contract = await LavanishNFT.attach(contractAddress);

  // For mint 5 tokens by mint function
  await contract.mint(5);

  // Print the message token minted successfully
  console.log("5 tokens minted successfully.");
}

// invoke main function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

 // npx hardhat run scripts/batchMint.js --network goerli
 // npx hardhat run scripts/approveDeposit.js --network goerli