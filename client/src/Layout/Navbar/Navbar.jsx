import { Route } from "react-router-dom"

import Plants from './Components/Plants/Plants.jsx'
// import CreateFood from '../screens/CreateFood'
// import EditFood from "../screens/EditFood"
// import Flavors from "../screens/Flavors"
// import FoodDetail from "../screens/FoodDetail"

const Navbar = ({user}) => {
  const [visible, setVisible] = useState(true);
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

  return (
    <nav className={hamburger ? "active" : null}>
      <div className="navbar">
        <div className="welcome">
          <Link to="/">SPF</Link>
        </div>
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
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/plants">
        <Plants user={user} />
      </Route>
      <Route exact path="/plant/:id">
        <PlantDetail/>
      </Route>
      <Route exact path="/create-plant">
        <CreatePlant user={user}/>
      </Route>
      <Route exact path="/plant/:id/edit">
        <Plant user={user}/>
      </Route>
      <Route exact path="/plant_care">
        <Plant_Care/>
      </Route>
    </div>
    </div>
    
    </nav>
  )
          }

export default Navbar;