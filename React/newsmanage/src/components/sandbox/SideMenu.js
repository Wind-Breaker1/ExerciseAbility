import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './index.css'
import axios from 'axios'
const { Sider } = Layout;

// const iconList = {
//   "/home":<UserOutlined />,
//   "/user-manage":<UserOutlined />,
//   "/user-manage/list":<UserOutlined />,
//   "/right-manage":<UserOutlined />,
//   "/right-manage/role/list":<UserOutlined />,
//   "/right-manage/right/list":<UserOutlined />
//   //.......
// }
export default function SideMenu(props) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const {pathname} = useLocation();
  const openKey = ['/' + pathname.split('/')[1]];
  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children').then((res) => {
      setMenu(res.data);
    });
  }, [])
  // const [current, setCurrent] = useState('1');
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  // 路由跳转
  const changeToPath = function (node) {
    navigate(node.key)
  }
  // 判断是否是页面权限
  const checkPagePermission = (node) => node.pagepermisson == 1;

  // 构造侧边栏结构
  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children?.length > 0) {
        let childs = renderMenu(item.children);
        return getItem(item.title, item.key, <UserOutlined />, childs);
      } else {
        return checkPagePermission(item) && getItem(item.title, item.key, <UserOutlined />);
      }
    })
  }
  return (
    <Sider trigger={null} collapsible >
      <div style={{
      display: 'flex',
      height: '100%',
      flexDirection: 'column'
    }}>
        <div className="logo">全球新闻发布管理系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            onClick={changeToPath}
            items={renderMenu(menu)}
            defaultOpenKeys={openKey}
          >
          </Menu>
        </div>
      </div>

    </Sider>
  )
}

