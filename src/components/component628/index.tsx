import React, { useState } from 'react';
import { Collapse, Space, Table, Typography } from 'antd';
import './index.scss';
import _ExpandIcon from './_ExpandIcon';
import { ColumnsType } from 'antd/es/table';


const { Panel } = Collapse;
interface DataType {
    stt: string,
    chuyenkhoa: string,
    tungay: string
}
const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt'
    },
    {
        title: 'Chuyển khoa',
        dataIndex: 'chuyenkhoa',
        key: 'chuyenkhoa'
    },
    {
        title: 'Từ ngày',
        dataIndex: 'tungay',
        key: 'tungay',
        align: 'right'
    },
]

const dataSource = [
    {stt: '1', chuyenkhoa: 'Khoa ngoại tổng hợp', tungay: '23:40 - 16/05.2023'},
    {stt: '1', chuyenkhoa: 'Khoa ngoại tổng hợp', tungay: '23:40 - 16/05.2023'},
    {stt: '1', chuyenkhoa: 'Khoa ngoại tổng hợp', tungay: '23:40 - 16/05.2023'},
    {stt: '1', chuyenkhoa: 'Khoa ngoại tổng hợp', tungay: '23:40 - 16/05.2023'},
    {stt: '1', chuyenkhoa: 'Khoa ngoại tổng hợp', tungay: '23:40 - 16/05.2023'}
]

const LSCK = () => {
    const [expand, setExpand] = useState(true);
    const [activeKey, setActiveKey] = useState('1');
    return (
        <div className='lsck-container'>
            <Collapse 
                defaultActiveKey={[activeKey]}
                expandIconPosition={'end'}
                collapsible={'icon'}
                expandIcon={() => <_ExpandIcon expand={expand} />}
                onChange={() => setExpand(!expand)}
            >
                <Panel
                    header='Lịch sử chuyển khoa'
                    key={activeKey}
                    
                >
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        className='collapse-table'
                        pagination={false}
                    >
                    </Table>
                </Panel>
            </Collapse>
        </div>
    );
};

export default LSCK;