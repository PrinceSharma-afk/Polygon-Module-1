const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const metadataURIs = [
        "ipfs://QmSFsWXb86QGgZQjLz1kzRfoNFgts8KieJStxxrHF8VLNS",
        "ipfs://QmaS3KMjdMUPb9rsK776gzWCwP3Fv6oxFapmYUQtQZ8nrB",
        "ipfs://QmUutkaaUKcvRrBttQo5MLgEiF4FsqhU3YmQXA1YhwCB3g",
        "ipfs://QmdcrQPwgTr68xkrZtdcuujRu9MQgiQtCv8e5GEhsQv3xg",
        "ipfs://QmZogeKfrsnQvBuYSBTevtvxHXVBFb3uzfH9JmKVohJs7w"
    ];

    
        const deployedContractAddress = "0x79cBb5F6C7B8712a32A9602BC11EBa596Dc2ad5b"; 
    

        const MyNFTArtifact = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');
        const myNFT = new ethers.Contract(deployedContractAddress, MyNFTArtifact.abi, deployer);
    
        console.log("Interacting with contract at address:", deployedContractAddress);
    
        for (let i = 0; i < metadataURIs.length; i++) {
            await myNFT.mint(deployer.address, i, metadataURIs[i]);
            console.log(`Minted NFT ${i} to ${deployer.address}`);
        }
    }
    
    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });

