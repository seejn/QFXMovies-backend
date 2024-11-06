import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
         type: String,
         required: true
    }
});

schema.set("toJSON", {
    virtuals: true,
    transform: function(doc, ret, next){
        const { __v, _id, id, ...rest} = ret;
        return rest;
    }
})

export default mongoose.model("Role", schema);