import React, {useState} from 'react'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidemenu = () => {

    const [collapsed ] = useState(false);
    
      const toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };


  return (
    <div width={250}
    style={{
      
      borderRight: "2px solid #F6F6F6",
      overflow: "auto",
      overflowX: "hidden",
      height: "100vh",
      position: "fixed",
      left: 0,}}>
        {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        //   defaultSelectedKeys={['1']}
        //   defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
        
          <SubMenu key="sub1" icon={<MailOutlined />} title="Rider Web">
                <Menu.Item key="1"><a href='/rider-dashboard'>Dashboard</a></Menu.Item>
                <Menu.Item key="2"><a href='/rider-orders'>Orders</a></Menu.Item>
                <Menu.Item key="3"><a href='/rider-routes'>Routes</a></Menu.Item>
                <Menu.Item key="4"><a href='/rider-history'>History</a></Menu.Item>
                <Menu.Item key="5"><a href='/rider-profile'>Profile</a></Menu.Item>
            </SubMenu>
          <SubMenu key="sub4" icon={<MailOutlined />} title="Merchant Dashbaord">
                <Menu.Item key="6"><a href='/merchant-dashboard'>Dashboard</a></Menu.Item>
                <Menu.Item key="7"><a href='/merchant-wallet'>Wallet</a></Menu.Item>
                <Menu.Item key="8"><a href='/merchant-user'>Users</a></Menu.Item>
                    <SubMenu key="sub3" title="Settings">
                        <Menu.Item key="9">Customize Application</Menu.Item>
                        <Menu.Item key="10">Business Profile</Menu.Item>
                        <Menu.Item key="11">Privilege Roles</Menu.Item>
                        <Menu.Item key="12">Manage Orders</Menu.Item>
                        <Menu.Item key="13">Teams</Menu.Item>
                        <Menu.Item key="14">Manage Riders</Menu.Item>
                        <Menu.Item key="15">Subscription</Menu.Item>
                        <Menu.Item key="16">My Profile</Menu.Item>
                    </SubMenu>
                <Menu.Item key="17"><a href='/merchant-fleet'>Bikes</a></Menu.Item>
                <Menu.Item key="18"><a href='/merchant-order'>Orders</a></Menu.Item>
              </SubMenu>
          <SubMenu key="sub5" icon={<MailOutlined />} title="Primhex Admin">
                <Menu.Item key="19">
                   <a href='/primhex-dashboard'>Dashboard</a></Menu.Item>
                <Menu.Item key="20">
                   <a href='/primhex-merchant'>Merchant</a></Menu.Item>
                <Menu.Item key="26"><a href='/primhex-transaction'>Transactions</a></Menu.Item>
                <Menu.Item key="27"><a href='/primhex-subscription'>Subscription</a></Menu.Item>
                <Menu.Item key="28"><a href='/primhex-tracking'>Tracking</a></Menu.Item>
              </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="User Web">
            <Menu.Item key="29"><a href='/user-dashboard'>Dashboard</a></Menu.Item>
            <Menu.Item key="30"><a href='/user-orders'>Orders</a></Menu.Item>
            <Menu.Item key="31"><a href='/user-wallet'>Wallet</a></Menu.Item>
            <Menu.Item key="32"><a href='/user-profile'>Profile</a></Menu.Item>
            <Menu.Item key="33"><a href='/user-notification'>Notifications</a></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
  )
}

export default Sidemenu