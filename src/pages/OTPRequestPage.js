import React from 'react'
import { Breadcrumb } from 'antd';

import {
  Button,
  Row,
  Col,
  Table,
  Typography
} from 'antd';

import {
  HolderOutlined,
  SyncOutlined,
  // SendOutlined
} from '@ant-design/icons'



const dataSource = [
  {
    id: '1',
    username: 'Mike',
    timeRequest: '1990-05-05 10:10:00',
    timeAction: '1990-05-05 10:11:00',
    remark: '-',
    status: ''
  },
  {
    id: '2',
    username: 'Mike',
    timeRequest: '1990-05-05 10:10:00',
    timeAction: '1990-05-05 10:11:00',
    remark: '-',
    status: 'Deline'
  },
  {
    id: '3',
    username: 'Mike',
    timeRequest: '1990-05-05 10:10:00',
    timeAction: '1990-05-05 10:11:00',
    remark: '-',
    status: 'Approve'
  },
  {
    id: '4',
    username: 'Mike',
    timeRequest: '1990-05-05 10:10:00',
    timeAction: '1990-05-05 10:11:00',
    remark: '-',
    status: 'Deline'
  },
  {
    id: '5',
    username: 'Mike',
    timeRequest: '1990-05-05 10:10:00',
    timeAction: '1990-05-05 10:11:00',
    remark: '-',
    status: 'Approve'
  },
 

];

const columns = [
  {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'timeRequest',
    dataIndex: 'timeRequest',
    key: 'timeRequest',
  },
  {
    title: 'timeAction',
    dataIndex: 'timeAction',
    key: 'timeAction',
  },
  {
    title: 'remark',
    dataIndex: 'remark',
    key: 'remark',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },

];




const OTPRequestPage = () => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Visitor</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 520 }}>

        <Typography.Title level={3} strong style={{ textAlign: 'center', margin: '1.2rem' }}>
          OTP Request
        </Typography.Title>

        <Row justify="space-between" align="middle" style={{ padding: '0.6rem'}} >
          <Col>
            <Button shape="round" size="large" icon={<HolderOutlined />}   >
              Request OTP
            </Button>
          </Col>
          <Col>
            <Button shape="circle" icon={<SyncOutlined />} />
          </Col>
        </Row>

        <Table dataSource={dataSource} columns={columns}  rowKey="id" />





      </div>
    </div>
  )
}

export default OTPRequestPage