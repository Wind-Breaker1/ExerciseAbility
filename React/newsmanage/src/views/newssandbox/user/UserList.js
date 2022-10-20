import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Modal, Popover, Switch } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import axios from 'axios';
const { confirm } = Modal;
export default function UserList() {
  const [dataSource, setDataSource] = useState([]);
  const [isAddVisible,setIsAddVisible] = useState(false);
  const [isUpdateVisible,setIsUpdateVisible] = useState(false);
  const [regionList,setRightList] = useState([]);
  const [roleList,setRoleList] = useState([]);
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false);
  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      render: (region) => <b>{region}</b>
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render: (role) => {
        return role?.roleName
      }
    },
    {
      title: '用户名',
      dataIndex: 'username',
      // render: (key)=><Tag color='orange'>{key}</Tag>
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render: (roleState, item) => <Switch checked={roleState} disabled={item.default}></Switch>
    },
    {
      title: '操作',
      render: (item) => (
        <div>
          <Popover content={<div style={{ textAlign: "center" }}>
            <Switch checked={item.pagepermisson} onChange={() => edit(item)}></Switch>
          </div>} title="页面配置项" >
            <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} />
          </Popover>
          <Button type="primary" danger shape='circle' icon={<DeleteOutlined />} disabled={item.default} onClick={() => showConfirm(item)}></Button>
        </div>)
    },
  ];
  useEffect(() => {
    axios.get('http://localhost:5000/users?_expand=role').then((res) => {
      const list = res.data;
      // list.forEach(item => {

      // })
      console.log('11', list);

      setDataSource(list);
    });
  }, [])
  const edit = (item) => {

  }
  const showConfirm = (item) => {
    confirm({
      title: '确定删除吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        deleteItem(item);
      },
    });
  }
  const deleteItem = (item) => {
    setDataSource(dataSource.filter(data => data.id !== item.id))
    // axios.delete(`/users/${item.id}`)
  }
  const addFormOK = () => {
    
  }
  return (
    <div>
      <Button type="primary">新增用户</Button>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} scroll={{ y: 255 }} rowKey="id" />
      <Modal
        visible={isAddVisible}
        title="添加用户"
        okText="确定"
        cancelText="取消"
        onCancel={() => {
          setIsAddVisible(false)
        }}
        onOk={() => addFormOK()}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={addForm}></UserForm>
      </Modal>

      <Modal
        visible={isUpdateVisible}
        title="更新用户"
        okText="更新"
        cancelText="取消"
        onCancel={() => {
          setIsAddVisible(false)
          setIsUpdateDisabled(!isUpdateDisabled)
        }}
        onOk={() => updateFormOK()}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={updateForm} isUpdateDisabled={isUpdateDisabled} isUpdate={true}></UserForm>
      </Modal>
    </div>
  )
}
