import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { getAllPlantCares, createPlantCares } from '../../../services/plantCare'

export default function PlantCare({ user }) {
 
  const [formData, setFormData] = useState({
    date_edit: "",
    user_id: user?.id,
    notes: "",
    date_acq: ""
    
  });

  const history = useHistory();

  const { id } = useParams();
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
    const newPlantCare = await createPlantCares(formData)
    history.push(`/plants/${Plant.id}`)
  }
