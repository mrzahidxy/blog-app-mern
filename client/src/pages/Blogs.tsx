import React from "react";
import BlogList from "../components/BlogList";
import Layout from "../layout/Layout";

type Props = {};

const Blogs: React.FC<Props> = (props) => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  );
};

export default Blogs;
