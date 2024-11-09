import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    theatre: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    locatedIn: {
        type: Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
});

export default mongoose.model("Cinema", schema);