/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { AuroraTestnet, Mumbai } from "@thirdweb-dev/chains";

export const NETWORK = AuroraTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x5815058d25e12CA54C4DA8203c403dCDDB7F9086";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x107E64D41044eAf1bBC181c47ddA0Fb60F577071";

export const RENTNFT_COLLECTION_ADDRESS = "0x787641796556f17395C311E8917538461701cd64";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
