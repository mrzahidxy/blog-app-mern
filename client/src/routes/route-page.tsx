import { RouteObject } from "react-router-dom";
import BlogList from "../components/BlogList";
import Layout from "../layout/Layout";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "blogs",
                element: <BlogList />,
            },
        ],
    }
];

export default routes;