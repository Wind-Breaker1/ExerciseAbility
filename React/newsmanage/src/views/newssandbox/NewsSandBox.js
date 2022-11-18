import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import Home from '../../views/newssandbox/home/Home';
import UserList from '../../views/newssandbox/user/UserList';
import RoleList from '../../views/newssandbox/right/RoleList';
import RightList from '../../views/newssandbox/right/RightList';
import NewsDraft from '../newssandbox/newsManage/NewsDraft';
import { Route, Routes, Navigate } from 'react-router-dom';
import NoPermission from './noperssion/NoPermission';
import { Layout } from 'antd';
import './NewsSandBox.css'
const { Content } = Layout;
export default function Login() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout" >
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow:'auto'
          }}
        >
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/user-manage/list' element={<UserList />}></Route>
            <Route path='/right-manage/role/list' element={<RoleList />}></Route>
            <Route path='/right-manage/right/list' element={<RightList />}></Route>
            <Route path='/news-manage/draft' element={<NewsDraft />}></Route>
            <Route path="/" element={<Navigate to="/home" />} ></Route>
            <Route path="*" element={<NoPermission />} ></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}