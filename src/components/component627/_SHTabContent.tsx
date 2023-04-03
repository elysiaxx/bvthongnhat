import React from 'react';
import {
    Row,
    Col,
    Typography,
    Input,
    Space,
    Button
} from 'antd';
import Icon from '@ant-design/icons';
import {ReactComponent as PrintIconSVG } from '../../assets/svg/Print.svg';
const _SHTabContent = () => {
    return (
        <div className='tab-content-box'>
            <Row className='tab-content-row-box' gutter={24}>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Huyết áp</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'mmHg'}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Mạch</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'Lần/phút'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='tab-content-row-box' gutter={24}>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Cân nặng</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'Kg'}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Chiều cao</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'Cm'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='tab-content-row-box' gutter={24}>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>BMI</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'-'}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Thể lực</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'-'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='tab-content-row-box' gutter={24}>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Nhịp thở</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'Lần/phút'}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Nhiệt độ</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'độ C'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='tab-content-row-box' gutter={24}>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>Đau</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'-'}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={8}>
                        <Col className='field-title-box' span={6}>
                            <Typography>SpO2</Typography>
                        </Col>
                        <Col className='field-input-box' span={18}>
                            <Input 
                                suffix={'%I/P'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='tab-content-row-box flex-end'>
                <Col className='field-title-box' span={3}>
                    <Typography>Mô tả</Typography>
                </Col>
                <Col className='field-input-box' span={21}>
                    <Input className='input-no-suffix'
                        value={'Lần đo lại ngày 14 tháng 3 năm 2023'}
                    />
                </Col>
            </Row>
            <Row className='tab-content-row-box flex-end'>
                <Button 
                    className='print-button'
                ><Icon className='print-btn-icon' component={PrintIconSVG} /><span className='print-btn-text'>In mẫu</span></Button>
                <Button className='update-button'>Cập nhật</Button>
            </Row>
        </div>
    );
};

export default _SHTabContent;