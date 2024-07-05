const hre = require("hardhat");

async function main() {
  const prompts = [
    "Prompt 1",
    "Prompt 2",
    "Prompt 3",
    "Prompt 4",
    "Prompt 5"
  ];

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(prompts);

  await myNFT.waitForDeployment();

  console.log("MyNFT deployed to:", await myNFT.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
