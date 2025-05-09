import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
// import {UserContext} from "../App"

function UsersList() {
  // const result = useContext(UserContext)
  const {users} = useContext(UserContext)
  // console.log(result)
  return (
    <div>{users.map(user => <p key={user.id}>{user.name}</p>)}</div>
  )
}

export default UsersList