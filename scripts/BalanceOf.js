const { ethers } = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x45B070E0E23A9EE49CCeC87a2709cD063255F43b";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xbEEfC684cE2a427D76ED212d7AbBe170Fa7455E7";

async function main() {
    const provider = ethers.getDefaultProvider(process.env.AMOY_URL);
    const [deployer] = await ethers.getSigners();

    const myNFT = new ethers.Contract(contractAddress, tokenABI, provider);

    const balance = await myNFT.balanceOf(walletAddress);
    console.log(`Balance of recipient: ${balance.toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
