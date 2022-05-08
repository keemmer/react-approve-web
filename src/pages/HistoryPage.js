import React, { useState } from 'react'
import {
  Breadcrumb,
  Row,
  Col,
  Card,
  Avatar,
  Button,
  Form,
  Modal,
  Input,
  Radio,
  DatePicker,
  Upload,
} from 'antd';
import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import moment from 'moment'

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
    OTP: true
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
    OTP: null
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
    role: null,
    OTP: false
  },
];

const HistoryPage = () => {

  const [form] = Form.useForm();
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
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Transection</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 520 }}>
        {/* {JSON.stringify(dataSource)} */}
        <Row gutter={[16, 16]}>
          {dataSource.map((user) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col span={6} key={user.id} >
              <Card title={(
                <>
                  <div className="cart-title-avatar-name">
                    <div>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div>
                      <div>
                        {user.firstname} {user.lastname}
                      </div>
                      {
                        user.role === "MEMBER" ? (
                          <div className="tag-user-status-green">
                            {user.role}
                          </div>
                        ) : user.role === "OPERATOR" ?  (
                          <div className="tag-user-status-yellow">
                            {user.role}
                          </div>
                        ) : user.role === "ADMIN"  ? (
                          <div className="tag-user-status-red">
                            {user.role}
                          </div>
                        ) : null
                      }
                    </div>
                  </div>
                  <div>
                    {user.OTP === true ? (
                      <CheckOutlined style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '16px',
                        color: "green",
                        width: '32px',
                        height: '32px',
                        border: '2px solid green',
                        borderRadius: '50%',
                      }} />
                    ) : user.OTP === false ? (
                      <CloseOutlined style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '16px',
                        color: "red",
                        width: '32px',
                        height: '32px',
                        border: '2px solid red',
                        borderRadius: '50%',
                      }} />
                    ) : null}
                  </div>
                </>
              )} >
                <p>{`Username: ${user.username}`}</p>
                <p>{`Gender: ${user.gender}`}</p>
                <p>Address:</p>
                <p>{`${user.address}`}</p>
                <Row >
                  <Col flex="auto"></Col>
                  <Col flex="none">
                    <Button htmlType="button" icon={<EditOutlined />} onClick={() => { showEditModal(user) }} >
                      Edit
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>



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
    </div>
  )
}

export default HistoryPage