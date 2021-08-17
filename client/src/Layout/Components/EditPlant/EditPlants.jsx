import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  getOnePlant,
  updatePlant,
  deletePlant,
} from "../../../services/plants";

export default function EditPlant({ user }) {
 
  const [formData, setFormData] = useState({
    name: "",
    user_id: user?.id,
    watering_input: "",
    sunlight_input: "",
    other_input: "",
    image_url: "",
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    const fetchPlant = async () => {
      const plant = await getOnePlant(id);
      setFormData({
        ...plant,
      });
    };
    fetchPlant();
  }, [id]);

  const handleChange = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,
     [name]: value,
      user_id: user?.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPlant = await updatePlant(id, formData);
    history.push(`/plants/${updatedPlant.id}`);
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    await deletePlant(id);
    history.push("/plants");
  };
  return (
    <div>
      <h1>Edit Plant</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          name="name"
          type="text"
          value={formData.name}
        />
        <label htmlFor="watering_input_edit_plant">watering input:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="watering_input_edit_plant"
          name="watering_input"
          type="text"
          value={formData.watering_input}
        />
        <label htmlFor="sunlight_input_edit_plant">sunlight input:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="sunlight_input_edit_plant"
          name="sunlight_input"
          type="text"
          value={formData.sunlight_input}
        />
        <label htmlFor="other_input_edit_plant">onther input:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="other_input_edit_plant"
          name="other_input"
          type="text"
          value={formData.other_input}
        />
        <label htmlFor="image_url_edit_plant">image input:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="image_url_edit_plant"
          name="image_url"
          type="text"
          value={formData.image_url}
        />
        <button type="submit">Submit</button>
        <button onClick={(e) => handleDelete(e)} className="plant-list-delete">
          delete
        </button>
      </form>
    </div>
  );
}
