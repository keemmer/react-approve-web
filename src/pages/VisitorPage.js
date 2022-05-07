import React from 'react'
import { Breadcrumb } from 'antd';
import {
  Form,
  Input,
  Radio,
  Upload,
  Button,
  DatePicker,
  Row,
  Col,
  Select,
  Typography
} from 'antd';

import { UploadOutlined } from '@ant-design/icons'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
};
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const VisitorPage = () => {

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Visitor</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 520 }}>
        <Typography.Title level={3} strong style={{ textAlign: 'center', margin: '5%' }}>Request Permissions Form</Typography.Title>
        <Form
          {...formItemLayout}
          autoComplete="off"
        >

          <Form.Item
            label="Key Card"
            name="keycard"
            rules={[{
              required: true,
              message: 'Please select key card',
            },]}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              <Select.Option value="1">Not Identified</Select.Option>
              <Select.Option value="2">Closed</Select.Option>
              <Select.Option value="3">Communicated</Select.Option>
              <Select.Option value="4">Identified</Select.Option>
              <Select.Option value="5">Resolved</Select.Option>
              <Select.Option value="6">Cancelled</Select.Option>
            </Select>
          </Form.Item>


          <Form.Item
            label="ID Card"
            name="cid"
            rules={[{
              required: true,
              message: 'Please input your id card!',
            },]}>
            <Input placeholder="Please input id card" />
          </Form.Item>
          <Form.Item label="Fullname" style={{ margin: '8px' }}>
            <Row>
              <Col sm={{ span: 12 }}>
                <Form.Item

                  name="thFullname"
                  rules={[{
                    required: true,
                    message: 'Please input your th fullname',
                  },]}>
                  <Input placeholder="Please input TH fullname" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 12 }}>
                <Form.Item

                  name="enFullname"
                  rules={[{
                    required: true,
                    message: 'Please input your EN fullname',
                  },]}>
                  <Input placeholder="Please input EN fullname" />
                </Form.Item>
              </Col>
            </Row>
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
            label="Gender"
            name="radio-group"
            rules={[{
              required: true,
              message: 'Please input your',
            },]}>

            <Radio.Group>
              <Radio.Button value="male">Male</Radio.Button>
              <Radio.Button value="female">Female</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Card Issuer"
            name="cardIssuer"
            rules={[{
              required: true,
              message: 'Please input your',
            },]}>
            <Input placeholder="Please input" />
          </Form.Item>
          <Form.Item
            name="issueDate"
            label="Issue Date"
            rules={[{
              type: 'object',
              required: true,
              message: 'Please select time!',
            }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="expireDate"
            label="Expire Date"
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
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Photo"
          >
            <Upload name="person" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>



          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" >
              Request
            </Button>
          </Form.Item>

        </Form>








      </div>
    </div >
  )
}

export default VisitorPage