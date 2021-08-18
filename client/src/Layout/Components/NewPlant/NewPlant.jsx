import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPlant } from "../../../services/plants";
import "./NewPlant.css";

export default function CreatePlant({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    user_id: user?.id,
    watering_input: "",
    sunlight_input: "",
    other_input: "",
    image_url: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      user_id: user?.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlant = await createPlant(formData);
    history.push(`/plants/${newPlant.id}`);
  };

  return (
    <div className="newPlantContainer">
      <div className="plantHeader">
        <h1 className="addPlantHeader">Add Plant</h1>
      </div>
      <div>
        <form className="newPlantForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="newPlantInput"
            onChange={(e) => handleChange(e)}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            placeholder="name"
          />

          <input
            className="newPlantInput"
            onChange={(e) => handleChange(e)}
            id="watering_input"
            name="watering_input"
            type="text"
            value={formData.watering_input}
            placeholder="Water"
          />

          <input
            className="newPlantInput"
            onChange={(e) => handleChange(e)}
            id="sunlight_input"
            name="sunlight_input"
            type="text"
            value={formData.sunlight_input}
            placeholder="Sunlight"
          />

          <input
            className="newPlantInput"
            onChange={(e) => handleChange(e)}
            id="other_input"
            name="other_input"
            type="text"
            value={formData.other_input}
            placeholder="Other"
          />

          <input
            className="newPlantInput"
            onChange={(e) => handleChange(e)}
            id="image_url"
            name="image_url"
            type="text"
            value={formData.image_url}
            placeholder="ImageURL"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
