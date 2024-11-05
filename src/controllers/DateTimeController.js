import * as DateTimeServices from "../services/DateTimeServices.js";

export const getAllDates  = async (req, res) => {
    try{
        const data = await DateTimeServices.getAllDates();
        res.status(200).json(data);
    }catch(error){
        console.log("Error while fetching all dates", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const getAllTime  = async (req, res) => {
    try{
        const data = await DateTimeServices.getAllTime();
        res.status(200).json(data);
    }catch(error){
        console.log("Error while fetching all time", error);
        res.status(400).json({message: "Something went wrong"});
    }
}