import { Link, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function AboutUsPage() {
  return (
    <div>
        <NavBar/>
        <h1>AboutUsPage</h1>
        <ul>
          <li>
            {/* <Link to="/about-us/programmers">Programmers</Link> */}
            <Link to="programmers">Programmers</Link>
          </li>
          <li>
            {/* <Link to="/about-us/users">Users</Link> */}
            <Link to="users">Users</Link>
          </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default AboutUsPage