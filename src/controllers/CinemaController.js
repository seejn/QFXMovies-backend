import * as cinemaServices from "../services/cinemaServices.js";

export const getAllCinemas = async (req, res) => {
    try{
        const data = await cinemaServices.getAllCinemas();
        res.status(200).json(data);
    }catch(error){
        console.log("Error while getting all cinemas", error);
        res.status(400).json({message: "Something went wrong"});
    }
}


export const getCinemaById = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await cinemaServices.getCinemaById(id);
        res.status(200).json(data);
    }catch(error){
        console.log("Error while getting specific cinema", error);
        res.status(400).json({message: "Something went wrong"});
    }
}

export const addCinema = async (req, res) => {
    try{
        const data = await cinemaServices.addCinema(req.body);
        res.status(200).json({message: "New cinema added successfully", data: data});
    }catch(error){
        console.log("Error while adding new cinema", error);
        res.status(400).json({message: "Something went wrong"});
    }
}

export const updateCinema = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await cinemaServices.updateCinema(id, req.body);
        res.status(200).json({message: "cinema updated successfully", data: data});
    }catch(error){
        console.log("Error while updating cinema", error);
        res.status(400).json({message: "Something went wrong"});
    }
}

export const deleteCinema = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await cinemaServices.deleteCinema(id);
        res.status(200).json({message: "cinema deleted successfully", data: data})
    }catch(error){
        console.log("Error while deleting cinema", error);
        res.status(400).json({message: "Something went wrong"});
    }
}