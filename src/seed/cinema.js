import Cinema from "../models/Cinema.js";
import seed from '../utils/seed.js';

const cinemas = [
    {
        _id: "672c1fab25641c4648230890",
        name: "Labim Mall",
        locatedIn: "672c1fa63f4eb09b99516349",
        theatre: "672ef8ae55cc244bc4b7d4c8"
    },
    {
        _id: "672c1fab25641c4648230891",
        name: "Civil Mall",
        locatedIn: "672c1fa63f4eb09b99516349",
        theatre: "672ef8c755cc244bc4b7d4cd"
    },
    {
        _id: "672c1fab25641c4648230892",
        name: "Chhaya Center",
        locatedIn: "672c1fa63f4eb09b99516349",
        theatre: "672f068e55cc244bc4b7d4d2"
    },
    {
        _id: "672c1fab25641c4648230893",
        name: "CG Mall",
        locatedIn: "672c1fa63f4eb09b9951634c",
        theatre: "672f07bc6686ffbc6545de4b"
    },
    {
        _id: "672c1fab25641c4648230894",
        name: "Rising Mall",
        locatedIn: "672c1fa63f4eb09b9951634c",
        theatre: "672f07dd6686ffbc6545de52"
    },
    {
        _id: "672c1fab25641c4648230895",
        name: "Trade Mall",
        locatedIn: "672c1fa63f4eb09b9951634c",
        theatre: "672f07ee6686ffbc6545de57"
    }
]

seed(Cinema, cinemas);