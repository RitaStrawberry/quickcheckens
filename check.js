const ethers = require('ethers');

// Connect to the Ethereum mainnet
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

async function getEthAddress(ensName) {
    try {
        const address = await provider.resolveName(ensName);
        return address;
    } catch (error) {
        console.error(`Failed to resolve ENS name: ${error}`);
    }
}

getEthAddress('example.eth').then(address => console.log(address));
