import React from 'react'
import { Breadcrumb } from 'antd';

const HomePage = () => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Visitor</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 520 }}>
        Welcome to wrap system OTP Approve online
      </div>
    </div>
  )
}

export default HomePage