# permanentpixels

## Install Dependencies

If you are using linux or macOS the following commands will work. Otherwise you can just download the linked files and place them into the correct folder. 
```
wget https://raw.githubusercontent.com/ChainSafe/web3.js/v1.7.0/dist/web3.min.js -O public/js/web3.min.js
wget https://raw.githubusercontent.com/ChainSafe/web3.js/v1.7.0/dist/web3.min.js.map -O public/js/web3.min.js.map
```

```
curl https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=YOUR_CONTRACT_ADDRESS_HERE&apikey=API_KEY_HERE > abi.txt
```

*This url will change based on which network is being used*

Change the domain to the network being used and then change the contract address and ensure you are using the ehterscan or polygonscan API key for the chain you are deploying to. 

## Test locally
* Requires Python3 *

```
python3 -m http.server
```

Visit http://localhost:8000/index.html

## Deploying
```
npm install -g firebase-tools
firebase login
firebase deploy
```
