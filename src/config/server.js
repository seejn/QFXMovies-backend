import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;

export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
export const ACCESS_EXPIRY = process.env.ACCESS_EXPIRY;
export const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY;
export const REFRESH_EXPIRY = process.env.REFRESH_EXPIRY;