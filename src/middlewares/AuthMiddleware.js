import jwt from "jsonwebtoken";
import { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY } from "../config/server.js";

export const AuthJWT = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "Token Not Found"});
    }

    try{
        const decoded = jwt.verify(token, SECRET_ACCESS_KEY);
        req.user = decoded;
        next();
    }catch(error){
        console.log("Error during authJWT middleware", error);
        return res.status(400).json({message: "Invalid Token"});
    }
}