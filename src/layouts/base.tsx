"use client";
import { Breadcrumb, Flex, Layout, Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ReactNode, createElement } from "react";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";

interface BaseLayoutProps {
  children: ReactNode;
}
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const BaseLayout = ({ children, ...props }: BaseLayoutProps) => {
  const { token: themeToken } = theme.useToken();

  return (
    <Layout
      style={{ position: "relative", minWidth: "100vw", minHeight: "100vh" }}
    >
      <Header
        style={{
          background: themeToken.colorPrimary,
          boxShadow: "0px -2px 4px #472814",
          paddingLeft: 20,
          paddingRight: 20,
          borderBottom: `1px solid ${themeToken.colorPrimaryBorder}`,
          WebkitBoxShadow: `0 0 10px ${themeToken.colorPrimaryBorder}`,
          MozBoxShadow: `0 0 10px ${themeToken.colorPrimaryBorder}`,
          position: "relative",
          zIndex: "1",
        }}
      >
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Image
              src="/potato.png"
              alt="Potato Finance"
              width="50"
              height="50"
              priority
            />
            <div className="demo-logo">We are potato</div>
          </Flex>
          <Flex>
            <div>Menu 1</div>
            <div>Menu 2</div>
            <div>Menu 3</div>
          </Flex>
        </Flex>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: themeToken.colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: `1px solid #D58280`,
              WebkitBoxShadow: `0 0 10px #D58280`,
              MozBoxShadow: `0 0 10px #D58280`,
            }}
            items={items2}
          />
        </Sider>

        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: themeToken.colorBgContainer,
            borderRadius: themeToken.borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
  // return <>{children}</>;
};

export default BaseLayout;
