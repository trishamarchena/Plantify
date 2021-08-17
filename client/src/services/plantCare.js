import api from "./apiConfig"


export const getAllPlantCares = async () => {
  const res =  await api.get("/plant_cares")
  return res.data
}