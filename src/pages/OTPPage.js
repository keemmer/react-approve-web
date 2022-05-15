import React, { } from 'react'
import {
    Card,
    Row,
    Col,
    Breadcrumb,
    Avatar

} from 'antd'
import { UserOutlined } from '@ant-design/icons';



const OPTPage = () => {

    return (
        <div >

            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Setting</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 920 }}>

                <Row justify="center" align="middle">
                    <Col md={12} >
                        <Card style={{
                            width: '100%',
                            borderRadius: '1rem',
                            marginTop: '6rem',
                            boxShadow: '0px 0px 2px 0px rgba(204,204,204,1)'
                        }}>

                            <Row align="middle">
                                <Col flex="5" >
                                    <div style={{ textAlign: 'center' }}>
                                        <Avatar
                                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 200 }}
                                            icon={<UserOutlined />}
                                        />
                                    </div>
                                    <div className="opt-username">
                                        Fname Lname
                                    </div>

                                </Col>
                                <Col flex="7" style={{ padding: '0 0.8rem', textAlign: 'center' }}>
                                    <div >
                                        <div className="welcome-message" >
                                            WELCOME
                                        </div>
                                        <div className="otp-message">
                                            OTP: 123456
                                        </div>
                                        <div className="otp-expire-message">
                                            Expie: 3 Minute
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </div >
        </div >
    )
}

export default OPTPage