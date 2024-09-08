import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    city_id: String,
    cinema_id: String
});

export default mongoose.model("Movie", schema);