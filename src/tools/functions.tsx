import React from 'react';

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

export {getHeaderMenu};