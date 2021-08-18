import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const Layout = (props) => {
  return (
    <div className="layoutDiv">
      <Navbar user={props.user} handleLogout={props.handleLogout}/>
      <Footer />
      <div>
      {props.children}
    </div>
    </div>
  );
};

export default Layout;
