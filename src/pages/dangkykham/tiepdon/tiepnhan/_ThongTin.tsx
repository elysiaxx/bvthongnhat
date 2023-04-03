import React, { useState } from 'react';

import {
  Row, 
  Col, 
  Typography, 
  Divider, 
  Input, 
  DatePicker,
  DatePickerProps,
  Select,
  Space
} from 'antd';

import Icon from '@ant-design/icons';

import _ExpandIcon from '../../../../components/component628/_ExpandIcon';
import './tiepnhan.scss'
import { ReactComponent as ArrowDropDownSVG } from '../../../assets/svg/arrow_drop_down.svg';

const _ThongTin: React.FC = () => {

    const [expand, setExpand] = useState(true);

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
    };

    const onHideClick = () => {
      const collapseContent = document.getElementById('collapse-content-1');
      if(expand === true) {
        collapseContent?.setAttribute('style', 'display: none')
      }
      else {
        collapseContent?.removeAttribute('style');
      }
      setExpand(!expand);
    }

    return (
    <div className='_tt-container mr-24'>
      <Space
        className='w-100'
        direction='vertical' 
        split={<Divider className='_tt-divider'/>}
      >
        <Row>
          <Col span={24}>
            <Row 
              className=''
              justify={'space-between'}
            >
              <Col className=''>
                <Typography className='_tt-title'>Thông tin chung</Typography>
              </Col>
              <Col onClick={onHideClick}>
                <_ExpandIcon expand={expand} />
              </Col>
            </Row>
            <Divider className='_tt-divider'/>
            <Row id='_tt-collapse-1'>
              <Row className='w-100'>
                  <Col 
                    className='pr-12'
                    span={12}>
                      <Row
                        className='input-box'
                        align={'middle'}
                      >
                        <Col span={8}><Typography className='input-title'>Họ tên</Typography></Col>
                        <Col span={16}>
                          <Input 
                            className='input-field-box w-100'
                            placeholder='Nhập' />
                        </Col>
                      </Row>
                  </Col>
                  <Col 
                    className='pl-12'
                    span={12}>
                    <Row 
                      className='input-box'
                      align={'middle'}  
                    >
                      <Col span={8}><Typography className='input-title'>Ngày sinh</Typography></Col>
                      <Col span={16}>
                        <DatePicker 
                          className='date-picker w-100 input-field-box'
                        />
                      </Col>
                    </Row>
                  </Col>
              </Row>

              {/* <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Giới tính</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Di động</Typography></Col>
                  <Col span={16}>
                    <Input 
                      className='input-field-box w-100'
                      placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Thành phố</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn' 
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Quận/Xã</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn' />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={4}><Typography className='input-title'>Địa chỉ</Typography></Col>
                  <Col span={20}>
                    <Input
                      className='input-field-box w-100'
                      placeholder='Nhập' />
                  </Col>
                </Row>
              </Col> */}
            </Row>
          </Col>
        </Row>
        {/* <Row>
          <Col span={24}>
            <Row justify={'space-between'}>
              <Col>
                <Typography className='_tt-title'>Thông tin tiếp nhận</Typography></Col>
              <Col>
                <_ExpandIcon expand={expand} />
              </Col>
            </Row>
            <Divider className='_tt-divider' />
            <Row gutter={[24,8]}>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography className='input-title'>Ngày nhập viện</Typography></Col>
                  <Col span={16}>
                    <DatePicker 
                      className='date-picker w-100 input-field-box'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Phân lớp</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography>Loại</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Nguồn</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Từ viện</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Tai nạn</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Đối tượng</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Nhóm h...</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Cấp bậc</Typography></Col>
                  <Col span={16}>
                    <Select 
                      className='w-100 _tt-select-field'
                      placeholder='Chọn'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Chức vụ</Typography></Col>
                  <Col span={16}>
                    <Input placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={8}><Typography className='input-title'>Đơn vị</Typography></Col>
                  <Col span={16}>
                    <Input
                      className='input-field-box'
                      placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row> */}
        {/* <Row>
          <Col span={24}>
            <Row justify={'space-between'}>
              <Col>
                <Typography className='_tt-title'>Thông tin chung</Typography></Col>
              <Col>
                <_ExpandIcon expand={expand} />
              </Col>
            </Row>
            <Divider className='_tt-divider' />
            <Row gutter={[24,8]}>
              <Col span={12}>
                <Row 
                  className='input-box'
                  align={'middle'}  
                >
                  <Col span={4}><Typography className='input-title'>Lý do khám</Typography></Col>
                  <Col span={20}>
                    <Input
                      className='input-field-box'
                      placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography>Ngày sinh</Typography></Col>
                  <Col span={16}>
                    <DatePicker 
                      className='date-picker'
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography>Họ tên</Typography></Col>
                  <Col span={16}>
                    <Input placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography>Họ tên</Typography></Col>
                  <Col span={16}>
                    <Input placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography>Họ tên</Typography></Col>
                  <Col span={16}>
                    <Input placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={8}><Typography>Họ tên</Typography></Col>
                  <Col span={16}>
                    <Input placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={3}><Typography>Họ tên</Typography></Col>
                  <Col span={21}>
                    <Input placeholder='Nhập' />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Space>
    </div>
    )
}

export default _ThongTin;