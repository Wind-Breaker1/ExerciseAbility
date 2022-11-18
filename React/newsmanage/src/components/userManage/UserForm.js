import React, { useState, useEffect, forwardRef } from 'react';
import { Select, Form, Input } from 'antd';
const { Option } = Select;
const UserForm = forwardRef((props, ref) => {
  const [isDisabled, setIsDisabled] = useState(false)
  useEffect(() => {
    setIsDisabled(props.isUpdateDisabled)
  }, [props.isUpdateDisabled])
  const checkRegionDisabled = () => {

  }
  const checkRoleDisabled = () => {

  }
  return (
    <Form ref={ref} layout="vertical">
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="区域"
        name="region"
        rules={isDisabled?[]:[
          {
            required: true,
            message: 'Please choose your region!',
          },
        ]}
        
      >
        <Select disabled={isDisabled}>
          {
            props.regionList.map(item =>
              <Option value={item.value} key={item.id} disabled={checkRegionDisabled(item)}>{item.title}</Option>
            )
          }
        </Select>
      </Form.Item>
      <Form.Item
        label="角色"
        name="roleId"
        rules={[
          {
            required: true,
            message: 'Please input your roleId!',
          },
        ]}
      >
        <Select onChange={(value) => {
          if (value === 1) {
            setIsDisabled(true)
            ref.current.setFieldsValue({
              region: ""
            })
          } else {
            setIsDisabled(false)
          }
        }}>
          {
            props.roleList.map(item =>
              <Option value={item.id} key={item.id} disabled={checkRoleDisabled(item)}>{item.roleName}</Option>
            )
          }
        </Select>
      </Form.Item>
    </Form>
  );
})
export default UserForm;
