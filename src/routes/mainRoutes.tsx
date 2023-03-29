import { lazy } from "react";


import MainLayout from "../layout/dangkykham";
// import Layout2 from "layout/Layout2";
// import Loadable from "ui-component/Loadable";
// import PrivateOutlet from "./PrivateOutlet";
// // Pages routing
// // const AboutUs = Loadable(lazy(() => import("pages/AboutUs/AboutUs")));
// // const Contact = Loadable(lazy(() => import("pages/Contact/Contact")));
// // const Event = Loadable(lazy(() => import("pages/Event")));
import DangKyKham from '../pages/dangKyKham';
// const Home = Loadable(lazy(() => import("pages/Home/Home")));
// const Login = Loadable(lazy(() => import("pages/Login/Login")));
// const Register = Loadable(lazy(() => import("pages/Register/Register")));
// const News = Loadable(lazy(() => import("pages/News")));
// const Search = Loadable(lazy(() => import("pages/Search")));
// const Survey = Loadable(lazy(() => import("pages/Survey")));
// const Instructors = Loadable(
//     lazy(() => import("pages/Instructors/Instructors"))
// );
// const InstructorsProfile = Loadable(
//     lazy(() => import("pages/InstructorsProfile/InstructorsProfile"))
// );
// ==============================|| MAIN ROUTING ||============================== //

let MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DangKyKham />,
      },
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
