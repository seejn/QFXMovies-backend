import Role from "../models/Role.js";
import seed from '../utils/seed.js';

const roles = [
    {
        _id: "672b18e83b2a69c7f13e279c",
        name: "admin"
    }
]

seed(Role, roles);