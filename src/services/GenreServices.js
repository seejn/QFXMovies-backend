import Genre from "../models/Genre.js";

export const getAllGenres = async () => {
    return await Genre.find();
}
export const getGenreById = async (id) => {
    return await Genre.findById(id);
}
export const createGenre = async (data) => {
    return await Genre.create(data);
}
export const updateGenre = async (id, data) => {
    return await Genre.findOneAndUpdate({_id: id}, data, {new: true});
}
export const deleteGenre = async (id) => {
    return await Genre.findOneAndDelete({_id: id})
}