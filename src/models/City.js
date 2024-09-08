import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: String
});

export default mongoose.model("City", schema);