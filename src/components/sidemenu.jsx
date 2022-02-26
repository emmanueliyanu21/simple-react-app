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
    <div style={{ width: 200 }}>
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
                <Menu.Item key="1">Dashboard</Menu.Item>
                <Menu.Item key="2">Orders</Menu.Item>
                <Menu.Item key="3">Routes</Menu.Item>
                <Menu.Item key="4">History</Menu.Item>
                <Menu.Item key="5">Profile</Menu.Item>
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
                <Menu.Item key="17">Bikes</Menu.Item>
                <Menu.Item key="18">Orders</Menu.Item>
              </SubMenu>
          <SubMenu key="sub5" icon={<MailOutlined />} title="Primhex Admin">
                <Menu.Item key="19">Dashboard</Menu.Item>
                <SubMenu key="sub6" title="Merchant">
                        <Menu.Item key="21">Overview</Menu.Item>
                        <Menu.Item key="22">Users</Menu.Item>
                        <Menu.Item key="23">Transactions</Menu.Item>
                        <Menu.Item key="24">Rders</Menu.Item>
                        <Menu.Item key="25">Bikes</Menu.Item>
                    </SubMenu>
                <Menu.Item key="26">Transactions</Menu.Item>
                <Menu.Item key="27">Subscription</Menu.Item>
                <Menu.Item key="28">Tracking</Menu.Item>
              </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="User Web">
            <Menu.Item key="29">Dashboard</Menu.Item>
            <Menu.Item key="30">Orders</Menu.Item>
            <Menu.Item key="31">Wallet</Menu.Item>
            <Menu.Item key="32">Profile</Menu.Item>
            <Menu.Item key="33">Notifications</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
  )
}

export default Sidemenu