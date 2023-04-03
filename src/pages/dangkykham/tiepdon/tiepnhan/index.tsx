import { Col, Row, Space } from 'antd';
import React from 'react';
import _ThongTin from './_ThongTin';
import _TheBaoHiem from './_TheBaoHiem';
import _ThanNhan from './_ThanNhan';
import './tiepnhan.scss';

const TiepNhan = () => {
    return (
        <div className='tn-container'>
            <Space direction='vertical' size={25}>
                <Row
                  className='m-24'
                  justify={'center'}
                >
                    <Col
                      className='calc-w-tt'
                      span={14}
                    >
                        <_ThongTin />
                    </Col>
                    <Col 
                      span={10}
                      className='calc-w-tbh-tn'>
                        <Row>
                            <Col className='mb-24' span={24}><_TheBaoHiem /></Col>
                            <Col span={24}><_ThanNhan /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Space>
        </div>
    );
    
};

export default TiepNhan;