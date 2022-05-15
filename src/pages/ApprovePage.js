import React, { useState } from 'react'
import {
  Breadcrumb,
  Row,
  Col,
  Card,
  Avatar,
  Form,
  Modal,
  Input,
  DatePicker,
} from 'antd';
import Button from "antd-button-color";
import {
  CheckOutlined,
  CloseOutlined,
  EllipsisOutlined
} from "@ant-design/icons"
import moment from 'moment'


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
    role: 'MEMBER',
    OTP: false
  },
];


const ApprovePage = () => {

  const [form] = Form.useForm();
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const showInfoModal = (data) => {
    setIsInfoModalVisible(true);
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
  const handleInfoOk = () => {
    setIsInfoModalVisible(false);
  };
  const handleInfoCancel = () => {
    setIsInfoModalVisible(false);
  };

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Visitor</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 920 }}>
        <Row gutter={[16, 16]}>
          {dataSource.map((user) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col xs={24} sm={12} md={8} lg={6} key={user.id} >
              <Card style={{ borderRadius: '1rem'}} title={(
                <>
                  <div className="cart-title-avatar-name">
                    <div>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div>
                      <div>
                        {user.firstname} {user.lastname}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button htmlType="button" shape="circle" icon={<EllipsisOutlined />} onClick={() => { showInfoModal(user) }} />

                  </div>
                </>
              )} >
                <p>{`Username: ${user.username}`}</p>
                <p>{`Gender: ${user.gender}`}</p>
                <p>Address:</p>
                <p>{`${user.address}`}</p>
                <Row justify="space-between" style={{ marginTop: '18px' }}>
                  <Col >
                    <Button htmlType="button" ghost type="danger" size="small" shape="round" icon={<CloseOutlined />} >
                      Decline
                    </Button>
                  </Col>
                  <Col >
                    <Button htmlType="button" ghost type="success" size="small" shape="round" icon={<CheckOutlined />}  >
                      Accept
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>



        <Modal
          title="User info"
          width={600}
          visible={isInfoModalVisible}
          onOk={handleInfoOk}
          onCancel={handleInfoCancel}
          footer={null}
        >
          <Form
            form={form}
            layout="vertical"
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
                    style={{ margin: '6px' }}
                  >

                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col sm={{ span: 11, offset: 2 }}>
                  <Form.Item
                    name="lastname"
                    style={{ margin: '6px' }}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              style={{ margin: '6px' }}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              style={{ margin: '6px' }}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Birthday"
              name="birthday"
              style={{ margin: '6px' }}
            >
              <DatePicker format='YYYY-MM-DD' disabled />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              style={{ margin: '6px' }}
            >
              <Input.TextArea showCount maxLength={200} disabled />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              style={{ margin: '6px' }}
            >
              <Input disabled />
            </Form.Item>
           
          </Form>
        </Modal>
      </div>
    </div>
  )
}

export default ApprovePage