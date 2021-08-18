import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPlants } from "../../../services/plants.js";
import "./Plants.css";

export default function Plants({ user }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const allPlants = await getAllPlants();
      setPlants(allPlants);
    };
    fetchPlants();
  }, []);

  

  return (
    <section className="allThePlants">
      <h1 className="plantsheader">All my greens</h1>
      <div className="plant-list">
        {plants.map((plant) => {
          return (
            <Fragment key={plant.id}>
              <Link to={`/plants/${plant.id}`} className="plant-list-name">
              <div className="plantImagesContainers">
        <img className="plantImages" src={plant.image_url} alt={plant.name} />
      </div>
                <p>{plant.name}</p>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
