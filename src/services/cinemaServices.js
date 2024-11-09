import Cinema from "../models/Cinema.js";

export const getAllCinemas = async () => {
    return await Cinema.find().populate("locatedIn").populate("theatre");
}

export const getCinemaById = async (id) => {
    return await Cinema.findOne({"_id": id}).populate("locatedIn").populate("theatre");
}

export const addCinema = async (data) => {
    return await Cinema.create(data);
}

export const updateCinema = async (id, data) => {
    return await Cinema.findOneAndUpdate({"_id": id}, data, {new: true});
}

export const deleteCinema = async (id) => {
    return await Cinema.findByIdAndDelete(id);
}