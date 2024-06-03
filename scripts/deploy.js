const hre = require("hardhat");

async function main() {
  const crowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const contract = await crowdFunding.deploy(); //instance of contract

  await contract.deployed()
  // console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0