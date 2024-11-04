import Cinema from "../models/Cinema.js";
import seed from '../utils/seed.js';

const cinemas = [
    {
        name: "Labim Mall",
        locatedIn: "67287f6d0bb6a430e4dd7dce",
    },
    {
        name: "Civil Mall",
        locatedIn: "67287f6d0bb6a430e4dd7dce",
    },
    {
        name: "Chhaya Center",
        locatedIn: "67287f6d0bb6a430e4dd7dce",
    },
    {
        name: "CG Mall",
        locatedIn: "67287f6d0bb6a430e4dd7dd1"
    },
    {
        name: "Rising Mall",
        locatedIn: "67287f6d0bb6a430e4dd7dd1"
    },
    {
        name: "Trade Mall",
        locatedIn: "67287f6d0bb6a430e4dd7dd1"
    }
]

seed(Cinema, cinemas);