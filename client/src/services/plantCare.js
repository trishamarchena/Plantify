import api from "./apiConfig"


export const getAllPlantCares = async () => {
  const res =  await api.get("/plant_cares")
  return res.data
}

export const createPlantCares = async (plant_careData) => {
  const res = await api.post("/plant_care", { plant: plant_careData })
  return res.data
}