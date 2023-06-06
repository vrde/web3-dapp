import { Address } from "wagmi";

export const TITLE = process.env.NEXT_PUBLIC_TITLE;
export const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION;
export const CHAIN_ID =
  process.env.NEXT_PUBLIC_CHAIN_ID &&
  parseInt(process.env.NEXT_PUBLIC_CHAIN_ID);
export const NETWORK_CONFIG = process.env.NETWORK_CONFIG;
export const WALLET_CONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

// Load addresses and ABIs
// export const MY_CONTRACT_ADDRESS = NETWORK_CONFIG["MyContract"]?.address as Address;
// export const MY_CONTRACT_ABI = myAbi as const;
