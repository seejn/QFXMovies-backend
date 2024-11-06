import NowPlayingMovie from "../models/NowPlayingMovie.js";

export const createMovie = async (data) => {
    return await NowPlayingMovie.create(data);
}
export const updateMovie = async (id, data) => {
    return await NowPlayingMovie.findOneAndUpdate({_id: id}, data, {new: true});
}
export const deleteMovie = async (id) => {
    return await NowPlayingMovie.findOneAndDelete({_id: id});
}


export const getAllMovies = async () => {
    return await NowPlayingMovie.find()
    .populate("cinema")
    .populate("movie")
    .populate("date")
    .populate("time");
}
export const getMoviePlayingInCinema = async (cinemaId, movieId) => {
    return await NowPlayingMovie.find().where({cinema: cinemaId, movie: movieId})
    .populate("date")
    .populate("time");
}
export const getMoviesPlayingInCinema = async (cinemaId) => {
    return await NowPlayingMovie.find().where({cinema: cinemaId})
    .populate("movie")
    .populate("date")
    .populate("time");
}