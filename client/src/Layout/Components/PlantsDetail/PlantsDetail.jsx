import React, { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllPlantCares } from "../../../services/plantCare.js";
import { addPlantCareToPlant, getOnePlant } from "../../../services/plants";

export default function PlantDetail() {
  const [plant, setPlant] = useState({});
  const [formData, setFormData] = useState({
    name: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchPlant = async () => {
      const plant = await getOnePlant(id);
      setPlant(plant);
    };
    fetchPlant();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPlant = await addPlantCareToPlant(formData, plant.id);
    setPlant(updatedPlant);
  };

  return (
    <section className="screen-section">
      <h1>{plant.name}</h1>
      <img src={plant.image_url} alt={plant.name} />
      <h4>{plant.watering_input}</h4>
      <h4>{plant.sunlight_input}</h4>
      <h4>{plant.other_input}</h4>
      {plant.plant_cares?.map((care) => (
        <Fragment key={care.id}>
          <h4>{care.date_edit}</h4>
          <h4>{care.notes}</h4>
          <h4>{care.date_acq}</h4>
        </Fragment>
      ))}
      {plant.plant_cares?.map((plantCare) => {
        return <p key={plantCare.id}>{plantCare.name}</p>;
      })}
      <form onSubmit={(e) => handleSubmit(e)} className="plant-detail-form">
        <Link to={`/plants/${plant.id}/edit`}>
          <button className="plant-list-edit">edit</button>
        </Link>
        <Link to={`plants/${plant.id}/plant_cares`}>
          <button type="submit">Plant Care</button>
        </Link>
      </form>
    </section>
  );
}
