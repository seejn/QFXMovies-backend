import jwt from "jsonwebtoken";
import { SECRET_ACCESS_KEY } from "../config/server.js";
import { isRefreshTokenValid } from "../services/TokenServices.js";

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

export const RefreshJWT = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "Token Not Found"});
    }

    try{
        jwt.verify(token, SECRET_ACCESS_KEY);
        return res.status(401).json({message: "Token not expired"});
    }catch(error){
        if(!error instanceof jwt.TokenExpiredError){
            return res.status(400).json({message: "Token Verification Failed"});
        }

        try{
            const decoded = await isRefreshTokenValid(req.body.refreshToken);
            if(!decoded){
                throw new Error("User not Found");
            }
            console.log("decoded", decoded);
            req.user = decoded;
            next();
        }catch(error){
            if(error instanceof jwt.TokenExpiredError){
                return res.status(401).json({message: "Token is Expired. Logging out."});
            }
            return res.status(401).json({message: "Token is Invalid"});
        }
    }

    
}