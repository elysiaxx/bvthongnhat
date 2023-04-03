import React from 'react';

import { 
  Col, 
  Divider, 
  MenuProps,
  Row, 
  Space 
} from 'antd';
import { Menu, Typography } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as TiepDonSVG } from '../../../assets/images/svg/TiepDon.svg';
import { ReactComponent as ThanhToanSVG } from '../../../assets/images/svg/ThanhToan.svg';
import { ReactComponent as KhamBenhSVG } from '../../../assets/images/svg/KhamBenh.svg';
import { ReactComponent as QuanLyCapCuuSVG } from '../../../assets/images/svg/QuanLyCapCuu.svg';
import { ReactComponent as QuanLyNoiTruSVG } from '../../../assets/images/svg/QuanLyNoiTru.svg';
import { ReactComponent as CanLamSangSVG } from '../../../assets/images/svg/CanLamSang.svg';
import { ReactComponent as QuanLyDuocSVG } from '../../../assets/images/svg/QuanLyDuoc.svg';
import { ReactComponent as QuanLyVatTuSVG } from '../../../assets/images/svg/QuanLyVatTu.svg';
import { ReactComponent as QuanLyDanhMuc } from '../../../assets/images/svg/QuanLyDanhMuc.svg';
import { ReactComponent as SpaSVG } from '../../../assets/images/svg/spa.svg';

import './sider.scss';


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuProps['items'] = [
    getItem('Tiếp đón', 'tiepdon', <TiepDonSVG />), 
    getItem('Thanh Toán', 'thanhtoan', <ThanhToanSVG />),
    getItem('Khám bệnh', '3', <KhamBenhSVG />), 
    getItem('Quản lý cấp cứu', '4', <QuanLyCapCuuSVG />), 
    getItem('Quản lý nội trú', '5', <QuanLyNoiTruSVG />), 
    getItem('Cận lâm sàng', '6', <CanLamSangSVG />), 
    getItem('Quản lý dược', '7', <QuanLyDuocSVG />),
    getItem('Quản lý vật tư', '8', <QuanLyVatTuSVG />), 
    getItem('Quản lý danh mục', '9', <QuanLyDanhMuc />),  
]

type Props = {
    siderMenuSelected: string,
    setSiderMS: (key: string) => void
}

const Sider: React.FC<Props> = ({siderMenuSelected, setSiderMS}) => {
    const onClick: MenuProps['onClick'] = (e) => {
        setSiderMS(e.key);
    };
    return (
        <div className='dkk-sider-container'>
          <Space
            className='w-100 g-30'
            direction='vertical'
          >
            <Row
              className='sider-logo-box'
              align={'middle'}
            >
              <Col>
                <Icon 
                  className='sider-logo-icon mr-6'
                  component={SpaSVG}
                />
              </Col>
              <Col>
                <Typography className='sider-logo-title'>BV.Thống Nhất</Typography>
              </Col>
            </Row>
            <Row>
              <Menu
                className='sider-menu'
                onClick={onClick}
                defaultSelectedKeys={[siderMenuSelected]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineIndent={10}
                items={items}
              /> 
            </Row>
          </Space>
        </div>
    )
};

export default Sider;