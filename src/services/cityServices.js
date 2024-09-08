import City from '../models/City.js';

export const getAllCities = async () => {
    return await City.find();
}