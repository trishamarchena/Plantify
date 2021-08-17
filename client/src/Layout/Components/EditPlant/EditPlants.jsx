import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getOnePlant, updatePlant } from '../../../services/plants'

export default function EditPlant({user}) {

  const [formData, setFormData] = useState({
    name: '',
    user_id: ''
  })

  const history = useHistory()

  const { id } = useParams()

  useEffect(() => {
    const fetchPlant = async () => {
      const plant = await getOnePlant(id)
      setFormData({
        name: plant.name,
        user_id: plant.user_id
      })
    }
    fetchPlant()
  }, [id])

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({
      name: value,
      user_id: user?.id
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedPlant = await updatePlant(formData, id)
    history.push(`/plants/${updatedPlant.id}`)
  }

  return (
    <div>
      <h1>Edit Plant</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
          
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
