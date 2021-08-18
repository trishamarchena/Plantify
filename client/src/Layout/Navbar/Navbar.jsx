import { Link } from "react-router-dom";
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
        <span className="logoutButton"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
  const unauthenticated = (
    <div className="navButtons">
      <Link className="linkup" to="/login">Sign In </Link>
      <Link className="linkup" to="/Register">Register!</Link>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navItems">
        <header className="nav-header">
          <Link to="/">
            <h1 id="mytitle">Plantify</h1>
          </Link>
        </header>
        <div className="nav-links-container">
          {user ? authenticated : unauthenticated}
          <div className="navButtons">
            <div className="plant-links">
              <Link className="linkup" to="/plants">Plants</Link>
            </div>
            <div className="addplantButton">
              <Link className="linkup" to="/create-plant">Add Plant</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
