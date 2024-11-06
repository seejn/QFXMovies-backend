import * as RoleServices from "../services/RoleServices.js";

export const getAllRoles = async (req, res) => {
    try{
        const data = await RoleServices.getAllRoles();
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const createRole = async (req, res) => {
    try{
        const data = await RoleServices.createRole(req.body);
        res.status(200).json({message: "New Role created successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const updateRole = async (req, res) => {
    try{
        const { name } = req.params;
        const data = await RoleServices.updateRole(name, req.body);
        res.status(200).json({message: "Role updated successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}
export const deleteRole = async (req, res) => {
    try{
        const { name } = req.params;
        const data = await RoleServices.deleteRole(name);
        res.status(200).json({message: "Role deleted successfully", data: data});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"});
    }
}