import dotenv from "dotenv";

import connectDB from "../config/database.js";

dotenv.config();
const seed = async (model, data) => {
    await connectDB();
    await model.deleteMany({})
    
    try{
        await model.insertMany(data)
    
        console.log("Seed Completed successfully");
        process.exit(0);
    }catch(error){
        console.log("error seeding...", error);
        process.exit(1);
    }
}

export default seed;