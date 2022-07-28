const friends = [
  "0xD97ced0D1FBE093c1A697D493927712fc620765d",
  "0x90FCbD06826552d1C05fbAC776277Fe4D05adb7f"
];
const existingContractAddr = "0xE15724A9DAA1e2cf54e3718ef7024a9a531d9557";

async function main() {
  const nft = await hre.ethers.getContractAt("RockyToken", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "QmNMpqKFMxa7CxNdFLPqdPhy6mSGV52rAWmmw3jPEM6VTe";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
