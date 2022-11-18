import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Popover, Tree} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import axios from 'axios';
const { confirm } = Modal;
export default function RoleList() {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentRights,setCurrentRights] = useState([]);
  const [currentId, setcurrentId] = useState(0);
  const [rightList,setRightList] = useState([]);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => <b>{id}</b>
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
    },
    {
      title: '操作',
      render: (item) => (
        <div>
          <Popover title="权限分配" trigger={item.pagepermisson === undefined ? '' : 'click'}>
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => editRole(item)} />
          </Popover>
          <Button type="primary" danger shape='circle' icon={<DeleteOutlined />} onClick={() => showConfirm(item)}></Button>
        </div>)
    },
  ];

  useEffect(() => {
    axios.get('http://localhost:5000/roles').then((res) => {
      setDataSource(res.data);
    });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children').then((res) => {
      setRightList(res.data);
    });
  }, [])
  const editRole = (node) => {
    setVisible(true);
    setcurrentId(node.id);
    setCurrentRights(node.rights);
  }
  const showConfirm = (item) => {
    confirm({
      title: '确定删除吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        deleteItem(item);
      },
    });
  };
  const deleteItem = (item) => {
    setDataSource(dataSource.filter(data => data.id != item.id));
    // axios.delete(`/rights/${item.id}`)
  }
  const handleOk = () => {
    setVisible(false);
    setDataSource(dataSource.map(item => {
      if (item.id == currentId) {
        return {
          ...item,
          rights:currentRights
        }
      }
      return item;
    }))
    axios.patch(`http://localhost:5000/roles/${currentId}`,{
      rights:currentRights
    })
  }
  const handleCancel = () => {
    setVisible(false);
  }
  const onCheck = (checkKeys) => {
    setCurrentRights(checkKeys);
  }
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} scroll={{ y: 290 }} rowKey="id" />
      <Modal title="权限分配" open={visible} onOk={handleOk} onCancel={handleCancel}>
        <Tree
          checkable
          checkedKeys={currentRights}
          onCheck={onCheck}
          // checkStrictly = {true}
          treeData={rightList}
        />
      </Modal>
    </div>
  )
}
