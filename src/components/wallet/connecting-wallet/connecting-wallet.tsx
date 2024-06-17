import { useConnect } from "wagmi";

const ConnectingWallet = () => {
  const { connectors, connect } = useConnect();

  return (
    <>
      {connectors.map((connector) => (
        <div key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </div>
      ))}
    </>
  );
};

export default ConnectingWallet;
