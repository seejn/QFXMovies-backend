import Genre from '../models/Genre.js';
import seed from '../utils/seed.js';

const genres = [
    {
        "_id": "67299493b8d7527e941c1fe0",
        "name": "horror",
        "__v": 0
    },
    {
        "_id": "672994b3b8d7527e941c1fe3",
        "name": "Drama",
        "__v": 0
    },
    {
        "_id": "672994b8b8d7527e941c1fe5",
        "name": "Family",
        "__v": 0
    },
    {
        "_id": "672994ceb8d7527e941c1fe7",
        "name": "Action",
        "__v": 0
    },
    {
        "_id": "672994d4b8d7527e941c1fe9",
        "name": "Crime",
        "__v": 0
    },
    {
        "_id": "672994e9b8d7527e941c1feb",
        "name": "Comedy",
        "__v": 0
    },
    {
        "_id": "672994edb8d7527e941c1fed",
        "name": "Romance",
        "__v": 0
    }
]
seed(Genre, genres);