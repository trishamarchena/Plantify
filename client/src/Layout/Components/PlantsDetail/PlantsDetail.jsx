import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPlantCares } from '../../../services/plantCare.js'
import { addPlantCareToPlant, getOnePlant } from '../../../services/plants'

export default function PlantDetail() {
  const [plant, setPlant] = useState({})
  const [plantCares, setPlantCares] = useState([])
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams()

  useEffect(() => {
    const fetchPlant = async () => {
      const plant = await getOnePlant(id)
      setPlant(plant)
    }
    fetchPlant()
  }, [id])

  useEffect(() => {
    const fetchPlantCares = async () => {
      const plantCares = await getAllPlantCares()
      setPlantCares(plantCares)
    }
    fetchPlantCares()
  }, [])


  const handleChange = (e) => {
    const { value } = e.target
    setFormData({name: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedPlant = await addPlantCareToPlant(formData, plant.id)
    setPlant(updatedPlant)
  }


  return (
    <section className="screen-section">
      <h1>{plant.name}</h1>
      <h4>{plant.image_url}</h4>
      <h4>{plant.watering_input}</h4>
      <h4>{plant.sunlight_input}</h4>
      <h4>{plant.other_input}</h4>
      <h4>{plant.date_edit}</h4>
      <h4>{plantCares.notes}</h4>
      <h4>{plantCares.date_acq}</h4>
      {plantCares?.map(plantCare => {
        return (
          <p key={plantCare.id}>{plantCare.name}</p>
        )
      })}
      <form onSubmit={(e) => handleSubmit(e)} className="plant-detail-form">
        
            
          
        
        <button type="submit">Plant Care</button>
      </form>
    </section>
  )
}
