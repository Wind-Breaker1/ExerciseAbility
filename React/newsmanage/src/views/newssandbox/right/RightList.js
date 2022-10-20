import React,{useState,useEffect} from 'react';
import {Table,Tag,Button,Modal,Popover,Switch } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import axios from 'axios';
const {confirm} = Modal;
export default function RightList() {
  const [dataSource,setDataSource] = useState([]);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render:(id)=> <b>{id}</b>
    },
    {
      title: '权限名称',
      dataIndex: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render: (key)=><Tag color='orange'>{key}</Tag>
    },
    {
      title: '操作',
      render:(item)=>(
      <div>
        <Popover content={<div style={{textAlign:"center"}}>
          <Switch checked={item.pagepermisson} onChange={()=>switchMethod(item)}></Switch>
          </div>} title="页面配置项" trigger={item.pagepermisson===undefined?'':'click'}>
          <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.pagepermisson===undefined}/>
        </Popover>
        <Button type="primary" danger shape='circle' icon={<DeleteOutlined />} onClick={() => showConfirm(item)}></Button>
      </div>)
    },
  ];
  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children').then((res) => {
      const list = res.data;
      list.forEach(item => {
        if (item.children?.length == 0) {
          item.children = '';
        }
      })
      setDataSource(list);
    });
  }, [])
  const switchMethod = (item) => {
    item.pagepermisson = item.pagepermisson == 1 ? 0 :1;
    console.log(item)
    setDataSource([...dataSource])
    if (item.grade){
      axios.patch(`http://localhost:5000/rights/${item.id}`,{
        pagepermisson:item.pagepermisson
      });
    } else {
      axios.patch(`http://localhost:5000/children/${item.id}`,{
        pagepermisson:item.pagepermisson
      });
    }
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
    if (item.grade === 1) {
      setDataSource(dataSource.filter(data => data.id != item.id));
      // axios.delete(`/rights/${item.id}`)
  }else{
      let list = dataSource.filter(data=>data.id===item.rightId)
      list[0].children = list[0].children.filter(data=>data.id!==item.id)
      console.log(...dataSource);
      setDataSource([...dataSource])
      // axios.delete(`/children/${item.id}`)
  }
    
  }
  return (
      <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}} scroll={{y: 290}}/>
  )
}
