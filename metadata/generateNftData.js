const fs = require('fs');
const path = require('path');
console.log(__dirname);

// The nfts array is imported from a different file.
const nfts = require('./nfts');

for (let i = 0; i < nfts.length; i++) {

  // For each NFT, a JSON object is created.
  const json = {
    name: nfts[i].name,
    description: nfts[i].description,
    image: `https://gateway.pinata.cloud/ipfs/${nfts[i].image}`,
  };

  const name = nfts[i].name;

  // Any non-alphanumeric characters in the name are replaced with an empty string for the filename.
  const fileName = `${name.replace(/[^a-zA-Z0-9]/g, '')}`;

  // The JSON object is written to a file.
  fs.writeFileSync(
    path.join(__dirname, 'nftcollection', String(fileName)),
    JSON.stringify(json)
  );
}

// run node metadata/generateNftData.js