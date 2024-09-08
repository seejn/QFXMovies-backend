import dotenv from "dotenv";

import City from "../models/City.js";
import connectDB from "../config/database.js";

dotenv.config();

const cities = [
    {
        "name": "kathmandu"
    },
    {
        "name": "Lalitpur"
    },
    {
        "name": "Bhaktapur"
    }
]
const seedCities = async () => {
    await connectDB();
    await City.deleteMany({})
    
    try{
        await City.insertMany(cities)
    
        console.log("Cities seeded");
        process.exit(0);
    }catch(error){
        console.log("error seeding cities");
        process.exit(1);
    }
}

seedCities();
