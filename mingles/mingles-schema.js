import mongoose from "mongoose";

const minglesSchema = mongoose.Schema({
  title: {type: String, required: true},
  likes: {type: Number, default: 0},
  liked: {type: Boolean, default: false},
  dislikes: Number,
  rating: String,
  genre: {type: String, enum: ['SCIFI', 'HORROR', 'COMEDY']}
}, {collection: 'mingles'})

export default minglesSchema