import { useEffect, useState } from "react";
import { WagmiConfig } from "wagmi";
import getWagmiConfig from "@/lib/wagmiConfig";

import { configureChains, createConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { localhost } from "@/lib/chains";

const availableChains = [localhost, mainnet, goerli]; //.filter(({ id }) => id === CHAIN_ID);
const { publicClient } = configureChains(availableChains, [publicProvider()]);

//import { WALLET_CONNECT_PROJECT_ID } from "./config";
/*
  export const walletConnectConnector = new WalletConnectConnector({
    chains: availableChains,
    options: {
      projectId: WALLET_CONNECT_PROJECT_ID,
    },
  });
  */

const config = createConfig({
  // autoConnect: true,
  connectors: [new InjectedConnector()],
  publicClient,
});

export default function Wagmi({ children }: { children: React.ReactNode }) {
  return config ? <WagmiConfig config={config}>{children}</WagmiConfig> : null;
}
