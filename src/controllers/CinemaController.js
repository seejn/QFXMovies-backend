import * as cinemaServices from "../services/cinemaServices.js";

export const getAllCinemas = async (req, res) => {
    const responseData = await cinemaServices.getAllCinemas();
    res.status(200).json(responseData.map(data => ({"id": data._id, "name": data.name})));
}


export const getCinemaById = async (req, res) => {
    const { id } = req.params;
    const responseData = await cinemaServices.getCinemaById(id);
    const response = {
        id: responseData._id,
        name: responseData.name
    }
    res.status(200).json(response);
}

export const addCinema = async (req, res) => {
    const data = req.body;
    const responseData = await cinemaServices.addCinema(data);
    const response = {
        id: responseData._id,
        name: responseData.name
    }
    res.status(200).json(response);
}

export const updateCinema = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedCinema = await cinemaServices.updateCinema(id, data);
    
    const responseData = {
        "id": updatedCinema._id,
        "name": updatedCinema.name
    }
    res.status(200).json(responseData);
}

export const deleteCinema = async (req, res) => {
    const { id } = req.params;

    const responseData = await cinemaServices.deleteCinema(id);

    res.status(200).json(responseData)
}