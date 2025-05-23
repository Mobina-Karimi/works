import { useContext, useState } from "react"
// import { UserContext } from "../App"
import { UserContext } from "../context/UserProvider"

function Form() {
    const [name, setName] = useState("")
    const {setUsers} = useContext(UserContext)

    const addHandler = () =>{
        setUsers(users=>([...users, {id:Math.floor(Math.random()*100), name:name}]))
    }
  return (
    <div>
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={addHandler}>Add</button>
    </div>
  )
}

export default Form