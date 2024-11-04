import City from "../models/City.js";
import seed from "../utils/seed.js";
const cities = [
    {
        "id": "66dabb5f5b6dd72b994759d6",
        "name": "Kathmandu"
    },
    {
        "id": "66dabb5f5b6dd72b994759d7",
        "name": "Lalitpur"
    },
    {
        "id": "66dabb5f5b6dd72b994759d8",
        "name": "Bhaktapur"
    },
    {
        "id": "6728738ffb7bb25ed4012383",
        "name": "pokhara"
    }
]
seed(City, cities);