import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const mainPotato = "#fabbba";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: mainPotato,
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#FFDEDC",
            colorText: "#AF504D",
            colorPrimaryBorder: "#D58280",
          },
          components: {
            Menu: {
              colorPrimary: "#681210",
              itemBg: "#FFDEDC",
              itemSelectedBg: mainPotato,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default AppProviders;
