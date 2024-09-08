import * as cityService from "../services/cityServices.js";

export const getAllCities = async (req, res) => {
    const data = await cityService.getAllCities();
    res.status(200).json(data.map(d => ({"id": d._id, "name": d.name})));
}