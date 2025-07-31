// Basic Uniswap V2 swap event sniffer using ethers.js
const { ethers } = require('ethers');

// Replace with your Ethereum node WebSocket URL (e.g., Infura, Alchemy)
const WEBSOCKET_URL = 'wss://mainnet.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID';

// Uniswap V2 Pair contract ABI (only Swap event)
const UNISWAP_V2_PAIR_ABI = [
  "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)"
];

// Example Uniswap V2 Pair address (e.g., WETH/USDT)
const PAIR_ADDRESS = '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852';

async function main() {
  const provider = new ethers.WebSocketProvider(WEBSOCKET_URL);
  const pairContract = new ethers.Contract(PAIR_ADDRESS, UNISWAP_V2_PAIR_ABI, provider);

  console.log('Listening for Uniswap V2 Swap events...');

  pairContract.on('Swap', (sender, amount0In, amount1In, amount0Out, amount1Out, to, event) => {
    console.log(`Swap event:`);
    console.log({ sender, amount0In: amount0In.toString(), amount1In: amount1In.toString(), amount0Out: amount0Out.toString(), amount1Out: amount1Out.toString(), to });
    // You can add more logic here (alerts, analytics, etc.)
  });
}

main().catch(console.error);
