import api from "./apiConfig"

export const getAllPlants = async () => {
  const res = await api.get("/plants")
  return res.data
}

export const getOnePlant = async (plantID) => {
  const res = await api.get(`/plants/${plantID}`)
  return res.data
}

export const deletePlant = async (plantID) => {
  await api.delete(`/plants/${plantID}`)
}

export const createPlant = async (plantData) => {
  const res = await api.post("/plants", { plant: plantData })
  return res.data
}

export const updatePlant = async (plantID,plantData ) => {
  const res = await api.put(`/plants/${plantID}`, { plant: plantData })
  return res.data
}

export const addPlantCareToPlant = async (plant_careData, plantID) => {
  const res = await api.put(`/plants/${plantID}/add_plant_care`, {plant_care: plant_careData})
  return res.data
}
