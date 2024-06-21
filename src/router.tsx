import { Outlet, createBrowserRouter } from "react-router-dom";

import Class from "./pages/Class";
import Function from "./pages/Function";
import Position from "./pages/Position";
import Shop from "./pages/Shop";

import Header from "./components/Header";
import Auth from "./pages/Auth";

function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div>Route Not Found</div>;
}

// const router = createBrowserRouter([
//   {
//     path: "/class",
//     element: <Class />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/function",
//     element: <Function />,
//   },
//   {
//     path: "/position",
//     element: <Position />,
//   },
//   {
//     path: "/shop",
//     element: <Shop />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const routerWithChildren = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "class",
        element: <Class />,
      },
      {
        path: "function",
        element: <Function />,
      },
      {
        path: "position",
        element: <Position />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Auth />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routerWithChildren;
