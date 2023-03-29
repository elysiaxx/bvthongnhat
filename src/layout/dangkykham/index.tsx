import React, { useState } from "react";

import FooterContent from "./footer";
import HeaderContent from "./header";
import SiderContent from './sider';


import { Space, Layout } from 'antd';

import "./index.scss";
import { Outlet } from "react-router-dom";

const {Header, Sider, Footer, Content} = Layout;


const MainLayout: React.FC = () => {
    const [siderMS, setSiderMS] = useState('tiepdon');

    return (
    <div className="MainLayout">
    <Layout className="Layout" style={{ minHeight: '100vh' }}>
        <div className="Sider">
            <SiderContent siderMenuSelected={siderMS}/>
        </div>
        <Layout>
        <div className="Header">
            <HeaderContent siderMenuSelected={siderMS} />
        </div>
        <Content>
            <Outlet />
        </Content>
        <Footer>
            <FooterContent />
        </Footer>
        </Layout>
    </Layout>
    </div>
)};

export default MainLayout;
