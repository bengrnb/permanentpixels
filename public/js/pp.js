const { contractAddress, abiFile, correctNetworkId } = config;
const { ethereum } = window;
const web3 = new Web3(ethereum);

const checkEthereum = () => {
    return ethereum && ethereum.isMetaMask;
}

const checkNetwork = async () => {
    let networkId = await getNetVersion();

    if (!checkEthereum()) {
        console.debug("Metamask not detected!");
        return false;
    }

    if (networkId !== correctNetworkId) {
        console.log(networkId, correctNetworkId)
        console.debug(`Incorrect network ${networkId} in use!`)
        return false;
    }

    return true;
}

const mint = async (amount) => {
    if (checkNetwork()) {
        const contract = await getContract();
        let accounts = await web3.eth.requestAccounts();



        if (contract && accounts.length) {
            contract.methods.mint(amount).send({ from: accounts[0] }).catch(console.log.bind(console));
        }
    }
    else {
        window.alert("Select Mumbai Network!");
    }
}

const getAbi = async () => {
    let response = await fetch(abiFile);
    let text = await response.text();
    let abi = JSON.parse(text);

    // Etherscan/polygonscan return a json object
    if (abi.result) {
        return JSON.parse(abi.result);
    }

    return abi;
}

const getContract = async () => {
    let abi = await getAbi();
    return new web3.eth.Contract(abi, contractAddress);
}

const getNetVersion = async () => {
    let response = await ethereum.request({ method: 'net_version' });
    return parseInt(response);
}

const connect = async () => {
    web3.eth.requestAccounts().then((accounts) => {

    }).catch(console.error.bind(console));
}