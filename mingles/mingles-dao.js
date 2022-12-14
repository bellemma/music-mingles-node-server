import moviesModel from "./mingles-model.js";
import minglesModel from "./mingles-model.js";

export const findAllMingles = async () => {
  const mingles = await minglesModel.find()
  return mingles;
}
export const createMingle = async (mingle) => {
  const actualInsertedMingle = await minglesModel.create(mingle)
  return actualInsertedMingle
}
export const deleteMingle = async (mid) => {
  const status = await minglesModel.deleteOne({_id: mid})
  return status
}
export const updateMingle = () => {}