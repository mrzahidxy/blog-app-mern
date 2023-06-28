import { UseQueryResult, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getBlogs } from "../services/blogsServices";

type Blog = {
  _id: string;
  title: string;
  description: string;
};

interface ErrorType {
  message: string;
}

interface Blogs {
  data: Blog[];
}

const BlogList = () => {
  const blogQuery: UseQueryResult<Blogs, ErrorType> = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (blogQuery.status === "loading") return <h1>Loading...</h1>;
  if (blogQuery.status === "error")
    return (
      <h1 className="text-red-600">
        {JSON.stringify(blogQuery.error?.message)}
      </h1>
    );

  return (
    <div className="container p-4">
      <h3 className="text-2xl font-medium capitalize">Featured Blogs</h3>
      <div className="grid grid-cols-3 gap-3">
        {blogQuery?.data?.data.map((blog: Blog, index: number) => (
          <Link to={`/blogs/${blog._id}`} key={index}>
            <div className="shadow-md p-2">
              <h4 className="font-medium text-lg">{blog.title}</h4>
              <p>{blog.description.slice(0, 80) + "..."}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
