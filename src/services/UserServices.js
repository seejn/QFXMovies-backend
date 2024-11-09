import mongoose from "mongoose";
import User from "../models/User.js";
import Token from "../models/Token.js";

export const getAllUsers = async () => {
    return await User.find().populate("role");
}
export const getUserById = async (id) => {
    return await User.findById(id).populate("role");
}
export const getUserByRole = async (id) => {
    return await User.find({role: id}).populate("role");
}
export const register = async (username, email, password, role) => {
    const user = new User({
        username: username, 
        email: email, 
        role: role
    });

    const credentialId = await user.setPassword(password);
    if(!credentialId){
        throw new Error("Registration Failed");
    }
    user.credential = credentialId;
    await user.save();
    return user;
}
export const login = async (email, password) => {
    const user = await User.findByCredentials(email, password);

    const refreshToken = user.generateRefreshToken();
    const token = new Token({
        type: "refreshToken",
        token: refreshToken,
        user: user._id
    });

    await token.save();

    user.isLoggedIn = true;
    await user.save();

    const accessToken = user.generateAccessToken();
    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user
    };
}
export const logout = async (userId) => {
    const token = await Token.findOne({user: userId});
    if(!token){
        const error = new Error("User Not LoggedIn");
        error.status = 400;
        throw error;
    }    

    const user = await User.findById(userId);
    user.isLoggedIn = false;
    await user.save();

    await token.deleteOne();
}
export const updateUser = async (id, data) => {
    return await User.findOneAndUpdate({_id: id}, data, {new: true}).populate("role");
}
export const deleteUser = async (id) => {
    return await User.findOneAndDelete({_id: id}).populate("role");
}