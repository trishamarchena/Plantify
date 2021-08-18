import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ user, handleLogout, children }) => {
  // const [visible, setVisible] = useState(true);
  // const history = useHistory();

  

  const authenticated = (
    <div className="authenticatedUser_logout">
      <div className="usernameDisplay">
        <p>{user?.username}</p>
      </div>
      <div className="logoutDisplay">
        <Link
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
  const unauthenticated = (
    <>
      <Link to="/login">Sign In </Link>
      <Link to="/Register">Register!</Link>
    </>
  );

  return (
      <nav className="navbar">
        <div className="navItems">
          <header className="nav-header">
            <Link to="/">
            <h1 id="mytitle">Plantify</h1>
            </Link>
          </header>
          <div className= "nav-links-container">
            {user ? authenticated : unauthenticated}
          <div className="plant-links">
            <Link to="/plants">Plants</Link>
          </div>
          <div className="addplantButton">
            <Link to="/create-plant">add Plant</Link>
          </div>
          </div>
          {children}
        </div>
      </nav>
  );
};

export default Navbar;
