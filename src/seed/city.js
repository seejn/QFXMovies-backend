import City from "../models/City.js";
import seed from "../utils/seed.js";
const cities = [
    {
        "id": "672c1fa63f4eb09b99516349",
        "name": "Kathmandu"
    },
    {
        "id": "672c1fa63f4eb09b9951634a",
        "name": "Lalitpur"
    },
    {
        "id": "672c1fa63f4eb09b9951634b",
        "name": "Bhaktapur"
    },
    {
        "id": "672c1fa63f4eb09b9951634c",
        "name": "pokhara"
    }
]
seed(City, cities);