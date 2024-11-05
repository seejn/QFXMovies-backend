import Movie from "../models/Movie.js"

export const getAllMovies = async () => {
    return await Movie.find().populate("genre");
}

export const getMovieById = async (id) => {
    return await Movie.findOne({"_id": id}).populate("genre");
}

export const addMovie = async (data) => {
    return await Movie.create(data);
}

export const updateMovie = async (id, data) => {
    return await Movie.findOneAndUpdate({"_id": id}, data, {new: true});
}

export const deleteMovie = async (id) => {
    return await Movie.findOneAndDelete({"_id": id});
}