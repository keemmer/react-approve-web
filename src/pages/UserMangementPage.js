import React, { useState } from 'react'
import { Breadcrumb } from 'antd';
import moment from 'moment';
import {
  Form,
  Input,
  Radio,
  Upload,
  Button,
  DatePicker,
  Row,
  Col,
  Modal,
  Table,
  Space,
  Switch,
  Typography
} from 'antd';

import {
  UploadOutlined,
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
  
} from '@ant-design/icons'

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};






const SignUpPage = () => {
  const [form] = Form.useForm();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const showAddModal = () => {
    setIsAddModalVisible(true);
  };
  const handleAddOk = () => {
    setIsAddModalVisible(false);
  };
  const handleAddCancel = () => {
    setIsAddModalVisible(false);
  };

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const showEditModal = (data) => {
    setIsEditModalVisible(true);
    form.setFieldsValue({
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      gender: data.gender,
      birthday: moment(data.birthday, 'YYYY-MM-DD'),
      address: data.address,
      role: data.role,
      OTP: data.OTP

    })
  };
  const handleEditOk = () => {
    setIsEditModalVisible(false);
  };
  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const dataSource = [
    {
      id: '1',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "M",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'MEMBER',
      OTP: true
    },
    {
      id: '2',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "M",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'OPERATOR',
      OTP: false
    },
    {
      id: '3',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "M",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'MEMBER',
      OTP: null
    },
    {
      id: '4',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "M",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'MEMBER',
      OTP: true
    },
    {
      id: '5',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "F",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'ADMIN',
      OTP: true
    },
    {
      id: '6',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "M",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'OPERATOR',
      OTP: false
    },
    {
      id: '7',
      firstname: 'Mike',
      lastname: 'Adric',
      username: 'Mike',
      gender: "F",
      birthday: '1990-05-05',
      address: '10 Downing Street',
      role: 'MEMBER',
      OTP: false
    },

  ];

  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'firstname',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'lastname',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'OTP',
      dataIndex: 'OTP',
      key: 'OTP',
      render: (text, record) => (
        record.OTP === true ? (
          <CheckOutlined />
        ) : record.OTP === false ? (
          <CloseOutlined />
        ) : null
      ),
    },
    {
      title: 'action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button htmlType="button" icon={<EditOutlined />} onClick={() => { showEditModal(record) }} />
          <Button type="danger" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];


  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Sign up</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 520 }}>
        <Typography.Title level={3} strong style={{ textAlign: 'center', margin: '2rem' }}>
          Users Register
        </Typography.Title>
        <Row justify="end">
          <Col style={{ padding: '1.5rem 1%' }}>
            <Button icon={<UserAddOutlined />} onClick={showAddModal}>
              Add
            </Button>
          </Col>
        </Row>
        <Table dataSource={dataSource} columns={columns} rowKey="id" />

        <Modal
          title="Add user"
          width={1000}
          visible={isAddModalVisible}
          onOk={handleAddOk}
          onCancel={handleAddCancel}
        >
          <Form
            {...formItemLayout}
            autoComplete="off"
          >
            <Form.Item label="Firstname - Lastname" style={{ margin: '0px' }}>
              <Row>
                <Col sm={{ span: 11 }}>
                  <Form.Item
                    name="firstname"
                    rules={[{
                      required: true,
                      message: 'Please input your firstname',
                    },]}>
                    <Input placeholder="Please input firstname" />
                  </Form.Item>
                </Col>
                <Col sm={{ span: 11, offset: 2 }}>
                  <Form.Item
                    name="lastname"
                    rules={[{
                      required: true,
                      message: 'Please input your lastname',
                    },]}>
                    <Input placeholder="Please input lastname" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="Username"
              name="Username"
              rules={[{
                required: true,
                message: 'Please input your username',
              },]}>
              <Input placeholder="Please input username" />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="radio-group"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Radio.Group>
                <Radio.Button value="M">Male</Radio.Button>
                <Radio.Button value="F">Female</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date Of Birth"
              rules={[{
                type: 'object',
                required: true,
                message: 'Please select time!',
              }]}>
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Input.TextArea showCount maxLength={200} placeholder="Please input" />
            </Form.Item>
            <Form.Item
              label="Role"
              name="radio-group"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Radio.Group>
                <Radio.Button value="MEMBER">Member</Radio.Button>
                <Radio.Button value="OPERATOR">Operator</Radio.Button>
                <Radio.Button value="ADMIN">Admin</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="OTP"
              name="OTP"
              valuePropName="checked"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="imageUpload"
              label="image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Image"
            >
              <Upload name="person" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload image</Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Edit user"
          width={1000}
          visible={isEditModalVisible}
          onOk={handleEditOk}
          onCancel={handleEditCancel}
        >
          <Form
            form={form}
            {...formItemLayout}
            autoComplete="off"
            onFieldsChange={(_, allFields) => {
              console.log(allFields);
            }}
          >
            <Form.Item label="Firstname - Lastname" style={{ margin: '0px' }}>
              <Row>
                <Col sm={{ span: 11 }}>
                  <Form.Item
                    name="firstname"
                    rules={[{
                      required: true,
                      message: 'Please input your firstname',
                    },]}>

                    <Input placeholder="Please input firstname" />
                  </Form.Item>
                </Col>
                <Col sm={{ span: 11, offset: 2 }}>
                  <Form.Item
                    name="lastname"
                    rules={[{
                      required: true,
                      message: 'Please input your lastname',
                    },]}>
                    <Input placeholder="Please input lastname" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[{
                required: true,
                message: 'Please input your username',
              },]}>
              <Input placeholder="Please input" />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Radio.Group>
                <Radio.Button value="M">Male</Radio.Button>
                <Radio.Button value="F">Female</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[{
                type: 'object',
                required: true,
                message: 'Please select time!',
              }]}>
              <DatePicker format='YYYY-MM-DD' />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Input.TextArea showCount maxLength={200} placeholder="Please input" />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Radio.Group>
                <Radio.Button value="MEMBER">Member</Radio.Button>
                <Radio.Button value="OPERATOR">Operator</Radio.Button>
                <Radio.Button value="ADMIN">Admin</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="OTP"
              name="OTP"
              valuePropName="checked"
              rules={[{
                required: true,
                message: 'Please input your',
              },]}>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="imageUpload"
              label="image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Image"
            >
              <Upload name="person" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload image</Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" >
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div >
  )
}

export default SignUpPage