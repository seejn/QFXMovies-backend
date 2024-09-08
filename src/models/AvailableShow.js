import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    cinema_id: String,
    movie_id: String,
    date_id: String,
    time_id: String,
});

export default mongoose.model("Movie", schema);