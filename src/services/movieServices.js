import Movie from "../models/Movie.js"

export const getAllMovies = async () => {
    return await Movie.find();
}

export const getMovieById = async (id) => {
    return await Movie.findOne({"_id": id});
}

export const addMovie = async (data) => {
    return await Movie.create(data);
}

export const updateMovie = async (id, data) => {
    try{
        return await Movie.findOneAndUpdate({"_id": id}, data);
    }catch(error){
        console.log("From service", error);
    }
}

export const deleteMovie = async (id) => {
    try{
        return await Movie.findOneAndDelete({"_id": id});
    }catch(error){
        console.log(error);
    }
}