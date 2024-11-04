import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model("City", schema);