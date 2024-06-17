import { Button } from "antd";
import { useAccount, useBalance, useDisconnect } from "wagmi";

const ConnectedWallet = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const balance = useBalance({ address });

  return (
    <div>
      <div>Wallet address : {address}</div>
      <div>
        Balance : {Number(balance.data?.formatted)?.toFixed(3)}{" "}
        {balance.data?.symbol}
      </div>
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </div>
  );
};

export default ConnectedWallet;
