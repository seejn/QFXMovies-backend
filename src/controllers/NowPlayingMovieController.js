import * as  NowPlayingMovieServices from "../services/NowPlayingMovieServices.js";
import { getMovieById } from "../services/movieServices.js";

export const getAllMovies = async (req, res) => {
    try{
        const data = await NowPlayingMovieServices.getAllMovies();
        res.status(200).json(data);
    }catch(error){
        console.log("Error while fetching all nowplayingmovies", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const getMoviePlayingInCinema = async (req, res) => {
    const {cinema: cinemaId, movie: movieId} = req.params;
    try{
        const movie = await getMovieById(movieId);
        let data = await NowPlayingMovieServices.getMoviesPlayingInCinema(cinemaId, movieId);
        data = data.map(movie => ({id: movie._id, date: movie.date, time: movie.time}));
        res.status(200).json({movie: movie, ...data});
    }catch(error){
        console.log("Error while fetching nowplayingmovies by cinema", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const getMoviesPlayingInCinema = async (req, res) => {
    const {cinema: cinemaId} = req.params;
    try{
        const data = await NowPlayingMovieServices.getMoviesPlayingInCinema(cinemaId);
        res.status(200).json(data.map(movie => ({id: movie._id, movie: movie.movie, date: movie.date, time: movie.time})));
    }catch(error){
        console.log("Error while fetching nowplayingmovies by cinema", error);
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
        const { id } = req.params;
        const data = await NowPlayingMovieServices.updateMovie(id, req.body);
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