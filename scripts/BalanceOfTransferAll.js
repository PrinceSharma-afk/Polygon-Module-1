const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.attach("0x79cBb5F6C7B8712a32A9602BC11EBa596Dc2ad5b"); // contract address.

    const balance = await myNFT.balanceOf("0x0ab671A61d1Ac32df09739A4E0111f5bcB921306");// to wallet address.
    console.log(`Balance of recipient: ${balance.toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
