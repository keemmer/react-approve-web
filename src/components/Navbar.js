import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Row,
  Col,
  Avatar,
  // Button,
  Modal,
  Form,
  Input
} from 'antd';
import {
  UserSwitchOutlined,
  HistoryOutlined,
  AuditOutlined,
  UserOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  LockOutlined
} from '@ant-design/icons'

const items = [
  {
    label: (<Link to="/visitor">Visitor</Link>),
    key: 'visitor',
    icon: <UserSwitchOutlined />,
  },
  {
    label: (<Link to="/transection">Transection</Link>),
    key: 'transection',
    icon: <HistoryOutlined />,
  },
  {
    label: (<Link to="/approve">Approve</Link>),
    key: 'approve',
    icon: <AuditOutlined />,
  },
  {
    label: (<Link to="/otprequest">OTP Request</Link>),
    key: 'otpRequest',
    icon: <AppstoreOutlined />,
  },
  {
    label: (<Link to="/usermanagement">Users Management</Link>),
    key: 'userMangement',
    icon: <UsergroupAddOutlined />,
  },
  {
    label: (<Link to="/setting">Setting</Link>),
    key: 'setting',
    icon: <SettingOutlined />,
  },


];
const userItems = [
  {
    label: (
      <>
        <Avatar icon={<UserOutlined />} /><p style={{ display: 'inline-block', margin: '0px 8px', fontWeight: '500' }}>Username Role: admin</p>
      </>
    ),
    key: 'userProfile',
    icon: '',
    children: [
      {
        label: 'Change Password',
        key: 'changePassword',
        icon: <LockOutlined />,
      },
      {
        label: 'Sign Out',
        key: 'signout',
        icon: <LogoutOutlined />,
      }
    ]
  }
];

const Navbar = () => {

  const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] = useState(false);
  const showChangePasswordModal = () => {
    setIsChangePasswordModalVisible(true);
  };
  const handleChangePasswordOk = () => {
    setIsChangePasswordModalVisible(false);
  };
  const handleChangePasswordCancel = () => {
    setIsChangePasswordModalVisible(false);
  };

  const handleClick = (menu) => {
    console.log("Menu selected: ", menu.key);
    console.log(menu);
  };
  const handleUserMenuClick = (menu) => {
    console.log("User menu selected: ", menu.key);
    console.log(menu);
    if (menu.key === 'changePassword') {
      showChangePasswordModal();
    }
  };
  return (
    <div>
      <Row md={{ justify: "space-between" }} >
        <Col xs={24} sm={24} md={24} lg={15} xl={19}>
          <Link to="/">
            <div className="header-logo"> </div>
          </Link>
          <Menu
            onClick={handleClick}
            width="100%"
            theme='light'
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            items={items}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={9} xl={5}>
          <Row justify="end">
            <Col xl={24}>
              <Menu
                onClick={handleUserMenuClick}
                width="100%"
                theme='light'
                mode="horizontal"
                selectable={false}
                items={userItems}
              />
            </Col>
            {/* <Col>
              <Avatar icon={<UserOutlined />} /><p style={{ display: 'inline-block', margin: '0px 8px', fontWeight: '500' }}>Username Role: admin</p>
            </Col>
            <Col>
              <Button icon={<LogoutOutlined />}>
                Sign Out
              </Button>
            </Col> */}
          </Row>
        </Col>
      </Row>


      <Modal
        title="Change Password"
        width={400}
        visible={isChangePasswordModalVisible}
        onOk={handleChangePasswordOk}
        onCancel={handleChangePasswordCancel}
      >
        <Form
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Password:"
            name="password"
            rules={[{
              required: true,
              message: 'Please input password',
            },]}>
            <Input placeholder="password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password:"
            name="confirmPassword"
            rules={[{
              required: true,
              message: 'Please input confirm password',
            },]}>
            <Input placeholder="confirm password" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Navbar