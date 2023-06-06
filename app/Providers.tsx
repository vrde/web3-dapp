"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import WagmiProvider from "./components/WagmiProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <WagmiProvider>{children}</WagmiProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
