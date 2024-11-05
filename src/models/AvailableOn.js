import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    date: {
        type: Date,
        required: true
    }
},
{
    collection: 'availableon'
});

export default mongoose.model("AvailableOn", schema);