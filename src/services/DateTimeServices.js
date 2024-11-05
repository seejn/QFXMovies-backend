import AvailableAt from "../models/AvailableAt.js";
import AvailableOn from "../models/AvailableOn.js";

export const getAllDates = async () => {
    return await AvailableOn.find();
}
export const getAllTime = async () => {
    return await AvailableAt.find();
}