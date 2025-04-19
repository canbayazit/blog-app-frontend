import { FC } from "react";
import HomePage from "../pages/home/HomePage";
import { RouteObject, useRoutes } from "react-router";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Login/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <HomePage />,
      },
    ],
  },
];

const AppRoutes: FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
