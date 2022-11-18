import React, { useState, useEffect, useRef } from 'react';
import { Table, Button, Modal, Switch } from 'antd';
import UserForm from '../../../components/userManage/UserForm';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import axios from 'axios';
const { confirm } = Modal;
export default function UserList() {
  const [dataSource, setDataSource] = useState([]);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const [regionList, setRightList] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false);
  const [current, setcurrent] = useState(null)
  const addForm = useRef(null);
  const updateForm = useRef(null);
  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      filters: [
        ...regionList.map(item => ({
          text: item.title,
          value: item.value
        })),
        {
          text: "全球",
          value: "全球"
        }

      ],
      onFilter: (value, item) => {
        if (value === "全球") {
          return item.region === ""
        }
        return item.region === value
      },
      render: (region) => <b>{region || '全球'}</b>
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render: (role) => role?.roleName
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render: (roleState, item) => <Switch checked={roleState} disabled={item.default} onChange={() => handleChange(item)}></Switch>
    },
    {
      title: '操作',
      render: (item) => (
        <div>
          <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} onClick={() => handleUpdate(item)} />
          <Button type="primary" danger shape='circle' icon={<DeleteOutlined />} disabled={item.default} onClick={() => showConfirm(item)}></Button>
        </div>)
    },
  ];
  useEffect(() => {
    axios.get('http://localhost:5000/users?_expand=role').then((res) => {
      setDataSource(res.data);
    });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/roles').then((res) => {
      setRoleList(res.data);
    });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/regions').then((res) => {
      setRightList(res.data);
    });
  }, [])
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
    axios.delete(`http://localhost:5000/users/${item.id}`)
  }
  const addFormOK = () => {
    addForm.current.validateFields().then(value => {
      setIsAddVisible(false);
      axios.post('http://localhost:5000/users', {
        ...value,
        "roleState": true,
        "default": false,
      }).then(res => {
        setDataSource([...dataSource, {
          ...res.data,
          role: roleList.filter(item => item.id === value.roleId)[0]
        }])
        addForm.current.resetFields()
      })
    }).catch(err => console.log(err));
  }
  const updateFormOK = () => {
    updateForm.current.validateFields().then(value => {
      setIsUpdateVisible(false)
      setDataSource(dataSource.map(item => {
        if (item.id === current.id) {
          return {
            ...item,
            ...value,
            role: roleList.filter(data => data.id === value.roleId)[0]
          }
        }
        return item;
      }))
      setIsUpdateDisabled(!isUpdateDisabled)
      axios.patch(`/users/${current.id}`, value)
    })
  }
  const handleUpdate = async(item) => {
    // setTimeout(() => {
      await setIsUpdateVisible(true);//不能保证同步更新
      if (item.roleId === 1) {
        //禁用
        setIsUpdateDisabled(true);
      } else {
        //取消禁用
        setIsUpdateDisabled(false);
      }
      console.log(updateForm.current);
      updateForm.current.setFieldsValue(item);
    // }, 0)
    setcurrent(item)
  }
  const handleChange = (item) => {
    item.roleState = !item.roleState
    setDataSource([...dataSource])
    axios.patch(`http://localhost:5000/users/${item.id}`, {
      roleState: item.roleState
    })
  }
  return (
    <div>
      <Button type="primary" onClick={() => setIsAddVisible(true)}>新增用户</Button>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} scroll={{ y: 255 }} rowKey="id" />
      <Modal
        open={isAddVisible}
        title="添加用户"
        okText="确定"
        cancelText="取消"
        onCancel={() => {
          setIsAddVisible(false);
        }}
        onOk={() => addFormOK()}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={addForm}></UserForm>
      </Modal>

      <Modal
        open={isUpdateVisible}
        title="更新用户"
        okText="更新"
        cancelText="取消"
        onCancel={() => {
          setIsUpdateVisible(false);
          setIsUpdateDisabled(!isUpdateDisabled);
        }}
        onOk={() => updateFormOK()}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={updateForm} isUpdateDisabled={isUpdateDisabled} isUpdate={true}></UserForm>
      </Modal>
    </div>
  )
}
