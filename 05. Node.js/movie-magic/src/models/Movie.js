import { model, Schema, Types } from "mongoose";

const movieSchema = new Schema({
  title: String,
  genre: String,
  director: String,
  year: Number,
  rating: Number,
  description: String,
  imageUrl: String,
  casts: [
    {
      type: Types.ObjectId,
      ref: "Cast",
    },
  ],
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Movie = model("Movie", movieSchema);

export default Movie;
