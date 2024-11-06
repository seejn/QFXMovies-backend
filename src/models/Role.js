import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
         type: String,
         required: true
    }
});

export default mongoose.model("Role", schema);