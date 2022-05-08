import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import VisitorPage from './pages/VisitorPage';
import HistoryPage from './pages/HistoryPage';
import ApprovePage from './pages/ApprovePage';
import SettingPage from './pages/SettingPage';
import OTPRequestPage from './pages/OTPRequestPage';
import LoginPage from './pages/LoginPage';
import OTPPage from './pages/OTPPage';
import UserMangementPage from './pages/UserMangementPage';


const { Header, Content, Footer } = Layout;
const login = false;

function App() {

  return (
    <Router>
      <div>

        {login ? (    
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
          </Routes>
        ) : (
          <Layout>
            <Header style={{
              position: 'fixed',
              width: '100%',
              background: '#fff',
              zIndex: 1
            }}>
              <Navbar />
            </Header>
            <Content className="site-layout" style={{ padding: '0 10%', marginTop: 64 }}>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/visitor" element={<VisitorPage />} />
                <Route path="/transection" element={<HistoryPage />} />
                <Route path="/approve" element={<ApprovePage />} />
                <Route path="/otprequest" element={<OTPRequestPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/usermanagement" element={<UserMangementPage />} />
                <Route path="/otp" element={<OTPPage />} />
              </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Wrap System</Footer>
          </Layout>

        )}
      </div >
    </Router>
  );
}

export default App;
