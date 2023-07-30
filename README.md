# Polygon-Proof-of-Stake
This Solidity smart contract is named "lavanish_eth" and it is an implementation of an ERC-721A non-fungible token (NFT) contract. The contract inherits from the "ERC721A" contract, which means it extends the functionality of the ERC-721A standard for NFTs. ERC-721A is an extension of the ERC-721 standard with additional features.
## Description
It is an implementation of an ERC-721A non-fungible token (NFT) contract that extends the functionality of the ERC-721A standard. It allows the contract owner to mint up to 5 NFTs, and each NFT has a base URL for its metadata and a prompt description of "Elon Musk fighting with Mark Zuckerberg". The contract also includes a modifier to restrict certain functions to be called only by the contract owner.   

` Batch Minting of Tokens`       
It is written in JavaScript that interacts with a deployed Ethereum smart contract called `lavanish_eth`, which represents an ERC-721A NFT contract. The script reads the private key from the environment variable `PRIVATE_KEY`, creates a provider for the Ethereum network, and sets up a signer using the private key and provider to execute transactions. It then attaches to the deployed "lavanish_eth" contract using the specified contract address and mints 5 tokens using the mint function. The script logs a success message if the minting is successful.        

`ApproveDeposit`              
It is also written in JavaScript that facilitates the transfer of ERC721A tokens ("lavanish_eth" NFTs) from the Ethereum network to the Ethereum FxChain network using the FxPortal Bridge. It connects to the Ethereum Goerli network, retrieves the private key, sets up a wallet and a signer, and obtains instances of the ERC721A contract and the FXRoot contract. The script then approves the NFTs for transfer, deposits them to the FXRoot contract, and tests the wallet balance to confirm the successful transfer.
## Geting Started
### Prerequisites
1. Use Lexica instead of DALLE 2 or Midjourney which is unpaid to generate a 5-item NFT collection.
2. Set up an IPFS node and create an account on pinata.cloud to store the generated NFT items on IPFS.
3. Set up the FxPortal Bridge to facilitate the transfer of NFTs from Ethereum to Polygon Mumbai.
### Executing program
**Step 1:** Go to main project directory and run the folloeing command.
```
npm i
```
**Step 2:** Deploy the ERC721A contract on the Goerli Ethereum Testnet using Hardhat.
```
npx hardhat run scripts/deploy.js --network goerli
```
**Step 3:** Map NFT Collection using Polygon Network Token Mapper. (Optional)     
**Step 4:** Now, interact with the deployed ERC721A contract and batch mint all 5 NFTs by using this command:
```
npx hardhat run scripts/batchMint.js --network goerli
```
**Step 5:** Approve the NFTs for transfer using the `setApprovalForAll` function of the ERC721A contract. Call the FxPortal Bridge to deposit the approved NFTs from Ethereum to Polygon Mumbai.
```
npx hardhat run scripts/approveDeposit.js --network goerli
```
## Authors
Metacrafter Student   
[Lavanish Chaudhary](https://www.linkedin.com/in/lavanish-chaudhary/)
## License
This project is licensed under the MIT License.
