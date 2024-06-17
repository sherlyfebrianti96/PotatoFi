"use client";
import { wagmiConfig } from "@/providers/wagmi/wagmi";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, ThemeConfig } from "antd";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";

const mainPotato = "#fabbba";

const AppProviders = ({ children }: { children: ReactNode }) => {
  const themeConfig: ThemeConfig = {
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
  };

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AntdRegistry>
          <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
        </AntdRegistry>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default AppProviders;
