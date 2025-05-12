import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})


api.interceptors.request.use((request)=>{
    request.headers.Authorization = "token"
    // console.log(request)
    console.log(`${request.method} is sent to ${request.url}`)
    return request
  }, (error) => {
    console.log(error)
    Promise.reject(error)
})
  
api.interceptors.response.use((response)=>{
    console.log(response)
    // return response
    return response.data
  }, (error) => {
    console.log(error)
    Promise.reject(error)
})

export default api