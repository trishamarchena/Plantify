import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { createPlant } from '../../../services/plants'

export default function CreatePlant({user}) {

  const [formData, setFormData] = useState({
    name: '',
    user_id: user?.id,
    watering_input: '',
    sunlight_input: '',
    other_input: '',
    image_url: ''
  })
  const history = useHistory()

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
      user_id: user?.id
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPlant = await createPlant(formData)
    history.push(`/plants/${newPlant.id}`)
  }


  return (
    <div>
      <h1>Add Plant</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          name = "name"
          type="text"
          value={formData.name}
          placeholder={!user && "name"}
        />
        <label htmlFor="watering_input">watering :</label>
        <input
          onChange={(e) => handleChange(e)}
          id="watering_input"
          name= "watering_input"
          type="text"
          value={formData.watering_input}
          placeholder={!user && "water"}
        />
        <label htmlFor="sunlight_input">sunlight :</label>
        <input
          onChange={(e) => handleChange(e)}
          id="sunlight_input"
          name= "sunlight_input"
          type="text"
          value={formData.sunlight_input}
          placeholder={!user && "sunlight"}
        />
        <label htmlFor="other_input">other:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="other_input"
          name="other_input"
          type="text"
          value={formData.other_input}
          placeholder={!user && "other"}
        />
        <label htmlFor="image_url">Image:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="image_url"
          name="image_url"
          type="text"
          value={formData.image_url}
          placeholder={!user && "image"}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
