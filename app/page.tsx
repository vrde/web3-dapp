"use client";

import { Container, Center } from "@chakra-ui/react";
import ConnectWalletButton from "./components/ConnectWalletButton";

export default function Home() {
  return (
    <Container minH="100vh">
      <Center minH="100vh">
        <ConnectWalletButton />
      </Center>
    </Container>
  );
}
