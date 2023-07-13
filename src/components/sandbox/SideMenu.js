import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './index.css'
export default function SideMenu() {
  return (
      <Sider trigger={null} collapsible collapsed={false}>
        <div className='logo'>全球新闻发布系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
            {
              key: '4',
            },
          ]}
        />
      </Sider>
  )
}
