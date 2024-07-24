const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require('dotenv').config();

const contractAddress = "0x0C03dF7E53d315670ae850dCDD7C107B56d67b92";
const contractABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xbEEfC684cE2a427D76ED212d7AbBe170Fa7455E7";

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Using deployer account: ${deployer.address}`);

    const myCollection = await hre.ethers.getContractAt(contractABI, contractAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

    const tokenIds = [0, 1, 2, 3, 4];

    for (let i = 0; i < tokenIds.length; i++) {
        try {
            // Approve the NFT to be transferred
            await myCollection.approve(fxERC721RootAddress, tokenIds[i]);
            console.log(`Approved token ${tokenIds[i]} for transfer`);

            /*
            // Transfer the NFT to the Bridge using safeTransferFrom
            await myCollection.transferFrom( walletAddress,toAddress, tokenIds[i]);
            
            console.log(`Transferred token ${tokenIds[i]} to the bridge`);
            */
           await fxContract.deposit(contractAddress, walletAddress,tokenIds[i], "0x6554"  );
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
