import axios from "axios"
import { useState } from "react"

function Post() {
    const [title, setTitle] = useState("")

    const postHandler = () => {
        // console.log("first")
        axios.post("https://jsonplaceholder.typicode.com/posts",{title})
        .then(res=>console.log(res))
    }
  return (
    <div>
        <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <button onClick={postHandler}>Create Post</button>
    </div>
  )
}

export default Post