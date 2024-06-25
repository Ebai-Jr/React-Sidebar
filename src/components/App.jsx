import React, { useState } from "react";
import { Collapse, Layout, Button, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import MenuList from "./MenuList";
import ToggleThemeButton from "./ToggleThemeButton";
// import Header from "./Header";
// import Footer from "./Footer";

const { Header, Sider } = Layout;
function App() {

  const [darkTheme, setdarkTheme] = useState(true);
  const [collapsed, setcollapsed] = useState(false);

  const toggleTheme = () => {
    setdarkTheme(!darkTheme);
  };

  const {
    token: {colorBgContainer}, 
  } = theme.useToken();

  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? "dark" : "light"} className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <Button type="text" className="toggle" onClick={() => setcollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
        </Header>
      </Layout>

      {/* <Header /> 
      <Footer /> */}
    </Layout>
  );
}

export default App;
