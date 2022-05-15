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
  Card,
  Typography,
  Descriptions
} from 'antd';

import { UploadOutlined } from '@ant-design/icons'

const formItemLayout = {
  labelCol: { xs: { span: 24, }, sm: { span: 6, } },
  wrapperCol: { xs: { span: 24, }, sm: { span: 16, } },
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
        <Typography.Title level={3} strong style={{ textAlign: 'center', margin: '1.2rem' }}>Request Permissions Form</Typography.Title>
        <Row justify="center" >
          <Col md={{ span: 24 }} xl={{ span: 18 }}>
            <Card style={{ borderRadius: '1rem', margin: '0.6rem 0', paddingTop: '1.5rem' }}>
              <Form autoComplete="off"
                wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
                labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
              >
                <Form.Item
                  label="Key Card"
                  name="cid"
                  // rules={[{
                  //   required: true,
                  //   message: 'Please input your verify key card id',
                  // },]}
                  >
                  <Input.Group compact>
                    <Input placeholder="" style={{ width: 'calc(100% - 60px)' }} />
                    <Button type="primary" htmlType="submit" >
                      Find
                    </Button>
                  </Input.Group>
                </Form.Item>
              </Form>
            </Card>

            <Card style={{ borderRadius: '1rem', margin: '0.6rem 0' }}>
              <Row justify="center" >
                <Col md={{ span: 24 }} xl={{ span: 20 }}>
                  <Descriptions title="Key card Info" bordered>
                    <Descriptions.Item label="Key card id" span={3}>xxx-xxxx-xxxx-xx</Descriptions.Item>
                    <Descriptions.Item label="Time in" span={2}>2022-01-01 00:00:00</Descriptions.Item>
                    <Descriptions.Item label="Time out" span={2}>xxx-xx-xx xx:xx:xx</Descriptions.Item>
                    <Descriptions.Item label="info" span={3}>
                      lorem ipsum dolor sit amet, consectetur adip
                    </Descriptions.Item>
                  </Descriptions>
                  <Row justify="end" style={{ marginTop: '1rem' }}>
                    <Col span={3} >
                      <Button type="primary" htmlType="submit" >Check out</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>

            <Card style={{ borderRadius: '1rem', margin: '0.6rem 0',padding:'2rem 0' }}>
              <Form
                {...formItemLayout}
                autoComplete="off"
              >
                <Form.Item label="Contact" style={{ margin: '8px' }}>
                  <Row>
                    <Col sm={{ span: 12 }}>
                      <Form.Item
                        name="contactFrom"
                        rules={[{
                          required: true,
                          message: 'Please input source',
                        },]}>
                        <Input placeholder="source" />
                      </Form.Item>
                    </Col>
                    <Col sm={{ span: 12 }}>
                      <Form.Item

                        name="contactTo"
                        rules={[{
                          required: true,
                          message: 'Please input destination',
                        },]}>
                        <Input placeholder="destination" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>


                <Form.Item
                  label="ID Card"
                  name="cid"
                  rules={[{
                    required: true,
                    message: 'Please input your id card!',
                  },]}>
                  <Input placeholder="ID card code" />
                </Form.Item>
                <Form.Item label="Fullname" style={{ margin: '8px' }}>
                  <Row>
                    <Col sm={{ span: 12 }}>
                      <Form.Item
                        name="thFullname"
                        rules={[{
                          required: true,
                          message: 'Please input your firstname',
                        },]}>
                        <Input placeholder="firstname" />
                      </Form.Item>
                    </Col>
                    <Col sm={{ span: 12 }}>
                      <Form.Item

                        name="enFullname"
                        rules={[{
                          required: true,
                          message: 'Please input your lastname',
                        },]}>
                        <Input placeholder="lastname" />
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
                    message: 'Please select date of birth',
                  }]}>
                  <DatePicker />
                </Form.Item>

                <Form.Item
                  label="Gender"
                  name="radio-group"
                  rules={[{
                    required: true,
                    message: 'Please input your gender',
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
                  <Input placeholder="Please input card issuer" />
                </Form.Item>
                <Form.Item
                  name="issueDate"
                  label="Issue Date"
                  rules={[{
                    type: 'object',
                    required: true,
                    message: 'Please select issue date',
                  }]}>
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="expireDate"
                  label="Expire Date"
                  rules={[{
                    type: 'object',
                    required: true,
                    message: 'Please select expire date',
                  }]}>
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{
                    required: true,
                    message: 'Please input address',
                  },]}>
                  <Input.TextArea
                    showCount
                    maxLength={200}
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    placeholder="Address"
                  />
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

                <Form.Item wrapperCol={{ offset: 6 }}>
                  <Button type="primary" htmlType="submit" >
                    Request
                  </Button>
                </Form.Item>

              </Form>
            </Card>

          </Col>
        </Row>







      </div>
    </div >
  )
}

export default VisitorPage