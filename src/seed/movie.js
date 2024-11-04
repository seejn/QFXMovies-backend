import Movie from "../models/Movie.js";
import seed from "../utils/seed.js";

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
seed(Movie, movies);