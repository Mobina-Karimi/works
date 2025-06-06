import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import axios from 'axios'

// axios.interceptors.request.use((request)=>{
//   request.headers.Authorization = "token"
//   // console.log(request)
//   console.log(`${request.method} is sent to ${request.url}`)
//   return request
// }, (error) => {
//   console.log(error)
//   Promise.reject(error)
// })

// axios.interceptors.response.use((response)=>{
//   console.log(response)
//   // return response
//   return response.data
// }, (error) => {
//   console.log(error)
//   Promise.reject(error)
// })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
