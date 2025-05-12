import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Post from "./components/Post"
import Delete from "./components/Delete"
import Put from "./components/Put"
import api from "./services/config"

function App() {
  const [todos, setTodos] = useState([])

  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos")
  //   // .then(res=>console.log(res))
  //   .then(res=>setTodos(res.data))
  // },[])

  // useEffect(()=>{
  //   axios.all([
  //     axios.get("https://jsonplaceholder.typicode.com/todos"),
  //     axios.get("https://jsonplaceholder.typicode.com/posts"),
  //     axios.get("https://jsonplaceholder.typicode.com/users"),
  //   ])
  //   // .then(res => {
  //   //   console.log(res[0].data)
  //   //   console.log(res[1].data)
  //   //   console.log(res[2].data)
  //   // })
  //   .then(
  //     axios.spread((todos,posts,users) => {
  //       console.log(todos)
  //       console.log(posts)
  //   }))
  // },[])


  useEffect(()=>{
    api.get("/todos")
    .then(res=>
      {console.log(res)}
    )
  },[])

  return (
    <>
    {/* <ul>
      {todos.map(todo=><li key={todo.id}>{todo.title}</li>)}
    </ul> */}
    {/* <Post /> */}
    {/* <Delete/> */}
    <Put />
    </>
  )
}

export default App
