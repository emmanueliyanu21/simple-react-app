import { Layout, Menu } from 'antd';
import React from 'react'
import Sidemenu from '../../src/components/sidemenu'

const { Header, Sider, Content } = Layout;

const dashboard = () => {
  return (
    <Layout>
    <Sidemenu />
    {/* <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout> */}
    </Layout>
  )
}

export default dashboard