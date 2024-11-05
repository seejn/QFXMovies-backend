import * as movieServices from '../services/movieServices.js';

export const getAllMovies = async (req, res) => {
    try{
        const data = await movieServices.getAllMovies();
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "something went wrong"});
    }
}

export const getMovieById = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await movieServices.getMovieById(id);
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "something went wrong"});
    }
}

export const addMovie = async (req, res) => {
    try{
        const data = await movieServices.addMovie(req.body);
        res.status(201).json({message: "New movie added successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "something went wrong"});
    }
}

export const updateMovie = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await movieServices.updateMovie(id, req.body);
        res.status(200).json({message: "Movie updated successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "something went wrong"});
    }
}

export const deleteMovie = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await movieServices.deleteMovie(id);
        res.status(200).json({message: "Movie deleted successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "something went wrong"});
    }
}