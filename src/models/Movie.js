import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: [
        {
            type: Schema.Types.ObjectId,
            ref: "Genre"
        }
    ]
},
{
    timestamps: true
});

export default mongoose.model("Movie", schema);