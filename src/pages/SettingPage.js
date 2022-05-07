import React from 'react'
import { Breadcrumb } from 'antd';
import {
  Form,
  Input,
  Button,
  Card,
  // Typography
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8, },
  },
  wrapperCol: {
    xs: { span: 24, },
    sm: { span: 12, },
  },
};

const SettingPage = () => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Setting</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 520 }}>
        {/* <Typography.Title level={3} strong style={{ textAlign: 'center', margin: '2rem' }}>Setting</Typography.Title> */}

        <Card title="Line Group" style={{ width: '100%', marginBottom: '1rem' }}>
          <Form
            {...formItemLayout}
            autoComplete="off"
          >
            <Form.Item
              label="Line Access Token:"
              name="lineToken"
              rules={[{
                required: true,
                message: 'Please input line token key',
              },]}>
              <Input placeholder="Please input line token key" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
              <Button type="primary" htmlType="submit" >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="OTP API" style={{ width: '100%', marginBottom: '1rem' }}>
          <Form
            {...formItemLayout}
            autoComplete="off"
          >
            <Form.Item
              label="OTP API:"
              name="otpapi"
              rules={[{
                required: true,
                message: 'Please input OTP api',
              },]}>
              <Input placeholder="Please input OTP api" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
              <Button type="primary" htmlType="submit" >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Defualt Password" style={{ width: '100%', marginBottom: '1rem' }}>
          <Form
            {...formItemLayout}
            autoComplete="off"
          >
            <Form.Item
              label="Defualt Paaword:"
              name="otpapi"
              rules={[{
                required: true,
                message: 'Please input defualt password',
              },]}>
              <Input placeholder="Please input defualt password" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
              <Button type="primary" htmlType="submit" >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>




      </div>
    </div >
  )
}

export default SettingPage