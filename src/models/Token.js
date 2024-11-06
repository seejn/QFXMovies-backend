import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    type: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: true
    }
}); 

export default mongoose.model("Token", schema);