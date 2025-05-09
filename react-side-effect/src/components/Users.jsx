import { use, useEffect, useState } from "react"
import Counter from "./Counter"

function Users() {
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])
  const [id, setId] = useState("")

  // useEffect(()=>{
  //   setTimeout(()=>console.log("mounted"),3000)
  // },[])

  // useEffect(()=>{
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   // .then(res =>res.json())
  //   // .then(json => setUsers(json))

  //   // async function fetchUsers() {
  //   //   const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //   //   const json = await res.json()
  //   //   setUsers(json)
  //   // }
  //   // fetchUsers()

  //   // const fetchUsers = async() => {
  //   //   const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //   //   const json = await res.json()
  //   //   setUsers(json)
  //   // }
  //   // fetchUsers()

  //   // const fetchUsers = async() => {
  //   //   try{
  //   //     const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //   //     const json = await res.json()
  //   //     setUsers(json)
  //   //   }catch(error){
  //   //     console.log(error)
  //   //     setError(true)
  //   //   }
  //   // }
  //   // fetchUsers()

  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   // .then(res =>res.json())
  //   // .then(json => setUsers(json))
  //   // .catch(error => setError(true))
  // },[])

  // useEffect(()=>{ 
  //     const fetchUsers = async() => {
  //     try{
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       const json = await res.json()
  //       setUsers(json)
  //       console.log(json)
  //     }catch(error){
  //       console.log(error)
  //       setError(true)
  //     }
  //   }
  //   // console.log("useEffect runs")
  //   fetchUsers()
  // },[id])


  // useEffect(()=>{ 
  //     const fetchUsers = async() => {
  //     try{
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  //       const json = await res.json()
  //       setUsers(json)
  //       console.log(json)
  //     }catch(error){
  //       console.log(error)
  //       setError(true)
  //     }
  //   }
  //   // console.log("useEffect runs")
  //   fetchUsers()
  // },[])

  // const searchHandler = async() => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   const json = await res.json()
  //   // setUsers(json)
  //   console.log(json)
  // }


  useEffect(()=>{ 
    const controller = new AbortController()
    const fetchUsers = async() => {
    try{
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, 
        {signal: controller.signal})
      const json = await res.json()
      setUsers(json)
      console.log(json)
    }catch(error){
      if(error.name !== "AbortError")
      {
      // console.log(error.message)
      console.log(error.name)
      setError(true)
      }
    }
  }
  fetchUsers()

  return (()=>{
    controller.abort()
    console.log("first")
  })
},[id])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
})

  return (
    // <div>
    //   <input type="text" placeholder="Enter id" value={id} onChange={e => setId(e.target.value)} />
    //   {/* {!users.length && <h3>Loading...</h3>} */}
    //   {!users.length && !error && <h3>Loading...</h3>}
    //   <ul>
    //     {users.map(user =><li key={user.id}>{user.name}</li>)}
    //   </ul>
    //   {error && <h3>Somthing went wrong!</h3>}
    // </div>

    // <div>
    //   <input type="text" placeholder="Enter id" value={id} onChange={e => setId(e.target.value)} />
    //   {/* {!users.length && <h3>Loading...</h3>} */}
    //   {!users.length && !error && <h3>Loading...</h3>}
    //   {error && <h3>Somthing went wrong!</h3>}
    // </div>

    <div>
      {/* {id>10 && <Counter/>} */}
      <input type="text" placeholder="Enter id" value={id} onChange={e => setId(e.target.value)} />
      {/* <button onClick={searchHandler}>search</button> */}
      {!users.length && !error && <h3>Loading...</h3>}
      <ul>
        {/* {users.map(user =><li key={user.id}>{user.name}</li>)} */}
      </ul>
      {error && <h3>Somthing went wrong!</h3>}
    </div>
  )
}

export default Users