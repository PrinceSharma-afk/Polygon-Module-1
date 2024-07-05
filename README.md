# MyNFT Smart Contract
A Solidity smart contract for minting and managing NFTs with scripts such as batchmint,BalanceOf and TransferAll so that we can deploy NFT collection on ETH block.

## Description
The MyNFT project involves creating an ERC721-based Non-Fungible Token (NFT) contract using the OpenZeppelin library. The contract allows the owner to mint NFTs with custom token URIs and provides functionality to retrieve prompt descriptions associated with each token. The project is designed to be deployed and tested on the Sepolia test network.

## Getting Started
1.Installing
Clone the Repository:
git clone <url of this repository>
2.Install Dependencies:
npm install
3.Install Hardhat:
npm install --save-dev hardhat
4.Configure Environment:
Create a .env file and add the following details:
PRIVATE_KEY=your_private_key
SEPOLIA_URL
5.Install dotenv:
npm install --save dotenv
6.Install OpenZeppelin Contracts:
npm install @openzeppelin/contracts

## Executing Program
1. Compile the Smart Contract:
npx hardhat compile
2. Deploy the Contract to Sepolia:
npx hardhat run scripts/DeployMyNFT.js --network sepolia
3. Batch Mint NFTs:
npx hardhat run scripts/BatchMinter.js --network sepolia
4. Transfer All NFTs:
npx hardhat run scripts/transferAll.js --network sepolia
5. Check Balance Of NFTs:
npx hardhat run scripts/BalanceOf.js --network sepolia

## Help
Ensure you have sufficient ETH in your Sepolia account for deploying and interacting with the contract. For additional help, run:
npx hardhat help

## Authors
Prince Sharma

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
