import React from 'react';

import type { MenuProps } from 'antd';
import { Menu, Typography } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as TiepDonSVG }from '../../../assets/icons/TiepDon.svg';
import { ReactComponent as ThanhToanSVG }from '../../../assets/icons/ThanhToan.svg';
import { ReactComponent as KhamBenhSVG }from '../../../assets/icons/KhamBenh.svg';
import { ReactComponent as QuanLyCapCuuSVG }from '../../../assets/icons/QuanLyCapCuu.svg';
import { ReactComponent as QuanLyNoiTruSVG }from '../../../assets/icons/QuanLyNoiTru.svg';
import { ReactComponent as CanLamSangSVG }from '../../../assets/icons/CanLamSang.svg';
import { ReactComponent as QuanLyDuocSVG }from '../../../assets/icons/QuanLyDuoc.svg';
import { ReactComponent as QuanLyVatTuSVG }from '../../../assets/icons/QuanLyVatTu.svg';
import { ReactComponent as QuanLyDanhMuc }from '../../../assets/icons/QuanLyDanhMuc.svg';
import { ReactComponent as SpaSVG } from '../../../assets/icons/spa.svg';
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
    getItem('Tiếp đón', 'tiepdon', <Icon component={TiepDonSVG}/>), 
    getItem('Thanh Toán', 'thanhtoan', <Icon component={ThanhToanSVG}/>),
    getItem('Khám bệnh', '3', <Icon component={KhamBenhSVG}/>), 
    getItem('Quản lý cấp cứu', '4', <Icon component={QuanLyCapCuuSVG}/>), 
    getItem('Quản lý nội trú', '5', <Icon component={QuanLyNoiTruSVG}/>), 
    getItem('Cận lâm sàng', '6', <Icon component={CanLamSangSVG}/>), 
    getItem('Quản lý dược', '7', <Icon component={QuanLyDuocSVG}/>),
    getItem('Quản lý vật tư', '8', <Icon component={QuanLyVatTuSVG}/>), 
    getItem('Quản lý danh mục', '9', <Icon component={QuanLyDanhMuc}/>),  
]

type Props = {
    siderMenuSelected: string
}

const Sider: React.FC<Props> = ({siderMenuSelected}) => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div className='Logo'>
                <Icon className='Icon' component={SpaSVG} style={{fontSize: '24px'}}/>
                <Typography className='LogoText'>BV.Thống Nhất</Typography>
            </div>
            <div>
            <Menu
                className='SiderMenu'
                onClick={onClick}
                defaultSelectedKeys={[siderMenuSelected]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            </div>
        </>
    )
};

export default Sider;