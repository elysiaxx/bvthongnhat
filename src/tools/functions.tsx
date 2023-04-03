import React from 'react';
import TiepNhan from '../pages/dangkykham/tiepdon/tiepnhan';

const menus = [
    {siderMenu: 'tiepdon', headerMenu: [
        {key: 'tiepnhan', label: 'Tiếp nhận'}, 
        {key: 'datiepnhan', label: 'Đã tiếp nhận'},
        {key: 'dsbenhnhan', label: 'Danh sách bệnh nhân'},
        {key: 'bccuoingay', label: 'Báo cáo cuối ngày'}
    ]},
    {siderMenu: 'thanhtoan', headerMenu: [
        {key: 'dsthanhtoan', label: 'DS Thanh toán'},
        {key: 'dshoanphi', label: 'DS Hoàn phí'}, 
        {key: 'dsmienphi', label: 'DS Miễn phí'},
        {key: 'dsthukhac', label: 'DS Thu khác'}
    ]},
    // {siderMenu: 'khambenh', headerMenu: [

    // ]},
    // {siderMenu: 'quanlycapcuu', headerMenu: []},
    // {siderMenu: 'quanlynoitru', headerMenu: []},
    // {siderMenu: 'canlamsang', headerMenu: []},
    // {siderMenu: 'quanlyduoc', headerMenu: []},
    // {siderMenu: 'quanlyvattu', headerMenu: []},
    // {siderMenu: 'quanlydanhmuc', headerMenu: []},
]

function getHeaderMenu(siderMenu: string) {
    const it = menus.find((element) => {
        return element.siderMenu === siderMenu;
    })
    return it?.headerMenu;
}

function getDangKyKham(siderMenuSelected: string, headerMenuSelected: string) {
    switch(siderMenuSelected) {
        case 'tiepdon':
            switch(headerMenuSelected) {
                case 'tiepnhan':
                    return <TiepNhan />;
                default:
                    return <></>
            }
        case 'thanhtoan':
            switch(headerMenuSelected) {
                case 'dsthanhtoan':
                    return <TiepNhan />;
                default:
                    return <></>
            }
        default:
            return <></>
    }
}

export {getHeaderMenu, getDangKyKham};