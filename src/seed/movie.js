import dotenv from "dotenv";

import Movie from "../models/Movie.js";
import connectDB from "../config/database.js";

dotenv.config();

const movies = [
    {
        name: "Devi",
    },
    {
        name: "The Greatest of All Time",
    },
    {
        name: "Stree 2",
    },
    {
        name: "Vedaa",
    },
    {
        name: "Gharjwain",
    },
];

const seedMovies = async () => {
    await connectDB();
    await Movie.deleteMany({})
    
    try{
        const moviePromise = movies.map(movie => {
            console.log(movie)
            return Movie.create(movie);
        });
        await Promise.all(moviePromise);
    
        console.log("Movies seeded");
        process.exit(0);
    }catch(error){
        console.log("error seeding movies");
    }
}

seedMovies();
