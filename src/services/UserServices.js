import User from "../models/User.js";

export const getAllUsers = async () => {
    return await User.find().populate("role");
}
export const getUserById = async (id) => {
    return await User.findById(id).populate("role");
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
export const updateUser = async (id, data) => {
    return await User.findOneAndUpdate({_id: id}, data, {new: true}).populate("role");
}
export const deleteUser = async (id) => {
    return await User.findOneAndDelete({_id: id}).populate("role");
}