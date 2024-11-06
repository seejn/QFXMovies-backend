import Role from "../models/Role.js";

export const createRole = async (role) => {
    return await Role.create(role);
}

export const getAllRoles = async () => {
    return await Role.find();
}

export const updateRole = async (name ,data) => {
    return await Role.findOneAndUpdate({name: name}, data, {new: true});
}

export const deleteRole = async (name) => {
    return await Role.findOneAndDelete({name: name});
}