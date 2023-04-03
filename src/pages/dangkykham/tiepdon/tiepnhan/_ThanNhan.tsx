import { Col, Row, Space, Typography } from 'antd';
import React from 'react';

const _ThanNhan = () => {
    return (
        <div className='_tn-container'>
            <Space>
                <Row>
                    <Col><Typography>Thân nhân</Typography></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};

export default _ThanNhan;