// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract NFT is ERC721URIStorage {
    uint public tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("NFT tokens", "NFT") {
        contractAddress = marketplaceAddress;
    }

    function mint(string memory _tokenURI) external returns(uint) {
        tokenIds ++;
        _safeMint(msg.sender, tokenIds);
        _setTokenURI(tokenIds, _tokenURI);
        setApprovalForAll(contractAddress, true);

        return(tokenIds);
    }

    fallback() external payable {
        console.log(msg.value);
    }

    receive() external payable {
        console.log(msg.value);
    }
}