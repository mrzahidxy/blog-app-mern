import { RouteObject } from "react-router-dom";
import BlogList from "../components/BlogList";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BlogList />,
    children: [{}],
  },
];

export default routes;
