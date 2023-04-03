import { Col, Row, Space, Typography, Input } from 'antd';
import React from 'react';

const _TheBaoHiem = () => {
    return (
        <div className='_tbh-container'>
            <Space>
                <Row>
                    <Col>
                        <Typography>Thẻ bảo hiểm
                        </Typography>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col><Typography>Mã thẻ</Typography></Col>
                            <Col>
                                <Input 
                                    placeholder='Nhập'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col><Typography>Mã thẻ</Typography></Col>
                            <Col>
                                <Input 
                                    placeholder='Nhập'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col><Typography>Mã thẻ</Typography></Col>
                            <Col>
                                <Input 
                                    placeholder='Nhập'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col><Typography>Mã thẻ</Typography></Col>
                            <Col>
                                <Input 
                                    placeholder='Nhập'
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};

export default _TheBaoHiem;