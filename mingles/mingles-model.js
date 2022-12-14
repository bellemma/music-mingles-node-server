import mongoose from "mongoose";
import minglesSchema from "./mingles-schema.js";

const minglesModel = mongoose.model('MinglesModel', minglesSchema)

export default minglesModel