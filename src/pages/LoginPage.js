import React, { useState } from 'react'
import { Card, Form, Input, Button, Row, Col, Typography, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginPage = () => {
    const [submitError, setSubmitError] = useState(false)
    const onFinish = (values) => {
        console.log('Success:', values);
        setSubmitError(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setSubmitError(true)
    };
    const errorAlert = submitError ? (
        <Alert message="Authentication Failed" type="warning"></Alert>
    ) : ''
    return (
        <div >
            <Row justify="center" align="center">
                <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Card style={{ width: '100%', marginTop: '6rem' }}>
                        <Title type="secondary" strong style={{ textAlign: 'center', margin: '2rem' }}>WRAP SYSTEM</Title>
                        <Form name="basic"
                            // labelCol={{ span: 9 }}
                            // wrapperCol={{ span: 6}}
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off">
                            <Form.Item label="Username"
                                name="username"
                                rules={[{
                                    required: true,
                                    message: 'Please input your username!',
                                },]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please input email or username" />
                            </Form.Item>

                            <Form.Item label="Password"
                                name="password"
                                rules={[{
                                    required: true,
                                    message: 'Please input your password!',
                                },]} >
                                <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Please input your password" />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit" block style={{marginTop: '2rem'}}>
                                    Log in
                                </Button>
                            </Form.Item>
                            {errorAlert}

                        </Form>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default LoginPage