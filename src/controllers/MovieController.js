import * as movieServices from '../services/movieServices.js';

export const getAllMovies = async (req, res) => {
    const allMovies = await movieServices.getAllMovies();
    res.status(200).json(allMovies.map(movie => ({"id": movie._id, "name": movie.name})));
}

export const getMovieById = async (req, res) => {
    const { id } = req.params;
    const movie = await movieServices.getMovieById(id);
    res.status(200).json(movie);
}

export const addMovie = async (req, res) => {
    const data = req.body;
    const responseData = await movieServices.addMovie(data);
    res.status(201).json(responseData);
}

export const updateMovie = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const responseData = await movieServices.updateMovie(id, data);
    res.status(200).json(responseData);
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const responseData = await movieServices.deleteMovie(id);
    res.status(200).json(responseData);
}