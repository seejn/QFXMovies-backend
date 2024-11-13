import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

schema.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret, next) {
        const {_id, __v, ...rest} = ret;
        return rest;
    }
})

export default mongoose.model("City", schema);