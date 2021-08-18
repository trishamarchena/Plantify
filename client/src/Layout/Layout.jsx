import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar user={props.user} handleLogout={props.handleLogout}/>
      <div className ="layoutChildren">
      {props.children}
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
