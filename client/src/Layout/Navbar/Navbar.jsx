import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ user, props }) => {
  const [visible, setVisible] = useState(true);
  const history = useHistory();
  // is the hamburger menu open?
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 771) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    };
    handleResize();
    // add an event listener to the resize event on the window
    window.addEventListener("resize", handleResize);
    // unmounts we'll remove that event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const authenticated = (
    <div className="authenticatedUser_logout">
      <div className="usernameDisplay">
        <p>{user?.username}</p>
      </div>
      <div className="logoutDisplay">
        <button
          onClick={(e) => {
            props.handleLogout(e);
          }}
        >
          Logout
        </button>
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
    <nav className={hamburger ? "active" : null}>
      <nav className="navbar">
        <div className="welcome"></div>
        <div id="hamburger-div">
          {hamburger ? (
            <div id="close-hamburger" onClick={() => setHamburger(!hamburger)}>
              X
            </div>
          ) : (
            <i
              className="fa fa-bars"
              id="hamburger-logo"
              onClick={() => setHamburger(!hamburger)}
            ></i>
          )}
        </div>
        <div
          className="links"
          style={{ display: visible || hamburger ? "flex" : "none" }}
        ></div>
        <div>
          <header className="layout-header">
            <h1>Plantify</h1>
            {user ? authenticated : unauthenticated}
          </header>
          <hr />
          <div className="plant-links">
            <Link to="/plants">Plants</Link>
          </div>
          <div className="addplantButton">
            <Link to="/create-plant">add Plant</Link>
          </div>
          <hr />
          {props?.children}
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
