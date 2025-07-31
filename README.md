# Ethereum DEX Sniffer (Node.js)

This project monitors Uniswap V2 swap events on Ethereum using ethers.js. 

## Setup
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Replace `YOUR_INFURA_PROJECT_ID` in `index.js` with your Infura (or Alchemy) WebSocket project ID.
3. Run the sniffer:
   ```powershell
   node index.js
   ```

## Features
- Listens for Uniswap V2 swap events in real time.
- Logs swap details to the console.
- Easily extendable for analytics, alerts, or trading bot logic.

## Next Steps
- Add support for more DEXes or pairs.
- Implement advanced analytics or trading strategies.