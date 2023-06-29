import { RouteObject } from "react-router-dom";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Blogs />,

  },
  {
    path: "/auth/login",
    element: <Login />,
  },
];

export default routes;
