import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    slot: String
});

export default mongoose.model("Movie", schema);