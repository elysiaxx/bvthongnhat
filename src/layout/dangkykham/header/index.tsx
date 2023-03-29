import React, {useState} from 'react';
import {MenuProps, Menu, Row, Col, Divider, Avatar, Typography} from 'antd';
import {BellOutlined} from '@ant-design/icons';
import './header.scss';
import { getHeaderMenu } from '../../../tools/functions';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'divider',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

type Props = {
    siderMenuSelected: string
}

const Header: React.FC<Props> = ({siderMenuSelected}) => {
    const [current, setCurrent] = useState('tiepnhan');
    const items = getHeaderMenu(siderMenuSelected);
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
    <Row className='Header-Box' style={{width: '100%', height: '100%'}}>
        <Col className='Header-1' span={12}>
            <Menu className='HeaderMenu'
            onClick={onClick}
            selectedKeys={[current]} 
            mode="horizontal"
            items={items}
            />
        </Col>
        <Col className='Header-2' span={12}>
            <BellOutlined />
            <Divider 
                type={'vertical'}
            />
            <Avatar 
                src={'/avatar.png'}
            />
            <Typography>
                DD. Nguyễn Đình Phong
            </Typography>
        </Col>
    </Row>
    )
};

export default Header;