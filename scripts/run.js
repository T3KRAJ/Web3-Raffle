const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const entryFee = hre.ethers.utils.parseEther("0.1");
  console.log("Deploying contracts with account: ", deployer.address);

  const RaffleContractFactory = await hre.ethers.getContractFactory(
    "Raffle"
  );
  const RaffleContract = await RaffleContractFactory.deploy(
    entryFee,
    "500",
    "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    "4010",
    "500000"
  );
  await RaffleContract.deployed();

  console.log("Lottery System address: ", RaffleContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();