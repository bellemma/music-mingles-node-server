import mongoose from "mongoose";

const minglesSchema = mongoose.Schema({
  title: {type: String, required: true}
}, {collection: 'mingles'})

export default minglesSchema