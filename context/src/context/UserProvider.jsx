import { createContext, useState } from "react"

export const UserContext = createContext()

function UserProvider({children}) {
    const [users,setUsers] = useState([
        {id:1,name:"Milad"},
        {id:2,name:"Erfan"},
        {id:3,name:"Pouya"},
      ])
  return (
    <div>
        <UserContext.Provider value={{users,setUsers}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider