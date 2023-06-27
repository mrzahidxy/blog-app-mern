import { publicRequest } from "./requestMethod"

export const getBlogs = () => {
    return publicRequest.get('blogs')
}

export const getBlog = (id: string) => {
    return publicRequest.get(`/blogs/${id}`)
}