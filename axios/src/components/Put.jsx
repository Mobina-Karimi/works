import axios from "axios"
import { useState } from "react"

function Put() {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")

    const updateHandler = () => {
        // console.log({id,title})
        // axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,{title})
        // .then(res=>console.log(res))
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title})
        .then(res=>console.log(res))
        .catch(error=>console.log(error)
        )
    }
  return (
    <div>
        <input type="text" placeholder="id" value={id} onChange={e=>setId(e.target.value)}/>
        <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <button onClick={updateHandler}>Put</button>
    </div>
  )
}

export default Put