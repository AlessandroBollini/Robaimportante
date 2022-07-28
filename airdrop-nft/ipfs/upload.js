const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Rocky Token",
      image: "https://gateway.moralisipfs.com/ipfs/Qmb86yud6EqLtiJzAy2JNwqgZhW7RPc5KJxCSNSiPyh8Br",
      description: "First Rocky Token"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();