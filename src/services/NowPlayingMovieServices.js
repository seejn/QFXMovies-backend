import NowPlayingMovie from "../models/NowPlayingMovie.js";

export const getAllMovies = async () => {
    return await NowPlayingMovie.find()
    .populate("cinema")
    .populate("movie")
    .populate("date")
    .populate("time");
}
export const getMovieById = async (id) => {
    return await NowPlayingMovie.findById(id)
    .populate("cinema")
    .populate("movie")
    .populate("date")
    .populate("time");
}
export const createMovie = async (data) => {
    return await NowPlayingMovie.create(data);
}
export const updateMovie = async (id, data) => {
    return await findOneAndUpdate({_id: id}, data, {new: true});
}
export const deleteMovie = async (id) => {
    return await findOneAndDelete({_id: id});
}