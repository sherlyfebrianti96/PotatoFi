import { Button, Popover, theme } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import { useAccount } from "wagmi";
import { useState } from "react";
import ConnectingWallet from "./connecting-wallet/connecting-wallet";
import ConnectedWallet from "./connected-wallet/connected-wallet";

const Wallet = () => {
  const { token: themeToken } = theme.useToken();
  const [hover, setHover] = useState(false);

  const { isConnected } = useAccount();

  return (
    <>
      <Popover
        content={isConnected ? <ConnectedWallet /> : <ConnectingWallet />}
      >
        {isConnected ? (
          "Connected"
        ) : (
          <Button
            type="default"
            shape="round"
            size="large"
            icon={<WalletOutlined />}
            style={{
              borderColor: themeToken.colorText,
              background: hover
                ? themeToken.colorPrimaryBorder
                : themeToken.colorText,
              color: "white",
            }}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            Connect Wallet
          </Button>
        )}
      </Popover>
    </>
  );
};

export default Wallet;
