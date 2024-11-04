import City from '../models/City.js';

export const getAllCities = async () => {
    return await City.find();
}

export const getCity = async (id) => {
    return await City.findById(id);
}

export const createCity = async (data) => {
    return City.create(data);
}

export const removeCity = async (id) => {
    return City.findByIdAndDelete({_id: id});
}

export const updateCity = async (id, newData) => {
    return City.findByIdAndUpdate({_id: id}, newData, {new: true});
}
