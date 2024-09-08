import Cinema from "../models/Cinema.js";

export const getAllCinemas = async () => {
    const cinemas = await Cinema.find();
    return cinemas;
}

export const getCinemaById = async (id) => {
    const cinema = await Cinema.findOne({"_id": id});
    return cinema;
}

export const addCinema = async (data) => {
    const createdCinema = await Cinema.create(data)
    return createdCinema;
}

export const updateCinema = async (id, data) => {
    try{
        return await Cinema.findOneAndUpdate({"_id": id}, data, {new: true});
    }catch(error){
        console.log("From service", error);
    }
}

export const deleteCinema = async (id) => {
    try{
        return await Cinema.deleteOne({"_id": id});
    }catch(error){
        console.log("From Cinema Services", error);
    }
}