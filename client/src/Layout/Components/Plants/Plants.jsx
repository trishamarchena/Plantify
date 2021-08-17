import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPlants, deletePlant } from "../../../services/plants.js";
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

  const handleDelete = async (plantID) => {
    await deletePlant(plantID);
    setPlants((prevPlants) =>
      prevPlants.filter((plant) => plant.id !== plantID)
    );
  };

  return (
    <section className="screen-section">
      <h1>Plants</h1>
      <div className="plant-list">
        {plants.map((plant) => {
          return (
            <Fragment key={plant.id}>
              <Link to={`/plants/${plant.id}`} className="plant-list-name">
                <p>{plant.name}</p>
              </Link>
              <Link to={`/plants/${plant.id}/edit`}>
                <button className="plant-list-edit">edit</button>
              </Link>
              <button
                onClick={() => handleDelete(plant.id)}
                className="plant-list-delete"
              >
                delete
              </button>
            </Fragment>
          );
        })}
      </div>
      <Link to="/create-plant">
        <button>Add Plant</button>
      </Link>
    </section>
  );
}
