import * as  NowPlayingMovieServices from "../services/NowPlayingMovieServices.js";

export const getAllMovies = async (req, res) => {
    try{
        const data = await NowPlayingMovieServices.getAllMovies();
        res.status(200).json(data);
    }catch(error){
        console.log("Error while fetching all nowplayingmovies", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const getMovieById = async (req, res) => {
    try{
        const data = await NowPlayingMovieServices.getMovieById();
        res.status(200).json(data);
    }catch(error){
        console.log("Error while fetching specific nowplayingmovies", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const createMovie = async (req, res) => {
    try{
        const data = await NowPlayingMovieServices.createMovie();
        res.status(200).json({message: "Movie added successfully", data: data});
    }catch(error){
        console.log("Error while creating nowplayingmovies", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const updateMovie = async (req, res) => {
    try{
        const data = await NowPlayingMovieServices.updateMovie();
        res.status(200).json({message: "Movie updated successfully", data: data});
    }catch(error){
        console.log("Error while updating nowplayingmovies", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const deleteMovie = async (req, res) => {
    try{
        const data = await NowPlayingMovieServices.deleteMovie();
        res.status(200).json({message: "Movie deleted successfully", data: data});
    }catch(error){
        console.log("Error while deleting nowplayingmovies", error);
        res.status(400).json({message: "Something went wrong"});
    }
}