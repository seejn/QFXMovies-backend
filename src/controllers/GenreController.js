import * as GenreServices from "../services/GenreServices.js";

export const getAllGenres = async (req, res) => {
    try{
        const data = await GenreServices.getAllGenres();
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const getGenreById = async (req, res) => {
    const {id} = req.params;
    try{
        const data = await GenreServices.getGenreById(id);
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const createGenre = async (req, res) => {
    try{
        const data = await GenreServices.createGenre(req.body);
        res.status(201).json({message: "New genre added successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const updateGenre = async (req, res) => {
    const {id} = req.params;
    try{
        const data = await GenreServices.updateGenre(id, req.body);
        res.status(201).json({message: "Genre updated successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const deleteGenre = async (req, res) => {
    const {id} = req.params;
    try{
        const data = await GenreServices.deleteGenre(id);
        res.status(201).json({message: "Genre updated successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
