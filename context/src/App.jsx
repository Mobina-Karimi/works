import UsersPage from "./components/UsersPage"
import UserProvider from "./context/UserProvider"

function App() {
  return (
    <>
     {/* <UserContext.Provider value={{users, author:"Milad Azami"}}> */}

     {/* <UserContext.Provider value={{users,setUsers}}> */}
      {/* <UsersPage/> */}
     {/* </UserContext.Provider> */}

     <UserProvider>
      <UsersPage/>
     </UserProvider>
    </>
  )
}

export default App
