import { http, createConfig } from "wagmi";
import { base, mainnet, sepolia } from "wagmi/chains";
import { metaMask, walletConnect, coinbaseWallet } from "wagmi/connectors";

const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const wagmiConfig = createConfig({
  // chains: [mainnet, sepolia],
  // transports: {
  //   [mainnet.id]: http(),
  //   [sepolia.id]: http(),
  // },

  chains: [mainnet, base],
  connectors: [walletConnect({ projectId }), metaMask(), coinbaseWallet()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
