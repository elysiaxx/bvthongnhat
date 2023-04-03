import React, { useEffect, useState } from "react";
import { 
  Space, 
  Divider, 
  Row, 
  Col, 
  Layout
} from 'antd';

import { Outlet } from "react-router-dom";
import { getHeaderMenu } from "../../tools/functions";
import Header from "./header";
import SiderContent from './sider';
import "./index.scss";

const MainLayout: React.FC = () => {
    const [siderMS, setSiderMS] = useState('tiepdon');
    const [items, setItems] = useState(getHeaderMenu(siderMS));

    useEffect(() => {
        setItems(getHeaderMenu(siderMS));
    }, [siderMS])

    return (
    <div className="dkk-main">
    <Layout className="dkk-main-layout" style={{ minHeight: '100vh' }}>
        <Row>
            <Col span={4}>
                <SiderContent
                    siderMenuSelected={siderMS} 
                    setSiderMS={setSiderMS}
                />
            </Col>
            <Col
              span={20}
            >
                <Row
                  className="w-100"
                >
                    <Header headerMenu={items} />
                </Row>
                <Row>
                    <Outlet />
                </Row>
            </Col>
        </Row>
    </Layout>
    </div>
)};

export default MainLayout;
