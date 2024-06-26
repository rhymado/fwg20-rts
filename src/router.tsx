import { Outlet, createBrowserRouter, useOutletContext } from "react-router-dom";
import { useState } from "react";

import Class from "./pages/Class";
import Function from "./pages/Function";
import Position from "./pages/Position";
import Shop from "./pages/Shop";

import Header from "./components/Header";
import Auth from "./pages/Auth";
import Todos from "./pages/Todos";

function Error() {
  return <div>Error</div>;
}

function NotFound() {
  const { value } = useOutletData();
  return <div>Route Not Found | {value}</div>;
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
  const [nilai, setNilai] = useState(0);
  return (
    <>
      <Header />
      <Outlet context={{ value: nilai, setValue: setNilai } satisfies OutletContext} />
    </>
  );
}

type OutletContext = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export function useOutletData() {
  return useOutletContext<OutletContext>();
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
        path: "todos",
        element: <Todos />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routerWithChildren;
