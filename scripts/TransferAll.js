const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require('dotenv').config();

const contractAddress = "0x79cBb5F6C7B8712a32A9602BC11EBa596Dc2ad5b";
const contractABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0x421DbB7B5dFCb112D7a13944DeFB80b28eC5D22C";
const walletAddress = "0xbEEfC684cE2a427D76ED212d7AbBe170Fa7455E7";
const toAddress = "0x0ab671A61d1Ac32df09739A4E0111f5bcB921306";

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Using deployer account: ${deployer.address}`);

    const myNFT = await hre.ethers.getContractAt(contractABI, contractAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

    const tokenIds = [0, 1, 2, 3, 4];

    for (let i = 0; i < tokenIds.length; i++) {
        try {
            // Approve the NFT to be transferred
            await myNFT.approve(fxERC721RootAddress, tokenIds[i]);
            console.log(`Approved token ${tokenIds[i]} for transfer`);

            // Transfer the NFT to the Bridge using safeTransferFrom
            await myNFT.transferFrom( walletAddress,toAddress, tokenIds[i]);
            
            console.log(`Transferred token ${tokenIds[i]} to the bridge`);
        } catch (error) {
            console.error(`Error processing token ${tokenIds[i]}: ${error.message}`);
        }
    }
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
        console.error(error);
        process.exit(1);
    });

