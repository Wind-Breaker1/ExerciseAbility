import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './index.css'
const { Sider } = Layout;

const menuItems = [
  {
    key: '/',
    icon: <UserOutlined />,
    label: '首页',
  },
  {
    key: '/user',
    icon: <VideoCameraOutlined />,
    label: '用户管理',
    children: [
      {
        key: '/user/list',
        icon: <UploadOutlined />,
        label: '用户列表',
      },
    ]
  },
  {
    key: '/right',
    icon: <UploadOutlined />,
    label: '权限管理',
    children: [
      {
        key: '/right/rolelist',
        icon: <VideoCameraOutlined />,
        label: '角色列表',
      },
      {
        key: '/right/rightlist',
        icon: <UploadOutlined />,
        label: '权限列表',
      },
    ]
  },
  {
    key: '/',
    icon: <UploadOutlined />,
    label: '用户管理',

  },
]

export default function SideMenu(props) {
  const navigate = useNavigate();
  const changeToPath = function (node) {
    console.log(node)
  }
  return (
    <Sider trigger={null} collapsible >
      <div className="logo">全球新闻发布管理系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuItems}
        onSelect="changeToPath"
      />
    </Sider>
  )
}

