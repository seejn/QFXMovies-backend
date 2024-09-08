import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    date: Date
});

export default mongoose.model("Movie", schema);