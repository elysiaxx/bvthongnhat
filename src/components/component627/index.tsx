import React, { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import _SHTabContent from './_SHTabContent';
import _BDTabContent from './_BDTabContent';
import _ExpandIcon from '../component628/_ExpandIcon';
import './c627.scss';

const items: TabsProps['items'] = [
    {
      key: 'sinhhieu',
      label: `Sinh hiệu`,
      children: <_SHTabContent />,
    },
    {
      key: 'bieudo',
      label: `Biểu đồ`,
      children: <_BDTabContent />,
    }
];
const C627 = () => {
    const [activeKey, setActiveKey] = useState('sinhhieu')
    const [expand, setExpand] = useState(true);
    const onChange = (key: string) => {
        setActiveKey(key)
    };
    const hideIconOnClick = () => {
        const e = document.getElementsByClassName('ant-tabs-content-holder')[0]
        if(expand === true) {
            e.setAttribute('style', 'display: none;'); 
        }
        else {
            e.setAttribute('style', '');
        }
        setExpand(!expand);
    }
    
    return (
        <div className='c627-container'>
            <Tabs
                defaultActiveKey={activeKey}
                items={items} 
                onChange={onChange}
                tabBarExtraContent={<div onClick={hideIconOnClick}><_ExpandIcon expand={expand}/></div>}
            />
        </div>
    );
};

export default C627;