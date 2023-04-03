import React, {useState, useEffect} from 'react';
import { 
  MenuProps,
  Menu, 
  Row, 
  Col, 
  Divider, 
  Avatar, 
  Typography, 
  Space
} from 'antd';
import { 
  ReactComponent as BellSVG 
} from '../../../assets/images/svg/Bell.svg';

import './header.scss';

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
    headerMenu: MenuProps['items'] | undefined
}

const Header: React.FC<Props> = ({headerMenu}) => {
    const [current, setCurrent] = useState(headerMenu?.at(0)?.key);
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    
    useEffect(() => {
        setCurrent(headerMenu?.at(0)?.key)
    }, [headerMenu])

    return (
        <div className='header-container w-100'>
          <Row
            className='w-100 h-100'
            justify={'space-between'}
            align={'middle'}
          >
              <Col
                className=''
                span={18}
              >
                <Menu 
                  className='header-menu w-100 no-border'
                  onClick={onClick}
                  selectedKeys={[current as string]} 
                  mode="horizontal"
                  items={headerMenu}
                />
              </Col>
              <Col
                className='mr-24'
              >
                <Space 
                  direction='horizontal'
                  split={<Divider className='account-divider' type='vertical' />}
                >
                  <Col>
                    <BellSVG />
                  </Col>
                  <Col>
                    <Row
                      align={'middle'}
                      gutter={8}
                    >
                      <Col span={4}>
                        <Avatar
                          className='account-avatar'
                          src={'/avatar.png'}
                        />
                      </Col>
                      <Col span={20}>
                        <Typography className='account-name'>
                          DD. Nguyễn Đình Phong
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                </Space>
              </Col>
          </Row>
        </div>
    )
};

export default Header;