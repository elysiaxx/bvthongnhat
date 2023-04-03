import { lazy } from "react";
import { Outlet } from "react-router-dom";

import C627 from "../components/component627";

import MainLayout from "../layout/dangkykham";
import TiepNhan from "../pages/dangkykham/tiepdon/tiepnhan";


let MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "tiepdon",
        element: <Outlet />,
        children: [
          { path: "tiepnhan", element: <TiepNhan /> },
          { path: "datiepnhan", element: <></>}
        ]
      },
      
      // {
      //   path: "/test-components",
      //   element: <LSCK />
      // }
      // {
      //     path: "/dang-nhap",
      //     element: <SignIn></SignIn>,
      // },
      // ----------- Nested Routed----------
      // {
      //     path: "/nguoi-dung",
      //     element: <Outlet />,
      //     children: [{ path: "/dang-nhap", element: <SignIn /> }],
      // },
      // --------Multi-PrivateOutlet-----------
      // {
      //     element: <PrivateOutlet></PrivateOutlet>,
      //     children: [
      //         { path: "/", element: <Home /> },
      //         { path: "/add", element: <Home /> },
      //     ],
      // },
      // -----------Single- PrivateOutlet-----------
      // {
      //     path: "/trang-chu",
      //     element: (
      //         <PrivateOutlet>
      //             <Home></Home>
      //         </PrivateOutlet>
      //     ),
      // },
    ],
  },
  // {
  //   path: "/",
  //   element: <Layout2></Layout2>,
  //   children: [
  //     {
  //       path: "/dang-nhap",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "/dang-ky",
  //       element: <Register></Register>,
  //     },
  //   ],
  // },
];

export default MainRoutes;
