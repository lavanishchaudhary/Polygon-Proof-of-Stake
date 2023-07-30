// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract lavanish_eth is ERC721A{

    address public owner;

    // The total amount of tokens that can be minted
    uint256 public maxQuantity = 5;

    // This is the nfts's base URL
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmWr75mKg6mos3gypAkALtNtjLsntaB7FiZ5AVGEzXhChy/";

    // This is the prompt description's URL
    string public prompt =
        "Elon musk fighting with Mark zuckerburg";

    constructor() ERC721A("ElonMusk", "EM") {
        owner = msg.sender;
    }

    // A modifier that only permits the owner to perform a function.
    modifier onlyOwner() {
        require(msg.sender == owner, "This action can be done obly by owner.");
        _;
    }

    // Only the owner can perform the function to mint NFT.
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You are not permitted to mint more than 5. ");
        _mint(msg.sender, quantity);
    }

    // To retrieve the base URL for the NFTs by override the baseURI method.
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Return the prompt description's URL.
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
