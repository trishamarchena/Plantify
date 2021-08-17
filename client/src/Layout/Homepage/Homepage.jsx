import { Link, useHistory, Route } from "react-router-dom"
import "./Homepage.css"

const Homepage = (props) => {
  const history = useHistory()

  const unauthenticated = (
    <div>
      <Link to="/SignIn">Sign In /</Link>
      <Link to="/register">Register</Link>
    </div>
  )

  const authenticated = (
    <div>
      <p>{props.user?.username}</p>
      <button onClick={() => {
        props.handleLogout()
        history.push("/")
      }}>Logout</button>
    </div>
  )

  return (
    <div>
      <header className="layout-header">
        <h1>Plantify</h1>
        {
          props.user ?
            authenticated
            :
            unauthenticated
        }
      </header>
      <hr />
      <div className="nav-links">
        <Link to="/plants">Plants</Link>
        <Link to="/create-plant">Add Plants</Link>
      </div>
      <hr />
      {props.children}
    </div>
  )
}

export default Homepage;