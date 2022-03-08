# permanentpixels

## Install Dependencies
```
wget https://raw.githubusercontent.com/ChainSafe/web3.js/v1.7.0/dist/web3.min.js -O js/web3.min.js
wget https://raw.githubusercontent.com/ChainSafe/web3.js/v1.7.0/dist/web3.min.js.map -O js/web3.min.js.map
curl https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=YOUR_CONTRACT_ADDRESS_HERE&apikey=YOUR_POLYGONSCAN_KEY_HERE > abi.txt
```
This url will change based on which network is being used

## Setup Contract Pre-reqs


## Test locally
* Requires Python3 *

```
python3 -m http.server
```

Visit http://localhost:8000/index.html