import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getBlog } from "../apis/blogsServices"


const Blog = () => {

  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['blogs', id],
    queryFn: () => getBlog(id)
  });

  if (isLoading) return <span className="text-2xl">Loading....</span>
  if (isError) return <span className="text-2xl text-red-600">Something went wrong!</span>


  // console.log('SINGLE BLOG :: >>', data)

  return (

    <div className="px-10 py-5 grid grid-cols-3">

      <article className="col-span-2">
        <h1 className="text-2xl">{data?.data?.title}</h1>
        <p>
          {data?.data?.description}
        </p>
        <span>Written</span> by <h3 className="font-medium">{data?.data.author}</h3>
      </article>

      <div className="col-span-1">
        <h3>More from this author</h3>

      </div>
    </div>
  )
}

export default Blog