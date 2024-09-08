import dotenv from "dotenv";

import Cinema from "../models/Cinema.js";
import connectDB from "../config/database.js";

dotenv.config();

const cinemas = [
    {
        "name": "Cinema 1"
    },
        
    {
        "name": "Cinema 2"
    },
    {
        "name": "Cinema 3"
    },
    {
        "name": "Cinema 4"
    },
    {
        "name": "Cinema 5"
    },
    {
        "name": "Cinema 6"
    }
]

const seedCinemas = async () => {
    await connectDB();
    await Cinema.deleteMany({})
    
    try{
        await Cinema.insertMany(cinemas)
    
        console.log("Cinemas seeded");
        process.exit(0);
    }catch(error){
        console.log("error seeding cinemas");
        process.exit(1);
    }
}

seedCinemas();
