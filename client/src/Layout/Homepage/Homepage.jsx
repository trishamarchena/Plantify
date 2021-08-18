import { Link, useHistory, Route } from "react-router-dom";
import "./Homepage.css";

const Homepage = (props) => {
  return (
    <div className="description">
      <h2>
        Plantify is a full stack app that allows a user to keep track of their
        plant care, you can add all of the plants that you have or simply want
        and make sure they're well taken care of.
      </h2>
    </div>
  );
};

export default Homepage;
