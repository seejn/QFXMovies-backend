import * as cityService from "../services/cityServices.js";

export const getAllCities = async (req, res) => {
    const data = await cityService.getAllCities();
    res.status(200).json(data.map(d => ({"id": d._id, "name": d.name})));
}

export const getCity = async(req, res) => {
    const {id} = req.params;
    try{
        const data = await cityService.getCity(id);
        res.status(200).json(data);
    }catch(error){
        console.log("Error while getting single city", error)
        res.status(400);
    }
}
export const createCity = async(req, res) => {
    try{
        const data = await cityService.createCity(req.body);
        res.status(200).json({message: "New city added successfully", data: data});
    }catch(error){
        console.log("Error while create single city", error)
        res.status(400);
    }
}
export const removeCity = async(req, res) => {
    const {id} = req.params;
    try{
        const data = await cityService.removeCity(id);
        res.status(200).json({message: "City removed successfully", data: data});
    }catch(error){
        console.log("Error while getting single city", error)
        res.status(400);
    }
}
export const updateCity = async(req, res) => {
    const {id} = req.params;
    try{
        const data = await cityService.updateCity(id, req.body);
        res.status(200).json({message: "City updated successfully", data: data});
    }catch(error){
        console.log("Error while updating city", error);
        if(error.code === 11000 && error.codeName === "DuplicateKey"){
            return res.status(400).json({message: "City already exists."});
        }
        res.status(400).json({message: "something went wrong"});
    }
}