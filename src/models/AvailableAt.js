import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    time: {
        type: String,
        required: true
    }
},
{
    collection: 'availableat'
});

export default mongoose.model("AvailableAt", schema);