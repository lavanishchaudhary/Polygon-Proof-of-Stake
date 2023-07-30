const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/lavanish_eth.sol/lavanish_eth.json');
require('dotenv').config();

//ERC721A tokens transferred to the Ethereum FxChain network.
async function main() {

  // Set up connections to network and wallet
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("lavanish_eth");
  const nft = await NFT.attach('0xb9EE4bf7592362168ef8017Cda42Fbc811e99ACA');

  // Get FXRoot contract instance
  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4]; 

  // Approve the nfts for transfer
  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Approval confirmed');

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      wallet.address, 
      tokenIds[i],
      '0x6566'
    );

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Approved and deposited");

  
  // Test balanceOf
  const balance = await nft.balanceOf(wallet.address);

  // Print the balance of the wallet
  console.log("Lavanish NFT wallet balance", wallet.address, "is: ", balance.toString());
}


// Invoke the main function and handle any errors that occur.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
