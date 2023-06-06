import { Button, ButtonProps } from "@chakra-ui/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { prettyAddress } from "@/lib/utils";
//import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

//import { localhost } from "@/lib/chains";
//import { WALLET_CONNECT_PROJECT_ID } from "@/lib/config";
//const availableChains = [localhost]; //.filter(({ id }) => id === CHAIN_ID);

interface MyProps extends ButtonProps {
  onConnect?: () => void;
}

//const walletConnectConnector = new WalletConnectConnector({
//  chains: availableChains,
//  options: {
//    projectId: WALLET_CONNECT_PROJECT_ID!,
//  },
//});

export default function ConnectWalletButton({ onConnect, ...props }: MyProps) {
  const { address } = useAccount();
  const { connect, isLoading: isConnecting } = useConnect({
    //connector: walletConnectConnector,
    connector: new InjectedConnector(),
    onSuccess: () => onConnect?.(),
  });
  const { disconnect } = useDisconnect();

  return address ? (
    <Button {...props} onClick={() => disconnect()} variant="outline">
      Disconnect {prettyAddress(address)}
    </Button>
  ) : (
    <Button
      {...props}
      onClick={() => connect()}
      isLoading={isConnecting}
      loadingText="Connecting"
    >
      Connect wallet
    </Button>
  );
}
