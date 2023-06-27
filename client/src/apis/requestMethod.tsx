import axios from "axios"


const BASE_URL = "https://blog-api-zahid.vercel.app/api/"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})
