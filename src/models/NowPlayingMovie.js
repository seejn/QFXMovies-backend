import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    cinema: {
        type: Schema.Types.ObjectId,
        ref: "Cinema"    
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie"
    },
    date: {
        type: Schema.Types.ObjectId,
        ref: "AvailableOn"
    },
    time: {
        type: Schema.Types.ObjectId,
        ref: "AvailableAt"
    }
});

export default mongoose.model("NowPlayingMovie", schema);