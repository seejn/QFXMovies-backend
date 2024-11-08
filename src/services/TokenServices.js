import jwt from "jsonwebtoken";
import Token from "../models/Token.js";
import { logout } from "./UserServices.js";

import { SECRET_REFRESH_KEY } from "../config/server.js";

export const isRefreshTokenValid = async (refreshToken) => {
    const token = await Token.findOne({token: refreshToken});
    if(!token){
        return false;
    }

    try{
        return jwt.verify(refreshToken, SECRET_REFRESH_KEY);
    }catch(error){
        if(!error instanceof jwt.TokenExpiredError){
            return false;
        }
        // logout user
        await logout(token.user);
        throw error;
    }
}