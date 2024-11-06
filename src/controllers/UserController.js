import * as UserServices from "../services/UserServices.js";
import { getRoleByName } from "../services/RoleServices.js";

export const register = async (req, res) => {
    const {username, email, password, role} = req.body;
    const {_id: roleId} = await getRoleByName(role);

    try{
        const data = await UserServices.register(username, email, password, roleId);
        res.status(201).json({message: "New User registered", data: data});
    }catch(error){
        console.log("Error while registering user", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const data = await UserServices.login(email, password);
        res.status(200).json({message: "Login Successful", data: data});
    }catch(error){
        console.log("Error while logging in user", error);
        res.status(400).json({message: error.message});
    }
}
export const logout = async (req, res) => {
    try{
        await UserServices.logout(req.user.id);
        res.status(200).json({message: "Logout Successful"});
    }catch(error){
        console.log("Error while logging out user", error);
        res.status(400).json({message: error.message});
    }
}
export const getAllUsers = async (req, res) => {
    try{
        const data = await UserServices.getAllUsers();
        res.status(201).json(data);
    }catch(error){
        console.log("Error while fetching users", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const getUserById = async (req, res) => {
    const {id} = req.params;
    try{
        const data = await UserServices.getUserById();
        res.status(201).json(data);
    }catch(error){
        console.log("Error while fetching user", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const updateUser = async (req, res) => {
    const {id} = req.params;
    try{
        const data = await UserServices.updateUser(id, req.body);
        res.status(200).json({message: "User updated successfully", data: data});
    }catch(error){
        console.log("Error while updating user", error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        const data = await UserServices.deleteUser(id);
        res.status(200).json({message: "User deleted successfully", data: data});
    }catch(error){
        console.log("Error while deleting user", error);
        res.status(400).json({message: "Something went wrong"});
    }
}